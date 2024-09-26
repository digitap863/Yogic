import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#64BA75] text-white py-10 md:pl-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Adjust grid for mobile (2 sections) and larger screens */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 gap-8">
          
          {/* Learn More Section */}
          <div>
            <h3 className="font-semibold mb-4">Learn More</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Yoga', 'Meditation', 'Courses', 'Gallery', 'Blog', 'Contact'].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Yoga Courses Section */}
          <div>
            <h3 className="font-semibold mb-4">Yoga Courses</h3>
            <ul className="space-y-2">
              {['Beginner Yoga Series', 'Yoga For Stress Relief', 'Yoga For Flexibility', 'Morning Yoga Routine', 'Yoga For Seniors', 'Yoga For Perimenopausal', 'And Menopausal Women'].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Meditation Courses Section */}
          <div>
            <h3 className="font-semibold mb-4">Meditation Courses</h3>
            <ul className="space-y-2">
              {['Meditations for beginners', 'Intermediate', 'Advanced', 'Spiritual Coaching', 'Meditations for kids', 'Meditations for teens', 'Meditation for adults', 'Chakra healing program'].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Mobile Number</li>
              <li>E-mail</li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-200"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-200"><Instagram size={24} /></a>
              <a href="#" className="hover:text-gray-200"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-200"><Youtube size={24} /></a>
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
