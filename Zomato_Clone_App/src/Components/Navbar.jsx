import React, { useState } from "react";
import { PiDownloadSimpleDuotone } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the login state
  const toggleLogin = () => setIsLoggedIn((prev) => !prev);

  // Function to toggle the visibility of the menu on small screens
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-6 shadow-md flex-wrap relative">
      {/* Logo section */}
      <div className="w-full md:w-auto">
        <h1 className="text-white">
          <PiDownloadSimpleDuotone />
          Get the app
        </h1>
      </div>

      {/* Desktop Menu (visible on md and larger screens) */}
      <div className="hidden md:flex space-x-4 justify-center md:justify-end w-full md:w-auto">
        <button className="text-white">Investor Relationship</button>
        <button className="text-white">Add restaurant</button>
        <button onClick={toggleLogin} className="text-white">
          {isLoggedIn ? "Logout" : "Login"}
        </button>
        <button className="text-white">Sign Up</button>
      </div>

      {/* Mobile Hamburger Icon (visible on small screens) */}
      <div className="md:hidden flex items-center z-50">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu (visible when menu is open on small screens) */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 right-0 bg-black text-white flex flex-col items-center py-4 space-y-4 mt-16 z-40">
          <button className="w-full text-center">Investor Relationship</button>
          <button className="w-full text-center">Add restaurant</button>
          <button onClick={toggleLogin} className="w-full text-center">
            {isLoggedIn ? "Logout" : "Login"}
          </button>
          <button className="w-full text-center">Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
