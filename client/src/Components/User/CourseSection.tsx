import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { getdata } from "../../api/req";
import { url } from "../../api/url";
import girl1 from "../../assets/images/Courses1.png";
import girl7 from "../../assets/images/Courses8.png";
import girl from "../../assets/images/YogicCoursesImg.png";
import Contact from "./Contact";
import Layout from "./Layout";
import Navbar from "./Navbar";

function CourseSection() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [loadFullYoga, setLoadFullYoga] = useState(false);
  const [loadFullMeditation, setLoadFullMeditation] = useState(false);
  const [course , setCourse] = useState([])
  const [selectedClass, setSelectedClass] = useState("yoga")
  const [loading, setLoading] = useState(true); 


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


  const items = Array(10).fill({
    icon: <MdWbSunny className="inline-block text-green-500 mx-2" />,
    text: "Mindful Movement with Yogic",
  });

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

  const handleCourseClick = (courseId) => {
    navigate(`/course/${courseId}`); // Replace with your route
  };

  
  return (
    <div>
       <div 
      className='xl:h-[100vh] md:h-[90vh] h-[60vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex flex-col items-center justify-start relative'
      >
        {/* Navbar */}
        <Navbar/>
        {/* Banner content */}
        <div className='flex flex-col items-center justify-center h-full md:pt-0 mt-20'>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          <img src={girl} alt="banner image" className=' w-[80%] mx-auto object-contain pb-0' />
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

      <Layout
        image={girl1}
        heading="Courses we offer for Yoga and Meditation"
        description="Discover the transformative power of yoga and meditation in this comprehensive course designed for all levels. Whether you’re a beginner or an experienced practitioner, you’ll learn to harmonize mind, body, and spirit through a blend of gentle yoga postures, breathwork, and meditation techniques."
        ctaText=""
        ctaLink=""
      />

      <div className="flex flex-col items-center pt-8">
        <div className="flex flex-row md:space-x-4  mb-4">
          <button
            onClick={() => setSelectedClass("yoga")}
            className={`m-1 lg:px-14 px-7  py-4 rounded-full font-galano  ${
              selectedClass === "yoga"
                ? "bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]"
                : "bg-white text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white"
            }`}
          >
            Yoga Courses
          </button>
          <button
            onClick={() => setSelectedClass("meditation")}
            className={`m-1 lg:px-8 px-3 py-4 rounded-full font-galano  ${
              selectedClass === "meditation"
                ? "bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]"
                : "bg-white text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white"
            }`}
          >
            Meditation Courses
          </button>
        </div>
      </div>
      
      <div className="container mx-auto flex justify-left ">
      <div className="bg-white pt-10 md:p-20 md:ml-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array(6) 
              .fill(0)
              .map((_, index) => <Shimmer key={index} />)
        : filteredCourses
            .slice(0, isMobile ? (loadFullYoga || loadFullMeditation ? filteredCourses.length : 3) : filteredCourses.length)
            .map((style:any, index) => (
              // <div data-aos="flip-left">
              <div 
              key={index} 
              onClick = {() =>{
                window.scrollTo({ top: 0, behavior: 'smooth' })
                handleCourseClick(style._id)}}
              className="relative rounded-[50px] overflow-hidden shadow-md cursor-pointer">
               
                <img
                  src={`${url}/uploads/${style.cardImage}`}
                  alt={style.heading}
                  className="w-full h-full object-cover aspect-square"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <h3 className="text-xl font-semibold md:mb-8 pl-6 font-galano">{style.heading}</h3>
                </div>
              </div>
              // </div>
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

      <div className="mt-8 py-4 bg-gray-100 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                        {/* Loop over the array to generate icons and text */}
                        {items.map((_, index) => (
                            <React.Fragment key={index}>
                                <span className="mx-2 text-green-500">
                                    <MdWbSunny className="inline-block" />
                                </span>
                                <span className="mx-4 text-green-600 font-Montserrat">
                                    Mindful Movement with Yogic
                                </span>
                            </React.Fragment>
                        ))}
                </div>
        </div>

      <section className="bg-white py-20">
        <div className="container mx-auto bg-white">
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-white">
            {/* Mobile View */}
            <div className="block md:hidden text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 uppercase">
                The Essential Role of Yoga in Modern Life
              </h2>
              <img src={girl7} alt="girl" className="rounded-lg mb-6" />
              <p className="text-gray-600 mb-6 font-galano">
                In today’s fast-paced world, yoga is more important than ever.
                Amidst the constant demands of modern life—whether it's the
                pressure of work, the distractions of digital media, or the
                stress of daily responsibilities—yoga offers a vital sanctuary
                for restoring balance and well-being. Its practice provides a
                holistic approach to health, addressing not just physical
                fitness but also mental and emotional resilience. Through yoga,
                individuals can cultivate mindfulness, enhance flexibility, and
                build strength, all while learning techniques to manage stress
                and anxiety. The principles of yoga encourage a deeper
                connection with oneself, fostering a sense of inner peace and
                clarity that can help navigate the complexities of contemporary
                living. In essence, yoga offers a much-needed respite from the
                chaos, promoting a healthier, more centered lifestyle in a world
                that often feels overwhelming.
              </p>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex md:flex-row items-center justify-between  pl-10">
              <div className="md:w-1/2 px-12 md:mt-0 text-center md:text-left bg-white mr-2 self-start">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 uppercase font-galano">
                  The Essential Role of Yoga in Modern Life
                </h2>
                <p className="text-gray-600 mb-6 pl-2 pr-10 font-galano ">
                  In today’s fast-paced world, yoga is more important than ever.
                  Amidst the constant demands of modern life—whether it's the
                  pressure of work, the distractions of digital media, or the
                  stress of daily responsibilities—yoga offers a vital sanctuary
                  for restoring balance and well-being. Its practice provides a
                  holistic approach to health, addressing not just physical
                  fitness but also mental and emotional resilience. Through
                  yoga, individuals can cultivate mindfulness, enhance
                  flexibility, and build strength, all while learning techniques
                  to manage stress and anxiety. The principles of yoga encourage
                  a deeper connection with oneself, fostering a sense of inner
                  peace and clarity that can help navigate the complexities of
                  contemporary living. In essence, yoga offers a much-needed
                  respite from the chaos, promoting a healthier, more centered
                  lifestyle in a world that often feels overwhelming.
                </p>
              </div>
              <div className="md:w-1/2 flex flex-col space-y-6 px-16 mx-6 pt-2">
              <div data-aos="fade-left">

                <img src={girl7} alt="girl" className="rounded-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}

const Shimmer = () => {
  return (
    <div className="animate-pulse">
      <div className="h-64 bg-gray-200 rounded-md"></div>
      <div className="mt-4 h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="mt-2 h-4 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
};



export default CourseSection;
