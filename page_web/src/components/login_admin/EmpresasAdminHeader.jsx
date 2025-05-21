import React from 'react';

export default function EmpresasAdminHeader() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
      <span className="font-black text-3xl md:text-4xl text-[#222] tracking-wide leading-tight mb-2 md:mb-0">
        Empresas
      </span>
      <div className="flex items-center gap-2 w-full md:w-auto justify-end">
        <input
          type="text"
          placeholder="Buscar empresa"
          className="w-full md:w-80 border-2 border-gray-300 rounded-full px-6 py-3 text-base bg-white font-semibold text-[#222] shadow focus:outline-none focus:border-blue-600 transition"
        />
        <button className="bg-white border-2 border-gray-300 hover:bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center transition">
          <svg className="w-6 h-6 text-[#222]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </button>
      </div>
    </div>
  );
}
