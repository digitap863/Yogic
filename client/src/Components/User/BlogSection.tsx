import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
 import Contact from './Contact';
import { getdata } from '../../api/req';
import { url } from '../../api/url';
import { Button } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';

function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const loadMoreStyles = () => {
      setIsMobile(false); 
  };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

  useEffect(() => {
    // Fetch all blogs from the backend
    const fetchBlogs = async () => {
      try {
        const response = await getdata('/blogs');
        console.log(response,"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
        setBlogs(response.data.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);



  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleReadMore = (blogId) => {
    navigate(`/blog/${blogId}`); // Navigates to blog details page with the blog ID
  };
  

  return (
    <div>
<div data-aos="fade-right">
<div className="relative w-full h-[60vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex items-center justify-center">
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-semibold text-black mb-6 font-galano uppercase">blogs</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-galano">
          We believe in a holistic approach to wellness, integrating mind, body, and spirit through traditional yogic practices.
          </p>
          <Button 
          size='lg'
          onClick={() => navigate(`/contact`)}
          className='bg-[#64BA75] inline-flex items-center px-8 py-4 rounded-[50px] text-white font-Epilogue text-sm'>
            Contact Us <FaArrowRight className="" />
          </Button>
        </div>
      </div>
      </div>


       <div className="container mx-auto md:px-20 md:py-20 px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {blogs.slice(0, isMobile  ? 3 : blogs.length).map((post:any, index) => (
          <div data-aos="zoom-in">
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md border border-green-500  pb-20 relative">
            
            <img 
             src={`${url}/uploads/${post.cardImg}`}
              alt={post.title} 
              className="w-full aspect-[18/12] rounded-3xl object-cover"
            />
            
            <div className="px-4 pt-4 relative ">
              <h3 className="font-bold text-xl mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm  line-clamp-2">{post.summary}</p>
              <div className='flex justify-center mt-auto'>
             
              </div>
            </div>
            <button 
               onClick={() => handleReadMore(post._id)} 
              className="text-[#64BA75] absolute bottom-5 left-1/2 translate-x-[-50%] border border-[#64BA75] rounded-3xl px-8 py-2 text-sm hover:bg-[#64BA75] hover:text-white transition duration-300">
                Read More
              </button>
          </div>
          </div>
        ))}
      </div>
      {isMobile && blogs.length > 3 && (
        <div className="flex justify-center mt-6 md:hidden"> {/* md:hidden ensures this is only shown on mobile */}
          <button
            onClick={loadMoreStyles}
            className="px-4 py-2 bg-white text-green-600 rounded-3xl border border-green-500"
          >
            View All
          </button>
        </div>
      )}
       </div>

      <Contact />

    </div>
  )
}

export default BlogSection
