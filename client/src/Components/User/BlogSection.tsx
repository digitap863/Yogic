import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
 import Contact from './Contact';
import { getdata } from '../../api/req';

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

      <div className="relative w-full h-[60vh]  bg-gradient-to-r from-white via-emerald-100 to-emerald-100 flex items-center justify-center">
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-semibold text-black mb-6 uppercase">BLOGS</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We believe in a holistic approach to wellness, integrating mind, body, and spirit through traditional yogic practices.
          </p>
          <button
            onClick={() => navigate(`/contact`)}
            className="text-white bg-[#64BA75] py-4 px-8 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Contact Us →
          </button>
        </div>
       </div>


       <div className="container mx-auto md:px-20 md:py-20 px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
        {blogs.slice(0, isMobile  ? 3 : blogs.length).map((post:any, index) => (
          <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md border border-green-500">
            <img 
             src={`http://localhost:3000/api/uploads/${post.cardImg}`}
              alt={post.title} 
              className="w-full aspect-square rounded-3xl object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.summary}</p>
              <div className='flex justify-center'>
              <button 
               onClick={() => handleReadMore(post._id)} 
              className="text-[#64BA75] border border-[#64BA75] rounded-3xl px-8 py-2 text-sm hover:bg-[#64BA75] hover:text-white transition duration-300">
                Read More
              </button>
              </div>
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
