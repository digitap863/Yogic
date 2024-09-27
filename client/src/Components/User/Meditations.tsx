import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import girl from '../../assets/images/Meditation1.png'
import boy from '../../assets/images/Meditation2.png'
import girl1 from '../../assets/images/Meditation4.png'
import girl2 from '../../assets/images/Meditation5.png'
import girl3 from '../../assets/images/Meditation6.png'
import girl4 from '../../assets/images/Meditation7.png'
import girl5 from '../../assets/images/Meditation8.png'
import girl6 from '../../assets/images/Meditation9.png'
import girl7 from '../../assets/images/Meditation10.png'
import girl8 from '../../assets/images/Meditation11.png'
import girl9 from '../../assets/images/Meditation12.png'
import girl10 from '../../assets/images/Meditation13.png'
import girl11 from '../../assets/images/Meditation3.png'
import swami3 from '../../assets/images/swami3.png';
import girl0 from '../../assets/images/Meditation14.png'
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Contact from './Contact';

function Meditations() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const loadMoreStyles = () => {
      setIsMobile(false); // Show all items on button click
    };
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
  
    const yogaBenefits1 = [
      {
        heading: "Stress Reduction",
        description: "Meditation helps reduce the production of stress hormones like cortisol, promoting relaxation and reducing anxiety. It enables individuals to manage stress more effectively, leading to a calmer and more balanced state of mind."
      }
    ];
    const yogaBenefits2 = [
      {
        heading: "Improved Focus and Concentration",
        description: "Regular meditation enhances focus and concentration by training the mind to stay present, which improves attention, reduces mental distractions, and boosts productivity, making it easier to handle tasks efficiently and make better decisions."

      }
    ];
    const yogaBenefits3 = [
      {
        heading: "Emotional regulation ",
        description: "Regular meditation enhances focus and concentration by training the mind to stay present, which improves attention, reduces mental distractions, and boosts productivity, making it easier to handle tasks efficiently and make better decisions."
      }
    ];
    const yogaBenefits4 = [
      {
        heading: "Physical health benefits ",
        description: "Meditation offers physical health benefits, including lowering blood pressure to reduce the risk of heart disease, and helping with pain management by altering pain perception and increasing tolerance."
      }
    ];
    const yogaBenefits5 = [
      {
        heading: "Improved mental health ",
        description: "Meditation enhances overall mental health by reducing anxiety and depression while building greater resilience to effectively cope with life's challenges."
      }
    ];
    const yogaStyles = [
      {
        name: 'Vipasana meditation: ',
        description: "Vipassana meditation, a traditional Buddhist practice, fosters profound self-awareness and insight into reality, demanding commitment and a deep exploration of one's inner experiences.",
        image: girl6
      },
      {
        name: 'Mindfulness meditation:',
        description: 'Mindfulness meditation enhances present-moment awareness by observing thoughts, emotions, and sensations without judgment, benefiting mental health and well-being.',
        image: girl7
      },
      {
        name: 'Guided meditation:',
        description: 'Guided meditation, led by an instructor who provides verbal cues and imagery, is ideal for beginners or those seeking a more structured meditation experience.',
        image: girl8
      },
      {
        name: 'Mantra meditation: ',
        description: 'Mantra meditation, rooted in ancient spiritual traditions, uses the repetition of a word or sound like "Om" to quiet the mind, enhance concentration, and foster spiritual growth.',
        image: girl9
      },
      {
        name: 'Chakra meditation: ',
        description: "Chakra meditation, rooted in ancient Indian traditions, focuses on balancing the body's seven energy centers along the spine, promoting physical, emotional, and spiritual well-being.",
        image: girl10
      },
      
    ];

    useEffect(() => {
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
  
    return (
      <div>
        <div className="relative w-full h-[60vh]  bg-gradient-to-r from-[#E4F5FE] via-[#D0F2DD] to-[#E1F5FF] flex items-center justify-center">
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-semibold text-black mb-6">MEDITATION</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            We embrace a holistic approach to wellness, uniting mind, body, and spirit through the timeless practices of meditation.
            </p>
            <button
              onClick={() => navigate(`/contact`)}
              className="text-white bg-[#64BA75] py-4 px-8 rounded-full text-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Contact Us →
            </button>
          </div>
        </div>
        
        <Layout
        image= {girl}
        heading="Awaken Your True Self with YogicBlis Meditation"
        description="Meditation, in its most advanced form, is a journey into the depths of human consciousness, transcending simple relaxation techniques to become a powerful tool for self-discovery and inner transformation. It serves as a gateway to profound insights into the nature of the mind and existence, fostering a deep sense of inner peace, heightened awareness, and spiritual growth. By harmonizing the mind, body, and spirit, meditation opens up new realms of understanding and connection, leading to a more balanced, purposeful, and enriched experience of life."
        ctaText="View Courses"
        ctaLink="/courses"
        />
  
        <section className="bg-white py-20">
              <div className="container mx-auto bg-white">
                  <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-white">
                      {/* Mobile View */}
                      <div className="block md:hidden text-center">
                          <h2 className="text-3xl font-bold text-gray-800 mb-6">
                          Why meditation is important in today’s world? 
                          </h2>
                          <img
                              src={boy}
                              alt="girl"
                              className="rounded-lg mb-6"
                          />
                          <p className="text-gray-600 mb-6">
                          In today’s fast-paced world, meditation has become increasingly vital. Amidst the pressures of work, the distractions of digital media, and daily stress, meditation offers a crucial refuge for restoring balance and well-being. It provides a comprehensive approach to health, enhancing not only mental clarity but also emotional resilience. Through meditation, individuals can develop mindfulness, alleviate stress, and deepen self-awareness while learning to manage anxiety. This practice fosters a profound connection with oneself, promoting inner peace and clarity to better navigate the complexities of modern life. Essentially, meditation serves as a much-needed escape from the chaos, encouraging a healthier, more centered lifestyle in an often overwhelming world.
                          </p>
                      </div>
  
                      {/* Desktop View */}
                      <div className="hidden md:flex md:flex-row items-center justify-between  pl-10">                        
                          <div className="md:w-1/2 px-12 md:mt-0 text-center md:text-left bg-white mr-2 self-start">
                              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                              Why meditation is important in today’s world? 
                              </h2>
                              <p className="text-gray-600 mb-6 pl-2 ">
                              In today’s fast-paced world, meditation has become increasingly vital. Amidst the pressures of work, the distractions of digital media, and daily stress, meditation offers a crucial refuge for restoring balance and well-being. It provides a comprehensive approach to health, enhancing not only mental clarity but also emotional resilience. Through meditation, individuals can develop mindfulness, alleviate stress, and deepen self-awareness while learning to manage anxiety. This practice fosters a profound connection with oneself, promoting inner peace and clarity to better navigate the complexities of modern life. Essentially, meditation serves as a much-needed escape from the chaos, encouraging a healthier, more centered lifestyle in an often overwhelming world.
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

        

    <div className="flex flex-col md:flex-row items-center justify-between bg-white mb-12 border border-gray-300 rounded-[50px] md:p-10 max-w-7xl mx-auto mt-8 p-4 m-2 ">
      {/* Text Section */}
      <div className="md:w-2/3">
        <h2 className="text-2xl md:text-2xl font-bold mb-4">
          What Meditation is Not:
        </h2>
        <div className="md:w-1/3 mt-8 md:mt-0  flex justify-center items-center  lg:hidden ">
        <img
          src={girl11}
          alt="Meditation Image"
          className="w-3/4 max-w-xs md:max-w-sm rounded-lg object-cover"
        />
      </div>
        <ul className="list-disc pl-5 space-y-4 text-sm md:text-base">
          <li>
            <span className="font-semibold">Not About Stopping Thoughts:</span> A common misconception is that meditation is about completely stopping thoughts. Instead, it’s about changing your relationship with thoughts—observing them without getting attached or carried away.
          </li>
          <li>
            <span className="font-semibold">Not a Quick Fix:</span> Meditation is a practice that requires patience and consistency. The benefits often accumulate over time, rather than being immediate.
          </li>
          <li>
            <span className="font-semibold">Not Limited to One Form:</span> Meditation comes in many forms and can be practiced in various ways, from seated meditation to walking meditation, from mindfulness to mantra repetition. There’s no one-size-fits-all approach.
          </li>
        </ul>
      </div>
      {/* Image Section */}
      <div className="md:w-1/3 mt-8 md:mt-0 justify-end lg:block hidden">
        <img
          src={girl11}
          alt="Meditation Image"
          className="w-3/4 max-w-xs md:max-w-sm rounded-lg object-cover"
        />
      </div>
    </div>
  
      <p className='font-bold md:text-4xl md:pl-20 md:ml-20 uppercase text-2xl ml-4'>Benefits of meditation</p>
  
        <Layout1
        image={girl1}
        benefits={yogaBenefits1}
      />
  
      <Layout2
        image={girl2}
        benefits={yogaBenefits2}
      />
  
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
  
      <div className="bg-white pt-10 md:p-20 md:ml-20 p-4">
        <h1 className="text-3xl font-bold mb-6">TYPES OF MEDITATION</h1>
        <p className="mb-6">
        Meditation includes a variety of techniques, each offering distinct benefits and varying across different traditions, cultures, and communities. 
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {yogaStyles.slice(0, isMobile  ? 3 : yogaStyles.length)
          .map((style, index) => (
          <div key={index} className="relative rounded-[50px] overflow-hidden shadow-md">
            <img src={style.image} alt={style.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{style.name}</h3>
              <p className="text-sm">{style.description}</p>
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
  
  
      <div className="my-20 max-w-4xl mx-auto flex justify-center">
      <img
      src={swami3}
      alt="Swami Vivekananda"
      className="w-full h-auto object-cover"
      />
      </div>

      
  
      <div className="bg-gradient-to-r from-green-100 to-green-200 py-20 px-10">
      <h2 className="text-3xl font-bold mb-6 text-center">WHAT WE OFFER</h2>
  
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Left side: Image Section */}
          <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
            {/* <div className="grid grid-rows-3 gap-4"> */}
              <img src={girl0} alt="Yoga Image 1" />
             
            {/* </div> */}
          </div>
  
          {/* Right side: Text Content */}
          <div className="md:w-1/2">
          <p className="text-lg text-gray-700 mb-6 md:pr-20 md:mr-10">
            At YogicBlis, we guide you to joy and purpose through various meditation techniques and mindfulness practices. Our online sessions, breathwork, and spiritual coaching support your journey towards holistic well-being.
            </p>
  
            <ul className="text-lg text-gray-700 space-y-2 md:pr-20 md:mr-10">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">➤</span>
                Practical answers to questions about why we are here, how to live more joyous lives, understanding our purpose, and how to improve our lives.
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">➤</span>
                Introducing the practice of meditation for beginners as well as those who already meditate. 
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">➤</span>
                Offer sessions online. 
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">➤</span>
                Mindfulness practices  
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">➤</span>
                Different types of meditations
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">➤</span>
                Breath works
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">➤</span>
                Spiritual Coaching
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">➤</span>
                Tools and techniques 
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">➤</span>
                Detail study of chakras and energy system. 
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">➤</span>
                Self-discovery programs
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

export default Meditations
