const { validationResult } = require('express-validator');

function validateRequest(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // Devuelve solo el primer error encontrado
    return res.status(400).json({ message: errors.array()[0].msg });
  }
  next();
}

module.exports = validateRequest;