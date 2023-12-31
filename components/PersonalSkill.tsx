"use client"
import { urlFor } from '@/sanity';
import { Skill } from '@/typings';
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  directionLeft?:boolean;
  skill:Skill
}

function PersonalSkill({directionLeft,skill}: Props) {
  return (
    <div key={skill?._id}className='group relative flex cursor-pointer'>
        <motion.img
          initial={{
            x:directionLeft?-50:50,
            opacity:0
          }}
          transition={{duration:1}}
          whileInView={{opacity:1,x:0}}
          viewport={{once:true}}
          src={urlFor(skill?.image).url()}
          className='rounded-full border border-gray-500 object-cover  w-12 h-12 md:w-16 md:h-16 xl:w-16 xl:h-16 filter  group-hover:grayscale transition duration-300 ease-in-out'
        
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-purple-900 w-16 h-16 xl:w-16 xl:h-16 rounded-full '>
          <div className='h-full flex items-center justify-center '>
            <p className='text-lg font-semibold text-white  opacity-100 '>{skill?.progress}%</p>
          </div>
        </div>
        
    </div>
    
  )
}

export default PersonalSkill