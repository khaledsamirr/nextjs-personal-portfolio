import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  
  const [isMounted, setIsMounted]=useState(false);
  useEffect(()=>{
      setIsMounted(true);
  })

  if(!isMounted) return null;
  return (
    <motion.div 
        initial={{
          opacity:0  
        }}
        animate={{
            scale:[1,2,2,3,1],
            opacity:[0.1,0.2,0.4,0.8,0.1,1.0],
            borderRadius:["20%","20%","50%","80%","20%"]
        }}
        transition={{
            duration:2.5
        }}
        className='relative flex justify-center items-center'>
        <div className=' absolute border  rounded-full w-[150px] h-[150px] mt-52 animate-ping'/>
        <div className='rounded-full border h-[250px] w-[250px] animate-ping mt-52 absolute' />
        <div className='rounded-full border  h-[400px] w-[400px] animate-ping mt-52 absolute' />
        <div className=' rounded-full border border-purple-600 opacity-20 animate-pulse h-[500px] w-[500px] absolute mt-52'/>
        <div className='absolute border  rounded-full w-[650px] h-[650px] mt-52 animate-ping' />
    </motion.div>
  )
}

export default BackgroundCircles