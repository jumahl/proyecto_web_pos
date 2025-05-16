import { useState } from 'react';
import { loginAdmin, registerAdmin } from '../../services/authService';
import '../../styles/login_admin/loginStyles.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showRegister, setShowRegister] = useState(false);

  // Estado para el registro de admin
  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [registerError, setRegisterError] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const res = await loginAdmin(email, password);
    if (res.token) {
      localStorage.setItem('token', res.token);
      window.location.href = '/DashboardAdmin';
    } else {
      setError(res.message || 'Error al iniciar sesión');
    }
  };

  const handleRegisterChange = e => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async e => {
    e.preventDefault();
    setRegisterError('');
    setRegisterSuccess('');
    if (!registerForm.name || !registerForm.email || !registerForm.password) {
      setRegisterError('Todos los campos son obligatorios');
      return;
    }
    const res = await registerAdmin(registerForm);
  if (!registerForm.name || !registerForm.email || !registerForm.password) {
    setRegisterError('Todos los campos son obligatorios');
    return;
  }
  };

  return (
    <>
      <form className="logins-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            className="login-input"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            className="login-input"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-links">
          <a href="#">¿Olvidó su contraseña?</a>
        </div>
        <button type="submit" className="logins-btn">Iniciar Sesion</button>
        {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <a href="#" onClick={e => { e.preventDefault(); setShowRegister(true); }}>
            ¿No tienes cuenta? Crear cuenta
          </a>
        </div>
      </form>
      {showRegister && (
        <form onSubmit={handleRegisterSubmit}>
          <h3>Registro de Administrador (Temporal)</h3>
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={registerForm.name}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={registerForm.email}
            onChange={handleRegisterChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={registerForm.password}
            onChange={handleRegisterChange}
            required
          />
          <button type="submit">Registrar Administrador</button>
          <button type="button" onClick={() => setShowRegister(false)}>Cerrar</button>
          {registerError && <div style={{ color: 'red', marginTop: '1rem' }}>{registerError}</div>}
          {registerSuccess && <div style={{ color: 'green', marginTop: '1rem' }}>{registerSuccess}</div>}
        </form>
      )}
    </>
  );
};

export default LoginForm;