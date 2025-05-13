import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import PlansPage from '../pages/PlansPage'
import LoginPage from '../pages/LoginPage'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Planes" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Planes" element={<PlansPage />} />
      </Routes>
    </BrowserRouter>
  )
}
