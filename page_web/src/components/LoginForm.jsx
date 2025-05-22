import { useState } from 'react';
import { loginCompany } from '../services/authService';
import '../styles/LoginForm.css';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await loginCompany(email, password);
    if (res.token) {
      localStorage.setItem('token', res.token);
      // Redirige al dashboard o página principal
      window.location.href = '/dashboard';
    } else {
      setError(res.message || 'Error al iniciar sesión');
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="login-title">Inicio de Sesion</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Correo electronico"
          className="login-input"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <a href="#" className="login-link">¿Olvido su contraseña?</a>
        <button type="submit" className="login-btn">Iniciar Sesion</button>
        {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
      </form>
      <div className="login-register">
        ¿No tienes una cuenta? <a href="/register" className="login-link">Crea una Cuenta</a>
      </div>
    </div>
  );
}