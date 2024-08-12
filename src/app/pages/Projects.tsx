'use client';
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from 'next/image'
import Link from 'next/link'
import{ Project} from '../types/Sections'
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import {projectList} from '../data/projects'
import {Section } from '../types/Sections'
import sectionList from '../data/section'
import Heading from '../components/Heading'
import Tippy from '@tippyjs/react'


const Card :React.FC<Project>  = ({ id , name, summary, image ,tags,link}) => {
  const controls = useAnimation();
  const ref= useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref,{once:true})

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < projectList.length; i++) {
        await controls.start((index) => ({
          opacity: 1,
          x: 0,
          transition: { duration: 1, delay: index * 0.5, ease: "easeInOut" }
        }));
      }
    };
    if(isInView) {
        sequence()
      }
  }, [controls,isInView]);

  const tagstring = tags.map((i : string)=> `#${i}`).join(" ,")

  return (
    <motion.div ref={ref} className='w-full h-full border-2 border-gray-500 rounded-lg '
    initial={{ opacity: 0, x: -50 }}
    animate={controls}
    custom={id} 
    >

    
    <motion.div 
    initial={{ opacity: 0, x: -50 ,y: 50}}
      animate={{ opacity: 1, x: 0 ,y:0}}
       transition={{ duration: 1, ease: "easeOut" }}
    >
    
      <motion.div
        initial={{ opacity: 0, x: 50, y: 50}}
        animate={{ opacity: 1, x: 0 ,y:0}}
        transition={{ duration: 1, delay: 4, ease: "easeInOut" }}
         className="mb-4 place-items-center relative rounded shadow-lg overflow-hidden hover:opacity-60 " 
          style={{ height: '200px' }}>
          <Link
                href={link?.url ? link?.url : link?.github ? link?.github : "#"} 
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-full flex items-center justify-center"
              >
          <Image
            src={image}
            alt={name}
            width={500} height={250}
            objectFit="cover"
          />
          <span className="absolute inset-0 text-black  opacity-0 flex items-center justify-center transition hover:opacity-100 ">
        <BiLinkExternal fontSize={64} />
      </span></Link>
        </motion.div>

        <div className='px-4 py-2 mb-2'>
      <motion.h3
        className="text-2xl font-semibold mb-2"
        initial={{ opacity: 0, x: -50,y: 50  }}
        animate={{ opacity: 1, x: 0 ,y:0}}
        transition={{ duration: 1, delay: 4.25, ease: "easeInOut" }}
      >
        {name}
      </motion.h3>
      <motion.p
        className="text-gray-700 prose prose-neutral-50  prose-sm mb-2 dark:prose-invert dark:text-gray-300"
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 4.5, ease: "easeInOut" }}
      >
        {summary}
      </motion.p>
      <motion.p
        className="text-xs leading-relaxed font-bold"
        initial={{ opacity: 0, x: -50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1, delay: 4.75, ease: "easeInOut" }}
      >
        {tagstring}
      </motion.p>
      
      {link && (
        <motion.div initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }} className='flex justify-start gap-8 mt-4 mb-1'
        transition={{ duration: 1, delay: 5, ease: "easeInOut" }}>
        <Tippy content={<p className='dark:text-white' ><small>Website</small></p>} placement='bottom'>
        <Link href={link.url || '#'}><BiLinkExternal fontSize={18} /></Link>
          </Tippy>
           <Tippy content={<p className='dark:text-white' ><small>GitHub</small></p>} placement='bottom'>
            <Link href={link.github || '#'}> <FaGithub fontSize={18} /></Link>
           </Tippy>
           </motion.div>
      )}
      
      </div>
    </motion.div>
    </motion.div>
  );
};



const Projects = () => {
  
 
  return (
     <div  id={Section.Projects} className="mx-6 lg:mx-16 my-6">
      <Heading icon={sectionList[Section.Projects].icon} title={sectionList[Section.Projects].title}  />
      <div  className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectList.map((proj, index) => (
          <div
            key={index}
          >
            <Card
              id={proj.id} 
              name={proj.name}
              summary={proj.summary}
              image={proj.image}
              tags={proj.tags}
              link ={proj.link}
            />
            
          </div>
        ))}
      </div>
      </div>
  );
};

export default Projects;
