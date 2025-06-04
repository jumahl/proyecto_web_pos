import React, { useState } from 'react';
import Navbar from '../components/workers/Navbar_workers';
import SearchBar from '../components/workers/searcbar_worker';
import Expandex from '../components/workers/expandex'; // Importación actualizada
import background from '../assets/fondo.jpg';

const Workers = () => {
  const [search, setSearch] = useState('');
  const [expandedWorker, setExpandedWorker] = useState(null);

  const trabajadores = [
    {
      id: 1,
      nombre: 'Trabajador 1',
      descripcion: 'Información breve del trabajador.',
      detalles: 'Este trabajador tiene experiencia en ventas y atención al cliente. se llama alejandro y es un crack'
    },
    {
      id: 2,
      nombre: 'Trabajador 2',
      descripcion: 'Información breve del trabajador.',
      detalles: 'Este trabajador es experto en logística y manejo de inventarios.',
    },
  ];

  const filtrados = trabajadores.filter((t) =>
    t.nombre.toLowerCase().includes(search.toLowerCase())
  );

  const handleExpand = (id) => {
    setExpandedWorker(expandedWorker === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#e4eafe] w-full m-0 p-0">
      <Navbar />
      <div
        className="absolute inset-0 bg-center opacity-10 bg-no-repeat bg-contain pointer-events-none z-0"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <main className="relative z-10 m-0 p-0">
        <div className="bg-white/80 rounded-2xl p-6 shadow-xl w-full m-0">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Trabajadores</h2>
            <div className="flex gap-4 items-center">
              <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
                style={{ backgroundColor: '#28a745', color: 'white' }} // Estilos en línea como respaldo
              >
                Agregar trabajador
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filtrados.map((trabajador) => (
              <Expandex
                key={trabajador.id}
                trabajador={trabajador}
                isExpanded={expandedWorker === trabajador.id}
                onExpand={() => handleExpand(trabajador.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workers;
