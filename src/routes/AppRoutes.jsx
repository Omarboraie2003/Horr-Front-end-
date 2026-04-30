import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import SignUpPage from '../features/auth/pages/SignUpPage';
import LoginPage from '../features/auth/pages/LoginPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {/* Auth routes will go here */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Route>

      <Route element={<MainLayout />}>
        {/* Main app routes will go here */}
        <Route path="/" element={<div>Welcome to the App</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
