

import React, { useState } from 'react';
import girl from '../../assets/images/yogic.png';
import logo from '../../assets/images/IMG_2842.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";


function Banner() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Banner section with Navbar inside */}
      <div className='xl:h-[120vh] md:h-[90vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex flex-col items-center justify-start relative'>
        {/* Navbar */}
        <nav className="w-full absolute top-0 left-0 bg-transparent px-2 z-10">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="aspect-square" />
            </div>
            <button
              className="block md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div className={`w-full md:flex md:w-auto ${isMenuOpen ? 'block bg-white md:bg-transparent' : 'hidden'}`} id="navbar-default">
              <ul className="text-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-16  md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link to="/" className="uppercase block text-gray-500 hover:text-black font-chalet text-sm">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="uppercase block text-gray-500 hover:text-black font-chalet text-sm">About us</Link>
                </li>
                <li>
                  <Link to="/yoga" className="uppercase block text-gray-500 hover:text-black font-chalet text-sm">Yoga</Link>
                </li>
                <li>
                  <Link to="/meditation" className="uppercase block text-gray-500 hover:text-black font-chalet text-sm">Meditation</Link>
                </li>
                <li>
                  <Link to="/courses" className="uppercase block text-gray-500 hover:text-black font-chalet text-sm">Courses</Link>
                </li>
                <li>
                  <Link to="/gallery" className="uppercase block text-gray-500 hover:text-black font-chalet text-sm">Gallery</Link>
                </li>
                <li>
                  <Link to="/blogs" className="uppercase block text-gray-500 hover:text-black font-chalet text-sm">Blog</Link>
                </li>
                <li>
                  <Link to="/contact" className="uppercase block text-gray-500 hover:text-black font-chalet text-sm">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Banner content */}
        <div className='flex flex-col items-center justify-center h-full'>
          <img src={girl} alt="banner image" className=' h-87 w-10/12 mx-auto object-contain pb-0' />
          <button className='bg-[#64BA75] inline-flex items-center px-6 py-4 rounded-[50px] text-white font-Epilogue'>
            Learn more <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Banner;


