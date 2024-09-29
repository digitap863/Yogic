import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import girl from '../../assets/images/Mask group77.png'
import boy from '../../assets/images/Mask group78.png'
import girl1 from '../../assets/images/Mask group79.png'
import girl2 from '../../assets/images/Mask group80.png'
import girl3 from '../../assets/images/Mask group81.png'
import girl4 from '../../assets/images/Mask group82.png'
import girl5 from '../../assets/images/Mask group83.png'
import girl6 from '../../assets/images/Mask group84.png'
import girl7 from '../../assets/images/girl_7.png'
import girl8 from '../../assets/images/girl_8.png'
import girl9 from '../../assets/images/girl_9.png'
import girl10 from '../../assets/images/girl_10.png'
import girl11 from '../../assets/images/girl_11.png'
import swami2 from '../../assets/images/swami2.png';
import girl0 from '../../assets/images/Mask groupp.png'
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Contact from './Contact';
import {isMobile} from 'react-device-detect'
import { Button } from '@nextui-org/react';
import { FaArrowRight } from 'react-icons/fa';
function YogaPart() {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [isMobileView, setIsMobileView] = useState(true);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const loadMoreStyles = () => {
    setIsMobileView(false); // Show all items on button click
  };

  const yogaBenefits1 = [
    {
      heading: "Improved Flexibility",
      description: "Regular yoga practice stretches muscles, increasing flexibility and range of motion."
    },
    {
      heading: "Strength Building:",
      description: "Many yoga poses engage different muscle groups, helping to build strength and endurance."
    },
    {
      heading: "Stress Reduction:",
      description: "Yoga incorporates breathing exercises and mindfulness, which help reduce stress and promote relaxation."
    }
  ];
  const yogaBenefits2 = [
    {
      heading: "Improved Posture:",
      description: "Through alignment-focused poses, yoga can help correct poor posture and reduce related discomfort."
    },
    {
      heading: "Better Breathing:",
      description: "Yoga's focus on breath control (pranayama) can improve lung capacity and respiratory function."
    }
  ];
  const yogaBenefits3 = [
    {
      heading: "Enhanced Mental Focus:",
      description: "Meditation and mindfulness aspects of yoga can increase concentration and mental clarity."
    },
    {
      heading: "Increased Balance and Stability:",
      description: "Yoga poses that target balance can improve stability and coordination."
    }
  ];
  const yogaBenefits4 = [
    {
      heading: "Boosted Circulation:",
      description: "The flowing sequences of yoga can improve blood circulation, enhancing overall body function."
    },
    {
      heading: "Pain Relief:",
      description: "Yoga can be effective in reducing chronic pain, particularly back, neck, and joint pain."
    }
  ];
  const yogaBenefits5 = [
    {
      heading: "Enhanced Sleep Quality:",
      description: "Yoga's calming effect on the nervous system can improve sleep patterns and quality."
    },
    {
      heading: "Improved Heart Health:",
      description: "Yoga can lower blood pressure, improve circulation, and promote cardiovascular health. "
    }
  ];
  const yogaStreams = [
    { name: 'Raj Yoga', description: 'Path of will power.' },
    { name: 'Karma Yoga', description: 'Path of action.' },
    { name: 'Bhakti Yoga', description: 'Path of worship.' },
    { name: 'Gyana Yoga', description: 'Path of knowledge.' },
  ];
  const yogaStyles = [
    {
      name: 'Hatha Yoga',
      description: 'It focuses on balance of mind and body through physical postures (asanas), breathing techniques (pranayama), and meditation. This style is gentle and slower-paced, ideal for beginners. It improves flexibility, balance, and relaxation.',
      image: girl6
    },
    {
      name: 'Vinyasa Yoga',
      description: 'It focuses on dynamic flow of postures connected by breath. Style transitions quickly with continuous movement. It builds strength, flexibility, and cardiovascular endurance.',
      image: girl7
    },
    {
      name: 'Ashtanga Yoga',
      description: 'It follows a dynamic sequence of postures, practiced in a specific order. It is physically demanding, fast-paced, and rigorous. It increases strength, stamina, flexibility, and focus.',
      image: girl8
    },
    {
      name: 'Iyengar Yoga',
      description: 'It has precision in alignment and posture, often using props like blocks and straps. It is slower-paced with emphasis on detail and posture. It enhances strength, stability, posture, and alignment.',
      image: girl9
    },
    {
      name: 'Bikram Yoga',
      description: 'It is a sequence of 26 specific poses practiced in a heated room (about 105°F/40°C). It is intense, detoxifying, and physically challenging. It improves flexibility, cleanses the body through sweating, and builds endurance.',
      image: girl10
    },
    {
      name: 'Kundalini Yoga',
      description: 'It focuses on awakening energy (kundalini) at the base of the spine. It is a combination of postures, breathing techniques, chanting, and meditation. It boosts awareness, consciousness, and emotional balance.',
      image: girl11
    },
  ];
console.log(yogaStyles.length,"yogaStylesyogaStylesyogaStylesyogaStyles")
  return (
    <div>
      <div className="relative w-full h-[60vh] bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex items-center justify-center">
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-semibold text-black mb-6 font-galano uppercase">yoga</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-galano">
          We believe in a holistic approach to wellness, integrating mind, body, and spirit through traditional yogic practices.
          </p>
          <Button 
          size='lg'
          onClick={() => navigate(`/contact`)}
          className='bg-[#64BA75] inline-flex items-center px-8 py-4 rounded-[50px] text-white font-Epilogue text-sm'>
            Contact Us <FaArrowRight className="" />
          </Button>
        </div>
      </div>
      
      <Layout
      image= {girl}
      heading="Transform Mind, Body, Soul with Yogicblis"
      description="Begin your journey towards inner peace with us, and discover how even small moments of mindfulness can lead to significant changes in your daily life. At Yogicblis, we provide a variety of classes tailored to every experience level, whether you're a beginner stepping onto the mat for the first time or an advanced practitioner seeking to enhance your practice. Our approach combines time-honored yogic traditions with contemporary methods, guiding you to develop physical strength, mental clarity, and spiritual growth."
      ctaText="View Courses"
      ctaLink="#courses"
      />

      <section className="bg-white py-20">
            <div className="container mx-auto bg-white">
                <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-white">
                    {/* Mobile View */}
                    <div className="block md:hidden text-left">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        The Essential Role of Yoga in Modern Life
                        </h2>
                        <img
                            src={boy}
                            alt="girl"
                            className="rounded-lg mb-6"
                        />
                        <p className="text-gray-600 mb-6">
                        In today’s fast-paced world, yoga is more important than ever. Amidst the constant demands of modern life—whether it's the pressure of work, the distractions of digital media, or the stress of daily responsibilities—yoga offers a vital sanctuary for restoring balance and well-being. Its practice provides a holistic approach to health, addressing not just physical fitness but also mental and emotional resilience. Through yoga, individuals can cultivate mindfulness, enhance flexibility, and build strength, all while learning techniques to manage stress and anxiety. The principles of yoga encourage a deeper connection with oneself, fostering a sense of inner peace and clarity that can help navigate the complexities of contemporary living. In essence, yoga offers a much-needed respite from the chaos, promoting a healthier, more centered lifestyle in a world that often feels overwhelming.
                        </p>
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:flex md:flex-row items-center justify-between  pl-10">                        
                        <div className="md:w-1/2 px-12 md:mt-0 text-center md:text-left bg-white mr-2 self-start">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                            The Essential Role of Yoga in Modern Life
                            </h2>
                            <p className="text-gray-600 mb-6 pl-2 ">
                            In today’s fast-paced world, yoga is more important than ever. Amidst the constant demands of modern life—whether it's the pressure of work, the distractions of digital media, or the stress of daily responsibilities—yoga offers a vital sanctuary for restoring balance and well-being. Its practice provides a holistic approach to health, addressing not just physical fitness but also mental and emotional resilience. Through yoga, individuals can cultivate mindfulness, enhance flexibility, and build strength, all while learning techniques to manage stress and anxiety. The principles of yoga encourage a deeper connection with oneself, fostering a sense of inner peace and clarity that can help navigate the complexities of contemporary living. In essence, yoga offers a much-needed respite from the chaos, promoting a healthier, more centered lifestyle in a world that often feels overwhelming.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex flex-col space-y-6 px-16 mx-6 pt-2">
                            <img
                                src={boy}
                                alt="girl"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                  
            </div>
      </section>

    <div className="container mx-auto md:px-20 px-6 md:py-8">
    <p className='font-bold text-4xl md:pl-20 uppercase '>Benefits of Yoga</p>
    </div>

      <Layout1
      image={girl1}
      benefits={yogaBenefits1}
    />

    <Layout2
      image={girl2}
      benefits={yogaBenefits2}
    />

      <div className=" md:hidden mt-6 text-center">
        {!showMore && (
          <button
            className="bg-white text-green-500 py-2 px-4 rounded-full text-lg hover:bg-green-700 transition duration-300 border border-green-500"
            onClick={handleShowMore}
          >
            View All
          </button>
        )}
      </div>
<div className='hidden md:block  '>
    <Layout1
      image={girl3}
      benefits={yogaBenefits3}
    />

    <Layout2
      image={girl4}
      benefits={yogaBenefits4}
    />

    <Layout1
      image={girl5}
      benefits={yogaBenefits5}
    />
    </div>

      {showMore && (
        <>
          <Layout1 image={girl3} benefits={yogaBenefits3} />
          <Layout2 image={girl4} benefits={yogaBenefits4} />
          <Layout1 image={girl5} benefits={yogaBenefits5} />
        </>
      )}

      {/* "Show Less" button after layouts are visible */}
      {showMore && (
        <div className="mt-6 text-center">
          <button
            className="bg-white text-green-500 py-2 px-4 rounded-full text-lg hover:bg-green-700 transition duration-300 border border-green-500"
            onClick={handleShowMore}
          >
            Show Less
          </button>
        </div>
      )}

    <div className="bg-white pt-10 md:p-20 md:ml-20 px-6">
      <h1 className="text-3xl font-bold mb-6 font-galano ">TYPES OF YOGA</h1>
      <p className="mb-6 font-galano font-normal text-base text-gray-500">
        Yoga encompasses a diverse range of techniques and practices, each with its unique focus and benefits. There are numerous types of
        yoga, each varying across different traditions, styles, and schools of thought. Here are some of the major types of yoga.
      </p>
      <h2 className="text-xl font-regular mb-4 hidden md:block font-galano ">Yoga has four streams:</h2>
      <ul className="list-disc pl-10 mb-6 hidden md:block text-gray-700">
        {yogaStreams.map((stream, index) => (
          <li  key={index} className='mb-2'>
            <b>{stream.name}:</b> {stream.description}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {yogaStyles.slice(0, isMobile ? 3 : yogaStyles.length)
          .map((style, index) => (
        <div key={index} className="relative rounded-[50px] overflow-hidden shadow-md">
          <div className="relative w-full h-full">
            <img src={style.image} alt={style.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end pl-10  pr-4 py-6 text-white">
            <h3 className="text-xl font-semibold mb-2 font-galano">{style.name} :</h3>
            <p className="text-sm font-thin font-galano ">{style.description}</p>
          </div>
        </div>
      ))}
    </div>
    {isMobile && yogaStyles.length > 3 && (
        <div className="flex justify-center mt-6 md:hidden"> {/* md:hidden ensures this is only shown on mobile */}
          <button
            onClick={loadMoreStyles}
            className="px-4 py-2 bg-white text-green-600 rounded-3xl border border-green-500"
          >
            View All
          </button>
        </div>
      )}
    </div>


    <div className="my-20 max-w-7xl mx-auto flex justify-center">
    <img
    src={swami2}
    alt="Swami Vivekananda"
    className="w-full h-auto object-cover rounded-lg shadow-lg"
    />
    </div>

    <div className="bg-gradient-to-r from-green-100 to-green-200 py-20 px-10">
    <h2 className="text-3xl font-bold mb-6 text-center">WHAT WE OFFER</h2>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Image Section */}
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img src={girl0} alt="Yoga Image 1" />
        </div>

        {/* Right side: Text Content */}
        <div className="md:w-1/2">
          <p className="md:text-lg text-base text-gray-700 mb-6 md:pr-20 md:mr-10">
            At YogicBliss, we guide you to joy and purpose through diverse yoga styles and mindfulness practices. Our online sessions, breathwork, and spiritual coaching support your journey towards holistic well-being.
          </p>

          <ul className="md:text-lg text-base text-gray-700 space-y-2 md:pr-20 md:mr-10">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">➤</span>
              Practical answers to questions about why we are here, how to live more joyous lives, understanding our purpose, and how to improve our lives.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">➤</span>
              Introducing yoga practices for beginners and experienced practitioners alike.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">➤</span>
              Offering online sessions.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">➤</span>
              Mindfulness practices.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">➤</span>
              Different types of yoga styles.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">➤</span>
              Breathwork techniques.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">➤</span>
              Spiritual coaching.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">➤</span>
              Tools and techniques for yoga practice.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">➤</span>
              Detailed study of chakras and energy systems.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">➤</span>
              Life coaching programs.
            </li>
          </ul>
        </div>
      </div>
    </div>

      <Contact />

    </div>
  )
}

export default YogaPart
