import logo from '../assets/codmain-logo.png'
import '../styles/Logo.css'

export default function Logo() {
  return (
    <div className="logo-container vertical">
      <img src={logo} alt="CodMain Logo" className="logo-img large" />
      <span className="logo-title below">CodMain</span>
    </div>
  )
}
