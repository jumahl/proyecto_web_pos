import React from 'react';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Buscar Producto"
        value={value}
        onChange={onChange}
        className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
};

export default SearchBar;
