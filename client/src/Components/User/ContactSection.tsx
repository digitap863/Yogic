import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { IoLocationOutline, IoMailOutline, IoCallOutline } from 'react-icons/io5';
import { GrMapLocation } from "react-icons/gr";


function ContactSection() {
  return (
    <div>
        <div className="relative w-full h-[60vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex items-center justify-center">
            <div className="relative z-10 text-center">
            <h1 className="text-5xl font-semibold text-black mb-6 uppercase">contact us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 p-3">
                At YogicBlis, we’re here to support your journey to wellness and inner peace. Whether you have questions about our classes, need assistance with your membership, or just want to learn more about our offerings, we’d love to hear from you!
            </p>
            </div>
       </div>

       <div className="min-h-screen bg-white flex justify-center items-center w-full px-6 py-10">
  <div className="flex flex-col md:flex-row bg-white py-10 max-w-6xl w-full">
    
    {/* Left Column */}
    <div className="md:w-1/2 w-full px-6 md:px-12 text-center md:text-left bg-white mb-6 md:mb-0">
      <div className="max-w-sm mx-auto"> {/* Center the content in mobile view */}
        
        {/* Address Section */}
        <div className="mb-8">
          <div className="flex items-center">
            <div className="bg-[#64BA75] rounded-full p-4 mr-4">
              <GrMapLocation className="text-white text-3xl" />
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
            <div className="bg-[#64BA75] rounded-full p-4 mr-4">
              <IoMailOutline className="text-white text-3xl" />
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
            <div className="bg-[#64BA75] rounded-full p-4 mr-4">
              <IoCallOutline className="text-white text-3xl" />
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
      <h2 className="text-lg font-normal text-gray-800 mb-6 font-galano">
        Please fill out the form below, and we’ll get in touch with you shortly.
      </h2>
      <form className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            className="w-full h-28 px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex justify-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 bg-[#64BA75] text-white rounded-[50px] hover:bg-white hover:text-[#64BA75] transition border border-green-500"
          >
            Submit <FaArrowRight className="ml-2" />
          </a>
        </div>
      </form>
    </div>
  </div>
</div>


      
      
    </div>
  )
}

export default ContactSection
