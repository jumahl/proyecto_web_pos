import React from 'react';

const Expandex = ({ producto, isExpanded, onExpand }) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-md p-4 w-full cursor-pointer transition-all ${
        isExpanded ? 'max-h-96' : 'max-h-24'
      } overflow-hidden`}
      onClick={onExpand}
    >
      <div className="flex gap-4 items-center">
        <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center">
          {/* Placeholder para imagen */}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{producto.nombre}</h3>
          <p className="text-sm text-gray-500">{producto.descripcion}</p>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 text-gray-700">
          <p>{producto.detalles}</p>
        </div>
      )}
    </div>
  );
};

export default Expandex;
