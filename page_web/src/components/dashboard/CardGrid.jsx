import React from 'react';
import { FaClipboardList, FaBox, FaExclamationTriangle, FaUsers } from 'react-icons/fa';

const cards = [
  {
    icon: <FaClipboardList className="text-black text-4xl mb-4" />,
    value: 100,
    label: 'Ventas realizadas hoy',
  },
  {
    icon: <FaBox className="text-black text-4xl mb-4" />,
    value: 100,
    label: 'Productos',
  },
  {
    icon: <FaExclamationTriangle className="text-black text-4xl mb-4" />,
    value: 100,
    label: 'Productos bajo stock',
  },
  {
    icon: <FaUsers className="text-black text-4xl mb-4" />,
    value: 100,
    label: 'Clientes',
  },
];

const CardGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full max-w-4xl bg-[#f5f7ff] p-6 rounded-xl shadow-lg">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
        >
          {card.icon}
          <h3 className="text-2xl font-bold text-gray-800">{card.value}</h3>
          <p className="text-sm text-gray-600">{card.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
