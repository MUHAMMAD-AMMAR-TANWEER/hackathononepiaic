import Image from 'next/image'
import React from 'react'
import logo from "/public/Logo.webp";
import { AiOutlineTwitter } from  "react-icons/ai"
import { BiLogoLinkedin } from  "react-icons/bi"
import { BiLogoFacebook } from  "react-icons/bi"

const Footer = () => {
  return (
    <div className='max-w-screen-lg mx-auto grid grid-cols-4 px-6 mt-16 mb-20 tablet:grid-cols-1 gap-y-8'>
        <div className='flex flex-col pl-6 justify-center gap-y-4 mr-4 tablet:pl-3'>
            <Image src={logo} alt='logo' className='w-[9rem] mb-2'/>
            <p className='text-gray-700 tablet:text-sm'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
            <div className='flex gap-x-3'>
                <button className='bg-gray-300 flex items-center justify-center w-8 h-8 rounded-full'><AiOutlineTwitter /></button>
                <button className='bg-gray-300 flex items-center justify-center w-8 h-8 rounded-full'><BiLogoFacebook /></button>
                <button className='bg-gray-300 flex items-center justify-center w-8 h-8 rounded-full'><BiLogoLinkedin /></button>
            </div>
        </div>
        <div className='flex flex-col gap-y-2 ml-8 pl-6 tablet:pl-3 tablet:ml-0.5'>
            <h1 className='text-gray-600 text-xl font-semibold'>Company</h1>
            <h2 className='text-gray-700 '>About</h2>
            <h2 className='text-gray-700 '>Terms of Use</h2>
            <h2 className='text-gray-700 '>Privacy Policy</h2>
            <h2 className='text-gray-700 '>How it Works</h2>
            <h2 className='text-gray-700 '>Contact Us</h2>
        </div>
        <div className='flex flex-col gap-y-2 ml-8 pl-6 tablet:pl-3 tablet:ml-0.5'>
            <h1 className='text-gray-600 text-xl font-semibold'>Support</h1>
            <h2 className='text-gray-700 '>Support career</h2>
            <h2 className='text-gray-700 '>24h Service</h2>
            <h2 className='text-gray-700 '>Quick Chat</h2>
        </div>
        <div className='flex flex-col gap-y-2 ml-8 pl-6 tablet:pl-3 tablet:ml-0.5'>
            <h1 className='text-gray-600 text-xl font-semibold'>Contact</h1>
            <h2 className='text-gray-700 '>Whatsapp</h2>
            <h2 className='text-gray-700 '>24h</h2>
        </div>
        
    </div>
  )
}

export default Footer