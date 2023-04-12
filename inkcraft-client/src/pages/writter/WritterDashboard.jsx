import React from 'react'
import { WritterSidebar } from './WritterSidebar'
import { Outlet } from 'react-router'
import { NavBar } from '../../components/build/NavBar'
import img from "../../assets/images/back.jpg"

export const WritterDashboard = () => {

  return (
    <div>
      <img src={img} alt='backgroundImg' className="Background fixed top-0 left-0 object-cover w-full h-full"/>
      <div className='mb-10'>
        <NavBar />
      </div>
      <div className='flex flex-row my-20 pt-5'>
        <div className=' w-1/4 fixed'>
          <WritterSidebar />
        </div>
        <div className="w-1/2 fixed pl-3 max-h-screen overflow-y-hidden scrollbar-none" style={{ marginLeft: 350, maxHeight: '85%' , overflowY: 'scroll' }}>
          <Outlet />
        </div>
        <div className="w-1/4" />
      </div>
    </div>
  );

}
