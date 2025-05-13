import '../styles/LoginForm.css';

export default function LoginForm() {
  return (
    <div className="login-form-container">
      <h2 className="login-title">Inicio de Sesion</h2>
      <form className="login-form">
        <input type="email" placeholder="Correo electronico" className="login-input" />
        <input type="password" placeholder="Contraseña" className="login-input" />
        <a href="#" className="login-link">¿Olvido su contraseña?</a>
        <button type="submit" className="login-btn">Iniciar Sesion</button>
      </form>
      <div className="login-register">
        ¿No tienes una cuenta? <a href="#" className="login-link">Crea una Cuenta</a>
      </div>
    </div>
  )
}
