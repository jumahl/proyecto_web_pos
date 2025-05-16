import '../styles/Navbar.css'
import logo from '../assets/codmain-logo.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" className="navbar-logo" />
        <span className="navbar-title">CodMain</span>
      </div>
      <div className="navbar-center">
        <div className="navbar-dropdown">Planes ▼</div>
        <div className="navbar-dropdown">Recursos ▼</div>
        <div className="navbar-dropdown">Ayuda ▼</div>
      </div>
      <div className="navbar-right">
        <button className="navbar-login">Iniciar Sesion</button>
      </div>
    </nav>
  )
}
