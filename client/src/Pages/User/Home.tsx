import React from 'react'
import Banner from '../../Components/User/Banner'
import YogaSection from '../../Components/User/Yogasection'
import CourseSection from '../../Components/User/Courses'
import Yoga from '../../Components/User/Yoga'
import FAQSection from '../../Components/User/Faq'
import TestimonialSlider from '../../Components/User/Testimonial'
import Contact from '../../Components/User/Contact'
import Footer from '../../Components/User/Footer'
import swami from '../../assets/images/swami.png';


function Home() {

  const faqData = [
    {
      question: 'Do I need prior experience to start meditating?',
      answer:
        'No prior experience is required to begin meditating. Our platform offers guided sessions for beginners as well as advanced practitioners, so you can start at your own pace and gradually deepen your practice.',
    },
    {
      question: 'How long should I meditate each day?',
      answer:
        'There’s no set amount of time required for meditation. Beginners may start with just 5-10 minutes per day, and as you become more comfortable, you can gradually extend your sessions. We offer meditations of varying lengths to fit your schedule.',
    },
    {
      question: 'What types of meditation do you offer?',
      answer:
        'We provide a variety of meditation styles, including mindfulness, breath work, loving-kindness, body scan, chakra meditation, and guided visualization. This diversity allows you to explore different approaches and find the ones that resonate with you.',
    },
    {
      question: 'What if I have trouble staying focused during meditation?',
      answer:
        'It’s completely normal to struggle with focus at the beginning. Our guided meditations are designed to help you develop focus over time. Start with shorter sessions and gradually increase as you build your mindfulness skills. Remember, meditation is a practice, and improvement comes with consistency.',
    },
    {
      question: 'Is meditation suitable for children?',
      answer:
        'Yes, we offer specialized meditation content for children and teens, focusing on mindfulness, relaxation, and emotional regulation. Meditation can help young people develop focus, reduce anxiety, and foster positive emotional development.',
    },
    {
      question: 'Is there a fee to use the platform?',
      answer:
        'We offer both free and premium content. You can access a selection of guided meditations and courses for free, and our premium membership provides access to exclusive content, live sessions, and advanced programs for a more personalized experience.',
    },
    {
      question: 'Are you finding it difficult to do meditation? Why do you feel meditation isn\'t effective for you?',
      answer:
        'There are a lot of meditation techniques, and not all of them are for everyone. Each individual must find the one that truly speaks to their unique journey. Certain techniques will resonate deeply with some individuals, while others may find their connection elsewhere. Select the meditation technique that resonates most with you, and practice it consistently. Avoid trying to juggle multiple methods or following every trend. Choose thoughtfully, with clear intention, and commit to that practice fully, integrating it meaningfully into your life.',
    },
  ];

  return (
    <div  className='overflow-hidden'>
        {/* <Navbar /> */}
        <Banner/>
        <YogaSection />
        <CourseSection />
        <Yoga />
        <FAQSection faqData={faqData} />
        
        <div className=" flex flex-col items-center bg-white pb-10 justify-center">
            
            <div data-aos="zoom-in">
            <div className="w-full px-4 mx-auto flex pb-10  ">
            <img
              src={swami} 
              alt="Swami Vivekananda"
              className=" object-cover rounded-lg shadow-lg aspect mx-auto"
            />
            </div>
            </div>
        </div>
        <TestimonialSlider />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
