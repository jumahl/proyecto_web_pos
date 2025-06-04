import logo from "../assets/codmain-logo.png";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaUserFriends, FaTags, FaShoppingCart, FaClipboardList } from "react-icons/fa";

export default function SalesNavbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const handleLogout = () => {
    navigate("/login");
  };

  // Cerrar el menú si se hace clic fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <nav className="flex items-center justify-between bg-[#bdb7be] px-8 py-4 rounded-[50px] shadow w-full h-15">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-12 h-12 rounded-full bg-white" />
        <span className="text-2xl font-bold text-gray-800 leading-tight">
          <span>Nombre Empresa</span>
        </span>
      </div>
      <div className="flex gap-10 text-lg font-medium text-gray-800 relative">
        {/* Menú desplegable */}
        <div className="relative" ref={menuRef}>
          <button
            className="cursor-pointer flex items-center gap-1 focus:outline-none"
            onClick={() => setOpen((v) => !v)}
          >
            Mi Empresa <span className="text-black">▼</span>
          </button>
          {open && (
            <div className="absolute left-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-300 z-50 w-56 py-2">
              <div className="flex items-center gap-3 px-5 py-2 hover:bg-gray-100 cursor-pointer">
                <FaUserFriends className="text-xl text-gray-600" />
                <span>Trabajadores</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-2 hover:bg-gray-100 cursor-pointer">
                <FaTags className="text-xl text-gray-600" />
                <span>Inventario</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-2 hover:bg-gray-100 cursor-pointer">
                <FaShoppingCart className="text-xl text-gray-600" />
                <span>Ventas</span>
              </div>
              <div className="flex items-center gap-3 px-5 py-2 hover:bg-gray-100 cursor-pointer">
                <FaClipboardList className="text-xl text-gray-600" />
                <span>Reportes</span>
              </div>
            </div>
          )}
        </div>
        <span className="cursor-pointer">Ajustes <span className="text-black">▼</span></span>
        <span className="cursor-pointer">Ayuda <span className="text-black">▼</span></span>
      </div>
      <button
        className="bg-[#e05c5c] text-white px-7 py-2 rounded-full font-medium shadow hover:bg-[#c13d3d] transition"
        onClick={handleLogout}
      >
        Cerrar Sesion
      </button>
    </nav>
  );
}