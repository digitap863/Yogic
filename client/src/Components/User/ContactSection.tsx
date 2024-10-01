import React, { useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { IoLocationOutline, IoMailOutline, IoCallOutline } from 'react-icons/io5';
import { GrMapLocation } from "react-icons/gr";
import { Button } from '@nextui-org/react';


function ContactSection() {
 
  return (
    <div>
     
        <div className="relative w-full h-[60vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex items-center justify-center">
        <div data-aos="fade-down">
            <div className="relative z-10 text-center">
            <h1 className="text-5xl font-semibold text-black mb-6 uppercase  font-galano">contact us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 p-3 font-galano">
                At YogicBlis, we’re here to support your journey to wellness and inner peace. Whether you have questions about our classes, need assistance with your membership, or just want to learn more about our offerings, we’d love to hear from you!
            </p>
            </div>
       </div>
       </div>
       <div className=" bg-white flex justify-center items-center w-full px-6 py-14">
  <div className="flex flex-col md:flex-row bg-white py-10 max-w-6xl w-full">
    
    {/* Left Column */}
    <div className="md:w-1/2 w-full px-6 md:px-12 text-center md:text-left bg-white mb-6 md:mb-0">
      <div className="max-w-sm mx-auto"> {/* Center the content in mobile view */}
        
        {/* Address Section */}
        <div className="mb-8">
          <div className="flex items-center">
          <div data-aos="flip-up">
            <div className="bg-[#64BA75] rounded-full p-4 mr-10">
              <GrMapLocation className="text-white text-3xl" />
            </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 text-left font-galano">Address</h2>
              <p className="text-gray-600 text-left font-galano">YogicBliss Yoga Studio</p>
              <p className="text-gray-600 text-left font-galano">123 Harmony Lane</p>
              <p className="text-gray-600 text-left font-galano">Wellness City, YG 45678</p>
              <p className="text-gray-600 text-left font-galano">Country</p>
            </div>
          </div>
        </div>

        {/* Email Section */}
        <div className="mb-8">
          <div className="flex items-center">
          <div data-aos="flip-down">
            <div className="bg-[#64BA75] rounded-full p-4 mr-10">
              <IoMailOutline className="text-white text-3xl" />
            </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 text-left font-galano">Email Address</h2>
              <p className="text-gray-600 text-left font-galano">yogicbliss123@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-8">
          <div className="flex items-center">
          <div data-aos="flip-up">
            <div className="bg-[#64BA75] rounded-full p-4 mr-10">
              <IoCallOutline className="text-white text-3xl" />
            </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 text-left font-galano">Contact Us</h2>
              <p className="text-gray-600 text-left font-galano">+91 0000 000 000</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* Right Column */}
    <div className="md:w-1/2 w-full px-6 md:px-12 text-center md:text-left bg-white">
      <h2 className="text-lg font-normal text-gray-600 mb-6 font-galano">
        Please fill out the form below, and we’ll get in touch with you shortly.
      </h2>
      <form className="space-y-4">
        <div>
          <div data-aos="fade-right">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3  rounded-2xl bg-gray-100 text-gray-700 focus:outline-none"
          />
          </div>
        </div>
        <div>
          <div data-aos="fade-left">
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-3  rounded-2xl bg-gray-100 text-gray-700 focus:outline-none"
          />
          </div>
        </div>
        <div>
          <div data-aos="fade-right">
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-3  rounded-2xl bg-gray-100 text-gray-700 focus:outline-none"
          />
          </div>
        </div>
        <div>
        <div data-aos="fade-left">
          <textarea
            placeholder="Your Message"
            className="w-full h-28 px-4 py-3  rounded-2xl bg-gray-100 text-gray-700 focus:outline-none"
          />
          </div>
        </div>
        <div data-aos="fade-up">
        <div className="flex justify-center">
        <Button 
          size='lg'
          // onClick={}
          className='bg-[#64BA75] inline-flex items-center px-10 py-4 rounded-[50px] text-white font-Epilogue text-sm'>
            Submit <FaArrowRight className="mb-0.5" />
          </Button>
        </div>
        </div>
       
      </form>
    </div>
  </div>
</div>


      
      
    </div>
  )
}

export default ContactSection
