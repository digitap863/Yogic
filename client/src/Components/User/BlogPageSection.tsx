import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Rectangle from '../../assets/images/Rectangle 8.png'; // Ensure this path is correct
import { FaArrowRight } from 'react-icons/fa';
import logo from '../../assets/images/IMG_2842.png'
import Contact from './Contact';
import { getdata } from '../../api/req';
import { url } from '../../api/url';




function BlogPageSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        const response = await getdata(`/blog/${id}`);  
        setBlog(response.data.data);  
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };
    
    fetchBlogDetails();  // Call the function to fetch blog details
  }, [id]);
  console.log(blog,"--------------------------------------responseresponseresponse")
  const getContentSections = () => {
    return Object.keys(blog)
      .filter((key) => key.startsWith('content'))
      .map((contentKey, index) => {
        const content = blog[contentKey];
        return (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center mb-12 space-y-6 md:space-y-0 md:space-x-12`}
          >
            {/* Image */}
            <div className="md:w-1/2 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={`${url}/uploads/${content.image}`}
                alt={content.heading}
                className="w-full h-full object-cover aspect-video"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 w-full">
              <h2 className="md:text-3xl text-sm font-semibold mb-4 break-words">{content.heading}</h2>
              <p className="text-sm md:text-base text-gray-600 break-words mr-4">{content.Description}</p>
            </div>
          </div>
        );
      });
  };

  console.log(blog,"blogblogblogblog")
  return (
    <div>
        <div className="relative w-full h-[90vh] bg-cover bg-center" style={{ backgroundImage: `url(${url}/uploads/${blog.cardImg})` }}>
            {/* Overlay to control the gradient and transparency */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] opacity-80"></div>

            <nav className="relative z-20 bg-transparent p3-4">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} alt="Logo" className="h-134 w-150" />
                    </div>
                </div>
                <button
                    className="block md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:flex md:w-auto ${isMenuOpen ? 'block bg-white md:bg-transparent' : 'hidden'}`} id="navbar-default">
                    <ul className="text-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        <Link to="/" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Home</Link>
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

            {/* Banner Content */}
            <div className="relative z-10 flex items-center justify-center h-[80vh] text-center">
                <div>
                <h1 className="md:text-5xl text-2xl font-bold text-black mb-6 break-words">{blog.title}</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 break-words">
                    {blog.summary}
                </p>
                <div className="flex justify-center items-center">
                    <button
                    onClick={() => navigate(`/blog/${id}`)}
                    className="flex items-center justify-center text-white bg-[#64BA75] py-4 px-8 rounded-full text-lg font-medium hover:bg-green-700 transition-colors"
                    >
                    view Course
                    <FaArrowRight className="ml-2" />
                    </button>
                </div>
                </div>
            </div>
        </div>


        <div className="container mx-auto px-4 py-12 flex items-center justify-center">
        <div className='max-w-7xl'>
          {/* Loop through each section */}
          {getContentSections()}
        </div>
      </div>

    <Contact />

    </div>


  );
}

export default BlogPageSection;

