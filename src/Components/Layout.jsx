import React from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <Outlet />
      <Footer/>
      </main>

      {/* Global ToastContainer */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      {/* Optional Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
