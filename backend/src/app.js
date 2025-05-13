const express = require('express');
const app = express();

// Middlewares
app.use(express.json()); // Manejar datos JSON
app.use(express.urlencoded({ extended: true })); // Manejar datos de formularios

// Rutas
app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});

module.exports = app;