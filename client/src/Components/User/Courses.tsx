import React, { useState } from 'react';
import { MdArrowForward } from 'react-icons/md';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import girl5 from '../../assets/images/Yogaa.png'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



const courses = [
  {
    title: 'BEGINNER YOGA SERIES',
    description: 'Enhance Flexibility And Reduce Stress With Stretch & Flow Yoga. Expert-Led Classes For All Levels. Embrace Balance Today!',
    image: girl5, 
  },
  {
    title: 'MEDITATIONS FOR BEGINNERS',
    description: 'Enhance Flexibility And Reduce Stress With Stretch & Flow Yoga. Expert-Led Classes For All Levels. Embrace Balance Today!',
    image: girl5,
  },
  {
    title: 'YOGA FOR STRESS RELIEF',
    description: 'Enhance Flexibility And Reduce Stress With Stretch & Flow Yoga. Expert-Led Classes For All Levels. Embrace Balance Today!',
    image: girl5,
  },
  {
    title: 'ADVANCED YOGA SERIES',
    description: 'Deepen Your Practice With Advanced Yoga Poses. Expert-Led Classes To Boost Strength And Flexibility!',
    image: girl5,
  },
];

function CourseSection() {
  const [currentIndex, setCurrentIndex] = useState(0);


  const currentCourse = courses[currentIndex];


  return (
    <div className="container mx-auto md:px-20  px-4 py-8">
      <h2 className="text-4xl font-bold mb-8 text-black text-center font-galano">OUR COURSES</h2>

      {/* Course Cards Section */}
      {/* <div className="relative"> */}
      <div className=" bg-white flex justify-center items-center px-6 sm:px-12 ">
      <div className="w-full max-w-7xl py-1 ">
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
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
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="min-w-[300px] bg-gray-100 rounded-2xl relative overflow-hidden ">
                <img
                  src={course.image}
                  alt={course.title}
                  className=" "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-200 to-transparent opacity-70 rounded-2xl "></div>
                <div className="absolute bottom-4 left-4 right-4 text-black p-3">
                  <h3 className="font-semibold text-3xl mb-2 pr-5 font-Montserrat">{course.title}</h3>
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
        <button className="bg-white border border-green-500 text-green-500 px-6 py-3 rounded-full flex items-center font-galano">
          View All Courses <MdArrowForward className="ml-2" />
        </button>

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
