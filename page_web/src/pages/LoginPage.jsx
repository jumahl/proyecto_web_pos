import Logo from '../components/Logo'
import LoginForm from '../components/LoginForm'
import loginImg from '../assets/imagen-fondo.png'
import '../styles/LoginPage.css'

export default function LoginPage() {
  return (
    <div className="login-bg">
      <div className="login-left">
        <Logo />
        <img src={loginImg} alt="Ilustración login" className="login-illustration" />
      </div>
      <div className="login-right">
        <LoginForm />
      </div>
    </div>
  )
}