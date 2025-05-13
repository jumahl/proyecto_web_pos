import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loginRoutes from './routes/login_admin/loginRoutes';
import dashboardRoutes from './routes/login_admin/dashboardRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {loginRoutes}
        {dashboardRoutes}
        {/* otras rutas */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
