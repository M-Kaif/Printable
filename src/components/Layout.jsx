import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from './Header';
import  Footer  from './Footer';
const Layout = () => {
  return (
    <>
      {/* Main Content Area */}
      
      <main className="min-h-screen flex flex-col relative">
      <header className='absolute my-2 w-full px-5 top-2 z-10'>
        <Header/>
      </header>
        <Outlet /> 
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Layout;
