import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import girl1 from "../../assets/images/Courses1.png";
import girl2 from "../../assets/images/Courses2.png";
import girl3 from "../../assets/images/Courses3.png";
import girl4 from "../../assets/images/Courses4.png";
import girl5 from "../../assets/images/Courses5.png";
import girl6 from "../../assets/images/Courses6.png";
import girl7 from "../../assets/images/Courses8.png";
import { FaArrowRight } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import Contact from "./Contact";
import { getdata } from "../../api/req";
import { url } from "../../api/url";

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

  const meditationStyles = [
    {
      name: "Beginner Meditation Series",
      image: girl2,
    },
    {
      name: "Beginner Meditation Series",
      image: girl3,
    },
    {
      name: "Beginner Meditation Series",
      image: girl4,
    },
    {
      name: "Beginner Meditation Series",
      image: girl5,
    },
    {
      name: "Beginner Meditation Series",
      image: girl5,
    },
    {
      name: "Beginner Meditation Series",
      image: girl5,
    },
  ];

  const YogaStyles = [
    {
      name: "Beginner Yoga Series",
      image: girl2,
    },
    {
      name: "Beginner Yoga Series",
      image: girl3,
    },
    {
      name: "Beginner Yoga Series",
      image: girl4,
    },
    {
      name: "Beginner Yoga Series",
      image: girl5,
    },
    {
      name: "Beginner Yoga Series",
      image: girl5,
    },
    {
      name: "Beginner Yoga Series",
      image: girl5,
    },
  ];

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
      <div className="relative w-full h-[60vh]  bg-gradient-to-r from-white via-emerald-100 to-emerald-100 flex items-center justify-center">
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-semibold text-black mb-6">COURSES</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            At Yogic, we believe in the transformative power of yoga to enhance
            your well-being. Our dedicated instructors create a welcoming space
            where you can explore and deepen your practice.
          </p>
          <button
            onClick={() => navigate(`/contact`)}
            className="text-white bg-[#64BA75] py-4 px-8 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Contact Us →
          </button>
        </div>
      </div>

      <Layout
        image={girl1}
        heading="Courses we offer for Yoga and Meditation"
        description="Discover the transformative power of yoga and meditation in this comprehensive course designed for all levels. Whether you’re a beginner or an experienced practitioner, you’ll learn to harmonize mind, body, and spirit through a blend of gentle yoga postures, breathwork, and meditation techniques."
        ctaText="View Courses"
        ctaLink="/courses"
      />

      <div className="flex flex-col items-center pt-8">
        <div className="flex flex-row md:space-x-4  mb-4">
          <button
            onClick={() => setSelectedClass("yoga")}
            className={`m-1 px-8 py-4 rounded-full  ${
              selectedClass === "yoga"
                ? "bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]"
                : "bg-white text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white"
            }`}
          >
            Yoga Courses
          </button>
          <button
            onClick={() => setSelectedClass("meditation")}
            className={`m-1 px-8 py-4 rounded-full  ${
              selectedClass === "meditation"
                ? "bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]"
                : "bg-white text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white"
            }`}
          >
            Meditation Courses
          </button>
        </div>
      </div>

      <div className="bg-white pt-10 md:p-20 md:ml-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading
          ? Array(6) 
              .fill(0)
              .map((_, index) => <Shimmer key={index} />)
        : filteredCourses
            .slice(0, isMobile ? (loadFullYoga || loadFullMeditation ? filteredCourses.length : 3) : filteredCourses.length)
            .map((style:any, index) => (
              <div 
              key={index} 
              onClick = {() =>handleCourseClick(style._id)}
              className="relative rounded-[50px] overflow-hidden shadow-md">
                <img
                  src={`${url}/uploads/${style.cardImage}`}
                  alt={style.heading}
                  className="w-full h-full object-cover aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
                  <h3 className="text-xl font-semibold mb-2">{style.heading}</h3>
                </div>
              </div>
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

      <div className="mt-8 py-4 bg-gray-100 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {/* Loop over the array to generate icons and text */}
          {items.map((_, index) => (
            <React.Fragment key={index}>
              <span className="mx-2 text-green-500">
                <MdWbSunny className="inline-block" />
              </span>
              <span className="mx-4 text-green-600">
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                The Essential Role of Yoga in Modern Life
              </h2>
              <img src={girl7} alt="girl" className="rounded-lg mb-6" />
              <p className="text-gray-600 mb-6">
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
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  The Essential Role of Yoga in Modern Life
                </h2>
                <p className="text-gray-600 mb-6 pl-2 pr-10 ">
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
                <img src={girl7} alt="girl" className="rounded-lg" />
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
