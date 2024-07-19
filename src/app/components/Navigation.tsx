'use client';
import Tippy from '@tippyjs/react'
import Image from 'next/image'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider';
import { FaMoon, FaSun } from 'react-icons/fa';
import useWindowDimensions, { Breakpoints } from '../hooks/useWindowDimensions';
import { sectionsArray } from '../data/section';
import { FiMenu } from 'react-icons/fi';

const Navigation = () => {
    const {width} = useWindowDimensions()
    const isDesktop = width > Breakpoints.lg
    const goToSection = (id: string)=>{
        const section = document.getElementById(id)
        if(section){
            section.scrollIntoView({behavior:'smooth'})
        } 
    }
    const goToTop :React.MouseEventHandler<HTMLDivElement>=()=>{
        window.scrollTo({top:0, behavior:'smooth'})

    }
    const {isDarkMode,toggleTheme} = useContext(ThemeContext)
  if(!isDesktop){
    return (
        <nav className='fixed min-h-screen flex flex-col gap-4 items-center justify-between top-0 px-3 py-5 '>
           <Tippy content='Go to Top' placement='right'>
           <div className='cursor-pointer grayscale hover:grayscale-0'>
            <Image src='/logosmall2.png' width={32} height={32} alt='home' />
           </div>
    
           </Tippy>
           <Tippy content='Toggle Theme' placement='right'>
            <div onClick={toggleTheme} className='p-1 cursor hover:text-yellow-500 transition-colors'>{isDarkMode ? <FaMoon  /> : <FaSun />  }</div>
            </Tippy>
            </nav>
      )
  }
  else{
    return(
    <nav className='fixed min-h-screen flex flex-col gap-4 items-center justify-between top-0 px-3 py-5 '>
        <Tippy content={<p className='dark:text-white' ><small>Go to Top</small></p>} placement='right'>
        <div className='cursor-pointer grayscale hover:grayscale-0' onClick={goToTop}>
        <Image src='/logosmall2.png' width={32} height={32} alt='home' />
        </div>    
        </Tippy>

    <div className='flex-1 w-5 overflow-hidden flex justify-start items-center group'>
          <div className='flex w-full transition-[margin] ml-2 group-hover:-ml-7'>
            <FiMenu  />
          </div>
      

           <div className='flex flex-col ml-2'>
    {sectionsArray.map(({ id, icon: Icon, title }) => (
      <Tippy key={id} content={<p className='dark:text-white' ><small>{title}</small></p>} placement='right'>
        <div className='cursor-pointer py-3' onClick={()=>goToSection(id)}>
          <Icon />
        </div>
      </Tippy>
    ))}
  </div>
  </div>

    <Tippy content={<p className='dark:text-white' ><small>Toggle Theme</small></p>} placement='right'>
    <div onClick={toggleTheme} className='p-1 cursor hover:text-yellow-500 transition-colors'>{isDarkMode ? <FaMoon  /> : <FaSun />  }</div>
    </Tippy>
    </nav>
)
}
}

export default Navigation