import React from "react";

export default function ForgotPasswordForm() {
  return (
    <div className="bg-white rounded-xl shadow-md px-10 py-12 flex flex-col items-center w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Olvido de<br />Contraseña</h2>
      <form className="w-full flex flex-col gap-6">
        <input
          type="email"
          placeholder="Correo electronico"
          className="border border-gray-400 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white rounded-full py-2 font-medium hover:bg-blue-800 transition"
        >
          Enviar
        </button>
      </form>
      <a href="/login" className="mt-8 text-blue-500 text-sm hover:underline">
        Iniciar Sesion
      </a>
    </div>
  );
}