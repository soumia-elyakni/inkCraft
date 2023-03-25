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
    <div>
      <Outlet/>
    </div>
    </div>
    </div>
  )
}
