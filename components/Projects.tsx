"use client"
import { urlFor } from '@/sanity'
import { Project } from '@/typings'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {
    projects: Project[]
}

function Projects({projects}: Props) {
    
    const [isMounted, setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    })


    if(!isMounted) return null;

  return (
    <div 
    className='h-screen relative flex overflow-hidden flex-fol text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500'>Projects</h3>

        <div className='relative w-full mt-10 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandtory z-20 scrollbar scrollbar-track-gray-600/20 scrollbar-thumb-purple-800/30'>
            {projects?.map((project,i)=>(
                <div key={project?._id} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-22 h-screen'>
                    
                    <Link href={project?.linkToBuild}>
                    <motion.img 
                        initial={{
                            y:-100, opacity:0
                                }}
                    transition={{duration:1.2}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:true}}
                    
                    className='h-[w-screen-400px] xl:h-[350px] md:h-[350px] ' src={urlFor(project?.image).url()} alt="" />
                      </Link>
                    
                    <div className='flex flex-row flex-wrap px-3'>
                        {project?.technologies?.map((tech)=>(
                              <img key={tech?._id} className='h-8 w-8 p-0.5 rounded-full'
                              src={urlFor(tech?.image).url()} alt=''/>
                        ))}
                    </div>
                  
                    <div className='max-w-[800px]' >
                        <h4 className='text-3xl font-semibold pb-2 text-center'>
                            <span className='underline decoration-purple-800/60'>Project {i+1} of {projects.length}</span>: {project?.title}</h4>
                    
                    <p className='text-xs text-gray-300 text-center  mt-1'>
                        {project?.summary}                    </p>
                    </div>
                </div>
            ))}
            
        </div>
      
    </div>
  )
}

export default Projects