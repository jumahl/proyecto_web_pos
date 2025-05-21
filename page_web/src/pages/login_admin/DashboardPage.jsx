import React, { useEffect, useState, useRef } from 'react';
import DashboardCards from '../../components/login_admin/DashboardCards';
import logo from '../../assets/login_admin/logo_codmain.png';
import '../../styles/login_admin/dashboardStyles.css';
import { useNavigate } from 'react-router-dom';

//Nombre de la pestaña
const DashboardPage = () => {
  const [openMenu, setOpenMenu] = useState(null); // null | 'dashboard' | 'estadisticas'
  const dashboardBtnRef = useRef(null);
  const estadisticasBtnRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [dropdownPos, setDropdownPos] = useState({ left: 0, top: 0 });

  useEffect(() => {
    document.title = 'DashboardAdmin';
  }, []);

  // Cierra el menú si se hace click fuera
  useEffect(() => {
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

  // Calcula la posición del dropdown para que salga debajo del botón
  useEffect(() => {
    let ref = null;
    if (openMenu === 'dashboard') ref = dashboardBtnRef;
    if (openMenu === 'estadisticas') ref = estadisticasBtnRef;
    if (openMenu && ref && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setDropdownPos({
        left: rect.left + window.scrollX,
        top: rect.bottom + window.scrollY + 4, // 4px de separación
      });
    }
  }, [openMenu]);

  //contenido de la pagina
  return (
    <div className="min-h-screen bg-[#f5f6fa] flex flex-col items-center">
      <div className="w-full flex justify-center">
        <header className="flex items-center justify-between px-6 py-2 bg-[#d4d4d4] rounded-[2.5rem] mt-0 mb-8 w-full shadow">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 rounded-full bg-[#22223b] object-cover"
            />
            <span className="font-bold text-lg text-[#222] ml-2">CodMain</span>
          </div>
          <nav className="flex-1 flex items-center justify-center gap-12">
            <div className="relative">
              <span
                className="font-medium text-[#222] cursor-pointer select-none relative"
                ref={dashboardBtnRef}
                onClick={() =>
                  setOpenMenu(openMenu === 'empresas' ? null : 'empresas')
                }
              >
                Empresas ▼
              </span>
              {openMenu === 'empresas' && (
                <div
                  ref={menuRef}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 rounded-xl shadow-lg bg-white py-2 px-4 flex flex-col items-start border border-gray-200 z-50 min-w-[160px]"
                >
                  <div
                    className="px-4 py-2 hover:bg-white-100 cursor-pointer rounded w-full"
                    onClick={() => {
                      setOpenMenu(null);
                      navigate('/empresasadmin');
                    }}
                  >
                  <span role="img" aria-label="empresa">
                         🏢
                  </span>
                    Empresas
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <span
                className="font-medium text-[#222] cursor-pointer select-none relative"
                ref={estadisticasBtnRef}
                onClick={() =>
                  setOpenMenu(openMenu === 'estadisticas' ? null : 'estadisticas')
                }
              >
                
                Estadísticas ▼
              </span>
              {openMenu === 'estadisticas' && (
                <div
                  ref={menuRef}
                  className="absolute left-1/2 -translate-x-1/2 mt-2 rounded-xl shadow-lg bg-white py-2 px-4 flex flex-col items-start border border-gray-200 z-50 min-w-[160px]"
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
            </div>
            <span className="font-medium text-[#222] cursor-pointer select-none">
              Configuracion ▼
            </span>
          </nav>
          <button className="bg-[#2563eb] hover:bg-blue-700 text-white font-bold px-6 py-2 rounded-2xl transition ml-4 shadow-none">
            Cerrar Sesion
          </button>
        </header>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1400px] bg-[#dde3fb] rounded-[3rem] shadow px-14 py-10">
          <main className="dashboard-main">
            <DashboardCards />
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
