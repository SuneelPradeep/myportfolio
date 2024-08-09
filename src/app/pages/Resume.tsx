import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BiLinkExternal } from "react-icons/bi";
import {links } from '../data/links'
import CustomButton from '../components/CustomButton'
import {Section } from '../types/Sections'
import sectionList from '../data/section'
import Heading from '../components/Heading'

const Resume = () => {
  const resumeUrl = '/work/My resume.pdf'; 
  const externalLink = links.resume; 

 return (
        <div id={Section.Resume} className="mx-6 lg:mx-16 my-6 lg:my-16">
          <Heading icon={sectionList[Section.Resume].icon} title={sectionList[Section.Resume].title} />
          <div className="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-8 relative">
            <div className="relative w-full h-full flex items-center justify-center">
              <Link
                href={externalLink}
                passHref
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-full flex items-center justify-center"
              >
                
                <span style={{ height:400}} className="w-full h-full relative rounded shadow-lg overflow-hidden hover:opacity-60 ">
          <Image
            src="/work/resume.png"
            alt='resume'
            fill
          />
          <span className="absolute inset-0 text-black  opacity-0 flex items-center justify-center transition hover:opacity-100 ">
        <BiLinkExternal fontSize={64} />
      </span>
        </span>
              </Link>
            </div>
            <div className="my-8 mx-8 flex flex-col items-center justify-center">
              <h1 className="prose dark:prose-invert prose-neutral-50 text-xl lg:text-3xl mb-8 text-center">
                For a concise and detailed overview of my professional experience and skills, please download my resume in PDF
              </h1>
              <Link href={resumeUrl} download className="px-16 py-4 items-center justify-center">
                <CustomButton text="Download Resume" type="button" disabled={false} />
              </Link>
            </div>
          </div>
        </div>
      )
    }
    
export default Resume;


{/* <div id={Section.Resume}  className=" mx-6 lg:mx-16 my-6 lg :my-16 "> 
       <Heading icon={sectionList[Section.Resume].icon} title={sectionList[Section.Resume].title}  />
       <div className='mt-8 flex lg:flex-row flex-col relative'>
      <div className="relative w-1/2 h-full md:h-full flex items-center justify-center place-content-center place-items-center ">
        <Link href={externalLink} passHref target="_blank"
            rel="noopener noreferrer"
            className="relative w-full h-full flex items-center justify-center">

          <span style={{ height:400}} className="w-full h-full relative rounded shadow-lg overflow-hidden hover:opacity-60 ">
          <Image
            src="/work/resume.png"
            alt='resume'
            fill
          />
          <span className="absolute inset-0 text-black  opacity-0 flex items-center justify-center transition hover:opacity-100 ">
        <BiLinkExternal fontSize={64} />
      </span>
        </span>
       </Link>
      </div>
      <div className="my-8 mx-8 w-1/2 items-center justify-center ">
        <h1 className='prose dark:prose-invert prose-neutral-50 text-xl lg:text-3xl mb-8 '>For a concise and detailed overview of my professional experience and skills, please download my resume in PDF </h1>
        <Link href={resumeUrl} download className="px-16 py-4 items-center justify-center" >
          <CustomButton text='download resume' type='button' disabled={false} />
        </Link>
      </div>
    </div>
    </div> */}