import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Rectangle from '../../assets/images/Rectangle 8.png'; // Ensure this path is correct
import Layout from './Layout';
import girl from '../../assets/images/BeginnerYoga.png'
import girl1 from '../../assets/images/BeginnerYoga2.png'
import girl2 from '../../assets/images/BeginnerYoga3.png'
import girl3 from '../../assets/images/BeginnerYoga4.png'
import FAQ from './Faq';
import Contact from './Contact';
import { FaArrowRight } from 'react-icons/fa';
import logo from '../../assets/images/IMG_2842.png'
import { GoDotFill } from "react-icons/go";
import { getdata } from '../../api/req';


function BeginnerYogaSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  const faqData = [
    {
      question: 'Do I need any yoga experience to join?',
      answer: 'No, this course is designed for absolute beginners.',
    },
    {
      question: 'What if I miss a live class?',
      answer: 'If you miss a live class, a recording will be available for you to watch at your convenience.',
    },
    {
      question: 'What equipment do I need?',
      answer: 'You will need a yoga mat, comfortable clothing, and a water bottle. Optional equipment includes yoga blocks and straps.',
    },
    {
      question: 'How do I access the course materials?',
      answer: 'You can access all course materials, including recorded sessions and handouts, through our online platform once you enroll in the course.',
    },
  ];
  console.log(id)
  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await getdata(`/course/${id}`);  
        setCourse(response.data.data);  
      } catch (error) {
        console.error('Error fetching blog details:', error);
      }
    };
    
    fetchCourseDetails();  // Call the function to fetch blog details
  }, [id]);
  console.log(course,"--------------------------------------responseresponseresponse")

  return (
    <div>
                 

        <div className="relative w-full h-[90vh] bg-cover bg-center" style={{ backgroundImage: `url(http://localhost:3000/api/uploads/${course.cardImage})` }}>
            {/* Overlay to control the gradient and transparency */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-emerald-200 to-emerald-100 opacity-80"></div>

            {/* Navbar */}
            <nav className="relative z-20 bg-transparent p3-4">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} alt="Logo" className="h-134 w-150" />
                    </div>
                </div>
                <button
                    className="block md:hidden p-2 w-10 h-10 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:flex md:w-auto ${isMenuOpen ? 'block bg-white md:bg-transparent' : 'hidden'}`} id="navbar-default">
                    <ul className="text-center font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                    <li>
                        <Link to="/" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">About us</Link>
                    </li>
                    <li>
                        <Link to="/yoga" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Yoga</Link>
                    </li>
                    <li>
                        <Link to="/meditation" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Meditation</Link>
                    </li>
                    <li>
                        <Link to="/courses" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Courses</Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Gallery</Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="uppercase block py-2 px-3 text-gray-500 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-black md:p-0 dark:text-white md:dark:hover:text-black dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent font-chalet text-sm">Contact us</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>

            {/* Banner Content */}
            <div className="relative z-10 flex items-center justify-center h-[80vh] text-center">
                <div>
                <h1 className="text-5xl font-bold text-black mb-6">{course.heading}</h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          {course.description}
                </p>
                <div className="flex justify-center items-center">
                    <button
                    onClick={() => navigate(`/contact`)}
                    className="flex items-center justify-center text-white bg-[#64BA75] py-4 px-8 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
                    >
                    Contact Us
                    <FaArrowRight className="ml-2" />
                    </button>
                </div>
                </div>
            </div>
        </div>

{/* image and text */}
      <Layout 
        image={girl}
        heading="Welcome to the Beginner Yoga Series"
        description={`<p>Are you new to yoga and looking for a supportive and structured way to begin? Our Beginner Yoga Series is designed just for you. This course will guide you through the foundational poses, breathing techniques, and mindfulness practices that form the core of yoga, helping you build strength, flexibility, and inner peace.</p><br/>
        <p>You’ll gain confidence in your practice with clear, step-by-step instructions from experienced instructors. Each session is crafted to introduce you to key concepts gradually, making yoga accessible and enjoyable. Join our community of beginners and start your journey toward a healthier, more balanced life today.</p>`}
        ctaText=""
        ctaLink=""
      />

    <div>
    <div className="container mx-auto flex px-6 items-center justify-center">
        <div className=" max-w-7xl flex flex-col md:flex-row items-center bg-white">
          <div className="md:w-2/3 md:pl-8 md:pr-20">
            <h2 className="text-3xl font-semibold mb-6 font-galano">Beginner Yoga Series</h2>
            <div className="md:w-1/3 mb-6 md:mb-0  justify-center block lg:hidden">
            <div className="rounded-3xl overflow-hidden ">
              <img src={girl1} alt="Yoga practice" className="max-w-full h-auto object-cover" />
            </div>
          </div>
            <ul className="list-disc list-inside space-y-4">   
              <li className="flex items-start">
             <GoDotFill className='w-8' />
                <div>
                <p>
                <span className="font-semibold text-lg font-galano">Overview:</span> 
                <span className="text-gray-600 text-base font-normal font-galano ">
                    &nbsp;A series of classes designed for beginners focusing on foundational poses and basic breathing techniques, and an introduction to mindfulness.
                </span>
                </p>
                </div>
              </li>
              <li className="flex items-start">
               <GoDotFill  />
                <div>
                <p>
                <span className="font-semibold text-lg font-galano">Duration:</span> 
                <span className="text-gray-600 text-base font-normal font-galano">
                    &nbsp;4 to 6 weeks
                </span>
                </p>
                </div>
              </li>
              <li className="flex items-start">
              <GoDotFill />
                <div>
                <p> 
                <span className="font-semibold text-lg font-galano">Goals:</span> 
                <span className="text-gray-600 text-base font-normal font-galano">
                    &nbsp;Build confidence, learn the basics, and create a foundation for future practice.
                </span>
                </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 mb-6 md:mb-0  justify-center hidden md:block">
            <div className="rounded-3xl overflow-hidden ">
              <img src={girl1} alt="Yoga practice" className="max-w-full h-auto object-cover" />
            </div>
          </div>
        </div>
    </div>

    <div className="container mx-auto md:px-20 px-4 py-4 flex items-center justify-center">
        <div className="  max-w-7xl flex flex-col md:flex-row items-center">
        <h2 className="text-3xl font-semibold mb-6 pt-4 block lg:hidden">What You'll Learn</h2>

          <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
            <div className="rounded-3xl overflow-hidden">
              <img src={girl2} alt="Yoga practice" className="max-w-full h-auto object-cover" />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-20 md:pr-20 md:mr-20">
            <h2 className="text-3xl font-semibold mb-6 hidden md:block">What You'll Learn</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-3 mr-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div>
                <p>
                <span className="font-semibold text-lg">Master Basic Poses</span> 
                <span className="text-gray-600 text-base font-normal">
                    &nbsp;Learn essential yoga poses like Downward Dog, Warrior I, and Child's Pose.
                </span>
                </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-3 mr-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div>
                <p>
                <span className="font-semibold text-lg">Understand Alignment:</span> 
                <span className="text-gray-600 text-base font-normal">
                    &nbsp;Get detailed instructions on how to safely align your body in each pose.

                </span>
                </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-3 mr-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div>
                <p>
                <span className="font-semibold text-lg">Practice Breath Control:</span> 
                <span className="text-gray-600 text-base font-normal">
                    &nbsp;Discover Pranayama (breath control) techniques to enhance your practice.
                </span>
                </p>
                  </div>
              </li>
              <li className="flex items-start">
                <div className="mt-3 mr-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div>
                <p>
                <span className="font-semibold text-lg">Build Strength and Flexibility:</span> 
                <span className="text-gray-600 text-base font-normal">
                    &nbsp;Gradually improve your physical fitness and flexibility.
                </span>
                </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-3 mr-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div>
                <p>
                <span className="font-semibold text-lg">Cultivate Mindfulness:</span> 
                <span className="text-gray-600 text-base font-normal">
                    &nbsp; Learn how to integrate mindfulness into your yoga practice and daily life.
                </span>
                </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
    </div>

    <div className="container mx-auto md:px-20 md:py-12 px-4 py-4 flex items-center justify-center">
        <div className="  max-w-7xl flex flex-col md:flex-row items-center bg-white">
          <div className="md:w-2/3 md:pl-8 md:pr-20 ">
            <h2 className="text-3xl font-semibold mb-6">Course Features</h2>
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center lg:hidden ">
            <div className="rounded-3xl overflow-hidden">
              <img src={girl3} alt="Yoga practice" className="max-w-full h-auto object-cover" />
            </div>
          </div>
            <ul className="space-y-4">
              <li className="flex items-start">
              <div className="mt-3 mr-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div>
                <p>
                <span className="font-semibold text-lg">Video Tutorials:</span> 
                <span className="text-gray-600 text-base font-normal">
                    &nbsp;Video Tutorials: Step-by-step video lessons for each session.
                </span>
                </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-3 mr-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div>
                <p>
                <span className="font-semibold text-lg">Live Virtual Classes:</span> 
                <span className="text-gray-600 text-base font-normal">
                    &nbsp; Interactive classes with our experienced instructors.
                </span>
                </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-3 mr-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div>
                <p>
                <span className="font-semibold text-lg">Q&A Sessions:</span> 
                <span className="text-gray-600 text-base font-normal">
                    &nbsp; Weekly live Q&A to address your questions and concerns.
                </span>
                </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-3 mr-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div>
                <p>
                <span className="font-semibold text-lg">Practice Guides:</span> 
                <span className="text-gray-600 text-base font-normal">
                    &nbsp;  Downloadable PDFs with pose breakdowns and tips.
                </span>
                </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mt-3 mr-4 w-1.5 h-1.5 bg-black rounded-full"></div>
                <div>
                <p>
                <span className="font-semibold text-lg">Community Support:</span> 
                <span className="text-gray-600 text-base font-normal">
                    &nbsp; Community Support: Access to our online community for encouragement and connection with fellow beginners.
                </span>
                </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/3 mb-6 md:mb-0  justify-center hidden md:block">
            <div className="rounded-3xl overflow-hidden">
              <img src={girl3} alt="Yoga practice" className="max-w-full h-auto object-cover" />
            </div>
          </div>
        </div>
    </div>

    </div>

    <FAQ faqData={faqData} />
    <Contact />

    </div>


  );
}

export default BeginnerYogaSection;

