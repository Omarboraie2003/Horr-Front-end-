import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import SignUpPage from '../features/auth/pages/SignUpPage';
import LoginPage from '../features/auth/pages/LoginPage';
import ClientDashboard from '../features/dashboard/pages/ClientDashboard';
import { PostJobPage } from '../features/jobs';
import SettingsPage from '../features/account/pages/SettingsPage';
import ProtectedRoute from '../components/ProtectedRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/client/post-job" element={<PostJobPage />} />
          <Route path="/client/settings" element={<SettingsPage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRoutes;
