
function errorHandler(err, req, res, next) {
  console.error('Error:', err);

  // Puedes personalizar el status y el mensaje según el tipo de error
  const status = err.status || 500;
  const message = status === 500
    ? 'Ocurrió un error interno. Intenta más tarde.'
    : err.message;

  res.status(status).json({ message });
}

module.exports = errorHandler;