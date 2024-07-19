import React, { useEffect } from 'react'
import { IconType } from 'react-icons'
import { FaGithubAlt, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import {links} from '@/app/data/links'
import Tippy from '@tippyjs/react'
import { motion,useAnimation } from 'framer-motion'

type Profile ={
    title : string,
    icon : IconType,
    link : string,
    className : string
}

const profiles: Profile[] = [
    {
      title: "Instagram",
      icon: FaInstagram,
      link: links.instagram,
      className: "bg-[#e1306c]",
    },
    {
      title: "LinkedIn",
      icon: FaLinkedinIn,
      link: links.linkedin,
      className: "bg-[#2867b2]",
    },
    
    {
      title: "GitHub",
      icon: FaGithubAlt,
      link: links.github,
      className: "bg-[#211f1f]",
    },
    // {
    //     title: "Twitter",
    //     icon: FaTwitter,
    //     link: links.twitter,
    //     className: "bg-[#1da1f2]",
    //   },
    // {
    //   title: "Dribbble",
    //   icon: FaDribbble,
    //   link: links.dribbble,
    //   className: "bg-[#ea4c89]",
    // },
    // {
    //   title: "DEV Community",
    //   icon: FaDev,
    //   link: links.dev,
    //   className: "bg-[#0a0a0a]",
    // },
    // {
    //   title: "Facebook",
    //   icon: FaFacebookF,
    //   link: links.facebook,
    //   className: "bg-[#3b5998]",
    // },
  ];
const Profiles :React.FC= () => {
 const controls = useAnimation()
 useEffect(()=>{
    const sequence = async()=>{
      for(let i in profiles){
         await controls.start((i)=>({
            opacity:1, x:0,scale:1,rotate:0,
            transition: {duration :1.0, delay : 7+ i*0.7, ease:'easeInOut'}
         }))
      }
    }
    sequence()
 },[controls])
  return (
    <div className='h-[22px] flex gap-8 mt-6' >
  {profiles.map(({title,link,className, icon:Icon },index)=>(
   <Tippy key={index} content={<p className='dark:text-white' ><small>{title}</small></p>}placement='bottom'>
        <motion.div className={`p-1 text-sm rounded-full text-white ${className}`}
         animate={controls} initial={{x:100,scale:0.8,rotate:45, opacity:0, y:-20}} custom={index}>
           <a href={link} target='_blank' rel='noreferrer'>
            <Icon   />
            <span className='sr-only'>{title}</span>
            </a> 
        </motion.div>
      
    </Tippy>
  

  ))}
    </div>
  )
}

export default Profiles