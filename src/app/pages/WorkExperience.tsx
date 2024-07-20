'use client';
import { Section } from '../types/Sections';
import Tippy from '@tippyjs/react';
import { MdMoreHoriz } from 'react-icons/md';
import Image from 'next/image';
import { FaLocationArrow } from 'react-icons/fa';
import { useAnimation,motion, useInView } from 'framer-motion'
import React, { useEffect, useRef ,useState} from 'react'
import sectionList from '../data/section';
import Heading from '../components/Heading';

type WorkExp = {
    id:number,
    logo : string,
    name:string,
    period : {start :string, end:string},
    position: string,
    location: string,
    summary : string,
    keyFocus : string[]
}
const DISPLAY_SIZE = 3;
const workexps :WorkExp[] =[
    {id:1,
        logo:"/work/hbss.png",
        name : "HB Software Solutions",
        period : {start : "Jul 2021 ", end :"Jan 2024"},
        position : "Software Developer",
        location : "Gurgoan, Haryana",
        summary : "Developed user interfaces using ReactJS and Material UI or AntD UI to implement responsive design and ensure cross-browser compatibility and optimized for performance, scalability, and API integrations. Implemented authentication and authorization and developed microservices to handle CRUD operations for Clients, Drivers, and Vehicles Management used real-time features using WebSocket connections in ExpressJS, NodeJS for trip booking and vehicle Dispatch and integrated Redis for caching real-time data updates Managed Git repositories in GitLab, including branching, merging, and resolving merge conflicts",
        keyFocus : ["ReactJS", "NodeJS","Redis","AntDesign", "MaterialUI","Oracle","GitLab","Sockets","API development"]
},
{id:2,
    logo:"/work/immaginovate2.png",
    name : "Immaginovate",
    period : {start : "Jan 2021 ", end :"Jul 2021"},
    position : "Junior Software Developer",
    location : "Visakhapatnam, Andhra Pradesh",
    summary : "As a junior developer, I learned ES6 Javascript and it's frameworks React JS andits hooks and UI elements like Material UI , Bootstrap, ANTDesign, and for backend, tools like Express using Node and SQL",
    keyFocus : ["ReactJS","Bootstrap","ExpressJS","SQL","AntDesign"]
},
{id:3,
    logo:"/work/ezy2.png",
    name : "Ezy Schooling",
    period : {start : "May 2020 ", end :"Jul 2020"},
    position : "Software  Developer Trainee intern",
    location : "New Delhi, India",
    summary : "Worked on making a webpage that collects information about the different classes and rating of the schools and Admission process and prices of the tuition of various schools and displayed on the ezy schooling website  using their API",
    keyFocus : ["HTML","CSS","Javascript"]
},
]

type WorkProps ={
  data: WorkExp;
  isFirst: boolean;
  isLast: boolean;
};
const WorkExperienceComp : React.FC<WorkProps> = ({data,isFirst,isLast}) =>
{
   const [moresummary,setMoreSummary] = useState(data.summary.length>200)
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
  
   
  
    return (
      <motion.div
        className='flex group flex-col overflow-hidden mb-4'
        ref={ref}
        initial={{ x: -100, y: 20, opacity: 0 }}
        animate={controls}
      >
        <div className={`ml-1 w-1 flex-shrink-0 bg-neutral-500/25 ${isFirst ? 'rounded-t' : ''} ${isLast ? 'rounded-b' : ''}`} />
        <div className="ml-2 mt-4 flex-shrink-0 relative w-3 h-3 rounded-full" />
        <div className="mt-4 ml-8 grid gap-2 pb-2">
          <div className="relative w-full sm:w-[100px] h-auto rounded-lg">
            <Image src={data.logo} width={100} height={40} alt={data.name} className='object-contain' />
          </div>
          <div>
            <h3>
              <span className='font-bold prose dark:prose-invert text-lg'>{data.name}</span>
              {" "}
              <span className='text-xs prose dark:prose-invert'>({data.period.start} - {data.period.end})</span>
            </h3>
            <h4 className='prose prose-indigo dark:prose-invert'>{data.position}</h4>
          </div>
          <h5 className='my-1 flex gap-2 items-center text-xs'>
            <FaLocationArrow />
            <span className='prose dark:prose-invert text-sm'>{data.location}</span>
          </h5>
          <span className='prose prose-md prose-neutral dark:prose-invert overflow-hidden max-w-full'>
            {!moresummary ? data.summary : `${data.summary.slice(0, 80)}...`}
            <p className='text-xs prose dark:prose-invert cursor-pointer' onClick={() => setMoreSummary(!moresummary)}>
              {!moresummary ? 'Show Less' : 'Read More'}
            </p>
          </span>
          <span className='text-sm flex flex-row gap-2 text-gray-500 leading-relaxed prose-sm prose-neutral dark:prose-invert'>
            <strong className='text-black dark:text-white'>Key Focus: </strong>
            {data.keyFocus.join(", ")}
          </span>
        </div>
      </motion.div>
    );
  };
  
  const WorkExperience = () => {
    const [showMore, setShowMore] = useState(workexps.length > DISPLAY_SIZE ? false : true);
    return (
      <div id={Section.WorkExperience} className=' mx-6 lg:mx-12 my-6'>
        <Heading icon={sectionList[Section.WorkExperience].icon} title={sectionList[Section.WorkExperience].title}  />
        <div className="flex flex-col">
          {workexps.filter((_, index) => (showMore ? true : index < DISPLAY_SIZE)).map((data, id) => (
            <WorkExperienceComp key={data.id} data={data} isFirst={id === 0} isLast={id === 2} />
          ))}
        </div>
        {!showMore && (
          <Tippy content={`Show ${workexps.length - DISPLAY_SIZE} More`} placement='right'>
            <div className="cursor-pointer mt-4 dark:text-white text-black" onClick={() => setShowMore(true)}>
              <MdMoreHoriz size={24} />
            </div>
          </Tippy>
        )}
      </div>
    );
  };
  
  export default WorkExperience;
 
