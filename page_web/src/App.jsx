import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loginRoutes from './routes/login_admin/loginRoutes';
import dashboardRoutes from './routes/login_admin/dashboardRoutes';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas de login y dashboard */}
        {loginRoutes}
        {dashboardRoutes}
        {/* Rutas generales */}
        <Route path="*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;