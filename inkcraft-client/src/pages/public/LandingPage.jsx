import React from 'react'
import { NavBar } from '../../components/build/NavBar'
import { HeroSection } from '../../components/build/home/HeroSection'

export const LandingPage = () => {
  return (
    <div className=''>
      <NavBar/>
      <div>
      <img src="https://images.pexels.com/photos/1425146/pexels-photo-1425146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='backgroundImg' className="Background absolute object-cover w-full h-full"/>
      <HeroSection/>
      </div>
    </div>
  )
}
