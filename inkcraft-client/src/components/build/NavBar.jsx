import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Logo from '../../assets/images/logo.png'

export const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-white bg-opacity-30 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex">
              <img
                src={Logo}
                alt="Your Logo"
                className="h-9"
              />
               <span className="logo-name font-serif text-3xl font-medium text-lime-100">
                Feather'sCraft
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/content"
              className="text-white hover:text-gray-200 font-medium"
            >
              Contenu
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-200 font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="flex items-center space-x-4">
          <Link to="/login">
              <button className="text-white font-medium border border-white rounded-full py-2 px-4 hover:bg-white hover:text-green-400 transition duration-300">
                Login
              </button>
            </Link>
            <Link to="/register">
              <button className="text-white font-medium bg-green-100 hover:bg-green-600 rounded-full py-2 px-4 shadow-md transition duration-300">
                Sign Up
              </button>
            </Link>
            <FaUserCircle className="text-white text-2xl md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
};


