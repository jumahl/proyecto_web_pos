import React, { useState } from 'react';
import { registerCompany } from '../services/authService';

const planOptions = [
  { id: 1, label: 'Básico Mensual' },
  { id: 2, label: 'Medio Mensual' },
  { id: 3, label: 'Pro Mensual' }
];

const RegisterForm = () => {
  const [form, setForm] = useState({
    nit: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    plan_id: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (form.password !== form.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
    if (!form.plan_id) {
      setError('Selecciona un plan');
      return;
    }
    const data = {
      nit: form.nit,
      name: form.name,
      email: form.email,
      password: form.password,
      address: form.address,
      plan_id: form.plan_id
    };
    const res = await registerCompany(data);
    if (res.message && res.message.includes('correctamente')) {
      setSuccess('¡Registro exitoso! Ahora puedes iniciar sesión.');
      setForm({
        nit: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        plan_id: '',
        address: ''
      });
    } else {
      setError(res.message || 'Error al registrar');
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Crea una Cuenta</h2>
      <input
        type="text"
        name="nit"
        placeholder="Nit"
        value={form.nit}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar Contraseña"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Dirección"
        value={form.address}
        onChange={handleChange}
      />
      <select
        name="plan_id"
        value={form.plan_id}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Selecciona un Plan
        </option>
        {planOptions.map(plan => (
          <option key={plan.id} value={plan.id}>
            {plan.label}
          </option>
        ))}
      </select>
      <div className="form-footer">
        <label>
          <input type="checkbox" required />
          Confirmo que he leído y aceptado las <a href="#">Políticas de Licencia</a> y de <a href="#">Privacidad</a>.
        </label>
      </div>
      <button type="submit">Crear Cuenta</button>
      {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
      {success && <div style={{ color: 'green', marginTop: '1rem' }}>{success}</div>}
      <p>¿Ya tienes cuenta? <a href="/login">Inicia Sesión</a></p>
    </form>
  );
};

export default RegisterForm;