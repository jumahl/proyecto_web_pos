import React from 'react';
import RegisterForm from '../components/RegisterForm';
import logo from '../assets/logoC.jpg';
import background from '../assets/fondo.jpg';

const Register = () => {
  return (
    <div className="flex min-h-screen bg-[#e4eafe] relative overflow-hidden">
      
      {/* Imagen decorativa alineada a la izquierda */}
      <img
        src={background}
        alt="Decoración"
        className="absolute left-10 top-1/2 transform -translate-y-1/2 opacity-10 w-[550px] max-w-full object-contain z-0"
      />

      {/* Sección izquierda con logo */}
      <div className="w-1/2 hidden md:flex flex-col items-start justify-center relative p-10 z-10">
        <div className="absolute top-6 left-6 flex flex-col items-center gap-2">
          <img src={logo} alt="Logo" className="w-30 h-30 object-contain" />
          <h1 className="text-xl font-semibold text-gray-800">CodMain</h1>
        </div>
      </div>

      {/* Sección derecha con formulario */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white rounded-l-3xl shadow-lg z-10">
        <div className="max-w-md w-full">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
