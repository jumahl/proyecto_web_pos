import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from '../../pages/login_admin/LoginPage';

const loginRoutes = [
  <Route path="/LoginAdmin" element={<LoginPage />} key="login" />
];

export default loginRoutes;
