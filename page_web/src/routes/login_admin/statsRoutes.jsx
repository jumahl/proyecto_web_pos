import React from 'react';
import { Route } from 'react-router-dom';
import StatsAdminPage from '../../pages/login_admin/StatsAdminPage';

const statsRoutes = (
  <Route path="/statsAdmin" element={<StatsAdminPage />} />
);

export default statsRoutes;
