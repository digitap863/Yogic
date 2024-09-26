import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import girl4 from '../../assets/images/Courses4.png'
import girl5 from '../../assets/images/Courses5.png'
import TestimonialSlider from './Testimonial';
import Contact from './Contact'



function GallerySection() {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('yoga');
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

  return (
    <div>
       <div className="relative w-full h-[60vh]  bg-gradient-to-r from-white via-emerald-100 to-emerald-100 flex items-center justify-center">
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-semibold text-black mb-6 uppercase">Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We believe in a holistic approach to wellness, integrating mind, body, and spirit through traditional yogic practices.
          </p>
          <button
            onClick={() => navigate(`/contact`)}
            className="text-white bg-[#64BA75] py-4 px-8 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Contact Us →
          </button>
        </div>
       </div>

      <div className="flex flex-col items-center py-10">
        <div className="flex flex-col  md:flex-row md:space-x-4  mb-4">
          <button
            onClick={() => setSelectedClass('yoga')}
            className={`m-1 px-6 py-2 rounded-full  ${
              selectedClass === 'yoga' ? 'bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]' : 'bg-white text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white'
            }`}
          >
            Yoga Classes
          </button>
          <button
            onClick={() => setSelectedClass('meditation')}
            className={`m-1 px-6 py-2 rounded-full  ${
              selectedClass === 'meditation' ? 'bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]' : 'bg-white text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white'
            }`}
          >
            Meditation Classes
          </button>
        </div>

        {/* Conditionally Render Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {selectedClass === 'yoga'
            ? yogaImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Yoga ${index + 1}`}
                  className="w-full h-full object-cover rounded-[50px]"
                />
              ))
            : meditationImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Meditation ${index + 1}`}
                  className="w-full h-full object-cover rounded-[50px]"
                />
              ))}
        </div>
      </div>

      <TestimonialSlider />
      <Contact />
      
    </div>
  )
}

export default GallerySection
