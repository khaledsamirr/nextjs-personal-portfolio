"use client"

import React, { useEffect, useState } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'


type Props = {
    pageInfo:PageInfo
}

function Banner({pageInfo}: Props) {


    
    const[text,count]=useTypewriter({
        words:[`Hey, I'm ${pageInfo?.name}`,"I'm a Junior Software Engineer", "<Just a programmer who enjoys coding/>"],
        loop:true,
        delaySpeed:2000

    })
  return (
    <div className='flex flex-col space-y-8 items-center h-screen justify-center text-center overflow-hidden'>
    
        <BackgroundCircles/>
        <img 
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src={urlFor(pageInfo?.kImage).url()}
         alt="" />
        <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>{pageInfo?.role}</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3 '>{text}</span>
                    <Cursor cursorColor='purple'/>
                </h1>

            <div className='pt-5'>
                <Link href="#about">
                    <button className='bannerButton'>About</button>
                </Link>
                <Link href="#experience">
                    <button className='bannerButton'>Experience</button>
                </Link>
                <Link href="#skills">
                <button className='bannerButton'>Skills</button>
                </Link>
                <Link href="#projects">
                <button className='bannerButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Banner