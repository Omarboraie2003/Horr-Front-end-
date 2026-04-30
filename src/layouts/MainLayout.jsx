import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="main-layout">
      {/* Header could go here */}
      <main>
        <Outlet />
      </main>
      {/* Footer could go here */}
    </div>
  );
};

export default MainLayout;
