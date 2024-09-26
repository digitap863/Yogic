import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/IMG_2842.png'


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <>
      <nav className="bg-gradient-to-r from-white via-emerald-100 to-emerald-100 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 ">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src={logo} alt="Logo" className="h-134 w-150" />
            </div>
          </div>
          <button
            className="block md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:flex md:w-auto ${isMenuOpen ? 'block bg-white md:bg-transparent' : 'hidden'}`} id="navbar-default">
            <ul className="text-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm" aria-current="page">Home</Link>
              </li>
              <li>
                <Link to="/about" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">About us</Link>
              </li>
              <li>
                <Link to="/yoga" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Yoga</Link>
              </li>
              
              <li>
                <Link to="/meditation"  className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Meditation</Link>
              </li>
             
              <li>
                <Link to="/courses" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Courses</Link>
              </li>

              <li>
                <Link to="/gallery" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Gallery</Link>
              </li>

              <li>
                <Link to="/blogs"  className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">blog</Link>
              </li>

              <li>
                <Link to="/contact" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Contact us</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;

