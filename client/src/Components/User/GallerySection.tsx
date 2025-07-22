import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { getdata } from '../../api/req';
import { url } from '../../api/url';
import girl from '../../assets/images/YogicGalleryImg1.png';
import Navbar from './Navbar';





function GallerySection() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('yoga');
  const [loading, setLoading] = useState(true);
  const [course , setCourse] = useState([])
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [loadFullYoga, setLoadFullYoga] = useState(false);
  const [loadFullMeditation, setLoadFullMeditation] = useState(false);

  
  useEffect(() => {
    // Fetch all blogs from the backend
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const response = await getdata('/courses');
        console.log(response,"qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
        setCourse(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Courses:', error);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const loadMoreStyles = () => {
    setIsMobile(false); // Show all items on button click
  };
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const viewMore = () => {
    if (selectedClass === "yoga") {
      setLoadFullYoga(true);
    } else if (selectedClass === "meditation") {
      setLoadFullMeditation(true);
    }
  };
  
  const viewLess = () => {
    if (selectedClass === "yoga") {
      setLoadFullYoga(false);
    } else if (selectedClass === "meditation") {
      setLoadFullMeditation(false);
    }
  };
  

  useEffect(() => {
    setLoadFullYoga(false);
    setLoadFullMeditation(false);
  }, [selectedClass]);

  const filteredCourses = course.filter((item:any) => {
    if (selectedClass === "yoga") {
      return item.courseType === "YogaCourse";
    } else if (selectedClass === "meditation") {
      return item.courseType === "MeditationCourse";
    }
    return false;
  });
  
  console.log(course, "All Courses");
  console.log(filteredCourses, "Filtered Courses");

  return (
    <div>
      <div 
      className='xl:h-[100vh] md:h-[90vh] h-[60vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex flex-col items-center justify-start relative'
      >
        {/* Navbar */}
        <Navbar/>
        {/* Banner content */}
        <div className='flex flex-col gap-4 items-center justify-center h-full md:pt-0 mt-20'>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <img src={girl} alt="banner image" className=' xl:w-[70%] md:w-[70%] mx-auto object-contain pb-0' />
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

      <div className="flex flex-col items-center py-10">
        <div className="flex flex-col  md:flex-row md:space-x-4 md:mb-10 mb-4">
          <button
            onClick={() => setSelectedClass('yoga')}
            className={`m-1 lg:px-14 px-7 py-4 rounded-full font-galano ${
              selectedClass === "yoga"
                ? "bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]"
                : "bg-white text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white"
            }`}
          >
            Yoga Classes
          </button>
          <button
            onClick={() => setSelectedClass('meditation')}
            className={`m-1 lg:px-8 px-3 py-4 rounded-full font-galano  ${
              selectedClass === "meditation"
                ? "bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]"
                : "bg-white text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white"
            }`}
          >
            Meditation Classes
          </button>
        </div>

        {/* Conditionally Render Images */}
        <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 ">
        {filteredCourses
          .slice(0,isMobile? (loadFullYoga || loadFullMeditation ? filteredCourses.length : 2)
              : filteredCourses.length
          )
          .map((style: any, index) => (
            <img
              key={index}
              src={`${style.cardImage}`}
              alt={`${
                loadFullYoga ? 'Yoga' : loadFullMeditation ? 'Meditation' : 'Style'
              } ${index + 1}`}
              className="w-full h-[50vh] sm:w-[40vw] sm:h-[60vh] object-cover rounded-[20px] sm:rounded-[50px] mx-0"
            />
          ))}
          {!loadFullYoga && !loadFullMeditation && (
            <button
              onClick={viewMore}
              className="bg-white  md:hidden text-[#64BA75] border border-[#64BA75] rounded-3xl px-8 py-2 mx-20"
            >
              View More
            </button>
          )}
             {(loadFullYoga || loadFullMeditation )&& (
            <button
              onClick={viewLess}
              className="bg-white md:hidden text-[#64BA75] border border-[#64BA75] rounded-3xl px-8 py-2 mx-20 "
            >
              View Less
            </button>
          )}

        </div>
        </div>
      </div>

      {/* <TestimonialSlider />
      <Contact /> */}
      
    </div>
  )
}

export default GallerySection
