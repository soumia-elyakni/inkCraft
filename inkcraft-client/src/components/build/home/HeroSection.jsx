import React from 'react'
import {Link} from "react-router-dom"

// import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

// import photo1 from '../../../assets/images/slide1.png'
// import photo2 from '../../../assets/images/slide2.png' 
// import photo3 from '../../../assets/images/slide3.png' 

export const HeroSection = () => {

  
  return (
    <div className="container relative z-10 flex items-center px-6 py-20 mx-auto md:px-12 xl:py-20">
    <div className="relative z-10 flex flex-col items-start lg:w-3/5 xl:w-2/5">
        <span className="font-bold mt-9 text-xl text-lime-200 uppercase">
            Feather's Craft
        </span>
        <h1 className="mt-6 text-xl font-bold leading-tight text-white sm:text-5xl">
        Osez rêver en grand,
            <br/>
            libérez votre créativité
            <br/>
            et laissez votre plume voler.
        </h1>
        <Link to="/register" className="block px-4 py-3 mt-10 text-lg font-bold text-gray-800 uppercase bg-lime-200 rounded-lg hover:bg-gray-100">
            Créer votre histoire
        </Link>
    </div>
</div>

  //   <AwesomeSlider className='hero-section h-60'>
  //   <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-opacity-50 text-green-500 px-4 py-2 rounded-md" data-src={photo1}>
  //   </div>
  //   <div className='slide-section-image' data-src={photo1}> </div>
  //   <div className='slide-section-image' data-src={photo2}>
  //   <p></p>  
  //   </div>
  //   <div className='slide-section-image' data-src={photo3}>
  //   <span className='silde-text text-5xl text-black absolute'> Traduction </span> 
  //   </div>
  // </AwesomeSlider>
  )
}
