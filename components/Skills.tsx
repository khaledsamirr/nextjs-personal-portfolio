"use client"
import { motion } from 'framer-motion'
import React from 'react'
import PersonalSkill from './PersonalSkill'
import { Skill } from '@/typings'


type Props = {
  skills:Skill[]
}

function Skills({skills}: Props) {
  return (
    <motion.div className='h-screen flex relative flex-col text-center md:text-left xl-flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 '>Skills</h3>
        <h3 className='absolute top-28 uppercase text-gray-500 tracking-[5px] text-xs '>Hover over a skill for current proficiency</h3>
        <div className="grid grid-cols-4 gap-5"> 
            {skills?.map((skill)=>(
              <PersonalSkill key={skill._id} skill={skill}/>
            )
              
            )}

        </div>
        
    </motion.div>
  )
}

export default Skills