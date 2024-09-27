import React, { useEffect, useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import girl5 from '../../assets/images/yogaa.png'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { getdata } from '../../api/req';
import { url } from '../../api/url';
import {Button} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';





function CourseSection() {

  const navigate = useNavigate();

  const [data,setData] = useState([])

    const getCourse = async () => {
        const response = await getdata("/courses")
        setData(response.data.data)
    }
    useEffect(() => {
        getCourse()
    }, []);

    const handleCourseClick = (courseId) => {
      navigate(`/course/${courseId}`); // Replace with your route
    };

    console.log(data,"datadatadatadatadata")



  return (
    <div className="container mx-auto md:px-20  px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-black text-center font-galano">OUR COURSES</h2>

      {/* Course Cards Section */}
      <div className=" bg-white flex justify-center items-center px-6 sm:px-12 ">
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
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {/* Map through courses and display each in a slide */}
          {data.map((course:any, index) => (
            <SwiperSlide key={index}>
              <div 
              onClick = {() =>handleCourseClick(course._id)}
              className="min-w-[300px] bg-gray-100 rounded-3xl relative overflow-hidden ">
                <img
                  src={`${url}/uploads/${course.cardImage}`}
                  // src={`${url}/uploads/${content.image}`}
                  alt={course.heading}
                  className="aspect-[4/3]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#64BA75]  via-white to-transparent opacity-70 rounded-3xl "></div>
                <div className="absolute bottom-4 left-4 right-4 text-black p-3">
                  <h3 className="font-semibold text-2xl mb-2 pr-5 font-Montserrat">{course.heading}</h3>
                  <p className="text-sm font-Montserrat">{course.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
      {/* </div> */}
      

      {/* Navigation and View All Button */}
      <div className="flex justify-between items-center  md:px-10 mt-8">
        <Button  
         variant="ghost"
        onClick={() => navigate('/courses')}
         className="bg-white border border-green-500 text-green-500 px-6 py-6 rounded-full flex items-center font-galano">
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
  );
}

export default CourseSection;
