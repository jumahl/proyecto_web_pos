import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/login_admin/logo_codmain.png';
import EmpresasList from '../../components/EmpresasList';

export default function EmpresasAdminPage() {
  const [openMenu, setOpenMenu] = useState(null); // null | 'dashboard' | 'estadisticas'
  const dashboardBtnRef = useRef(null);
  const estadisticasBtnRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [dropdownPos, setDropdownPos] = useState({ left: 0, top: 0 });

  // Cierra el menú si se hace click fuera
  React.useEffect(() => {
    if (!openMenu) return;
    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        dashboardBtnRef.current &&
        !dashboardBtnRef.current.contains(e.target) &&
        estadisticasBtnRef.current &&
        !estadisticasBtnRef.current.contains(e.target)
      ) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openMenu]);

  // Calcula la posición del dropdown para que salga debajo del botón correspondiente
  React.useEffect(() => {
    let ref = null;
    if (openMenu === 'dashboard') ref = dashboardBtnRef;
    if (openMenu === 'estadisticas') ref = estadisticasBtnRef;
    if (openMenu && ref && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setDropdownPos({
        left: rect.left + window.scrollX,
        top: rect.bottom + window.scrollY + 4,
      });
    }
  }, [openMenu]);

  return (
    <div className="min-h-screen bg-[#f5f6fa] flex flex-col items-center">
      <div className="w-full flex justify-center">
        <header className="flex items-center justify-between px-6 py-2 bg-[#d4d4d4] rounded-[2.5rem] mt-0 mb-8 w-full shadow">
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-9 h-9 rounded-full bg-[#22223b] object-cover" />
            <span className="font-bold text-lg text-[#222] ml-2">CodMain</span>
          </div>
          <nav className="flex-1 flex items-center justify-center gap-12">
            <span
              className="font-medium text-[#222] cursor-pointer select-none relative"
              ref={dashboardBtnRef}
              onClick={() => setOpenMenu(openMenu === 'dashboard' ? null : 'dashboard')}
            >
              Dashboard Admin ▼
            </span>
            <span
              className="font-medium text-[#222] cursor-pointer select-none relative"
              ref={estadisticasBtnRef}
              onClick={() => setOpenMenu(openMenu === 'estadisticas' ? null : 'estadisticas')}
            >
              Estadísticas ▼
            </span>
            <span className="font-medium text-[#222] cursor-pointer select-none">Configuracion ▼</span>
          </nav>
          <button className="bg-[#2563eb] hover:bg-white-700 text-white font-bold px-6 py-2 rounded-2xl transition ml-4 shadow-none">
            Cerrar Sesion
          </button>
        </header>
      </div>
      {/* Dropdown Dashboard Admin */}
      {openMenu === 'dashboard' && (
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            left: dropdownPos.left,
            top: dropdownPos.top,
            minWidth: 160,
            zIndex: 1000,
          }}
          className="rounded-xl shadow-lg bg-white py-2 px-4 flex flex-col items-start border border-gray-200"
        >
          <div
            className="px-4 py-2 hover:bg-white-100 cursor-pointer rounded w-full"
            onClick={() => {
              setOpenMenu(null);
              navigate('/DashboardAdmin');
            }}
          >
            <span role="img" aria-label="dashboard">
                    📋
              </span>
            Dashboard
          </div>
        </div>
      )}
      {/* Dropdown Estadísticas */}
      {openMenu === 'estadisticas' && (
        <div
          ref={menuRef}
          style={{
            position: 'absolute',
            left: dropdownPos.left,
            top: dropdownPos.top,
            minWidth: 160,
            zIndex: 1000,
          }}
          className="rounded-xl shadow-lg bg-white py-2 px-4 flex flex-col items-start border border-gray-200"
        >
          <div
            className="px-4 py-2 hover:bg-white-100 cursor-pointer rounded w-full"
            onClick={() => {
              setOpenMenu(null);
              navigate('/statsAdmin');
            }}
          >
            <span role="img" aria-label="estadisticas">
                      📊
                    </span>
            Estadísticas
          </div>
        </div>
      )}
      {/* Contenedor azul claro principal */}
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] bg-[#dde3fb] rounded-2xl shadow px-10 py-10">
          {/* Título y buscador alineados */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
            <span className="font-black text-3xl md:text-4xl text-[#222] tracking-wide leading-tight mb-2 md:mb-0">
              Empresas
            </span>
            <div className="flex items-center gap-2 w-full md:w-auto justify-end">
              <input
                type="text"
                placeholder="Buscar empresa"
                className="w-full md:w-80 border-2 border-gray-300 rounded-full px-6 py-2 text-base bg-white font-semibold text-[#222] shadow focus:outline-none focus:border-blue-600 transition"
              />
              <button className="bg-white border-2 border-gray-300 hover:bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center transition">
                <svg className="w-5 h-5 text-[#222]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>
            </div>
          </div>
          {/* Lista de empresas */}
          <EmpresasList />
        </div>
      </div>
    </div>
  );
}
