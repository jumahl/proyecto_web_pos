import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/login_admin/logo_codmain.png';

export default function StatsAdminHeader() {
  const [openMenu, setOpenMenu] = useState(null);
  const dashboardBtnRef = useRef(null);
  const empresasBtnRef = useRef(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [dropdownPos, setDropdownPos] = useState({ left: 0, top: 0 });

  React.useEffect(() => {
    if (!openMenu) return;
    const handleClick = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        dashboardBtnRef.current &&
        !dashboardBtnRef.current.contains(e.target) &&
        empresasBtnRef.current &&
        !empresasBtnRef.current.contains(e.target)
      ) {
        setOpenMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [openMenu]);

  React.useEffect(() => {
    let ref = null;
    if (openMenu === 'dashboard') ref = dashboardBtnRef;
    if (openMenu === 'empresas') ref = empresasBtnRef;
    if (openMenu && ref && ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setDropdownPos({
        left: rect.left + window.scrollX,
        top: rect.bottom + window.scrollY + 4,
      });
    }
  }, [openMenu]);

  return (
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
            ref={empresasBtnRef}
            onClick={() => setOpenMenu(openMenu === 'empresas' ? null : 'empresas')}
          >
            Empresas ▼
          </span>
          <span className="font-medium text-[#222] cursor-pointer select-none">Configuracion ▼</span>
        </nav>
        <button className="bg-[#2563eb] hover:bg-white-700 text-white font-bold px-6 py-2 rounded-2xl transition ml-4 shadow-none">
          Cerrar Sesion
        </button>
      </header>
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
      {/* Dropdown Empresas */}
      {openMenu === 'empresas' && (
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
  );
}
