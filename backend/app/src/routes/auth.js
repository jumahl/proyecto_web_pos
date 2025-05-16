const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registro de empresa
router.post('/register/company', authController.registerCompany);

// Login de empresa
router.post('/login/company', authController.loginCompany);

// Registro de administrador
router.post('/register/admin', authController.registerAdmin);

// Login de administrador
router.post('/login/admin', authController.loginAdmin);


module.exports = router;