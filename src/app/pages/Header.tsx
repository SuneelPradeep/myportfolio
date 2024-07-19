'use client';
import React, { useContext } from 'react'
import useWindowDimensions, { Breakpoints } from '../hooks/useWindowDimensions'
import NoSSR from '../components/NoSSR';
import PhotoWall from '../components/PhotoWall';
import Image from 'next/image';
import { ThemeContext } from '../context/ThemeProvider';
import Ingredients from '../components/Ingredients';
import Profiles from '../components/Profiles';

const Header = () => {

    const {width} = useWindowDimensions();
    const {isDarkMode,toggleTheme} = useContext(ThemeContext)
    console.log('isdarkmodeis',isDarkMode)

  return (
    <div id="header" className='h-screen grid place-items-center place-content-top gap-4'>
        <NoSSR>
            <PhotoWall size={width > Breakpoints.sm ? 384 : 256} />
         </NoSSR>

         <Image src='/logo2.png' width={550} height={140} alt='Suneel Pradeep' priority />
          {/* <button  onClick={toggleTheme} > Click here to toggle </button> */}
         {/* <h1 className='sr-only'>
          Suneel Pradeep 
          <br />
          Developer, Designer, Photographer, Singer 
          <br />
          Visakhapatnam, New Delhi, India 
         </h1> */}
         <Ingredients />
         <Profiles />
        </div>
  )
}

export default Header