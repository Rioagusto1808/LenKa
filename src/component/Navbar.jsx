import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/lenka.png';
import Icon from '../assets/images/icon/login.png';
import ToggleButton from './ToggleButton';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const pages = useLocation().pathname;
  console.log(pages);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white fixed w-full z-50 top-0 border-b border-gray-200 shadow-md'>
      <div className='max-w-screen-xl flex place-items-end items-center justify-between mx-auto p-4'>
        <Link to='/' className='flex items-center'>
          <span className='self-center text-2xl font-semibold whitespace-nowrap text-[#EC0000]'>LenKa</span>
          <img src={Logo} alt='LenKa Logo' className='h-8 mb-2' />
        </Link>

        <div className='md:hidden'>
          <button
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#EC0000] rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
            onClick={handleMenuToggle}
            aria-controls='navbar-mobile'
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className='sr-only'>Open main menu</span>
            <svg className='w-5 h-5' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 17 14'>
              <path stroke='#EC0000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h15M1 7h15M1 13h15' />
            </svg>
          </button>
        </div>

        <div className={`md:flex md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id='navbar-mobile'>
          <div className='flex flex-col md:flex-row md:space-x-8'>
            <Link to='/' className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EC0000] md:p-0 ${pages == '/' ? 'text-red-600 font-bold' : 'text-black'} `}>
              Beranda
            </Link>
            <Link to='/aboutus' className={`block py-2 px-3] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EC0000] md:p-0 ${pages == '/aboutus' ? 'text-red-600 font-bold' : 'text-black'}`}>
              Tentang Kami
            </Link>
            <Link to='/layanan' className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EC0000] md:p-0 ${pages == '/layanan' ? 'text-red-600 font-bold' : 'text-black'}`}>
              Layanan
            </Link>
            <Link to='/portofolio' className={`block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#EC0000] md:p-0 ${pages == '/portofolio' ? 'text-red-600 font-bold' : 'text-black'}`}>
              Portofolio
            </Link>
          </div>
        </div>

        
            <ToggleButton />
          
      </div>
    </nav>
  );
};

export default Navbar;
