"use client"
import { urlFor } from '@/sanity'
import { PageInfo } from '@/typings'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

type Props = {
    pageInfo:PageInfo |undefined
}


function About({pageInfo}: Props) {
    
    const [isMounted, setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    })

    if(!isMounted) return null;

    return (
   
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className='flex flex-col relative text-center md:text-left md:flex-row h-screen justify-evenly mx-auto items-center px-10 max-w-7xl'>
         <h3 className='absolute top-20 uppercase tracking-[20px]   text-gray-500'>About</h3>
        <motion.img
            className='-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-72 xl:h-[400px] xl:w-[500px]'
            initial={{
                x:-200
            }}
            transition={{
                duration:1.2
            }}
            whileInView={{opacity:1,x:0}}
            viewport={{once:true}}
            src={urlFor(pageInfo?.profilePic).url()}
        
        />
        <div className='space-y-10 -mb-20 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'> Here is a <span className='underline decoration-purple-800 '>little</span> background </h4>
            <p className='text-sm'>{pageInfo?.backgroundInfo}</p>
        </div>
            
        
    </motion.div>
    
  )
}

export default About