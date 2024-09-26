import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdWbSunny } from "react-icons/md";
import girl from '../../assets/images/Mask group.png'
import girl1 from '../../assets/images/Mask group1.png'
import girl2 from '../../assets/images/Mask group2.png'
import { Disclosure } from "@headlessui/react";
import { IoMdArrowDropright } from "react-icons/io";
import yoga_girl from '../../assets/images/yoga.png';
import CourseSection from '../User/Courses';
import TestimonialSlider from '../User/Testimonial';
import Contact from '../User/Contact';
import Layout from './Layout';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';



function About() {
  const navigate = useNavigate();
  
 
const yogaData = [
    {
      question: 'Increased Flexibility',
      answer: 'Yoga helps improve flexibility, enhancing range of motion and reducing the risk of injury.',
    },
    {
      question: 'Strength Building',
      answer: 'Yoga strengthens muscles and increases endurance.',
    },
    {
      question: 'Stress Relief',
      answer: 'Yoga reduces stress by calming the nervous system and promoting relaxation.',
    },
    {
      question: 'Better Posture',
      answer: 'Yoga improves body alignment and helps maintain good posture.',
    },
    {
      question: 'Enhanced Mental Focus',
      answer: 'Yoga enhances concentration and focus by calming the mind.',
    },
  ];

  const meditationData = [
    {
      question: 'Reduces Stress',
      answer: 'Meditation helps calm the mind, lowering stress levels and promoting relaxation.',
    },
    {
      question: 'Enhances Focus',
      answer: 'Meditation improves concentration by quieting the mind and eliminating distractions.',
    },
    {
      question: 'Boosts Emotional Well-Being',
      answer: 'Meditation helps regulate emotions, leading to a greater sense of emotional balance and well-being.',
    },
    {
      question: 'Improves Sleep',
      answer: 'Meditation can aid in improving sleep quality by reducing stress and promoting relaxation.',
    },
    {
      question: 'Increases Self-Awareness',
      answer: 'Meditation fosters self-awareness by encouraging mindful reflection on thoughts and emotions.',
    },
  ];

  const yogaTeachers = [
    { name: "Elisa Willson", image: "/api/placeholder/400/300" },
    { name: "Elisa Willson", image: "/api/placeholder/400/300" },
    { name: "Elisa Willson", image: "/api/placeholder/400/300" },
    { name: "Elisa Willson", image: "/api/placeholder/400/300" },
    { name: "Elisa Willson", image: "/api/placeholder/400/300" },

  ];


  return (
    <div>
      <div className="relative w-full h-[60vh]  bg-gradient-to-r from-white via-emerald-100 to-emerald-100 flex items-center justify-center">
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-semibold text-black mb-6">ABOUT US</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          At Yogic, we believe in the transformative power of yoga to enhance your well-being. Our dedicated instructors create a welcoming space where you can explore and deepen your practice.
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
      image= {girl}
      heading="Our Passion for Yoga, Your Path to Wellness"
      description="At Yogic, we believe in the transformative power of yoga to
                            enhance your well-being. Our dedicated instructors create a
                            welcoming space where you can explore and deepen your practice.
                            Whether you're a beginner or seasoned yogi, we’re here to support
                            your journey to balance, strength, and inner peace. Join us and
                            discover how yoga can enrich your life."
      ctaText="Learn More"
      ctaLink="/girl"
    />

      <CourseSection />
      
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-left mb-12 pl-4">Benefits of Yoga and Meditation</h2>
      {/* Yoga Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 mb-12 p-16 border border-gray-300 rounded-3xl">
      <div className="lg:w-1/2 space-y-4">
      <h3 className="text-2xl font-bold">YOGA:</h3>
      <ul className="space-y-2">
        {yogaData.map((faq, index) => (
          <Disclosure key={index} as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-start space-x-2 w-full py-2 text-left">
                  <IoMdArrowDropright
                    className={`${
                      open ? 'rotate-90 transform' : ''
                    } mt-1 w-5 h-5 text-green-500 transition-transform duration-300`}
                  />
                  <span className="font-semibold text-left text-lg">{faq.question}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="pl-7 text-gray-600">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </ul>
    </div>
        <div className=" flex justify-center">  
            <img
              className=" w-auto h-auto object-cover"
              src={girl1}
              alt="Yoga Pose 3"
            />
        </div>
      </div>
     {/* meditation section */}
     <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 mb-12 p-16 border border-gray-300 rounded-3xl">
     <div className=" flex justify-center">  
            <img
              className=" w-auto h-auto object-cover"
              src={girl2}
              alt="Yoga Pose 3"
            />
        </div>
      <div className="lg:w-1/2 space-y-4">
      <h3 className="text-2xl font-bold">MEDITATION :</h3>
      
      <ul className="space-y-2">
        {meditationData.map((faq, index) => (
          <Disclosure key={index} as="div">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-start space-x-2 w-full py-2 text-left">
                  <IoMdArrowDropright
                    className={`${
                      open ? 'rotate-90 transform' : ''
                    } mt-1 w-5 h-5 text-green-500 transition-transform duration-300`}
                  />
                  <span className="font-semibold text-left text-lg">{faq.question}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="pl-7 text-gray-600">
                  {faq.answer}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </ul>
    </div>
       
      </div> 
    </section>

    <section className="container mx-auto bg-white pb-20 px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">MEET OUR EXPERT YOGA GUIDE</h2>
      <Swiper
        modules={[ Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
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
          1280: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
        freeMode={true} // Enables the free scroll effect
        scrollbar={{ draggable: true }} // Enables a draggable scrollbar
      >
        {yogaTeachers.map((teacher, index) => (
          <SwiperSlide key={index}>
            <YogaTeacherCard name={teacher.name} image={teacher.image} />
          </SwiperSlide>
        ))}
      </Swiper>

  
    </section>

    <TestimonialSlider />
    <Contact />

    </div>
  )
}

const YogaTeacherCard = ({ name, image }) => (
    <div className="rounded-[50px]  overflow-hidden shadow-lg">
      <img src={image} alt={name} className="w-full h-64 object-cover aspect-square" />
      <div className="bg-green-100 p-4">
        <p className="text-gray-600 text-sm">Yoga Teacher</p>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
    </div>
  );

export default About
