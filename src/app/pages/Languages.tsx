

'use client';
import React, { useState, useEffect,useRef } from 'react';
import Image from 'next/image';
import { CircularProgressbar,CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion, useAnimation ,useInView} from 'framer-motion';
import {languages} from '../data/skillslangicons'
import {Section } from '../types/Sections'
import sectionList from '../data/section'
import Heading from '../components/Heading'
import useWindowDimensions, { Breakpoints } from '../hooks/useWindowDimensions';

interface ProgressBarProps { 
  targetPercentage: number;
  duration: number; 
  language: {
    name: string;
    image: string;
    percentage: number;
  };
}

const ProgressBar: React.FC<ProgressBarProps> = ({ targetPercentage, duration, language }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const {width} = useWindowDimensions()
  // const isDesktop = width > Breakpoints.lg;
  // const isTablet = width >Breakpoints.md && width < Breakpoints.lg;
  // let imagewidth = isDesktop ? 178 : isTablet ? 90 : 45;
  // let imageheight = isDesktop ? 80 : isTablet ? 60 : 25;
  const [imageDimensions, setImageDimensions] = useState({width: 178 , height : 90})

  useEffect(() => {
    const isDesktop = width > Breakpoints.lg;
    const isTablet = width > Breakpoints.md && width < Breakpoints.lg;

    setImageDimensions({
      width: isDesktop ? 178 : isTablet ? 90 : 45,
      height: isDesktop ? 80 : isTablet ? 60 : 25,
    });
  }, [width]);

  useEffect(() => {
    const animateProgress = async () => {
      let start = 0;
      const interval = (duration * 1000) / targetPercentage;
      const intervalId = setInterval(() => {
        if (start < targetPercentage) {
          start++;
          setProgress(start);
        } else {
          clearInterval(intervalId);
        }
      }, interval);
    };

    if (isInView) {
      animateProgress();
    }
  }, [targetPercentage, duration, isInView]);

  return (
  <div ref={ref} className="relative w-[15%] flex flex-col items-center justify-center text-center gap-6 dark:text-white text-black">
         <CircularProgressbarWithChildren
          value={progress}
          className="dark:text-white text-black"
          text={`${progress}%`}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: "#ff8a05",
            trailColor: "#ff5478",
            backgroundColor: '#3e98c7',
          })}
        >
          <div className="my-4" >
            <Image
              src={language.image}
              width={imageDimensions.width}
              height={imageDimensions.width}
              className="rounded-full"
              alt={language.name}  style={{ width: `${imageDimensions.width}px`}}
            />
          </div>
        </CircularProgressbarWithChildren>
        <p className="mt-2 mb-10 prose dark:prose-invert prose-neutral-50">{language.name} ({progress}%)</p>
      </div>
  )}


  // if (isDesktop) {
  //   return (
  //     <div ref={ref} className="relative w-[15%] flex flex-col items-center justify-center text-center gap-6 dark:text-white text-black">
  //       <CircularProgressbarWithChildren
  //         value={progress}
  //         className="dark:text-white text-black"
  //         text={`${progress}%`}
  //         styles={buildStyles({
  //           pathTransitionDuration: 0.5,
  //           pathColor: "#ff8a05",
  //           trailColor: "#ff5478",
  //           backgroundColor: '#3e98c7',
  //         })}
  //       >
  //         <div className="my-4">
  //           <Image
  //             src={language.image}
  //             width={178}
  //             height={80}
  //             className="object-cover rounded-full"
  //             alt={language.name}
  //           />
  //         </div>
  //       </CircularProgressbarWithChildren>
  //       <p className="mt-2 mb-10 prose dark:prose-invert prose-neutral-50">{language.name} ({progress}%)</p>
  //     </div>
  //   );
  // }
  // else if (isTablet) {
  //   return (
  //     <div ref={ref} className="relative w-[15%] flex flex-col items-center justify-center text-center gap-6 dark:text-white text-black">
  //       <CircularProgressbarWithChildren
  //         value={progress}
  //         className="dark:text-white text-black"
  //         text={`${progress}%`}
  //         styles={buildStyles({
  //           pathTransitionDuration: 0.5,
  //           pathColor: "#ff8a05",
  //           trailColor: "#ff5478",
  //           backgroundColor: '#3e98c7',
  //         })}
  //       >
  //         <div className="my-4">
  //           <Image
  //             src={language.image}
  //             width={90}
  //             height={60}
  //             className="object-cover rounded-full"
  //             alt={language.name}
  //           />
  //         </div>
  //       </CircularProgressbarWithChildren>
  //       <p className="my-12 prose dark:prose-invert prose-neutral-50">{language.name} ({progress}%)</p>
  //     </div>
  //   );
  // }
  //  else {
  //   return (
  //     <div ref={ref} className="relative w-[15%] flex flex-col items-center justify-center text-center gap-6 dark:text-white text-black">
  //       <CircularProgressbarWithChildren
  //         value={progress}
  //         className="dark:text-white text-black"
  //         text={`${progress}%`}
  //         styles={buildStyles({
  //           pathTransitionDuration: 0.5,
  //           pathColor: "#ff8a05",
  //           trailColor: "#ff5478",
  //           backgroundColor: '#3e98c7',
  //         })}
  //       >
  //         <div className="my-4">
  //           <Image
  //             src={language.image}
  //             width={45}
  //             height={25}
  //             className="object-cover rounded-full"
  //             alt={language.name}
  //           />
  //         </div>
  //       </CircularProgressbarWithChildren>
  //     </div>
  //   );
  // }}
  

