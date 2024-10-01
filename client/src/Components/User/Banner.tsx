

import React, { useState } from 'react';
import girl from '../../assets/images/yogic.png';
import logo from '../../assets/images/IMG_2842.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import {Button} from "@nextui-org/react";
import {motion} from 'framer-motion'





function Banner() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

   // Animation variants for the button
   const buttonVariants = {
    initial: {
      y: 0,
      opacity: 1,
    },
    hover: {
      y: -10,  // Move the button upwards slightly on hover
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      y: -300,  // Move the button upwards more when navigating away
      opacity: 0.7,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Animation variants for the page
  const pageVariants = {
    hidden: { opacity: 0, y: "-100vh" },  // Start from above the screen
    visible: { opacity: 1, y: "0vh" },  // Move down to the original position
    exit: { opacity: 0, y: "100vh" ,  transition: { delay: 0.2 }},  // Move down out of the screen
  };

  return (
    <>
      {/* Banner section with Navbar inside */}
      <motion.div 
      className='xl:h-[110vh] md:h-[90vh] h-[60vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex flex-col items-center justify-start relative'
      
      initial="hidden"
      animate="visible"
      exit={{}}
      variants={pageVariants}
      transition={{ duration: 0.8 }}
      >
        {/* Navbar */}
        <nav className="w-full absolute top-0 left-0 bg-transparent px-2 z-10">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <div 
            onClick={() => navigate(`/`)}
            className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="aspect-square cursor-pointer" />
            </div>
            <button
                    className="block md:hidden mr-10 p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            <div className={`w-full md:flex md:w-auto ${isMenuOpen ? 'block bg-white md:bg-transparent' : 'hidden'}`} id="navbar-default">
              <ul className="text-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-16  md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link to="/" className="uppercase block py-2 px-3 border-b-2 border-black hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">About us</Link>
                </li>
                <li>
                  <Link to="/yoga" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Yoga</Link>
                </li>
                <li>
                  <Link to="/meditation" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Meditation</Link>
                </li>
                <li>
                  <Link to="/courses" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Courses</Link>
                </li>
                <li>
                  <Link to="/gallery" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Gallery</Link>
                </li>
                <li>
                  <Link to="/blogs" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Blog</Link>
                </li>
                <li>
                  <Link to="/contact" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Banner content */}
        <div className='flex flex-col items-center justify-center h-full md:pt-0 mt-20'>
          <img src={girl} alt="banner image" className=' w-[80%] mx-auto object-contain pb-0' />
          <motion.div
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            exit="exit"
          >
          <Button 
          size='lg'
          onClick={() => navigate(`/about`)}
          className='bg-[#64BA75] inline-flex items-center px-8 py-4 rounded-[50px] text-white font-Epilogue text-sm'>
            Learn More <FaArrowRight className="" />
          </Button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default Banner;


