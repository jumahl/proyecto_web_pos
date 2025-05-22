import { FaUser } from "react-icons/fa";

export default function ProfileSidebar() {
  return (
    <div className="flex flex-col items-center mt-32">
      <button className="flex items-center gap-2 bg-[#e9edfb] px-6 py-3 rounded-full text-lg font-medium text-gray-700 shadow">
        <FaUser className="text-xl" />
        Perfil
      </button>
    </div>
  );
}