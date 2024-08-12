import Head from 'next/head'
import React from 'react'
import { Section } from '../types/Sections'
import Heading from '../components/Heading'
import sectionList from '../data/section'

const Photography = () => {
  return (
    <div id={Section.Photography}>
        <Heading icon={sectionList[Section.Photography].icon} title={sectionList[Section.Photography].title}  />
     
      <div className='mx-6 lg:mx-12 my-8 '>
     
        {/* eslint-disable */}
        <iframe src="//lightwidget.com/widgets/f1e05bbf556b5d50819ddc4b16173409.html" scrolling="no"
         allowtransparency="true"
className="lightwidget-widget" style={{width:'100%',border:0,overflow:'hidden'}}>

         </iframe>
         {/* eslint-disable */}
       </div>
    </div>
  )
}

export default Photography