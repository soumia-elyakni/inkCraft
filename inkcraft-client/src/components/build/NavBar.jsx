// import React from 'react'
// import { Link } from 'react-router-dom';


// export const NavBar = () => {
//   return (
    
// <div>
//     <nav className="bg-transparent shadow ">
//         <div className="px-8 mx-auto max-w-7xl">
//             <div className="flex items-center justify-between h-16">
//                 <div className=" flex items-center">
                  
//                     <div className="hidden md:block">
//                         <div className="flex items-baseline ml-10 space-x-4">
//                             <Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="home">
//                               <img src={Logo} className="w-20" alt="logo" />
//                             </Link>
//                             <Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/#">
//                                 Content
//                             </Link>
//                             <Link className="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/#">
//                                 Contact
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
            
//                 <div className="flex -mr-2 md:hidden">
//                     <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
//                         <svg width="20" height="20" fill="currentColor" className="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
//                             </path>
//                         </svg>
//                     </button>
//                 </div>
//             </div>
//         </div>
//         <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                 <Link  className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/home">
//                      <img src={Logo} className="w-20" alt="logo" />
//                       Feather'sCraft 
//                 </Link>
//                 <Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/#">
//                     Content
//                 </Link>
//                 <Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/#">
//                     Contact
//                 </Link>
//                 <Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/login">
//                     Login
//                 </Link>
//                 <Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to="/register">
//                     Signup
//                 </Link>
//             </div>
//         </div>
//     </nav>
// </div>

//   )
// }

import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import Logo from '../../assets/images/logo.png'

export const NavBar = () => {
  return (
    <nav className="bg-green-100 bg-opacity-30 py-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex">
              <img
                src={Logo}
                alt="Your Logo"
                className="h-9"
              />
               <span className="logo-name font-serif text-3xl font-medium text-white">
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


