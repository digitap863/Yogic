import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";

function Layout1({ image, benefits }) {
  return (
    <div>
      <div className="container mx-auto flex justify-center py-8">
        <div className="flex flex-col md:flex-row items-center lg:max-w-6xl">
          {/* Image section taking 1/3 width */}
          <div className="md:w-1/3 mb-6 md:mb-0 bg-white flex justify-center ">
            <div className="rounded-3xl overflow-hidden">
            <div data-aos="fade-right">
              <img src={image} alt="Yoga practice" className="max-w-full h-auto object-cover" />
             </div>
            </div>
          </div>
          {/* Text section taking 2/3 width */}
          <div className="md:w-2/3 md:pl-0 pr-10">
            <ul className="space-y-6 pl-7">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex">
                  <IoMdArrowDropright className="mt-1 mr-2 w-14 h-6 " />                  
                  <div className=''>
                    <h3 className="font-semibold text-lg font-galano">{benefit.heading}</h3>
                    <p className="text-gray-600 md:pr-20 md:mr-20 font-galano ">{benefit.description}</p>
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

