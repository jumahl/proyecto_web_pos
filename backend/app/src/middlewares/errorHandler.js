function errorHandler(err, req, res, next) {
  // Log completo solo en el servidor
  console.error('Error:', err);

  // Determina el status
  const status = err.status || 500;

  // Mensaje seguro para el cliente
  let message;
  if (status === 500) {
    message = 'Ocurrió un error interno. Intenta más tarde.';
  } else {
    // Si el error es de validación o de negocio, muestra solo el mensaje seguro
    message = err.message || 'Ocurrió un error.';
  }

  // Nunca envíes err.stack ni detalles internos al cliente
  res.status(status).json({ message });
}

module.exports = errorHandler;