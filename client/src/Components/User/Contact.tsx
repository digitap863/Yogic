import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import {Button} from "@nextui-org/react";
import { getdata } from "../../api/req";
import { useNavigate } from "react-router-dom";


function Contact() {
  const navigate = useNavigate()
  const [countries, setCountries] = useState([]); // Holds the list of country names
  const [selectedCountry, setSelectedCountry] = useState(""); // Holds the selected country
  const [courses , setCourse] = useState([])
  const [selectedCourse, setSelectedCourse] = useState(""); // Holds the selected country




  
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v3.1/all');
        const data = await response.json();
        const countryNames = data.map(country => country.name.common); // Extracting only the common names
        setCountries(countryNames); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchCourses = async () => {
      try {
        const response = await getdata('/courses');
        const courseHeadings = response.data.data.map(x =>x.heading)
        setCourse(courseHeadings);
      } catch (error) {
        console.error('Error fetching Courses:', error);
      }
    };


  useEffect(() => {
    fetchData();
    fetchCourses();
  }, []);
  
  // console.log(countries,"countriescountriescountries")
  // console.log(courses,"coursescoursescoursescourses")

  return (
    <div className=" bg-white flex md:justify-center md:items-center w-full px-6 sm:px-12 py-8 overflow-hidden ">
      <div className="flex flex-col md:flex-row md:items-center bg-white py-10 max-w-6xl">
        {/* Left Section */}
        <div className="md:w-1/2  md:text-left  bg-white md:mr-20 md:px-12 self-start">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4 sm:mb-6 font-galano">
            BOOK YOUR SESSION
          </h2>
          <p className="text-gray-600 mb-6 sm:mb-8 md:text-lg sm:text-lg font-galano">
            Join us on your yogic journey! Reserve your spot today and discover
            classes that help you unwind, strengthen, and find balance. Start
            your transformation now.
          </p>
          <div data-aos="fade-up">
          <Button
           onClick={()=>navigate(`/contact`)}
           size='lg'
            className="inline-flex items-center px-6 sm:px-10 py-5 bg-[#64BA75] text-white rounded-full hover:bg-green-600 transition font-galano"
          >
            Contact us <FaArrowRight className="ml-2 " />
          </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full mt-10 md:mt-0 text-left md:text-left bg-white">
          <h2 className=" text-sm md:text-lg font-normal text-gray-800 mb-4 sm:mb-6 font-galano">
            Book your session in just a few clicks and start your yoga journey today!
          </h2>
          <form className="space-y-4 w-full">
            <div>
            <div data-aos="fade-right">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-gray-100 text-gray-700 focus:outline-none  font-galano"
              />
              </div>
            </div>
            <div>
               <div data-aos="fade-left">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-gray-100 text-gray-700 focus:outline-none font-galano"
              />
              </div>
            </div>
            <div data-aos="fade-right">
            <select
                className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-gray-100 text-gray-500 focus:outline-none pr-10 font-galano" 
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)} // Set selected country
              >
                <option value="" >Select a Course</option>
                {courses.map((courses, index) => (
                  <option key={index} value={courses} className="text-gray-700">
                    {courses}
                  </option>
                ))}
              </select>
            </div>
            <div>
               <div data-aos="fade-left">
              <input
                type="text"
                placeholder="Pick a day"
                className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-gray-100 text-gray-700 focus:outline-none font-galano"
              />
              </div>
            </div>
            <div>
            <div data-aos="fade-right">     
            <select
                className="w-full px-4 py-3 sm:py-4 rounded-2xl bg-gray-100 text-gray-500 focus:outline-none pr-10 font-galano"
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)} // Set selected country
              >
                <option value="">Select a country</option>
                {countries.map((country, index) => (
                  <option key={index} value={country} className="text-gray-700">
                    {country}
                  </option>
                ))}
              </select>
              </div>
            </div>
            <div className="flex justify-center pt-4">
            <div data-aos="fade-up">
              <Button
               size='lg'
                className="inline-flex items-center px-8 py-6 sm:px-8 bg-white text-[#64BA75] rounded-full hover:bg-[#64BA75] hover:text-white transition  border-2 border-[#64BA75] font-Epilogue"
              >
                Book a Class <FaArrowRight  />
              </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

