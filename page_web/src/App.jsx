import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import loginRoutes from './routes/login_admin/loginRoutes';
import dashboardRoutes from './routes/login_admin/dashboardRoutes';
import AppRoutes from './routes/AppRoutes';
// Importa la vista de empresas admin
import EmpresasAdminPage from './pages/login_admin/EmpresasAdminPage';
import statsRoutes from './routes/login_admin/statsRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas de login y dashboard */}
        {loginRoutes}
        {dashboardRoutes}
        {statsRoutes}
        {/* Vista empresasadmin */}
        <Route path="/empresasadmin" element={<EmpresasAdminPage />} />
        {/* Rutas generales */}
        <Route path="*" element={<AppRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;