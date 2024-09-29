import React from 'react';
import circleGirls from '../../assets/images/Group 7.png';
import Pose1 from '../../assets/images/serious-expression-hair-bun-tank-top.png'
import Pose2 from '../../assets/images/sitting-yoga-mat.png'
import Pose3 from '../../assets/images/standing-yoga-pose.png'
import Pose4 from '../../assets/images/woman-yoga.png';
import { FaArrowRight } from "react-icons/fa";



const Yoga = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto  py-12 px-4">
      {/* Left section with text */}
      <div className="lg:w-2/5 text-center lg:text-left space-y-6 self-start">
        <h2 className="text-4xl font-bold pb-2">
          <span className="block font-galano">Discovering Your True <br className='hidden md:block'/> Self</span>
          {/* <span className="block font-galano"></span> */}
        </h2>
        <div className=" items-center space-x-4 justify-center lg:justify-start hidden lg:block">
          <img
            className=""
            src={circleGirls}
            alt="profile1"
          />   
        </div>
        <p className="text-gray-600 pr-2 hidden lg:block font-galano">
          Discover The Transformative Power Of Yoga With Our Expert-Led Classes,
          Designed To Nurture Your Mind, Body, And Spirit. Join Our Community
          And Start Your Journey To Wellness Today.
        </p>
        <button className="bg-[#64BA75] text-white px-6 py-2 rounded-full hover:bg-green-600 transition  hidden lg:block font-Epilogue">
          Learn More →
        </button>
      </div>

      {/* Right section with images */}
      <div className="lg:w-3/5 flex justify-center items-start self-start">
          <div className='flex justify-center items-center'>
          <img
            className="rounded-xl object-cover w-11/12 h-full"
            src={Pose4}
            alt="yoga-main"
          />
          </div>

          <div className="lg:w-1/3 flex flex-col space-y-6 justify-center lg:justify-end ">
            <img
              className="lg:rounded-2xl rounded-[50px] object-cover w-full h-24 lg:h-32"
              src={Pose1}
              alt="yoga-thumbnail-1"
            />
            <img
              className="lg:rounded-2xl rounded-[50px] object-cover w-full h-24 lg:h-32"
              src={Pose2}
              alt="yoga-thumbnail-2"
            />
            <img
              className="lg:rounded-2xl rounded-[50px] object-cover w-full h-24 lg:h-32"
              src={Pose3}
              alt="yoga-thumbnail-3"
            />
          </div>
      </div>

      <div className="lg:hidden space-y-4 text-left  self-start">
  <div className="flex items-center space-x-4">
    <img
      className=""
      src={circleGirls}
      alt="profile1"
    />
  </div>
  <p className="text-gray-600 pr-2 font-galano">
    Discover The Transformative Power Of Yoga With Our Expert-Led Classes,
    Designed To Nurture Your Mind, Body, And Spirit. Join Our Community
    And Start Your Journey To Wellness Today.
  </p>
  <button className="bg-[#64BA75] inline-flex items-center font-Epilogue text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
    Learn More<FaArrowRight className="ml-2" />
  </button>
      </div>

     
    </section>
  );
};

export default Yoga;
