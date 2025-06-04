import { useRef, useState } from "react";
import { FaUser, FaCamera } from "react-icons/fa";

export default function ProfileForm() {
  const [fileName, setFileName] = useState("dqaiq12312.jpg");
  const fileInputRef = useRef(null);

  const handleCameraClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <form className="flex flex-col items-center gap-4 w-full max-w-xl mx-auto mt-10">
      <div className="w-full">
        <label className="block mb-2 text-gray-700">Nombre</label>
        <input
          type="text"
          className="w-full rounded-lg border border-black px-4 py-2 bg-[#f8f8f8] focus:outline-none"
        />
      </div>
      <div className="w-full">
        <label className="block mb-2 text-gray-700">Correo electronico</label>
        <input
          type="email"
          className="w-full rounded-lg border border-black px-4 py-2 bg-[#f8f8f8] focus:outline-none"
        />
      </div>
      <div className="w-full">
        <label className="block mb-2 text-gray-700">Contraseña</label>
        <input
          type="password"
          className="w-full rounded-lg border border-black px-4 py-2 bg-[#f8f8f8] focus:outline-none"
        />
      </div>
      <div className="w-full flex items-center gap-3">
        <input
          type="text"
          value={fileName}
          readOnly
          className="w-full rounded-lg border border-black px-4 py-2 bg-[#f8f8f8] focus:outline-none"
        />
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
          accept="image/*"
        />
        <button
          type="button"
          className="text-2xl text-gray-700"
          onClick={handleCameraClick}
        >
          <FaCamera />
        </button>
      </div>
      <button
        type="submit"
        className="bg-[#3256d3] text-white rounded-full px-10 py-2 mt-4 font-medium hover:bg-[#2341a6] transition"
      >
        Confirmar
      </button>
    </form>
  );
}