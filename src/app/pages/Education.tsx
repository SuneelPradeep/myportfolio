'use client';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa';
import { Section } from '../types/Sections';
import Tippy from '@tippyjs/react';
import { MdMoreHoriz } from 'react-icons/md';
import { useAnimation,motion, useInView } from 'framer-motion';
import sectionList from '../data/section';
import Heading from '../components/Heading';

const DISPLAY_SIZE = 3;
type Edu = {
    id : number,
    logo :string,
    institution : string,
    study : string,
    degree : string,
    location :string,
    period : {start : string, end : string}
}
const EducationData :Edu[] = [
    {id : 1,
        logo: "/education/dtu.png",
        institution:"Delhi Technological University",
        study :"Computer Engineering",
        degree : "Bachelor of Technology",
        location:"New Delhi, India",
        period : {start : "Aug 2016" , end :"Dec 2020"}
    },
    {id : 2,
        logo: "/education/narayana.png",
        institution:"Narayana Junior College",
        study :"Maths, Physics, Chemistry",
        degree : "Intermediate(11th & 12th)",
        location:"Visakhapatnam, AP,India",
        period : {start : "2014" , end :"2016"}
    },
    {id : 3,
        logo: "/education/svn.png",
        institution:"Sarvepalli Vidya Niketan",
        study :"SSC",
        degree : "High School",
        location:"SKota, AP,India",
        period : {start : "-" , end :"2014"}
    }
]


type EduProps ={
    data: Edu;
    isFirst: boolean;
    isLast: boolean;
  };
  const EducationComponent : React.FC<EduProps> = ({data,isFirst,isLast}) => {
    const ref=useRef(null)
    const isinView = useInView(ref)
    const controls = useAnimation()
    useEffect(()=>{
      const sequence = async()=>{
       await controls.start((i)=>({
      x:0, y:0,
      opacity:1,
      transition :{delay: i*0.5, type:'spring',stiffness:300}}))
      }
      if(isinView){
        sequence()
      }
      
    },[controls,isinView])
    return(
      <motion.div className='flex group flex-col overflow-hidden mb-4' ref={ref} animate={controls} initial={{x:100, y:-20, opacity:0 }} >
      <div className={`ml-1 w-1 flex-shrink-0 bg-neutral-500/25 ${isFirst ? 'rounded-t' : ''} ${isLast ? 'rounded-b' : ''}`} />
     <div className="ml-2 mt-8 flex-shrink-0 relative w-3 h-3 rounded-full" />
     <div className="mt-5 ml-8 grid gap-2 pb-2">
     <div className="relative  rounded-lg ">
      <Image src={data.logo} width={60} height={60} alt={data.institution} className='bg-white object-contain' />
      </div>
      <div className=''>
      <h3> <span className='text-lg font-bold prose dark:prose-invert '> {data.institution}  </span> {" "}
      <span className='text-xs prose dark:prose-invert'> ({data.period.start} - {data.period.end})</span></h3>
      <h4 className='prose  text-sm prose-indigo dark:prose-invert'>{data.degree} ,{data.study}</h4>
      
      </div>
     <h5 className='my-1 flex gap-2 items-center text-xs'> 
      <FaLocationArrow />  
      <span className='prose dark:prose-invert text-sm'>{data.location} </span>
     </h5>
        </div>
      </motion.div>
  )}
  const Education =() => {
    const [showMore,setShowMore] = useState(EducationData.length > DISPLAY_SIZE ? false : true) 
   
    return (
      <div id={Section.Education} className='my-6 mx-6 lg:mx-12'>
        <Heading icon={sectionList[Section.Education].icon} title={sectionList[Section.Education].title} />
       <div className="flex flex-col "  >
        {EducationData.filter((_,index)=> (showMore ? true: index <DISPLAY_SIZE)).
        map((data,id) =>(
          <EducationComponent key={data.id} data={data} isFirst={id===0} isLast={id===2}  />
        ))}
  
       </div>
       {!showMore && (
           <Tippy content={`Show ${EducationData.length - DISPLAY_SIZE} More`} placement='right'>
            <div className="cursor-pointer" onClick={()=>setShowMore(true)}>
              <MdMoreHoriz size={24} />
            </div>
           </Tippy>
       )}
        </div>
  
    )
  }

export default Education