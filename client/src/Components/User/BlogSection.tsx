import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { MdArrowForward } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { getdata } from '../../api/req';
import { url } from '../../api/url';
import girl from '../../assets/images/YogicblogsImg1.png';
import Contact from './Contact';
import Navbar from './Navbar';

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
       <div 
      className='xl:h-[100vh] md:h-[90vh] h-[60vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex flex-col items-center justify-start relative'
      >
        {/* Navbar */}
        <Navbar/>
        {/* Banner content */}
        <div className='flex flex-col gap-2 items-center justify-center h-full md:pt-0 mt-20'>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <img src={girl} alt="banner image" className='xl:w-[76%] md:w-[80%]  mx-auto object-contain pb-0' />
          </div>
          <div>
          <Button 
          size='lg'
          onClick={() => {
            navigate('/contact');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className='bg-[#64BA75] inline-flex items-center px-8 py-4 rounded-[50px] text-white font-Epilogue text-sm hover:scale-105 duration-200'>
            Contact Us <FaArrowRight className="" />
          </Button>
          </div>
        </div>
      </div>  


       <div className="container mx-auto md:px-20 md:py-20 px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {blogs.slice(0, isMobile  ? 3 : blogs.length).map((blog:any, index) => (
            <div data-aos="zoom-in">          
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md border border-green-500  pb-20 relative">
            
            <img 
               src={ blog?.cardImg.startsWith('https://')
                ? blog?.cardImg
                : `${url}/uploads/${blog?.cardImg}`
                }
              alt={blog.title} 
              className="w-full aspect-[18/12] rounded-3xl object-cover"
            />
            
            <div className="px-4 pt-4 relative ">
              <h3 className="font-bold text-xl mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm  line-clamp-2">{blog.summary}</p>
              <div className='flex justify-center mt-auto'>
             
              </div>
            </div>
            <button 
               onClick={() => handleReadMore(blog._id)} 
              className="text-[#64BA75] absolute bottom-5 left-1/2 translate-x-[-50%] border border-[#64BA75] rounded-3xl px-8 py-2 text-sm hover:bg-[#64BA75] hover:text-white transition duration-300">
                Read More
              </button>
          </div>
          </div>
        
        ))}
      </div>
      {isMobile && blogs.length > 3 && (
        <div className="flex justify-center mt-6 md:hidden"> {/* md:hidden ensures this is only shown on mobile */}
           <Button  
         variant="ghost"
         onClick={loadMoreStyles}
         className="bg-white border border-[#64BA75] text-[#64BA75] px-8 py-6 rounded-full flex items-center font-galano text-md">
          View All <MdArrowForward className="ml-2" />
        </Button>
        </div>
        
      )}
       </div>

      <Contact />

    </div>
  )
}

export default BlogSection
