"use client"
import { urlFor } from '@/sanity'
import { Experience } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  experience:Experience
}

function ExperienceCard({experience}: Props) {
  return <article key={experience._id} className='flex items-center flex-col rounded-lg space-y-4 flex-shrink-0  h-screen[-400px]  w-[400px] lg:w-[600px] md:w-[400px] snap-center bg-[#101010] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img 
    initial={{y:-100, opacity:0}}
    transition={{duration:1.2}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='w-24 h-24 rounded-full xl:w-[120px] xl:h-[120px] object-cover object-center'
    src={urlFor(experience?.companyImage).url()} alt="" />
    
    <div className='px-0 md:px-10'>
        <h4 className='text-3xl font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold text-xl mt-1'>{experience?.company}</p>
        <div className='flex items-center flex-wrap space-x-3 my-2'>
          {experience?.technologies.map((tech)=>((
                        <img key={tech?._id} className='h-8 w-8 p-0.5 rounded-full'
                        src={urlFor(tech?.image).url()} alt=''/>
          )))}

        </div>
        <p className='text-sm text-gray-300 py-5'>Started work: {experience?.dataStarted} <br/>Ended: {experience?.isCurrentlyWorkingHere?"Currently working here":experience?.dateEnded} </p>

        <ul className='list-disc spac-y-4 ml-5 text-xs text-gray-400'>
        {experience?.points.map((point)=>((
          <div key={point} className='flex flex-wrap flex-col'><li key={point}>{point}</li></div>
                
          )))}
        </ul>
    </div>
  </article>
}

export default ExperienceCard