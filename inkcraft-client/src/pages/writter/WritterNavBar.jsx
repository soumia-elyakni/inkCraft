import React from 'react'
import {Link} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import Logo from '../../assets/images/logo.png'

export const WritterNavBar = () => {
    const user = JSON.parse(localStorage.getItem("user"))
  return (
    <nav className="bg-opacity-30 py-4">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex">
            <img
              src={Logo}
              alt="Your Logo"
              className="h-9"
            />
             <span className="logo-name font-serif text-3xl font-medium text-green-700">
              Feather'sCraft
            </span>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <FaUserCircle className="text-green-200 text-2xl" />
          <div>{user.name}</div>
        </div>
      </div>
    </div>
  </nav>
  )
}
