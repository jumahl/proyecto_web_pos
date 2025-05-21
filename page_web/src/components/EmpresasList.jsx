import React, { useRef, useState } from 'react';

const empresasData = [
  {
    nombre: 'Nombre Empresa 1',
    info: 'Una empresa es una entidad legal o una organización con fines de lucro que opera para producir bienes o servicios y satisfacer las necesidades de los consumidores. En esencia, es una unidad económica que reúne factores de producción (capital, trabajo, tecnología) para crear valor y obtener beneficios',
    estado: 'Activa',
  },
  {
    nombre: 'Nombre Empresa 2',
    info: 'Esta es la información real y detallada de la empresa 2. Aquí puedes poner una descripción larga y completa.',
    estado: 'Activa',
  }
];

export default function EmpresasList() {
  const [images, setImages] = useState([null, null]);
  const fileInputs = [useRef(), useRef()];
  const [modalIdx, setModalIdx] = useState(null);

  const handleImageChange = (e, idx) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImages((prev) => {
        const newArr = [...prev];
        newArr[idx] = url;
        return newArr;
      });
    }
  };

  return (
    <>
      <div className="flex flex-col gap-8 w-full">
        {empresasData.map((empresa, idx) => (
          <div
            key={idx}
            className="w-full max-w-4xl ml-16 flex items-center bg-white rounded-2xl shadow-lg border-none px-12 py-12 gap-10 cursor-pointer transition hover:shadow-2xl"
            style={{ minHeight: 180 }}
            onClick={() => setModalIdx(idx)}
          >
            {/* Foto */}
            <div
              className="flex flex-col items-center justify-center w-28 h-28 bg-gray-200 rounded-xl overflow-hidden cursor-pointer"
              onClick={e => { e.stopPropagation(); fileInputs[idx].current.click(); }}
            >
              {images[idx] ? (
                <img src={images[idx]} alt="Empresa" className="w-full h-full object-cover rounded-xl" />
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
                ref={fileInputs[idx]}
                className="hidden"
                onChange={e => handleImageChange(e, idx)}
                onClick={e => e.stopPropagation()}
              />
            </div>
            {/* Info */}
            <div className="flex flex-col flex-1 items-start justify-center">
              <div className="font-bold text-xl text-gray-800 mb-1">{empresa.nombre}</div>
              <div className="text-gray-500 text-base mb-3 truncate">{empresa.info.slice(0, 60)}...</div>
              <span className="inline-block px-5 py-2 bg-green-500 text-white text-base rounded">{empresa.estado}</span>
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {modalIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl flex flex-row items-center relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setModalIdx(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            {/* Foto a la izquierda */}
            <div className="flex flex-col items-center justify-center w-40 h-40 bg-gray-200 rounded-xl overflow-hidden mr-8">
              {images[modalIdx] ? (
                <img src={images[modalIdx]} alt="Empresa" className="w-full h-full object-cover rounded-xl" />
              ) : (
                <>
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <path d="M8 15l2.5-3 2.5 3 3.5-4.5 4 6.5" />
                    <circle cx="9" cy="9" r="2" />
                  </svg>
                  <span className="text-base text-gray-500 mt-2">Añadir foto</span>
                </>
              )}
            </div>
            {/* Info a la derecha */}
            <div className="flex flex-col items-start w-full">
              <div className="font-bold text-2xl text-gray-800 mb-2">{empresasData[modalIdx].nombre}</div>
              <div className="text-gray-500 text-base mb-4">{empresasData[modalIdx].info}</div>
              <span className="inline-block px-6 py-2 bg-green-500 text-white text-base rounded">{empresasData[modalIdx].estado}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
