import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import Logo from '../../assets/images/logo.png'
import { Button } from '../../components/common/Button';
import { logout } from '../../services/auth-services';

export const WritterNavBar = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    
    const navigation = useNavigate()

    const handleLogout = async () => {
      try {
        await logout()
        navigation('/login')
      } catch (error) {
        console.log(error)
      }
    }

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
          <div>
            <Button className=" bg-lime-300 text-xl" text="Out" onClick={handleLogout} />
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}
