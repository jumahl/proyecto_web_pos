import React from 'react';
import { Route } from 'react-router-dom';
import DashboardPage from '../../pages/login_admin/DashboardPage';
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
  />
];

export default dashboardRoutes;