import { FaSearch } from "react-icons/fa";

export default function SalesSearchBar({ value, onChange, onSearch }) {
  return (
    <div className="flex items-center gap-2 w-full max-w-md ml-auto">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Buscar Producto"
          value={value}
          onChange={onChange}
          className="w-full rounded-full border border-gray-300 px-4 py-2 pr-10 focus:outline-none"
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearch();
          }}
        />
      </div>
      <button
        type="button"
        onClick={onSearch}
        className="flex items-center justify-center"
        aria-label="Buscar"
      >
        <FaSearch className="text-2xl text-gray-700" />
      </button>
    </div>
  );
}