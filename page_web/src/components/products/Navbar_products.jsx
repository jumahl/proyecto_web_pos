import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logoC.jpg';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsDropdownOpen(false); // Cierra el menú desplegable al navegar
  };

  const handleLogout = () => {
    navigate('/login'); // Redirige al login
  };

  return (
    <nav className="bg-[#c6bebc] px-8 py-3 w-full rounded-none flex justify-between items-center shadow-md m-0 relative z-20">
      {/* Logo y nombre empresa */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full object-cover" />
        <span className="text-sm md:text-base font-bold leading-tight text-black">
          Nombre <br /> Empresa
        </span>
      </div>

      {/* Menú de navegación */}
      <div className="flex gap-6 items-center">
        <div className="relative">
          <button
            className="text-sm font-medium hover:underline"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Mi Empresa <span className="ml-1">▾</span>
          </button>
          {isDropdownOpen && (
            <div className="absolute bg-white shadow-lg rounded-lg mt-2 py-2 w-40 z-50 border border-gray-300">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-blue-600 hover:bg-blue-100"
                onClick={() => handleNavigate('/trabajadores')}
              >
                Trabajadores
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-green-600 hover:bg-green-100"
                onClick={() => handleNavigate('/productos')}
              >
                Productos
              </button>
            </div>
          )}
        </div>
        <button className="text-sm font-medium hover:underline">Ajustes</button>
        <button className="text-sm font-medium hover:underline">Ayuda</button>
      </div>

      {/* Botón de cerrar sesión */}
      <button
        className="bg-[#d9534f] hover:bg-[#c9302c] text-white px-6 py-1.5 rounded-full text-sm font-semibold shadow"
        onClick={handleLogout} // Llama a la función handleLogout
      >
        Cerrar Sesión
      </button>
    </nav>
  );
};

export default Navbar;
