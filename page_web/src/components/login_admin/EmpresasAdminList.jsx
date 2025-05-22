import React, { useRef, useState } from 'react';

const empresasData = [
  {
    nombre: 'Nombre Empresa 1',
    info: 'Esta es la información real y detallada de la empresa 1. Aquí puedes poner una descripción larga y completa.',
    estado: 'Activa',
  },
  {
    nombre: 'Nombre Empresa 2',
    info: 'Esta es la información real y detallada de la empresa 2. Aquí puedes poner una descripción larga y completa.',
    estado: 'Activa',
  }
];

export default function EmpresasAdminList() {
  const [images, setImages] = useState([null, null]);
  const fileInputs = [useRef(), useRef()];

  return (
    <div className="flex justify-center items-center min-h-[80vh]">
      <div className="w-full max-w-xl bg-[#e4e9fb] rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center">
        {/* Encabezado y buscador */}
        <span className="font-black text-3xl text-[#222] mb-6">Empresas</span>
        <div className="flex w-full gap-2 mb-8">
          <input
            type="text"
            placeholder="Buscar empresa"
            className="flex-1 border-2 border-gray-300 rounded-full px-6 py-3 text-base bg-white font-semibold text-[#222] shadow focus:outline-none focus:border-blue-600 transition"
          />
          <button className="bg-white border-2 border-gray-300 hover:bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center transition">
            <svg className="w-6 h-6 text-[#222]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </div>
        {/* Solo una empresa como ejemplo */}
        <div className="w-[90%] bg-white rounded-2xl shadow-md px-10 py-10 flex flex-col items-center gap-6 ml-10">
          {/* Foto */}
          <div
            className="flex flex-col items-center justify-center w-28 h-28 bg-gray-200 rounded-xl overflow-hidden cursor-pointer mb-4"
            onClick={e => { e.stopPropagation(); fileInputs[0].current.click(); }}
          >
            {images[0] ? (
              <img src={images[0]} alt="Empresa" className="w-full h-full object-cover rounded-xl" />
            ) : (
              <>
                <svg className="w-14 h-14 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <path d="M8 15l2.5-3 2.5 3 3.5-4.5 4 6.5" />
                  <circle cx="9" cy="9" r="2" />
                </svg>
                <span className="text-base text-gray-500 mt-2">Añadir foto</span>
              </>
            )}
            <input
              type="file"
              accept="image/*"
              ref={fileInputs[0]}
              className="hidden"
              onChange={e => {
                const file = e.target.files[0];
                if (file) {
                  const url = URL.createObjectURL(file);
                  setImages(prev => {
                    const newArr = [...prev];
                    newArr[0] = url;
                    return newArr;
                  });
                }
              }}
              onClick={e => e.stopPropagation()}
            />
          </div>
          {/* Info */}
          <div className="flex flex-col items-center w-full">
            <div className="font-bold text-xl text-gray-800 mb-1">{empresasData[0].nombre}</div>
            <div className="text-gray-500 text-base mb-3 text-center">{empresasData[0].info}</div>
            <span className="inline-block px-5 py-2 bg-green-500 text-white text-base rounded">{empresasData[0].estado}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