const Languages = () => {

  return (
    <div id={Section.Languages} className="mx-6 lg:mx-12 my-12 flex flex-col gap-12"> 
      <Heading icon={sectionList[Section.Languages].icon} title={sectionList[Section.Languages].title} />
      <div className="flex  gap-12 lg:gap-16 items-center justify-center flex-row">
        {languages.map((lang, id) => ( 
          <ProgressBar key={id} targetPercentage={lang.percentage} language={lang} duration={2.5} />
        ))}
      </div>
    </div>
  );
};

export default Languages;


// const ProgressBar: React.FC<ProgressBarProps> = ({ targetPercentage, duration,language }) => {
//   const [progress, setProgress] = useState(0);
//   const ref= useRef(null)
//   const isInView = useInView(ref,{once:true})
//   const controls = useAnimation();

//   useEffect(() => {
    
//     const animateProgress = async () => {
//       let start = 0;
//       const interval = (duration * 1000) / targetPercentage;
//       const intervalId = setInterval(() => {
//         if (start < targetPercentage) {
//           start++;
//           setProgress(start);
//         } else {
//           clearInterval(intervalId);
//         }
//       }, interval);
//     };
//     if(isInView){
//       animateProgress();
//     }
    
//   }, [targetPercentage, duration,isInView]); 
  
//   return (
//     <div ref={ref} className="relative h-full w-[10%] direction-column text-center gap-6 items-center justify-center dark:text-white text-black">
//       <CircularProgressbarWithChildren
//         value={progress} className='dark:text-white text-black'
//         text={`${progress}%`}
//         styles={buildStyles({
//           pathTransitionDuration: 0.5,
//           // pathColor: `rgba(62, 152, 199, ${progress / 100})`,
//           pathColor : "#ff8a05", 
//           trailColor : "#ff5478",
          
//         })}
//       >
//         <div className='my-4 text-center'>
//        <Image src={language.image} width={120} height={45}  className='object-fill rounded-full' alt={language.name}   />
//        </div>
       
//       </CircularProgressbarWithChildren>
//       <p className='my-2 prose dark:prose-invert prose-neutral'>{language.name} ({progress}%)</p>
//     </div>
//   );
// };


// const Languages = () => {
//   return (
//     <div id={Section.Languages} className='mx-6 lg:mx-12 my-12 flex flex-col gap-12 '>
//     <Heading icon={sectionList[Section.Languages].icon} title={sectionList[Section.Languages].title}  />
//     <div className='gap-12 flex lg:gap-[4rem] items-center justify-center lg:justify-evenly'>
//     {languages.map((lang,id)=>(
//   <ProgressBar key={id} targetPercentage={lang.percentage} language={lang} duration={2.5} />
//     ))}
//     </div>
   
//     </div>
//   )
// }

// export default Languages




