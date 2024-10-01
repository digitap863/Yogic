

import React, { useState } from 'react';
import girl from '../../assets/images/yogic.png';
import logo from '../../assets/images/IMG_2842.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import {Button} from "@nextui-org/react";
import Navbar from './Navbar';






function Banner() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>
      {/* Banner section with Navbar inside */}
      <div 
      className='xl:h-[125vh] md:h-[90vh] h-[60vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex flex-col items-center justify-start relative'
      >
        {/* Navbar */}
        <Navbar/>
        {/* Banner content */}
        <div className='flex flex-col items-center justify-center h-full md:pt-0 mt-20'>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <img src={girl} alt="banner image" className=' w-[80%] mx-auto object-contain pb-0' />
          </div>
          <div>
          <Button 
          size='lg'
          onClick={() => navigate(`/about`)}
          className='bg-[#64BA75] inline-flex items-center px-8 py-4 rounded-[50px] text-white font-Epilogue text-sm hover:scale-105 duration-200'>
            Learn More <FaArrowRight className="" />
          </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;


