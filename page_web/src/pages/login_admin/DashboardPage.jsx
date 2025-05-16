import React, { useEffect, useState } from 'react';
import DashboardCards from '../../components/login_admin/DashboardCards';
import logo from '../../assets/login_admin/logo_codmain.png';
import '../../styles/login_admin/dashboardStyles.css';

//Nombre de la pestaña
const DashboardPage = () => {
  const [openMenu, setOpenMenu] = useState(null);

  useEffect(() => {
    document.title = 'DashboardAdmin';
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/loginadmin'; // Cambia la ruta si tu login de admin es diferente
  };

  return (
    <div className="dashboard-bg">
      <header className="dashboard-header">
        <div className="dashboard-header-left">
          <img src={logo} alt="logo" className="dashboard-logo" />
          <span className="dashboard-title">CodMain</span>
        </div>
        <nav className="dashboard-nav spaced-nav">
          <span>Empresas ▼</span>
          <span>Estadísticas ▼</span>
          <span>Configuracion ▼</span>
        </nav>
        <button className="dashboard-logout-btn" onClick={handleLogout}>Cerrar Sesion</button>
      </header>
      <div className="dashboard-container">
        <main className="dashboard-main">
          <DashboardCards />
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
