import React, { useEffect, useState } from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { getdata } from '../../api/req';

const Footer = () => {
      const navigate = useNavigate();
      const [data,setData] = useState([])
      const getCourse = async () => {
            const response = await getdata("/courses")
            console.log(response,"**************************************")
            setData(response.data.data)
        }
        useEffect(() => {
            getCourse()
        }, []);
        const handleCourseClick = (courseId) => {
          navigate(`/course/${courseId}`); 
        };

    console.log(data,"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")

    const yogaCourses = data.filter((course:any) => course.courseType === 'YogaCourse');
    const meditationCourses = data.filter((course:any) => course.courseType === 'MeditationCourse');
  return (
    <footer className="bg-[#64BA75] text-white py-10 md:pl-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Adjust grid for mobile (2 sections) and larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Learn More Section */}
          <div>
            <h3 className="font-semibold mb-4 font-galano">Learn More</h3>
            <ul className="space-y-2 font-galano font-light text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Yoga', path: '/yoga' },
                { name: 'Meditation', path: '/meditation' },
                { name: 'Courses', path: '/courses' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Blog', path: '/blogs' },
                { name: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yoga Courses Section */}
              <div>
                <h3 className="font-semibold mb-4 font-galano">Yoga Courses</h3>
                <ul className="space-y-2 font-galano font-light text-sm">
                {yogaCourses.map((course:any) => (
              <li key={course._id}
                
                  onClick={() => handleCourseClick(course._id)} 
                  className="text-left hover:underline cursor-pointer break-words pr-6"
                >
                  {course.heading}
                
              </li>
            ))}
              {/* {['Beginner Yoga Series', 'Yoga For Stress Relief', 'Yoga For Flexibility', 'Morning Yoga Routine', 'Yoga For Seniors', 'Yoga For Perimenopausal', 'And Menopausal Women'].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))} */}
            </ul>
          </div>

          {/* Meditation Courses Section */}
          <div className=''>
            <h3 className="font-semibold mb-4 font-galano  ">Meditation Courses</h3>
            <ul className="space-y-2 font-galano font-light text-sm text-left">
              {meditationCourses.map((course: any) => (
                <li 
                  key={course._id} 
                  className="text-left hover:underline cursor-pointer break-words pr-6"
                  onClick={() => handleCourseClick(course._id)} // Make the whole <li> clickable
                >
                  {course.heading}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-semibold mb-4 font-galano">Contact Us</h3>
            <ul className="space-y-2 font-galano font-light text-sm">
              <li>Mobile Number</li>
              <li>E-mail</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold mb-4 font-galano">Social</h3>
            <div className="flex space-x-4">
              <FaFacebookF className='hover:text-gray-200'size={24} />
              <a href="#" className="hover:text-gray-200"><Instagram size={24} /></a>
              <FaXTwitter className='hover:text-gray-200'size={24} />
              <FaYoutube className='hover:text-gray-200'size={24} />

            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="w-11/12 mx-auto mt-6" />

        {/* Footer bottom */}
        <div className="mt-8 text-center">
          <p>&copy; 2024 Yogic | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
