import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

function Layout2({ image, benefits }) {
  return (
    <div>
      <div className="container mx-auto py-8 flex justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center bg-white lg:max-w-6xl">
        <div className="md:w-2/3 md:pl-8">
          <ul className="space-y-6 md:pr-20 md:mr-10 md:pl-20 ml-8 pr-10">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex bg-white">
                <IoMdArrowDropright className="mt-1 mr-2 w-14 h-6" />                  
                <div>
                  <h3 className="font-semibold text-lg font-galano">{benefit.heading}</h3>
                  <p className="text-gray-600 font-galano ">{benefit.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/3 mb-6 md:mb-0 bg-white flex justify-center">
          <div className="rounded-3xl overflow-hidden">
          <div data-aos="fade-left">
            <img src={image} alt="Yoga practice" className="max-w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>
    </div>
 </div>
  )
}

export default Layout2
