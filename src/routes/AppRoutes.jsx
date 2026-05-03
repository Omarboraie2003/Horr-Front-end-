import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import SignUpPage from '../features/auth/pages/SignUpPage';
import LoginPage from '../features/auth/pages/LoginPage';
import ClientDashboard from '../features/dashboard/pages/ClientDashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {/* Auth routes will go here */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<MainLayout />}>
        {/* Main app routes will go here */}
        <Route path="/client/dashboard" element={<ClientDashboard />} />
        <Route path="/" element={<Navigate to="/client/dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
