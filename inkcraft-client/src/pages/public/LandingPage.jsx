import React from 'react'
import { NavBar } from '../../components/build/NavBar'
import { HeroSection } from '../../components/build/home/HeroSection'

export const LandingPage = () => {
  return (
    <div className='Background'>
      <NavBar/>
      <HeroSection/>
    </div>
  )
}
