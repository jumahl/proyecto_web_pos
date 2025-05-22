import React from 'react';

export default function EmpresasAdminCard({ empresa }) {
  return (
    <div className="w-full flex items-center bg-white rounded-2xl shadow-lg border-none px-8 py-8 gap-8 cursor-pointer transition hover:shadow-2xl max-w-3xl mx-auto">
      {/* Foto */}
      <div className="flex flex-col items-center justify-center w-32 h-32 bg-gray-200 rounded-xl overflow-hidden cursor-pointer">
        <svg className="w-14 h-14 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M8 15l2.5-3 2.5 3 3.5-4.5 4 6.5" />
          <circle cx="9" cy="9" r="2" />
        </svg>
        <span className="text-base text-gray-500 mt-2">Añadir foto</span>
      </div>
      {/* Info */}
      <div className="flex flex-col flex-1 items-start justify-center">
        <div className="font-bold text-xl text-gray-800 mb-1">{empresa.nombre}</div>
        <div className="text-gray-500 text-base mb-3 truncate">{empresa.info.slice(0, 60)}...</div>
        <span className="inline-block px-5 py-2 bg-green-500 text-white text-base rounded">{empresa.estado}</span>
      </div>
    </div>
  );
}
