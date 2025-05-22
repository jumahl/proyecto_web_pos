import React from 'react';
import StatsAdminHeader from '../../components/login_admin/StatsAdminHeader';

export default function StatsAdminPage() {
  return (
    <div className="min-h-screen bg-[#f5f6fa] flex flex-col items-center">
      <StatsAdminHeader />
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1200px] bg-[#dde3fb] rounded-[3rem] shadow px-14 py-10">
          <span className="font-black text-3xl md:text-4xl text-[#222] tracking-wide leading-tight">
            Estadísticas
          </span>
          {/* Estadísticas en tarjetas */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Total de empresas registradas */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Total de empresas registradas</span>
              <span className="text-3xl font-bold text-blue-700 mb-1">245</span>
              <span className="text-gray-400 text-sm">Empresas usando la plataforma</span>
            </div>
            {/* Empresas activas vs inactivas */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Empresas activas</span>
              <span className="text-3xl font-bold text-green-600 mb-1">210</span>
              <span className="text-gray-400 text-sm">Activas actualmente</span>
              <span className="text-gray-500 text-base mt-4 mb-2">Empresas inactivas</span>
              <span className="text-3xl font-bold text-red-500 mb-1">35</span>
              <span className="text-gray-400 text-sm">Han dejado de usar el servicio</span>
            </div>
            {/* Distribución por plan */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Distribución por plan</span>
              <div className="flex flex-col gap-1">
                <span className="text-blue-700 font-bold">Básico: <span className="text-gray-700">120</span></span>
                <span className="text-blue-700 font-bold">Medio: <span className="text-gray-700">80</span></span>
                <span className="text-blue-700 font-bold">Pro: <span className="text-gray-700">45</span></span>
              </div>
            </div>
            {/* Nuevas empresas registradas por mes */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Nuevas empresas este mes</span>
              <span className="text-3xl font-bold text-blue-700 mb-1">12</span>
              <span className="text-gray-400 text-sm">Registradas en junio</span>
            </div>
            {/* Empresas con más usuarios */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Empresa con más usuarios</span>
              <span className="text-xl font-bold text-blue-700 mb-1">Empresa Alfa</span>
              <span className="text-3xl font-bold text-blue-700 mb-1">58</span>
              <span className="text-gray-400 text-sm">Usuarios registrados</span>
            </div>
            {/* Empresas con más productos */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Empresa con más productos</span>
              <span className="text-xl font-bold text-blue-700 mb-1">Empresa Beta</span>
              <span className="text-3xl font-bold text-blue-700 mb-1">320</span>
              <span className="text-gray-400 text-sm">Productos registrados</span>
            </div>
            {/* Empresas con más actividad */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Empresa con más actividad</span>
              <span className="text-xl font-bold text-blue-700 mb-1">Empresa Gamma</span>
              <span className="text-3xl font-bold text-blue-700 mb-1">1,200</span>
              <span className="text-gray-400 text-sm">Transacciones recientes</span>
            </div>
            {/* Empresas próximas a vencer/cancelar suscripción */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Empresas próximas a vencer</span>
              <span className="text-3xl font-bold text-yellow-600 mb-1">7</span>
              <span className="text-gray-400 text-sm">Suscripciones por vencer</span>
            </div>
            {/* Ingresos totales por plan */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Ingresos totales por plan</span>
              <div className="flex flex-col gap-1">
                <span className="text-blue-700 font-bold">Básico: <span className="text-gray-700">$12,000</span></span>
                <span className="text-blue-700 font-bold">Medio: <span className="text-gray-700">$18,000</span></span>
                <span className="text-blue-700 font-bold">Pro: <span className="text-gray-700">$25,000</span></span>
              </div>
            </div>
            {/* Empresas por sector o categoría */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Empresas por sector</span>
              <div className="flex flex-col gap-1">
                <span className="text-blue-700 font-bold">Retail: <span className="text-gray-700">80</span></span>
                <span className="text-blue-700 font-bold">Tecnología: <span className="text-gray-700">60</span></span>
                <span className="text-blue-700 font-bold">Salud: <span className="text-gray-700">40</span></span>
                <span className="text-blue-700 font-bold">Otros: <span className="text-gray-700">65</span></span>
              </div>
            </div>
            {/* Empresas que han solicitado soporte */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Empresas que han solicitado soporte</span>
              <span className="text-3xl font-bold text-blue-700 mb-1">18</span>
              <span className="text-gray-400 text-sm">Tickets abiertos este mes</span>
            </div>
            {/* Tasa de retención y cancelación */}
            <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-start">
              <span className="text-gray-500 text-base mb-2">Tasa de retención</span>
              <span className="text-3xl font-bold text-green-600 mb-1">92%</span>
              <span className="text-gray-400 text-sm">Empresas que renuevan</span>
              <span className="text-gray-500 text-base mt-4 mb-2">Tasa de cancelación</span>
              <span className="text-3xl font-bold text-red-500 mb-1">8%</span>
              <span className="text-gray-400 text-sm">Empresas que cancelan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
