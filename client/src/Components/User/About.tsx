import { Disclosure } from "@headlessui/react";
import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { getdata } from '../../api/req';
import { url } from '../../api/url';
import girl from '../../assets/images/Mask group.png';
import girl1 from '../../assets/images/Mask group1.png';
import girl2 from '../../assets/images/Mask group2.png';
import YogicAbout from '../../assets/images/YogicAboutImg.png';
import Contact from '../User/Contact';
import CourseSection from '../User/Courses';
import TestimonialSlider from '../User/Testimonial';
import Profiles from '../User/Profiles';
import Layout from './Layout';
import Navbar from './Navbar';





function About() {
  const navigate = useNavigate();
  const [data,setData] = useState([])
  const getCourse = async () => {
        const response = await getdata("/teachers")
        console.log(response,"**************************************")
        setData(response.data.data)
    }
    useEffect(() => {
        getCourse()
    }, []);

    console.log(data,"datadatadatadatadata")
 
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

 

  return (
    <>
    
    <div 
      className='xl:h-[100vh] md:h-[90vh] h-[60vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex flex-col items-center justify-start relative overflow-hidden'
      >
     
        <Navbar/>
        {/* Banner content */}
        <div className='flex flex-col items-center justify-center h-full md:pt-0 lg:mt-0 mt-20'>
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
          <img src={YogicAbout} alt="banner image" className=' xl:w-[100%] md:w-[80%] mx-auto object-contain pb-0' />
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
      image= {girl}
      heading="Yogicbliss: Your Path to Inner Harmony"
      description="In today’s hectic world, achieving tranquility and focus can feel like an elusive goal. At Yogicbliss, we see meditation not just as a practice, but as a powerful tool for cultivating a harmonious and mindful life. Whether you're just beginning your meditation journey or seeking to enhance your existing practice, our resources are crafted to support you every step of the way. Through guided sessions and expert insights, we empower you to unlock the peace within. Embrace a life of balance, clarity, and deeper connection with Yogicbliss."
      ctaText="View Courses"
      ctaLink="/courses"
    />

     


{/* expert yoga guides - section  */}

    {/* <section className="container mx-auto bg-white pb-20 px-8">
      <h2 className="text-4xl font-bold mb-12 text-center">MEET OUR EXPERT YOGA GUIDE</h2>
      <Swiper
        modules={[ Navigation,Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: '.slidePrev-bttn',
          nextEl: '.slideNext-bttn'
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
          1280: {
            slidesPerView: 4,
            spaceBetween: 60,
          },
        }}
        freeMode={true} // Enables the free scroll effect
        scrollbar={{ draggable: true }} // Enables a draggable scrollbar
      >
        {data.map((x:any, index) => (
          <SwiperSlide key={index}>
            <YogaTeacherCard name={x.Name} image={x.Image} type={x.TeacherType} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-end items-center mt-8 lg:pr-10 pr-4">
        <div className="flex space-x-4">
          <button  className="bg-white p-2 rounded-full  slidePrev-bttn">
            <IoIosArrowBack className="text-2xl text-green-500" />
          </button>
          <button className="bg-white p-2 rounded-full  slideNext-bttn">
            <IoIosArrowForward className="text-2xl text-green-500" />
          </button>
        </div>
      </div>
    </section> */}


    <Profiles />

    <CourseSection />
      
      <section className="max-w-7xl mx-auto px-6 py-12 overflow-hidden">
        <h2 className="text-3xl font-bold text-left mb-12 pl-4 font-galano">Benefits of Yoga and Meditation</h2>
        {/* Yoga Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-between items-start space-y-6 lg:space-y-0 mb-12 p-16 border border-gray-300 rounded-3xl">
        <div className="lg:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold pt-4 font-galano">YOGA:</h3>
        <ul className="space-y-2">
          {yogaData.map((faq, index) => (
            <Disclosure key={index} as="div">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-start space-x-2 w-full py-2 text-left">
                  <span
                      className={`${
                        open ? 'rotate-90 transform' : ''
                      } mt-1 w-5 h-5 text-green-500 transition-transform duration-300`}
                    >
                      {open ? '➤' : '➤'}
                    </span>
                    <span className="font-medium text-left text-lg font-galano">{faq.question}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-7 text-gray-600 font-galano">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </ul>
      </div>
          <div className="  flex justify-center ">  
            <div>
            <div data-aos="fade-left">
              <img
                className=" w-auto h-auto object-cover "
                src={girl1}
                alt="Yoga Pose 3"
              />
              </div>
              </div>
          </div>
        </div>
       {/* meditation section */}
       <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0 mb-12 p-16 border border-gray-300 rounded-3xl">
       <div className="  lg:w-1/2 flex justify-center">  
       <div data-aos="fade-right">
  
              <img
                className=" w-auto h-auto object-cover"
                src={girl2}
                alt="Yoga Pose 3"
              />
              </div>
          </div>
        <div className="lg:w-1/2 space-y-4">
        <h3 className="text-2xl font-bold">MEDITATION :</h3>
        
        <ul className="space-y-2">
          {meditationData.map((faq, index) => (
            <Disclosure key={index} as="div">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-start space-x-2 w-full py-2 text-left">
                  <span
                      className={`${
                        open ? 'rotate-90 transform' : ''
                      } mt-1 w-5 h-5 text-green-500 transition-transform duration-300`}
                    >
                      {open ? '➤' : '➤'}
                    </span>
                    <span className="font-medium text-left text-lg font-galano">{faq.question}</span>
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-7 text-gray-600 font-galano">
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

    <TestimonialSlider />
    <Contact />

    </>
  )
}

const YogaTeacherCard = ({ name, image ,type }) => (
    <div className="rounded-[50px]  overflow-hidden ">
      <div data-aos="flip-right">
      <img src={`${url}/uploads/${image}`} alt={name} className="w-full h-64 object-cover aspect-square" />
      <div className="bg-green-100 p-4">
        <p className="text-gray-600 text-sm">{type}</p>
        <h3 className="text-xl font-semibold">{name}</h3>
        </div>
      </div>
    </div>
  );


export default About
