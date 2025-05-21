import { Routes, Route, Navigate } from 'react-router-dom';
import PlansPage from '../pages/PlansPage';
import LoginPage from '../pages/LoginPage';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Workers from '../pages/workers';
import Products from '../pages/products';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Planes" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/Planes" element={<PlansPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/trabajadores" element={<Workers />} />
      <Route path="/productos" element={<Products />} />
    </Routes>
  );
}
