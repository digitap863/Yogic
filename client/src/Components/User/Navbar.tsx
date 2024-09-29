import React, { useState } from 'react';
import { Link, useNavigate,useLocation } from 'react-router-dom';
import logo from '../../assets/images/IMG_2842.png'


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate =  useNavigate()
  const location = useLocation(); 


  const isActive = (path: string) => {
      console.log(location.pathname,"location.pathnamelocation.pathnamelocation.pathname")
      console.log(path,"pathpathpathpathpathpathpathpathpathpath")
      console.log(location.pathname === path)
    return location.pathname === path};
  console.log(isActive,"isActiveisActiveisActiveisActiveisActiveisActiveisActive")


  return (
    <>
      <nav className="bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto  ">
          <div 
           onClick={() => navigate(`/`)}
          className="flex items-center space-x-3 ">
              <img src={logo} alt="Logo" className="aspect-square" />
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
            <ul className="text-center font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-16  md:mt-0 dark:bg-gray-800  dark:border-gray-700">
              <li>
                <Link to="/" className={`uppercase block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-900 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm  
                  ${isActive('/') ? 'border-b-2 border-black' : 'text-gray-500'}`} >Home</Link>
              </li>
              <li>
                <Link to="/about" className={`uppercase block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-900 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm  
                  ${isActive('/about') ? 'border-b-2 border-black ' : 'text-gray-500'}`} >About us</Link>
              </li>
              <li>
                <Link to="/yoga" className={`uppercase block py-2 px-8   hover:bg-gray-100 md:hover:bg-transparent   md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm  
                  ${isActive('/yoga') ? 'border-b-2 border-black ' : 'text-gray-500'}`} >Yoga</Link>
              </li>
              
              <li>
                <Link to="/meditation"  className={`uppercase block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-gray-900 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm  
                  ${isActive('/meditation') ? 'border-b-2 border-black' : 'text-gray-500'}`} >Meditation</Link>
              </li>
             
              <li>
                <Link to="/courses" className={`uppercase block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-gray-900 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm  
                  ${isActive('/courses') ? 'border-b-2 border-black' : 'text-gray-500'}`} >Courses</Link>
              </li>

              <li>
                <Link to="/gallery" className={`uppercase block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-gray-900 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm  
                  ${isActive('/gallery') ? 'border-b-2 border-black' : 'text-gray-500'}`} >Gallery</Link>
              </li>

              <li>
                <Link to="/blogs"  className={`uppercase block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-gray-900 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm  
                  ${isActive('/blogs') ? 'border-b-2 border-black' : 'text-gray-500'}`} >blog</Link>
              </li>

              <li>
                <Link to="/contact" className={`uppercase block py-2 px-4 hover:bg-gray-100 md:hover:bg-transparent  md:hover:text-gray-900 md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm  
                  ${isActive('/contact') ? 'border-b-2 border-black' : 'text-gray-500'}`} >Contact us</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
     
    </>
  );
};

export default Navbar;

