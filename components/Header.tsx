"use client";

import React, { useEffect, useState } from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion";
import Link from 'next/link';
import { Social } from '@/typings';
 
type Props = {
    socials: Social[]
}

function Header({socials}: Props) {
    
    const [isMounted, setIsMounted]=useState(false);
    useEffect(()=>{
        setIsMounted(true);
    })

    if(!isMounted) return null;
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5'>
        <motion.div
        initial={{
            x:-500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}

        transition={{
            duration:1.5
        }}
        
        className='flex flex-row items-center'>
            {socials.map((social)=>(
                            <SocialIcon key={social._id} url={social.url} fgColor='gray' bgColor='transparent'/>
            ))}            

        </motion.div>

                <div>
                <   Link href={"#banner"} >
                    <img className='hidden cursor-pointer w-10 p-1 hover:gray' src='https://previews.dropbox.com/p/thumb/ACF53mN6JOoKUvT_0knBSEptVTMaWexLSKulQ_KmMNMgNhLT1rVF5rp10BW1rZQAFdf0pZBJ6A7cEL7fCq0aq6mpKxDCAM4tDpHHqP8tY3XPfS2junQgYHgmC7a8V8i6Y72RoSBM0HJ3tS6-sdWpsfBYalAfiaXRcGNozPyXcdniZolt6vN7DX-3Izcyrg36BZqE6QqAvyt4amqx0duZ4IFBe6Lk4My0bnSpCR8gSSGW7KrQHK1qOwD_pir9_x6ojMheqfqjP5FHXNZIneygAd4p6XS77TVJv6bnTj1EIDAR3HvlDKAkuCVit0lIGi01gmM_umqMKWJZPV7Ss7Q6keLx/p.png' />
                    </Link>
                </div>

        <Link href={'#contact'} >
        <motion.div 
         initial={{
            x:500,
            opacity:0,
            scale:0.5
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}

        transition={{
            duration:1.5
        }}
        
        
        className='flex flex-row items-center text-gray-300 cursor-pointer '>
        <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
        <p  className='uppercase hidden md:inline-flex text-sm text-gray-400'  > Contact me</p>
        </motion.div>
        </Link>
    </header>
  )
}

export default Header