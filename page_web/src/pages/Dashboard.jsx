import React from 'react';
import Navbar from '../components/dashboard/Navbar';
import CardGrid from '../components/dashboard/CardGrid';
import background from '../assets/fondo.jpg';

const Dashboard = () => {
  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // Cambia la ruta si tu login de empresa es diferente
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 relative">
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-20 z-0"
        style={{
          backgroundImage: `url(${background})`,
          filter: 'brightness(0.9)', // Oscurecer la imagen
        }}
      ></div>

      {/* Navbar */}
      <Navbar onLogout={handleLogout} />

      {/* Main Content */}
      <main className="flex-1 flex justify-center items-center p-6 relative z-10">
        <CardGrid />
      </main>
    </div>
  );
};

export default Dashboard;