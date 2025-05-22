import React from 'react';
import '../styles/Dashboard.css';
import logo from '../assets/logoC.jpg';
import { FaClipboardList, FaBox, FaExclamationTriangle, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Cambia la ruta si tu login de empresa es diferente
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <img src={logo} alt="Logo" className="logo" />
          <span>Nombre Empresa</span>
        </div>
        <nav className="header-nav">
          <select>
            <option>Mi Empresa</option>
          </select>
          <select>
            <option>Ajustes</option>
          </select>
          <select>
            <option>Ayuda</option>
          </select>
        </nav>
        <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
      </header>
      <main className="dashboard-main">
        <div className="card-container">
          <div className="card">
            <FaClipboardList className="icon" />
            <h3>100</h3>
            <p>Ventas realizadas hoy</p>
          </div>
          <div className="card">
            <FaBox className="icon" />
            <h3>100</h3>
            <p>Productos</p>
          </div>
          <div className="card">
            <FaExclamationTriangle className="icon" />
            <h3>100</h3>
            <p>Productos bajo stock</p>
          </div>
          <div className="card">
            <FaUsers className="icon" />
            <h3>100</h3>
            <p>Clientes</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;