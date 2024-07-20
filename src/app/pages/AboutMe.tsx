'use client';
import React, { useRef } from 'react'
import {motion,useInView} from 'framer-motion'
import { Section } from '../types/Sections'
import Image from 'next/image'
import Heading from '../components/Heading';
import sectionList from '../data/section';

const AboutMe = () => {
  const ref=useRef(null)
  const isInView = useInView(ref,{once:true})
  const containerVariants = {
    hidden :{opacity : 0, y:150},
    visible : {opacity :1, y:0, transition : {duration:1.5,ease:'easeInOut'}}
  }
  return (
    <>
    <Heading icon={sectionList[Section.AboutMe].icon} title={sectionList[Section.AboutMe].title} />
     
    <motion.div id={Section.AboutMe} className='mx-[4rem] my-[6rem] h-auto grid gap-12 md:grid-cols-4 place-content-center'
     initial='hidden' variants={containerVariants} ref={ref} animate={isInView ? 'visible':'hidden'}>

     <div className='relative h-[25rem] md:h-auto lg:h-auto col-span-2  lg:col-span-1 md:block '>
                <Image src='/beach2.jpg' fill alt='Me' sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw" className='object-cover md:object-cover lg:object-contain'   />
            </div>      
            <div className=' col-span-2 lg:col-span-3 max-w-full prose prose-md md:prose-neutral dark:prose-invert'>
  <p>Hey there!</p>

  <p>
    I&apos;m Suneel Pradeep Setti, and as you might have already read, I&apos;m a developer, photographer, singer etc.,. This website was created to showcase all of my skills and future plans. Don&apos;t judge my writing based on this section though,it&apos;s my shoddiest work yet and a work in progress.
  </p>
  <p>
    My fascination with computers led me to development. The way code transforms into something tangible and useful, like creating a simple variable <code>string name = &quot;Suneel&quot;</code> which holds my identity in a line of code, amazed me. Witnessing this magic turned my curiosity into a quest for innovation, exploring how sites like Amazon and Meta work.
  </p>
  <p>
    Photography captivates me because it allows me to freeze real-life moments. Looking back at these pictures years later, I see how much has changed, and it brings a wave of nostalgia and fond memories.
  </p>
  <p>
    I love singing as it gives me a beautiful way to express myself and worship God. I also recorded some songs on StarMaker.
  </p>
  <p>
    I created this website to showcase my talents and to make it easier for you to connect with me. If you like what you see, head over to the <a href="#contact">contact section</a> below and send me a message. I would love to hear from you!
  </p>
</div>

        </motion.div>
        </>
  )
}

export default AboutMe