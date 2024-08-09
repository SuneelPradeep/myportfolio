import { motion,useAnimation } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'

const photos : string[] = [
    "/purple.jpg",
    "/gray2.jpg",
    "/black2.jpg",
    "/beach.jpg"
]
type Props = {
    size ?: number,
    delay ?: number
}


const PhotoWall : React.FC<Props> = ({size = 512,delay=0.8}) => {

    const controls= useAnimation()
    useEffect(()=>{
    async function sequence() {
        for(let i in photos){
     await controls.start((i)=> ({
        opacity : 1,
        transition :{duration: 1.0, delay: i* delay,ease:'easeInOut'}
     }))
        }
        
        
    }
    sequence()
    },[controls,delay])

  return (
    <div className='flex gap-1' style={{width :size,height:size}}>
    {photos.map((photo,index)=>(
        <motion.div key={index} initial={{opacity :0,y:20}} custom={index} animate={controls}
        className={`relative transition-[width]`}
         style={{animationDelay : `${index *0.5 +0.5}s`,width :`${size/4}px`,height:`${size}px`}} 
         onMouseEnter={(e)=> e.currentTarget.style.width = `${size/2}px`} 
         onMouseLeave={(e)=> e.currentTarget.style.width = `${size/4}px`} >
             <Image fill priority src={photo} alt='SuneelPradeep'
             sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw,33vw'   className={`object-cover ${index === 0 ? "rounded-l" : ""}${index === photos.length - 1 ? "rounded-r" : ""}`}          
               />
          
           
        </motion.div>
    ))}
        </div>
  )
}

export default PhotoWall