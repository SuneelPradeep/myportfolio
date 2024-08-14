'use client';
import React from 'react'
import { certificationList } from '../data/projects'
 import { motion } from "framer-motion";
import { Certificate, Section } from '../types/Sections';
import { PiCertificateBold } from 'react-icons/pi';
import { FaCertificate } from 'react-icons/fa';
import { CiCalendar, CiCalendarDate } from 'react-icons/ci';
import { FiExternalLink } from 'react-icons/fi';
import Link from 'next/link';
import { MdOutlineDateRange } from 'react-icons/md';
import Heading from '../components/Heading';
import sectionList from '../data/section';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const skillVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 20,
    },
  },
};


  const SkillList = ({ skills }: { skills: Certificate[] }) => {
    return (
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 gap-4 my-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill: Certificate, index: number) => (
          <Link key={index} href={skill.link ? skill.link : '#'} target='_blank' rel="noopener noreferrer" >
            <motion.div
            className="border-2 border-gray-400 p-4 rounded-xl shadow-xl hover:bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] transition-colors"
            variants={skillVariants}
          >
            <div className='grid grid-flow-col gap-4 justify-start items-center'><PiCertificateBold  /><p className='' >{skill.name} </p></div>
            <div className='my-2 grid gap-4 grid-flow-col justify-start items-center'><FaCertificate  /><p className=''>{skill.issuer}</p></div>
            <div className='my-2 grid gap-4 grid-flow-col justify-start items-center'>
            <span className='my-2 grid gap-4 grid-flow-col justify-start items-center'><FiExternalLink /> <p>Link</p></span>
              <MdOutlineDateRange />  <p>{skill.date} </p>
            </div>
          </motion.div>
          </Link>
        ))}
      </motion.div>
    );
  };

  
const Certifications = () => {


  return (
    <div id={Section.Certifications} className='mx-6 my-8 lg:mx-16 '>
      <Heading icon={sectionList[Section.Certifications].icon} title={sectionList[Section.Certifications].title}  />
        <SkillList skills={certificationList} />
</div>

  )
}

export default Certifications


  // const glitchVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 0.8,
  //       yoyo: Infinity,
  //       repeatDelay: 2,
  //       repeatType: "mirror",
  //     },
  //   },
  // };
  // const GlitchSkill = ({ skill } : Certificate) => {
  //   return (
  //     <motion.div className="glitch-skill" variants={glitchVariants}>
  //       <span>{skill.name}</span>
  //       <span aria-hidden="true" className="glitch-effect">
  //         {skill.name}
  //       </span>
  //       <span aria-hidden="true" className="glitch-effect">
  //         {skill.name}
  //       </span>
  //     </motion.div>
  //   );
  // };
// const skillBarVariants = {
//     hidden: { width: 0 },
//     visible: {
//       width: "100%",
//       transition: {
//         duration: 1.5,
//         ease: [0.42, 0, 0.58, 1],
//       },
//     },
//   };
  
//   const SkillBar = ({ skill }) => {
//     return (
//       <div className="skill-bar-container">
//         <div className="skill-label">{skill.name}</div>
//         <motion.div
//           className="skill-bar"
//           variants={skillBarVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           style={{ backgroundColor: skill.color }}
//         />
//       </div>
//     );
//   };

//   const skillIconVariants = {
//     hidden: { opacity: 0, scale: 0.8 },
//     visible: {
//       opacity: 1,
//       scale: [1, 1.2, 1],
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//         repeat: Infinity,
//         repeatDelay: 1,
//       },
//     },
//   };
  
//   const SkillIcon = ({ icon }) => {
//     return (
//       <motion.div
//         className="skill-icon"
//         variants={skillIconVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {icon}
//       </motion.div>
//     );
//   };
//   const SkillCard = ({ skill }) => {
//     return (
//       <motion.div
//         className="skill-card"
//         whileHover={{ rotateY: 180 }}
//         transition={{ duration: 0.8 }}
//         style={{
//           perspective: 1000,
//           transformStyle: "preserve-3d",
//         }}
//       >
//         <div className="skill-card-front">
//           {skill.issuer}
//           <h3>{skill.name}</h3>
//         </div>
//         <div className="skill-card-back">
//           <p>{skill.date}</p>
//         </div>
//       </motion.div>
//     );
//   };




        {/* <GlitchSkill skill={certificationList[0]} /> */}
        {/* {certificationList.map((cert) =>(
            <>
            <SkillBar skill={cert} />
            {/* <SkillIcon icon={cert.issuer} /> 
            <SkillCard skill={cert} />
            </>
        ))} */}
        