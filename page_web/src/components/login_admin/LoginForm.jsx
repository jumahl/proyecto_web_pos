import React from 'react';
import '../../styles/login_admin/loginStyles.css';

const LoginForm = () => (
  <form className="login-form">
    <div className="form-group">
      <label htmlFor="email">Correo electrónico</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div className="form-group">
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" required />
    </div>
    <div className="form-links">
      <a href="#">¿Olvidó su contraseña?</a>
    </div>
    <button type="submit" className="login-btn">Iniciar Sesion</button>
  </form>
);

export default LoginForm;
