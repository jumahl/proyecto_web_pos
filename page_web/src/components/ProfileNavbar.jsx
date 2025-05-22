import logo from "../assets/codmain-logo.png";
import { useNavigate } from "react-router-dom";

export default function ProfileNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/LoginAdmin");
  };

  return (
    <nav className="flex items-center justify-between bg-[#bdb7be] px-8 py-4 rounded-[50px] shadow w-full h-15">
      <div className="flex items-center gap-3">
        <img src={logo} alt="CodMain Logo" className="w-12 h-12 rounded-full bg-white" />
        <span className="text-2xl font-bold text-gray-800">CodMain</span>
      </div>
      <div className="flex gap-10 text-lg font-medium text-gray-800">
        <span className="cursor-pointer">Empresas <span className="text-black">▼</span></span>
        <span className="cursor-pointer">Estadísticas <span className="text-black">▼</span></span>
        <span className="cursor-pointer">Configuracion <span className="text-black">▼</span></span>
      </div>
      <button
        className="bg-[#e05c5c] text-white px-7 py-2 rounded-[20px] font-medium shadow hover:bg-[#c13d3d] transition"
        onClick={handleLogout}
      >
        Cerrar Sesion
      </button>
    </nav>
  );
}