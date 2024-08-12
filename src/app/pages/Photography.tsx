import Head from 'next/head'
import React from 'react'
import { Section } from '../types/Sections'
import Heading from '../components/Heading'
import sectionList from '../data/section'

const Photography = () => {
  return (
    <div id={Section.Photography}>
        <Heading icon={sectionList[Section.Photography].icon} title={sectionList[Section.Photography].title}  />
     
      <div className='mx-6 lg:mx-12 my-8 mb-[14rem]'>
       
        <iframe src="//lightwidget.com/widgets/6506843ebeaa57f7af189f3d7f5d23cf.html" scrolling="no" allowtransparency={true} 
        className="lightwidget-widget" style={{width:'100%',border:0,overflow:'hidden'}}>

        </iframe>
       </div>
    </div>
  )
}

export default Photography