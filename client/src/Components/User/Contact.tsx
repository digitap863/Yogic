import React from "react";
import { FaArrowRight } from "react-icons/fa";
import {Button} from "@nextui-org/react";


function Contact() {
  return (
    <div className=" bg-white flex md:justify-center md:items-center w-full px-6 sm:px-12 py-8 ">
      <div className="flex flex-col md:flex-row md:items-center bg-white py-10 max-w-6xl">
        {/* Left Section */}
        <div className="md:w-1/2  md:text-left  bg-white md:mr-20 md:px-12 self-start">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6 font-galano">
            BOOK YOUR SESSION
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 md:text-xl sm:text-xl font-galano">
            Join us on your yogic journey! Reserve your spot today and discover
            classes that help you unwind, strengthen, and find balance. Start
            your transformation now.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 sm:px-10 py-3 bg-[#64BA75] text-white rounded-full hover:bg-green-600 transition font-galano"
          >
            Contact us <FaArrowRight className="ml-2 " />
          </a>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0 text-left md:text-left bg-white">
          <h2 className=" text-sm md:text-xl font-normal text-gray-800 mb-4 sm:mb-6 font-galano">
            Book your session in just a few clicks and start your yoga journey today!
          </h2>
          <form className="space-y-4 w-full">
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-gray-100 text-gray-700 focus:outline-none  "
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-gray-100 text-gray-700 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Course"
                className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-gray-100 text-gray-700 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Pick a day"
                className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-gray-100 text-gray-700 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Country"
                className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-gray-100 text-gray-700 focus:outline-none"
              />
            </div>
            <div className="flex justify-center pt-4">
              <Button
               size='lg'
                className="inline-flex items-center px-8 sm:px-8   bg-white text-[#64BA75] rounded-full hover:bg-[#64BA75] hover:text-white transition  border-2 border-[#64BA75] font-Epilogue"
              >
                Book a Class <FaArrowRight  />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

