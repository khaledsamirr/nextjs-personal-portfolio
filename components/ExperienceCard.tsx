"use client"
import { urlFor } from '@/sanity'
import { Experience } from '@/typings'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  experience:Experience
}

function ExperienceCard({experience}: Props) {
  return <article key={experience._id} className='flex items-center flex-col rounded-lg space-y-2 flex-shrink-0 w-[300px] lg:w-[600px] md:w-[400px] snap-center bg-[#101010] p-7 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img 
    initial={{y:-50, opacity:0}}
    transition={{duration:1.2}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    className='w-16 h-16 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center'
    src={urlFor(experience?.companyImage).url()} alt="" />
    
    <div className='px-0 md:px-2'>
        <h4 className='text-lg font-light'>{experience?.jobTitle}</h4>
        <p className='font-bold  mt-1'>{experience?.company}</p>
        <div className='flex items-center flex-row flex-wrap mt-2'>
          {experience?.technologies.map((tech)=>((
                        <img key={tech?._id} className='h-8 w-8 p-0.5 rounded-full'
                        src={urlFor(tech?.image).url()} alt=''/>
          )))}

        </div>
        <p className='text-sm text-gray-300 py-2'>Started work: {experience?.dataStarted} <br/>Ended: {experience?.isCurrentlyWorkingHere?"Currently working here":experience?.dateEnded} </p>

        <ul className='list-disc space-y-2 ml-3 text-xs text-gray-400'>
        {experience?.points.map((point)=>((
          <div key={point} className='flex flex-wrap flex-col'><li key={point}>{point}</li></div>
                
          )))}
        </ul>
    </div>
  </article>
}

export default ExperienceCard