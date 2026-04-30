import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {/* Auth routes will go here */}
      </Route>

      <Route element={<MainLayout />}>
        {/* Main app routes will go here */}
        <Route path="/" element={<div>Welcome to the App</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
