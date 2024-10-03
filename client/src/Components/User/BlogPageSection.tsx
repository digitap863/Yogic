import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { MdArrowForward } from 'react-icons/md';
import { Link, useNavigate, useParams } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getdata } from '../../api/req';
import { url } from '../../api/url';
import logo from '../../assets/images/IMG_2842.png';
import Contact from './Contact';




function BlogPageSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const loadMoreStyles = () => {
    setIsMobile(false); 
};
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleCourseClick = (courseId) => {
    navigate(`/blog/${courseId}`); 
  };


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

  console.log(blog,"--------------------------------------responseresponseresponse")
  const getContentSections = () => {
    return Object.keys(blog)
      .filter((key) => key.startsWith('content'))
      .map((contentKey, index) => {
        const content = blog[contentKey];
        if (index === 0) {
          // Special layout for the first content
          return (
            <div key={index} className="flex flex-col items-left mb-12 px-10">
              {/* Full-width Image */}
              <div data-aos="zoom-in-up">
              <div className='flex items-center rounded-2xl justify-center shadow-lg w-full overflow-hidden mb-4 '>
                <img
                  src={`${url}/uploads/${content.image}`}
                  alt={content.heading}
                  className="w-[100%] h-[60vh] object-cover items-center " // Adjust height as needed
                />
              </div>
              </div>
  
              {/* Heading and Description */}
              <h2 className="md:text-3xl text-2xl font-semibold mb-4 text-left">{content.heading}</h2>
              <p className="text-sm md:text-base text-gray-600 text-left">{content.Description}</p>
            </div>
          );
        } 
        else if (index === 3) {
          return (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } items-center mb-12 space-y-6 md:space-y-0 md:space-x-12 py-4 px-2`}
            >
              {/* Image */}
              <div className="md:hidden w-full rounded-2xl overflow-hidden ">
                <img
                  src={`${url}/uploads/${content.image}`}
                  alt={content.heading}
                  className="w-full h-full object-cover aspect-[22/12]"
                />
              </div>
          
              {/* Text */}
              <div className="md:w-full w-full">
                <h2 className="md:text-3xl text-2xl font-semibold mb-4 break-words">
                  {content.heading}
                </h2>
                <p className="text-sm md:text-base text-gray-600 break-words mr-4">
                  {content.Description}
                </p>
              </div>
            </div>
          );

        }
        else {
        
        return (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
            } items-center mb-12 space-y-6 md:space-y-0 md:space-x-10 py-4 px-2`}
            // data-aos = {` ${index % 2 === 0 ? 'zoom-in-left' :'zoom-in-right'}`}
          >
            {/* Image */}
            <div className="md:w-1/2 rounded-xl overflow-hidden">
              <img
                src={`${url}/uploads/${content.image}`}
                alt={content.heading}
                className="w-full h-full object-cover aspect-[22/12] pl-10"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 w-full ">
              <h2 className="md:text-3xl text-2xl  font-semibold mb-4 break-words">{content.heading}</h2>
              <p className="text-sm md:text-base text-gray-600 break-words mr-4 ">{content.Description}</p>
            </div>
          </div>
        );
      }
      });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleReadMore = (blogId) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(`/blog/${blogId}`); 
   
  };


  console.log(blog,"blogblogblogblog")
  return (
    <div>
        <div className="relative w-full h-[80vh] bg-cover bg-center" style={{ backgroundImage: `url(${url}/uploads/${blog.cardImg})` }}>
            {/* Overlay to control the gradient and transparency */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] opacity-80"></div>

            <nav className="relative z-20 bg-transparent p3-4">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2">
                <div onClick={() => navigate(`/`)}
            className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="aspect-square cursor-pointer" />
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

          
            <div className="relative z-10 flex items-center justify-center h-[50vh] text-center">
                {/* <div> */}
                <div data-aos="fade-down">
                <h1 className="md:text-5xl text-2xl font-bold text-black mb-6 break-words font-galano uppercase">{blog?.title}</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 break-words line-clamp-2 font-galano">
                    {blog?.summary}
                </p>
                <div className="flex justify-center items-center">
                    <Button
                    size='lg'
                    onClick={() => navigate(`/blog/${id}`)}
                    className="bg-[#64BA75] inline-flex items-center px-8 py-4 rounded-[50px] text-white font-Epilogue text-sm"
                    >
                    view Course
                    <FaArrowRight className="" />
                    </Button>
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



    {/* Related Blogs */}
    <div className="container mx-auto   px-4 py-8 max-w-7xl">
      <h2 className="text-4xl font-semibold mb-8 text-black text-left font-galano ">Related Blogs</h2>
      {/* Course Cards Section */}
      <div className=" bg-white flex justify-center items-center  ">
      <div className="w-full max-w-7xl py-1 ">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={1}  // You can adjust this for responsiveness
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          navigation={{
            prevEl: '.slidePrev-btn',
            nextEl: '.slideNext-btn'
          }}
   
        >
          {blogs.slice(0, isMobile  ? 3 : blogs.length).map((post:any, index) => (
            <SwiperSlide key={index}>
               <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md border border-green-500  pb-20 mb-4 relative">
            <img 
             src={`${url}/uploads/${post.cardImg}`}
              alt={post.title} 
              className="w-full aspect-[18/12] rounded-3xl object-cover"
            />
            <div className="px-4 pt-4 relative ">
              <h3 className="font-bold text-xl mb-2 line-clamp-1">{post.title}</h3>
              <p className="text-gray-600 text-sm  line-clamp-1">{post.summary}</p>
              <div className='flex justify-center mt-auto'>
             
              </div>
            </div>
            <button 
               onClick={() => handleReadMore(post._id)} 
              className="text-[#64BA75] absolute bottom-5 left-1/2 translate-x-[-50%] border border-[#64BA75] rounded-3xl px-8 py-2 text-sm hover:bg-[#64BA75] hover:text-white transition duration-300">
                Read More
              </button>
          </div>
            </SwiperSlide>
          ))}
        </Swiper> 
      </div>
    </div>
      {/* </div> */}
      

      {/* Navigation and View All Button */}
      <div className="flex justify-between items-center mt-8">
        <Button  
         variant="ghost"
        onClick={() =>{ navigate('/courses')
          window.scrollTo(0, 0);
        }}
         className="bg-white border border-[#64BA75] text-[#64BA75] px-6 py-6 rounded-full flex items-center font-galano text-md">
          View All Courses <MdArrowForward className="ml-2" />
        </Button>
       
        <div className="flex space-x-4">
          <button  className="bg-white p-2 rounded-full  slidePrev-btn">
            <IoIosArrowBack className="text-2xl text-green-500" />
          </button>
          <button className="bg-white p-2 rounded-full  slideNext-btn">
            <IoIosArrowForward className="text-2xl text-green-500" />
          </button>
        </div>
      </div>
      </div>

    </div>


  );
}

export default BlogPageSection;

