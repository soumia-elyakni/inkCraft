import React from 'react'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import photo1 from '../../../assets/images/slide1.png'
import photo2 from '../../../assets/images/slide2.png' 
import photo3 from '../../../assets/images/slide3.png' 

export const HeroSection = () => {

  
  return (
    <AwesomeSlider className='hero-section h-60'>
    <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-50 text-green-500 px-4 py-2 rounded-md" data-src={photo1}>
    </div>
    <div className='slide-section-image' data-src={photo1}> </div>
    <div className='slide-section-image' data-src={photo2}>
    <p></p>  
    </div>
    <div className='slide-section-image' data-src={photo3}>
    <span className='silde-text text-5xl text-black absolute'> Traduction </span> 
    </div>
  </AwesomeSlider>
  )
}
