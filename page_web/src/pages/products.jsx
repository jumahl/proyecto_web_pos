import React, { useState } from 'react';
import Navbar from '../components/products/Navbar_products';
import SearchBar from '../components/products/SearchBar_products';
import Expandex from '../components/products/expandex';
import background from '../assets/fondo.jpg';

const Products = () => {
  const [search, setSearch] = useState('');
  const [expandedProduct, setExpandedProduct] = useState(null);

  const productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      descripcion: 'Descripción breve del producto.',
      detalles: 'Este producto es de alta calidad y tiene un precio competitivo.',
    },
    {
      id: 2,
      nombre: 'Producto 2',
      descripcion: 'Descripción breve del producto.',
      detalles: 'Este producto es ideal para uso diario y tiene garantía extendida.',
    },

  ];

  const filtrados = productos.filter((p) =>
    p.nombre.toLowerCase().includes(search.toLowerCase())
  );

  const handleExpand = (id) => {
    setExpandedProduct(expandedProduct === id ? null : id);
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
            <h2 className="text-xl font-semibold">Productos</h2>
            <div className="flex gap-4 items-center">
              <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
              <button
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full"
                style={{ backgroundColor: '#28a745', color: 'white' }}
              >
                Crear Producto
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {filtrados.map((producto) => (
              <Expandex
                key={producto.id}
                producto={producto}
                isExpanded={expandedProduct === producto.id}
                onExpand={() => handleExpand(producto.id)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Products;
