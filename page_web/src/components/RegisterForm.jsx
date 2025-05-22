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
  const [acepto, setAcepto] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setAcepto(checked);
    } else {
      setForm({ ...form, [name]: value });
    }
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
    if (!acepto) {
      setError('Debes aceptar las políticas');
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
      setAcepto(false);
    } else {
      setError(res.message || 'Error al registrar');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[rgb(253,249,250)] shadow-lg rounded-2xl p-10 w-full space-y-6"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Crea una Cuenta</h2>

      <input
        type="text"
        name="nit"
        placeholder="Nit"
        value={form.nit}
        onChange={handleChange}
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Contraseña"
        value={form.password}
        onChange={handleChange}
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirmar Contraseña"
        value={form.confirmPassword}
        onChange={handleChange}
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="text"
        name="address"
        placeholder="Dirección"
        value={form.address}
        onChange={handleChange}
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <select
        name="plan_id"
        value={form.plan_id}
        onChange={handleChange}
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          name="acepto"
          checked={acepto}
          onChange={handleChange}
          className="mt-1"
          required
        />
        <p className="text-sm text-gray-600">
          Confirmo que he leído y aceptado las{' '}
          <a href="#" className="text-blue-600 underline">Políticas de Licencia</a> y de{' '}
          <a href="#" className="text-blue-600 underline">Privacidad</a>, y que la cuenta se creará automáticamente si no existe una previamente registrada.
        </p>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
      >
        Crear Cuenta
      </button>
      {error && <div style={{ color: 'red', marginTop: '1rem' }}>{error}</div>}
      {success && <div style={{ color: 'green', marginTop: '1rem' }}>{success}</div>}
      <p className="text-sm text-center mt-4">
        ¿Ya tienes cuenta? <a href="/login" className="text-blue-600 underline">Inicia Sesión</a>
      </p>
    </form>
  );
};

export default RegisterForm;