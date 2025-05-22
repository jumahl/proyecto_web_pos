const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CompanyModel = require('../models/companyModel');
const AdminModel = require('../models/adminModel');
const logger = require('../utils/logger'); 


// Utilidad para generar JWT
function generateToken(payload) {
  if (!process.env.JWT_SECRET) {
    throw new Error('JWT_SECRET no está definido en las variables de entorno');
  }

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
}

exports.registerCompany = async (req, res, next) => {
  const { nit, name, email, password, address, plan_id } = req.body;
  let transactionStarted = false;
  try {
    const exists = await CompanyModel.existsByNitOrEmail(nit, email);
    if (exists) {
      logger.warn(`[REGISTER_COMPANY][FAIL] Empresa ya registrada`, { email, nit, ip: req.ip });
      const error = new Error('Empresa ya registrada');
      error.status = 400;
      throw error;
    }

    const plan = await pool.query('SELECT * FROM plan WHERE id = $1', [plan_id]);
    if (plan.rows.length === 0) {
      logger.warn(`[REGISTER_COMPANY][FAIL] Plan no válido`, { plan_id, email, nit, ip: req.ip });
      const error = new Error('Plan no válido');
      error.status = 400;
      throw error;
    }

    const hashed = await bcrypt.hash(password, 10);

    await pool.query('BEGIN');
    transactionStarted = true;

    await CompanyModel.create({ nit, name, email, password: hashed, address });

    const startDate = new Date();
    const endDate = new Date();
    endDate.setMonth(startDate.getMonth() + 1);

    const startDateStr = startDate.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];

    await pool.query(
      'INSERT INTO subscription (company_nit, plan_id, start_date, end_date, status) VALUES ($1, $2, $3, $4, $5)',
      [nit, plan_id, startDateStr, endDateStr, 'active']
    );

    await pool.query('COMMIT');

    logger.info(`[REGISTER_COMPANY][SUCCESS] Empresa registrada correctamente`, { email, nit, plan_id, ip: req.ip });
    res.status(201).json({ message: 'Empresa y suscripción creadas correctamente' });
  } catch (err) {
    if (transactionStarted) await pool.query('ROLLBACK');
    logger.error(`[REGISTER_COMPANY][ERROR] ${err.message}`, { email, nit, plan_id, ip: req.ip });
    next(err);
  }
};

exports.loginCompany = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const company = await CompanyModel.findByEmail(email);
    if (!company) {
      logger.warn(`[LOGIN_COMPANY][FAIL] Email no encontrado`, { email, ip: req.ip });
      const error = new Error('Credenciales inválidas');
      error.status = 400;
      throw error;
    }

    const valid = await bcrypt.compare(password, company.password);
    if (!valid) {
      logger.warn(`[LOGIN_COMPANY][FAIL] Contraseña incorrecta`, { email, ip: req.ip });
      const error = new Error('Credenciales inválidas');
      error.status = 400;
      throw error;
    }

    const token = generateToken({ nit: company.nit, role: 'company' });
    logger.info(`[LOGIN_COMPANY][SUCCESS] Login exitoso para empresa`, { email, nit: company.nit, ip: req.ip });
    res.json({ token, company: { nit: company.nit, name: company.name, email: company.email } });
  } catch (err) {
    logger.error(`[LOGIN_COMPANY][ERROR] ${err.message}`, { email, ip: req.ip });
    next(err);
  }
};

exports.registerAdmin = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const exists = await AdminModel.findByEmail(email);
    if (exists) {
      logger.warn(`[REGISTER_ADMIN][FAIL] Admin ya registrado`, { email, ip: req.ip });
      const error = new Error('Administrador ya registrado');
      error.status = 400;
      throw error;
    }

    const hashed = await bcrypt.hash(password, 10);

    await AdminModel.create({ name, email, password: hashed });

    logger.info(`[REGISTER_ADMIN][SUCCESS] Administrador registrado correctamente`, { email, ip: req.ip });
    res.status(201).json({ message: 'Administrador registrado correctamente' });
  } catch (err) {
    logger.error(`[REGISTER_ADMIN][ERROR] ${err.message}`, { email, ip: req.ip });
    next(err);
  }
};

exports.loginAdmin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const admin = await AdminModel.findByEmail(email);
    if (!admin) {
      logger.warn(`[LOGIN_ADMIN][FAIL] Email no encontrado`, { email, ip: req.ip });
      const error = new Error('Credenciales inválidas');
      error.status = 400;
      throw error;
    }

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) {
      logger.warn(`[LOGIN_ADMIN][FAIL] Contraseña incorrecta`, { email, ip: req.ip });
      const error = new Error('Credenciales inválidas');
      error.status = 400;
      throw error;
    }

    const token = generateToken({ id: admin.id, role: 'admin' });
    logger.info(`[LOGIN_ADMIN][SUCCESS] Login exitoso para admin`, { email, id: admin.id, ip: req.ip });
    res.json({ token, admin: { id: admin.id, name: admin.name, email: admin.email } });
  } catch (err) {
    logger.error(`[LOGIN_ADMIN][ERROR] ${err.message}`, { email, ip: req.ip });
    next(err);
  }
};