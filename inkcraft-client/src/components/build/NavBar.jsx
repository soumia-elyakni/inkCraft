import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { Button } from "../../components/common/Button";
import { logout } from "../../services/auth-services";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

export const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigation = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigation("/login");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <nav className="fixed top-0 left-0 w-full z-20 bg-white bg-opacity-30 py-4">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link to="/home" className="flex bg-slate-400 bg-opacity-40 px-3 rounded-lg ">
              <img src={Logo} alt="Your Logo" className="h-9" />
              <span className="logo-name font-serif text-3xl font-medium text-lime-800">
                Feather'sCraft
              </span>
            </Link>
          </div>
          {user ? (
            <div className="flex items-center space-x-3">
              <FaUserCircle className="text-lime-500 text-2xl"  />
              <div onClick={()=> {navigation("/dash")}}>{user.name}</div>
              <div>
                <Button
                  className="p-2"
                  text={<FiLogOut className="font-semibold text-2xl"/>}
                  onClick={handleLogout}
                />
              </div>
            </div>
          ) : (
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
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
