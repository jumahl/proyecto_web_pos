const pool = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CompanyModel = require('../models/companyModel');
const AdminModel = require('../models/adminModel');

// Utilidad para generar JWT
function generateToken(payload) {
  return jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '8h' });
}

exports.registerCompany = async (req, res, next) => {
  const { nit, name, email, password, address, plan_id } = req.body;
  let transactionStarted = false;
  try {
    const exists = await CompanyModel.existsByNitOrEmail(nit, email);
    if (exists) {
      const error = new Error('Empresa ya registrada');
      error.status = 400;
      throw error;
    }

    const plan = await pool.query('SELECT * FROM plan WHERE id = $1', [plan_id]);
    if (plan.rows.length === 0) {
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

    res.status(201).json({ message: 'Empresa y suscripción creadas correctamente' });
  } catch (err) {
    if (transactionStarted) await pool.query('ROLLBACK');
    next(err); // Pasa el error al middleware global
  }
};

exports.loginCompany = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const company = await CompanyModel.findByEmail(email);
    if (!company) {
      const error = new Error('Credenciales inválidas');
      error.status = 400;
      throw error;
    }

    const valid = await bcrypt.compare(password, company.password);
    if (!valid) {
      const error = new Error('Credenciales inválidas');
      error.status = 400;
      throw error;
    }

    const token = generateToken({ nit: company.nit, role: 'company' });
    res.json({ token, company: { nit: company.nit, name: company.name, email: company.email } });
  } catch (err) {
    next(err);
  }
};

exports.registerAdmin = async (req, res, next) => {
  const { name, email, password, role_id } = req.body;
  try {
    const exists = await AdminModel.findByEmail(email);
    if (exists) {
      const error = new Error('Administrador ya registrado');
      error.status = 400;
      throw error;
    }

    const role = await pool.query('SELECT * FROM role WHERE id = $1 AND scope = $2', [role_id, 'system']);
    if (role.rows.length === 0) {
      const error = new Error('Rol no válido para administrador');
      error.status = 400;
      throw error;
    }

    const hashed = await bcrypt.hash(password, 10);

    await AdminModel.create({ name, email, password: hashed, role_id });

    res.status(201).json({ message: 'Administrador registrado correctamente' });
  } catch (err) {
    next(err);
  }
};

exports.loginAdmin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const admin = await AdminModel.findByEmail(email);
    if (!admin) {
      const error = new Error('Credenciales inválidas');
      error.status = 400;
      throw error;
    }

    const valid = await bcrypt.compare(password, admin.password);
    if (!valid) {
      const error = new Error('Credenciales inválidas');
      error.status = 400;
      throw error;
    }

    const token = generateToken({ id: admin.id, role: 'admin' });
    res.json({ token, admin: { id: admin.id, name: admin.name, email: admin.email } });
  } catch (err) {
    next(err);
  }
};