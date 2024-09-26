import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

function Layout1({ image, benefits }) {
  return (
    <div>
      <div className="container mx-auto md:px-20 px-5 py-8">
        <div className="flex flex-col md:flex-row items-center">
          {/* Image section taking 1/3 width */}
          <div className="md:w-1/3 mb-6 md:mb-0 bg-white flex justify-center ">
            <div className="rounded-3xl overflow-hidden">
              <img src={image} alt="Yoga practice" className="max-w-full h-auto object-cover" />
            </div>
          </div>
          {/* Text section taking 2/3 width */}
          <div className="md:w-2/3 md:pl-0 pr-20">
            <ul className="space-y-6">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex">
                  <IoMdArrowDropright className="mt-1 mr-2 w-14 h-6 " />                  
                  <div>
                    <h3 className="font-semibold text-lg">{benefit.heading}</h3>
                    <p className="text-gray-600 md:pr-20 md:mr-20">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}  

export default Layout1

