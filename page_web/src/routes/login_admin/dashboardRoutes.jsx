import React from 'react';
import { Route } from 'react-router-dom';
import DashboardPage from '../../pages/login_admin/DashboardPage';
import EmpresasAdminPage from '../../pages/login_admin/EmpresasAdminPage';

const dashboardRoutes = [
  <Route path="/DashboardAdmin" element={<DashboardPage />} key="dashboard" />,
  <Route path="/empresasadmin" element={<EmpresasAdminPage />} key="empresasadmin" />
];

export default dashboardRoutes;
