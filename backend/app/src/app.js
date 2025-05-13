const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const authRoutes = require('./routes/auth');
const errorHandler = require('./middlewares/errorHandler');

// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Configuración de CORS
app.use(cors({
  origin: '*', // Cambia esto por el dominio de tu frontend en producción
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Rate limit global
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100,
  message: 'Demasiadas peticiones, intenta más tarde.'
});
app.use(limiter);

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Ruta simple para comprobar el estado de la API
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Middleware de manejo de errores (debe ir al final)
app.use(errorHandler);

module.exports = app;