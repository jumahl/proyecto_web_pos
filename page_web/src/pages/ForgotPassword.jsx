import React from "react";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import logo from "../assets/codmain-logo.png";
import ilustracion from "../assets/imagen-fondo.png";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e7edff] relative">
      {/* Logo y texto en la esquina superior izquierda */}
      <div className="absolute top-8 left-8 flex flex-col items-center z-10">
        <img src={logo} alt="CodMain Logo" className="w-25 h-25 rounded-lg mr-4" />
        <span className="text-xl font-bold text-gray-800">CodMain</span>
      </div>
      <div className="flex w-full max-w-5xl bg-[#e7edff] rounded-2xl  overflow-hidden">
        {/* Lado Izquierdo */}
        <div className="flex-1 flex flex-col items-start p-8">
          <img src={ilustracion} alt="Ilustración" className="w-full max-w-md opacity-80" />
        </div>
        {/* Lado Derecho */}
        <div className="flex-1 flex items-center justify-center p-8">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}