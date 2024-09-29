import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import girl4 from '../../assets/images/Courses4.png'
import girl5 from '../../assets/images/Courses5.png'
import TestimonialSlider from './Testimonial';
import Contact from './Contact'
import { getdata } from '../../api/req';
import { url } from '../../api/url';
import { Button } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';



function GallerySection() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('yoga');
  const [loading, setLoading] = useState(true);
  const [course , setCourse] = useState([])
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [loadFullYoga, setLoadFullYoga] = useState(false);
  const [loadFullMeditation, setLoadFullMeditation] = useState(false);



  const yogaImages = [
    girl4,
    girl4,
    girl4,
    girl4,

  ];

  const meditationImages = [
    girl5,
    girl5,
    girl5,
    girl5,

  ];

  
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
       <div className="relative w-full h-[60vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex items-center justify-center">
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-semibold text-black mb-6 font-galano uppercase">GALLERY</h1>
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

      <div className="flex flex-col items-center py-10">
        <div className="flex flex-col  md:flex-row md:space-x-4 md:mb-10 mb-4">
          <button
            onClick={() => setSelectedClass('yoga')}
            className={`m-1 px-8 py-4 rounded-full font-galano ${
              selectedClass === "yoga"
                ? "bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]"
                : "bg-white text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white"
            }`}
          >
            Yoga Classes
          </button>
          <button
            onClick={() => setSelectedClass('meditation')}
            className={`m-1 px-8 py-4 rounded-full font-galano  ${
              selectedClass === "meditation"
                ? "bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]"
                : "bg-white text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white"
            }`}
          >
            Meditation Classes
          </button>
        </div>

        {/* Conditionally Render Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 ">
        {filteredCourses
          .slice(0,isMobile? (loadFullYoga || loadFullMeditation ? filteredCourses.length : 2)
              : filteredCourses.length
          )
          .map((style: any, index) => (
            <img
              key={index}
              src={`${url}/uploads/${style.cardImage}`}
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

      <TestimonialSlider />
      <Contact />
      
    </div>
  )
}

export default GallerySection
