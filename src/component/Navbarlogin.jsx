// import React , { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/lenka.png";


const Navbarlogin = () => {
  // const [isMenuOpen, setMenuOpen] = useState(false);

  // const handleMenuToggle = () => {
  //   setMenuOpen(!isMenuOpen);
  // };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 border-b border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex items-center justify-around mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="LenKa Logo" className="h-8" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#EC0000]">
            LenKa
          </span>
        </Link>

      </div>
    </nav>
  );
};

export default Navbarlogin;
