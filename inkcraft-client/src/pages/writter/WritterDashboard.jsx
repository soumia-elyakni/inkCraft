import React from 'react'
import { WritterSidebar } from './WritterSidebar'
import { WritterNavBar } from './WritterNavBar'
import { Outlet } from 'react-router'

export const WritterDashboard = () => {

  return (
    <div>
    <WritterNavBar/>
    <div className='flex flex-row'>
    <WritterSidebar/>
    <div className='ml-3 border max-h-full border-green-900'>
      <Outlet/>
    </div>
    </div>
    </div>
  )
}
