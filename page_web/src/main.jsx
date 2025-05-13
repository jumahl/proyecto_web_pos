import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from './routes';
import './styles/Register.css'; // Importar estilos globales
import './index.css'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
