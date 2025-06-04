import React from 'react';
import { Route } from 'react-router-dom';
import DashboardPage from '../../pages/login_admin/DashboardPage';
import EmpresasAdminPage from '../../pages/login_admin/EmpresasAdminPage';
import ProtectedRoute from '../ProtectedRoute';

const dashboardRoutes = [
  <Route
    path="/DashboardAdmin"
    element={
      <ProtectedRoute redirectTo="/LoginAdmin">
        <DashboardPage />
      </ProtectedRoute>
    }
    key="dashboard"
  />,
  <Route
    path="/empresasadmin"
    element={
      <ProtectedRoute redirectTo="/LoginAdmin">
        <EmpresasAdminPage />
      </ProtectedRoute>
    }
    key="empresasadmin"
  />
];

export default dashboardRoutes;