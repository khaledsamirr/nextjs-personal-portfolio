"use client"

import React, { useEffect, useState } from 'react'
import { PhoneIcon, MapPinIcon, } from '@heroicons/react/20/solid'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { useForm, SubmitHandler } from 'react-hook-form'

type Inputs={
    name:string;
    email: string;
    subject: string;
    message :string;
}

type Props = {}

function ContactMe({}: Props) {
    


    const {register, handleSubmit}= useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs>=(formData)=> {
        window.location.href=`mailto:khaledsamir2212@gmail.com?subject=${formData.subject}&body= Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`;
    }
  return (
    <div className='h-screen relative flex flex-col teext-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500'> Contact</h3>
        
        <div className='flex flex-col space-y-5'>
            <h4 className=' text-xl font-semibold text-center'>
                Get in touch for further information <span className='decoration-purple-800/60 underline'>Contact me</span>
            </h4>
            <div className='space-y-3'>
                <div className='flex justify-center items-center space-x-5'>
                    <PhoneIcon className='text-purple-600 h-5 w-5 animate-pulse'/>
                    <p className=''>+201150162250</p>
                </div>
                <div className='flex justify-center items-center space-x-5'>
                    <EnvelopeIcon className='text-purple-600 h-5 w-5 animate-pulse'/>
                    <p className=''>khaledsamir2212@gmail.com</p>
                </div>
                <div className='flex justify-center items-center space-x-5'>
                    <MapPinIcon className='text-purple-600 h-5 w-5 animate-pulse'/>
                    <p className=''>Giza,Egypt</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
                <div className='flex space-x-3'>
                    <input {...register('name')} placeholder='Name' className='contactInput' type='text'/>
                    <input {...register('email')} placeholder='Email' className='contactInput' type='text'/>
                </div>
                <input {...register('subject')}className="contactInput" placeholder='Subject' type="text" />
                <textarea {...register('message')}placeholder="Message" className='contactInput'/>
                <button type="submit" className='bg-purple-800 py-5 px-10 rounded-md text-white font-semibold uppercase tracking-[10px] '>Submit</button>

            </form>
        </div>
    </div>
  )
}

export default ContactMe