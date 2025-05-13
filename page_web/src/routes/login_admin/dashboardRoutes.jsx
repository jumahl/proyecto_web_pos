import React from 'react';
import { Route } from 'react-router-dom';
import DashboardPage from '../../pages/login_admin/DashboardPage';

const dashboardRoutes = [
  <Route path="/DashboardAdmin" element={<DashboardPage />} key="dashboard" />
];

export default dashboardRoutes;
