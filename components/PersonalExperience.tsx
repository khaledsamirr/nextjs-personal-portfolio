"use client"
import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typings'

type Props = {
  experiences: Experience[]
}

function PersonalExperience({experiences}: Props) {
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        className=' h-screen flex relative overflow-hidden scrollbar-hide flex-col text-left md:flex-row max-w-full px-10 justify-center mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500'>
            Experience</h3>

        <div className='flex mt-20 w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-600/20 scrollbar-thumb-purple-800/30'>
            {experiences?.map((experience)=>(
              <ExperienceCard key={experience._id} experience={experience}/>
            ))}
        </div>
        


    </motion.div>
  )
}

export default PersonalExperience