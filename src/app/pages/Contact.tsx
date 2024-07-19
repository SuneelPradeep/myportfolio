'use client';
import React, { ReactEventHandler, useState } from 'react'
import { Section } from '../types/Sections'
import { useFormspark } from '@formspark/use-formspark'
import Image from 'next/image';
import { MdOutlineMail } from 'react-icons/md';
import { FiPhone } from 'react-icons/fi';
import { GrLocation } from 'react-icons/gr';
import {motion} from 'framer-motion'
type FormData = {
  name : string,
  email : string,
  message : string
}
const Contact = () => {

const [data,setData] = useState<FormData>({
    name : '', email :'', message :""
})

 const [submit,submitting] = useFormspark({formId : 'tsYoM4nAT' })
 console.log('data is ',data,submit)
 const handleData = (e : any)=>{
    const name = e.target.name;
    const value = e.target.value;
    setData({...data, [name]: value})
  }
  const handleSubmit = async( e: any)=>{
    e.preventDefault();
    if(data.name !=='' || data.email !=='' || data.message !=='') await submit(data)

}
  return (
    <div id={Section.Contact} className='bg-gray-300 lg:my-8 lg:mx-12 flex flex-col lg:flex-row gap-12 min-h-screen place-content-center dark:text-white '>
  <form onSubmit={handleSubmit} className=' dark:text-white overflow-hidden text-black flex flex-col px-4 justify-center gap-6 w-full lg:w-3/5 '>
    <h1 className='text-3xl lg:text-6xl text-center  bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] inline-block text-transparent bg-clip-text mt-4 mb-2 '>Let's Get In Touch</h1>
    <motion.input
      required  whileFocus={{ scale: 1.05 }} transition={{ duration: 0.3 }}
      className='py-2 px-4 mx-2 rounded-xl outline-none dark:bg-black focus:bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] transition-colors '
      placeholder='Enter name' 
      name='name'
      value={data.name}
      onChange={handleData}
    />
    
    <motion.input
      required whileFocus={{ scale: 1.05 }} transition={{ duration: 0.3 }}
      className='py-2 px-4 mx-2 rounded-xl outline-none dark:bg-black focus:bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] transition-colors '
      placeholder='Enter email'
      name='email'
      value={data.email}
      onChange={handleData}
    />
    <motion.textarea
      required whileFocus={{ scale: 1.05 }} transition={{ duration: 0.3 }}
      className='py-2 px-4 mx-2 rounded-xl outline-none dark:bg-black focus:bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] transition-colors '
      placeholder='Write your message here'
      name='message'
      value={data.message}
      onChange={handleData}
    />
    <button
      type='submit'
      disabled={submitting}
      className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl"
    >
      <span className="w-1/2  items-center h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6]
       group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute rounded-xl" />
      <span className="relative px-7 py-3 transition-all ease-out dark:bg-gray-900 w-1/2 bg-white dark:text-white text-black rounded-xl group-hover:bg-opacity-0">
         <span className="relative">Get in Touch</span> 
        
      </span>
    </button>
    <div className='flex flex-col  gap-6 flex-wrap overflow-hidden'>
  <h1 className='prose text-3xl  dark:prose-invert font-bold bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] text-transparent bg-clip-text'>Contact Info</h1>
  <div className='flex flex-col justify-between gap-4 md:flex-row md:gap-6'>
    <div className='flex gap-4 items-center'>
    <span className='rounded-full border-2  p-3 dark:text-black text-white bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:rotate-45 hover:scale-110 '>
      <MdOutlineMail /> 
      </span>
      <span className='flex flex-col'>
        <p className='font-bold text-md dark:text-black text-white'>EMAIL</p>
        <p className='text-sm text-gray-400'>ernestsolomoninzion@gmail.com</p>
      </span>
    </div>
    <div className='flex gap-4 items-center'>
      <span className='rounded-full border-2  p-3 dark:text-black text-white bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:-rotate-45 hover:scale-95  '>
      <FiPhone  />
      </span>
      <span className='flex flex-col'>
        <p className='font-bold text-lg dark:text-black text-white'>CONTACT NUMBER</p>
        <p className='text-md text-gray-400'>+918595334669</p>
      </span>
    </div>
    <div className='flex gap-4 items-center'>
    <span className='rounded-full border-2  p-3 dark:text-black text-white bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] hover:skew-y-6 hover:skew-x-12 '>
    <GrLocation />
      </span>
      <span className='flex flex-col'>
        <p className='font-bold text-md dark:text-black text-white'>LOCATION</p>
        <p className='text-sm text-gray-400'>Vizag, India</p>
      </span>
    </div>
  </div>
</div>

  
  </form>
  <div className="w-full lg:w-2/5 relative h-[20rem] lg:h-auto text-black dark:text-white">
    <Image 
      src='/hyd.jpg' 
      alt='me'
      layout="fill"
      objectFit="cover"
    />
  </div>
</div>

    
    )
}

export default Contact

{/* <div id={Section.Contact} className='bg-gray-300  my-[4rem] lg:mx-[6rem] md:mx-[6rem] flex gap-12 min-h-screen place-content-center '>
    
    <form onSubmit={handleSubmit} className='dark:text-white text-black flex flex-col px-4 justify-center gap-6 w-full'>
       <h1 className='text-6xl text-center'>Let's Get In Touch</h1>
      <input required className='py-2 px-4 rounded-xl outline-none dark:bg-black ' placeholder='enter name' name='name' value={data.name} onChange={handleData} />
      <input  required className='py-2 px-4 rounded-xl outline-none dark:bg-black 'placeholder='enter email' name='email' value={data.email} onChange={handleData} />
       <textarea  required className='py-2 px-4 rounded-xl outline-none dark:bg-black ' placeholder='write your message here' name='message' value={data.message} onChange={handleData} />
       
       <button type='submit' disabled={submitting} className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-xl">
                <span className="w-[18%] rounded-xl h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute" />
                <span className="relative px-6 py-3 transition-all ease-out dark:bg-gray-900 text-black bg-white dark:text-white rounded-xl group-hover:bg-opacity-0 ">
                  <span className="relative "> Get in Touch </span>
                </span>
              </button>
           
      </form> 

      <div className="w-[50%] relative text-black dark:text-white ">
                <Image 
                  src='/hyd.jpg' 
                  alt='me'
                  layout="fill"
                  objectFit="fill" 
                  
                />
              </div>
     
           
    </div> */}