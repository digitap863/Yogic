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
      question: 'What Are The Benefits Of Yoga And Meditation?',
      answer:
        'Yoga And Meditation Offer Numerous Benefits, Including Stress Reduction, Improved Flexibility, Enhanced Focus, And Overall Well-Being. Regular Practice Can Also Help With Physical Fitness And Mental Clarity.',
    },
    {
      question: 'Can I Join A Class If I Have An Injury?',
      answer:
        'Yes, you can. However, it is recommended that you inform the instructor about your injury or medical condition beforehand. Modifications can be made to accommodate your needs.',
    },
    {
      question: 'What Types Of Yoga Classes Do You Offer?',
      answer:
        'We offer a variety of yoga classes, including Hatha Yoga, Vinyasa Flow, Power Yoga, and Restorative Yoga. All levels are welcome, from beginners to advanced practitioners.',
    },
    {
      question: 'Is There An Age Limit For Your Classes?',
      answer:
        'There is no specific age limit. We welcome individuals of all ages. Children, teens, adults, and seniors can all benefit from yoga practice.',
    },
  ];

  return (
    <div>
        {/* <Navbar /> */}
        <Banner/>
        <YogaSection />
        <CourseSection />
        <Yoga />
        <FAQSection faqData={faqData} />
        <div className=" flex flex-col items-center bg-white pb-10 justify-center">
            <div className="w-full px-4 mx-auto flex pb-10  ">
            <img
              src={swami} 
              alt="Swami Vivekananda"
              className=" object-cover rounded-lg shadow-lg aspect mx-auto"
            />
            </div>
        </div>
        <TestimonialSlider />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
