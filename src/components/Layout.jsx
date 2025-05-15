import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import '../styles/Layout.css';

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content-wrapper">
        <div className="layout-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;