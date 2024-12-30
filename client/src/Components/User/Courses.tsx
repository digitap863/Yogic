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
          navigate(`/course/${courseId}`); 
        };


  return (
    <div className="container mx-auto   px-4 py-8 max-w-7xl overflow-hidden">
      <h2 className="text-4xl font-semibold mb-8 text-black text-left font-galano ">OUR COURSES</h2>

      {/* Course Cards Section */}
      <div className=" bg-white flex justify-center items-center  ">
      <div className="w-full max-w-7xl py-1 ">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}  // You can adjust this for responsiveness
          loop= {true}
          autoplay={true}
          navigation={{
            prevEl: '.slidePrev-btnn',
            nextEl: '.slideNext-btnn'
          }}
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
          
          
   
        >
          {data.map((course:any, index) => (
            
            <SwiperSlide key={index}>
              <div 
              onClick = {() =>handleCourseClick(course._id)}
              className=" bg-gray-100 rounded-3xl relative overflow-hidden cursor-pointer hover:scale-105 duration-300 w-full max-w-[400px] mx-auto ">
            <div data-aos="flip-left">
                <img
                  src={`${url}/uploads/${course.cardImage}`}
                  alt={course.heading}
                  className="aspect-[13/12] object-cover"
                />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#caf5db] via-transparent to-transparent opacit rounded-3xl "></div>
                <div className="absolute bottom-4 left-4 right-4 text-black p-3">
                  <h3 className="font-semibold text-2xl mb-2 pr-10 font-Montserrat uppercase line-clamp-2">{course.heading}</h3>
                  <p className="text-sm font-Montserrat  line-clamp-2">{course.description}</p>
                </div>
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
        onClick={() => {
          window.scrollTo(0, 0);
          navigate('/courses')}}
         className="bg-white border border-[#64BA75] text-[#64BA75] px-6 py-6 rounded-full flex items-center font-galano text-md">
          View All Courses <MdArrowForward className="ml-2" />
        </Button>
       
        <div className="flex space-x-4">
          <button  className="bg-white p-2 rounded-full  slidePrev-btnn">
            <IoIosArrowBack className="text-2xl text-green-500" />
          </button>
          <button className="bg-white p-2 rounded-full  slideNext-btnn">
            <IoIosArrowForward className="text-2xl text-green-500" />
          </button>
        </div>
      </div>
      </div>

    // </div>
  );
}

export default CourseSection;
