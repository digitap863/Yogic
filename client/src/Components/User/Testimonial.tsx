import React from "react";
import www from '../../assets/images/www.png'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const testimonials = [
  {
    name: "Riya John",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Yoga with this community has been life-changing! My flexibility and peace of mind have never been better.",
    course: "Hatha Course",
  },
  {
    name: "Riya John",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Yoga with this community has been life-changing! My flexibility and peace of mind have never been better.",
    course: "Hatha Course",
  },
  {
    name: "Riya John",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Yoga with this community has been life-changing! My flexibility and peace of mind have never been better.",
    course: "Hatha Course",
  },
  {
    name: "Riya John",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Yoga with this community has been life-changing! My flexibility and peace of mind have never been better.",
    course: "Hatha Course",
  },
  {
    name: "Riya Jnfn",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Yoga with this community has been life-changing! My flexibility and peace of mind have never been better.",
    course: "Hatha Course",
  },
];

const TestimonialSlider = () => {
  return (
    <div className="py-12 bg-gradient-to-r from-green-100 to-blue-100">
      <h2 className="text-4xl font-semibold text-center mb-8 font-galano">WHAT OUR CLIENT SAY</h2>
      <div className="container mx-auto px-2">
      <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            prevEl: '.slidePrev-btn',
            nextEl: '.slideNext-btn'
          }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
           // Large screens
            1440: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            // Extra large screens
            1600: {
              slidesPerView: 4,
              spaceBetween: 60,
            },
          }}
        >
    {testimonials.map((testimonial, index) => (
      <SwiperSlide key={index} className="">
        <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
        <div className="p-8 rounded-[50px] flex flex-col  bg-white w-80 h-auto">
          <div className="flex flex-row ">
          <img
            className="w-16 h-16 rounded-full object-cover mb-4  m-2"
            src={testimonial.image}
            alt={testimonial.name}
          />
          <div className="flex flex-col  items-center justify-center">
          <h3 className="text-lg font-medium font-galano">{testimonial.name}</h3>
          <div className="flex justify-center ">
            <span className="text-yellow-500 pt-0">★★★★★</span>
          </div>
          </div>
          </div>
          <p className="text-gray-600 font-galano mb-4 text-left pt-3">
            {testimonial.review}
          </p>
         <div className="flex flex-row justify-between items-center">
         <p className="font-bold font-galano">{testimonial.course}</p>
         <img src={www} alt="" className="h-3/4" />
         </div>
        </div>
        </div>
        </SwiperSlide>
    ))}
        </Swiper>
        <div className="flex items-center justify-center mt-4">
         
          <div className=" text-2xl cursor-pointer mr-4 slidePrev-btn">&lt;</div>

          <div className=" flex space-x-2  ">• • • •</div>

          <div className=" text-2xl cursor-pointer ml-4 slideNext-btn">&gt;</div>
          </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;