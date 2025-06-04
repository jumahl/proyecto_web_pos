import React from 'react';

const WorkerCard = ({ nombre, descripcion }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex gap-4 items-center w-full">
      <div className="w-20 h-20 bg-gray-100 rounded-md flex items-center justify-center">
        {/* Marcador de posición para imagen */}
      </div>
      <div>
        <h3 className="text-lg font-semibold">{nombre}</h3>
        <p className="text-sm text-gray-500">{descripcion}</p>
      </div>
    </div>
  );
};

export default WorkerCard;
