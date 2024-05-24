import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Carousel } from '@material-tailwind/react';

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
