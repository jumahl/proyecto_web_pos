import { useState } from "react";
import SalesNavbar from "../components/SalesNavbar";
import SalesSearchBar from "../components/SalesSearchBar";
import SalesList from "../components/SalesList";

export default function SalesPage() {
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  const handleSearch = () => {
    setSearch(inputValue);
  };

  return (
    <div className="min-h-screen mt-2 bg-[#f5f0f7] flex flex-col">
      <SalesNavbar />
      <div className="flex-1 flex justify-center items-start p-8">
        <div className="w-full max-w-6xl bg-[#f8f9fb] rounded-2xl shadow-lg p-6 mt-4 border border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h2 className="text-xl font-semibold mb-4 md:mb-0">Ventas</h2>
            <SalesSearchBar
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onSearch={handleSearch}
            />
          </div>
          <hr className="mb-2" />
          <SalesList filter={search} />
        </div>
      </div>
    </div>
  );
}