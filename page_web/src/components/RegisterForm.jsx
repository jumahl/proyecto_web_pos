import React from 'react';

const RegisterForm = () => {
  return (
    <form className="form">
      <h2>Crea una Cuenta</h2>
      <input type="text" placeholder="Nit" />
      <input type="text" placeholder="Nombre" />
      <input type="email" placeholder="Correo electrónico" />
      <input type="password" placeholder="Contraseña" />
      <input type="password" placeholder="Confirmar Contraseña" />
      <select>
        <option value="" disabled selected>
          Selecciona un Plan
        </option>
        <option value="basico">Básico Mensual </option>
        <option value="premium">Medio Mensual</option>
        <option value="empresarial">Pro Mensual</option>
      </select>
      <div className="form-footer">
        <label>
          <input type="checkbox" />
          Confirmo que he leído y aceptado las <a href="#">Políticas de Licencia</a> y de <a href="#">Privacidad</a>.
        </label>
      </div>
      <button type="submit">Crear Cuenta</button>
      <p>¿Ya tienes cuenta? <a href="/login">Inicia Sesión</a></p>
    </form>
  );
};

export default RegisterForm;
