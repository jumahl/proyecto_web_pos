const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authController');
const validateRequest = require('../middlewares/validateRequest');

// Registro de empresa
router.post(
  '/register/company',
  [
    body('nit').notEmpty().withMessage('El NIT es obligatorio'),
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('Email inválido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    body('address').notEmpty().withMessage('La dirección es obligatoria'),
    body('plan_id').isInt().withMessage('El plan es obligatorio'),
    validateRequest
  ],
  authController.registerCompany
);

// Login de empresa
router.post(
  '/login/company',
  [
    body('email').isEmail().withMessage('Email inválido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria'),
    validateRequest
  ],
  authController.loginCompany
);

// Registro de administrador
router.post(
  '/register/admin',
  [
    body('name').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('Email inválido'),
    body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
    validateRequest
  ],
  authController.registerAdmin
);

// Login de administrador
router.post(
  '/login/admin',
  [
    body('email').isEmail().withMessage('Email inválido'),
    body('password').notEmpty().withMessage('La contraseña es obligatoria'),
    validateRequest
  ],
  authController.loginAdmin
);

module.exports = router;