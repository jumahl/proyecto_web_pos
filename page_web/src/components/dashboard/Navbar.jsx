import React from 'react';
import logo from '../../assets/logoC.jpg';

const Navbar = () => {
  return (
    <header className="bg-[#e7e2ee] shadow-md px-6 py-4 flex justify-between items-center rounded-xl mx-4 mt-4">
      <div className="flex items-center gap-4">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-full object-cover" />
        <span className="text-lg font-semibold text-gray-800">Nombre Empresa</span>
      </div>
      <nav className="flex items-center gap-6">
        <div className="relative">
          <button className="text-sm font-medium text-gray-800 hover:underline">
            Mi Empresa <span className="ml-1">▾</span>
          </button>
        </div>
        <button className="text-sm font-medium text-gray-800 hover:underline">Ajustes</button>
        <button className="text-sm font-medium text-gray-800 hover:underline">Ayuda</button>
      </nav>
      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
        Cerrar Sesión
      </button>
    </header>
  );
};

export default Navbar;
