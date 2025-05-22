import { FaRegStar } from "react-icons/fa";

const sales = [
  { id: 1, title: "Venta 1", description: "Menu description." },
  { id: 2, title: "Venta 2", description: "Menu description." },
  { id: 3, title: "Venta 3", description: "Menu description." },
  { id: 4, title: "Venta 3", description: "Menu description." },
  { id: 5, title: "Venta 3", description: "Menu description." },
];

export default function SalesList({ filter }) {
  return (
    <ul className="divide-y divide-gray-200">
      {sales
        .filter((s) =>
          s.title.toLowerCase().includes(filter.toLowerCase())
        )
        .map((sale) => (
          <li key={sale.id} className="flex items-start gap-4 py-4">
            <FaRegStar className="mt-1 text-xl text-black" />
            <div>
              <div className="font-medium text-lg">{sale.title}</div>
              <div className="text-gray-500 text-sm">{sale.description}</div>
            </div>
          </li>
        ))}
    </ul>
  );
}