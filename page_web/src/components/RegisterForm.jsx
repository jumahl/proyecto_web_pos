import React, { useState } from 'react';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    nit: '',
    nombre: '',
    correo: '',
    contraseña: '',
    confirmarContraseña: '',
    plan: '',
    acepto: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados:', formData);
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
        value={formData.nit}
        onChange={handleChange}
        placeholder="Nit"
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre"
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        type="email"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
        placeholder="Correo electrónico"
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        type="password"
        name="contraseña"
        value={formData.contraseña}
        onChange={handleChange}
        placeholder="Contraseña"
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <input
        type="password"
        name="confirmarContraseña"
        value={formData.confirmarContraseña}
        onChange={handleChange}
        placeholder="Confirmar Contraseña"
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <select
        name="plan"
        value={formData.plan}
        onChange={handleChange}
        className="w-full bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      >
        <option value="">Selecciona un Plan</option>
        <option value="basico">Plan Básico</option>
        <option value="intermedio">Plan Intermedio</option>
        <option value="premium">Plan Premium</option>
      </select>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          name="acepto"
          checked={formData.acepto}
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

      <p className="text-sm text-center mt-4">
        ¿Ya tienes cuenta? <a href="#" className="text-blue-600 underline">Inicia Sesión</a>
      </p>
    </form>
  );
};

export default RegisterForm;
