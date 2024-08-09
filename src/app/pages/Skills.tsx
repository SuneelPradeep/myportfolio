'use client';
import React from 'react';
import {skillicons } from '../data/skillslangicons'
import Image from 'next/image';
import { motion} from "framer-motion" 
import { Section } from '../types/Sections';
import Heading from '../components/Heading';
import sectionList from '../data/section';


const Skills = () => {

  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 40, 
          ease: 'linear'
        }
      }
    }
  };
 const duplicatedIcons = skillicons.map((i)=> ({
  ...i,
  id : i.id + skillicons.length
 }))
 const allIcons = [...skillicons,...duplicatedIcons]
  return (
   <div id={Section.Skills} className=' my-[4rem] py-8 '>
   <Heading icon={sectionList[Section.Skills].icon} title={sectionList[Section.Skills].title} /> 
    <div className=" border-t border-b border-gray-200 dark:border-gray-500  py-4 overflow-hidden">
    <motion.div 
        animate="animate" className='flex space-x-8 items-center w-[1300%] lg:w-[450%]  md:w-[650%]'
        variants={marqueeVariants}
       
      >     
        {allIcons.map((i, id) => (
            <div key={id} className="flex flex-col items-center">
              <div className="w-[100px] h-[60px] lg:w-[150px] lg:h-[80px] relative text-black dark:text-white ">
                <Image 
                  src={i.icon} 
                  alt={i.name} 
                  layout="fill"
                  objectFit="contain"  
                  
                />
              </div>
              <h1 className="mt-2 text-center dark:text-white text-black">{i.name}</h1>
            </div>
          ))}

      </motion.div>
  
  </div>
  </div> 
  );
};

export default Skills;
