import React from 'react'
import logo from '../Assets/logo2.png'
import {CiFacebook,CiTwitter,CiInstagram,CiLinkedin} from "react-icons/ci"

const Footer = () => {
  return (
    <div className='max-w-[1640px] p-4 bg-[#16162E] text-[#F7F7F7] flex gap-4 justify-between'>
    <div className='flex flex-col'>
     <img src={logo} className='h-[80px] w-auto' alt='logo'/>
     <div className='lg:flex gap-2 md:text-[20px]'>
        <CiFacebook/>
        <CiTwitter/>
        <CiInstagram/>
        <CiLinkedin/>
     </div>
    </div>
    <div className='flex flex-col'>
    <p className='text-[18px] font-semibold'>About</p>
    <p className='text-gray-500'>How it Work</p>
    <p className='text-gray-500'>Our Packages</p>
    <p className='text-gray-500'>Promotions</p>
    <p className='text-gray-500'>Refer A Friend</p>
    </div>
    <div className='flex flex-col'>
    <p className='text-[18px] font-semibold'>Delivery</p>
    <p className='text-gray-500'>Cast of Delivery</p>
    <p className='text-gray-500'>Payment Method</p>
    <p className='text-gray-500'>Delivery Areas</p>
    <p className='text-gray-500'>Returns</p>
    </div>
    <div className='flex flex-col'>
    <p className='text-[18px] font-semibold'>Contact</p>
    <p className='text-gray-500'>+254791686851</p>
    <p className='text-gray-500'>Nairobi,Kenya</p>
    <p className='text-gray-500'>perezcollins87@gmail.com</p>
    <p className='text-gray-500'>&#169; All right and reserves</p>
    </div>
    </div>
  )
}

export default Footer