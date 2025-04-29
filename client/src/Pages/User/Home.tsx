import React from 'react'
import Banner from '../../Components/User/Banner'
import YogaSection from '../../Components/User/Yogasection'
import CourseSection from '../../Components/User/Courses'
import Yoga from '../../Components/User/Yoga'
import FAQSection from '../../Components/User/Faq'
import TestimonialSlider from '../../Components/User/Testimonial'
import Contact from '../../Components/User/Contact'
import Footer from '../../Components/User/Footer'
import swami3 from '../../assets/images/swami3.png';
import girl1 from '../../assets/images/Mask group1.png';
import girl2 from '../../assets/images/Mask group2.png';
import { Disclosure } from "@headlessui/react";



function Home() {

  // const faqData = [
  //   {
  //     question: 'Do I need prior experience to start meditating?',
  //     answer:
  //       'No prior experience is required to begin meditating. Our platform offers guided sessions for beginners as well as advanced practitioners, so you can start at your own pace and gradually deepen your practice.',
  //   },
  //   {
  //     question: 'How long should I meditate each day?',
  //     answer:
  //       'There’s no set amount of time required for meditation. Beginners may start with just 5-10 minutes per day, and as you become more comfortable, you can gradually extend your sessions. We offer meditations of varying lengths to fit your schedule.',
  //   },
  //   {
  //     question: 'What types of meditation do you offer?',
  //     answer:
  //       'We provide a variety of meditation styles, including mindfulness, breath work, loving-kindness, body scan, chakra meditation, and guided visualization. This diversity allows you to explore different approaches and find the ones that resonate with you.',
  //   },
  //   {
  //     question: 'What if I have trouble staying focused during meditation?',
  //     answer:
  //       'It’s completely normal to struggle with focus at the beginning. Our guided meditations are designed to help you develop focus over time. Start with shorter sessions and gradually increase as you build your mindfulness skills. Remember, meditation is a practice, and improvement comes with consistency.',
  //   },
  //   {
  //     question: 'Is meditation suitable for children?',
  //     answer:
  //       'Yes, we offer specialized meditation content for children and teens, focusing on mindfulness, relaxation, and emotional regulation. Meditation can help young people develop focus, reduce anxiety, and foster positive emotional development.',
  //   },
  //   {
  //     question: 'Is there a fee to use the platform?',
  //     answer:
  //       'We offer both free and premium content. You can access a selection of guided meditations and courses for free, and our premium membership provides access to exclusive content, live sessions, and advanced programs for a more personalized experience.',
  //   },
  //   {
  //     question: 'Are you finding it difficult to do meditation? Why do you feel meditation isn\'t effective for you?',
  //     answer:
  //       'There are a lot of meditation techniques, and not all of them are for everyone. Each individual must find the one that truly speaks to their unique journey. Certain techniques will resonate deeply with some individuals, while others may find their connection elsewhere. Select the meditation technique that resonates most with you, and practice it consistently. Avoid trying to juggle multiple methods or following every trend. Choose thoughtfully, with clear intention, and commit to that practice fully, integrating it meaningfully into your life.',
  //   },
  // ];

  const faqData = [
    {
      question: "I've never done yoga before. Can I still join?",
      answer: "Yes! Many online yoga programs are designed for all levels, including complete beginners. You can start at your own pace and build confidence over time."
    },
    {
      question: "How does online yoga work?",
      answer: "Online yoga typically includes recorded video classes, live sessions, or guided programs you can follow from home. You just need a device with internet access and a bit of space to move."
    },
    {
      question: "Do I need to be flexible to do yoga?",
      answer: "Not at all. Yoga helps improve flexibility, but you don't need to be flexible to begin. You'll find poses and modifications that work for your body."
    },
    {
      question: "What equipment do I need at home?",
      answer: "A yoga mat is ideal, but you can also use a towel or carpeted area. Optional items like blocks or straps can be helpful, but household items (like books or belts) often work too."
    },
    {
      question: "How often should I practice yoga?",
      answer: "Even 2-3 sessions per week can make a big difference. The key is consistency, and you can increase frequency as your interest and comfort grow."
    },
    {
      question: "Can yoga help with stress or sleep?",
      answer: "Yes. Yoga often includes breathing exercises and relaxation techniques that are great for reducing stress and improving sleep quality."
    },
    {
      question: "What kinds of yoga are available online?",
      answer: "Most online platforms offer a range—like Vinyasa (flow), Hatha (gentle), Restorative (relaxing), Yin (deep stretches), and Power Yoga (strength-based). You can explore and find what feels best for you."
    },
    {
      question: "What if I can't do all the poses?",
      answer: "That's completely normal. Yoga is about listening to your body. Many instructors offer modifications so you can adjust poses to your ability."
    },
    {
      question: "Is yoga a good workout?",
      answer: "Yes—yoga can improve strength, flexibility, balance, and endurance. Some styles are more relaxing, while others offer a full-body workout."
    },
    {
      question: "Can I do yoga if I have an injury or medical condition?",
      answer: "Often yes, but it's important to check with your doctor first. Look for gentle or beginner-friendly classes and listen to your body during practice."
    }
  ];


  const yogaData = [
    {
      question: 'Increased Flexibility',
      answer: 'Yoga helps improve flexibility, enhancing range of motion and reducing the risk of injury.',
    },
    {
      question: 'Strength Building',
      answer: 'Yoga strengthens muscles and increases endurance.',
    },
    {
      question: 'Stress Relief',
      answer: 'Yoga reduces stress by calming the nervous system and promoting relaxation.',
    },
    {
      question: 'Better Posture',
      answer: 'Yoga improves body alignment and helps maintain good posture.',
    },
    {
      question: 'Enhanced Mental Focus',
      answer: 'Yoga enhances concentration and focus by calming the mind.',
    },
  ];

  const meditationData = [
    {
      question: 'Reduces Stress',
      answer: 'Meditation helps calm the mind, lowering stress levels and promoting relaxation.',
    },
    {
      question: 'Enhances Focus',
      answer: 'Meditation improves concentration by quieting the mind and eliminating distractions.',
    },
    {
      question: 'Boosts Emotional Well-Being',
      answer: 'Meditation helps regulate emotions, leading to a greater sense of emotional balance and well-being.',
    },
    {
      question: 'Improves Sleep',
      answer: 'Meditation can aid in improving sleep quality by reducing stress and promoting relaxation.',
    },
    {
      question: 'Increases Self-Awareness',
      answer: 'Meditation fosters self-awareness by encouraging mindful reflection on thoughts and emotions.',
    },
  ];


  return (
    <div  className='overflow-hidden'>
        {/* <Navbar /> */}
        <Banner/>
        <YogaSection />
        <CourseSection />
        <Yoga />
        {/* <section className="max-w-7xl mx-auto px-6 py-12 overflow-hidden">
              <h2 className="text-3xl font-bold text-left mb-12 pl-4 font-galano">Benefits of Yoga and Meditation</h2>
             
              <div className="flex flex-col-reverse lg:flex-row justify-between items-start space-y-6 lg:space-y-0 mb-12 p-16 border border-gray-300 rounded-3xl">
              <div className="lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold pt-4 font-galano">YOGA:</h3>
              <ul className="space-y-2">
                {yogaData.map((faq, index) => (
                  <Disclosure key={index} as="div">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-start space-x-2 w-full py-2 text-left">
                        <span
                            className={`${
                              open ? 'rotate-90 transform' : ''
                            } mt-1 w-5 h-5 text-green-500 transition-transform duration-300`}
                          >
                            {open ? '➤' : '➤'}
                          </span>
                          <span className="font-medium text-left text-lg font-galano">{faq.question}</span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-7 text-gray-600 font-galano">
                          {faq.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </ul>
            </div>
                <div className="  flex justify-center ">  
                  <div>
                  <div data-aos="fade-left">
                    <img
                      className=" w-auto h-auto object-cover "
                      src={girl1}
                      alt="Yoga Pose 3"
                    />
                    </div>
                    </div>
                </div>
              </div>
             
             <div className="flex flex-col lg:flex-row justify-between items-start space-y-6 lg:space-y-0 mb-12 p-16 border border-gray-300 rounded-3xl">
             <div className="  lg:w-1/2 flex justify-center">  
             <div data-aos="fade-right">
        
                    <img
                      className=" w-auto h-auto object-cover"
                      src={girl2}
                      alt="Yoga Pose 3"
                    />
                    </div>
                </div>
              <div className="lg:w-1/2 space-y-4">
              <h3 className="text-2xl font-bold">MEDITATION :</h3>
              
              <ul className="space-y-2">
                {meditationData.map((faq, index) => (
                  <Disclosure key={index} as="div">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex items-start space-x-2 w-full py-2 text-left">
                        <span
                            className={`${
                              open ? 'rotate-90 transform' : ''
                            } mt-1 w-5 h-5 text-green-500 transition-transform duration-300`}
                          >
                            {open ? '➤' : '➤'}
                          </span>
                          <span className="font-medium text-left text-lg font-galano">{faq.question}</span>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-7 text-gray-600 font-galano">
                          {faq.answer}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </ul>
            </div>
               
              </div> 
        </section> */}

        <FAQSection faqData={faqData} />
        
        <div className="md:my-20 my-12 max-w-7xl mx-auto flex justify-center">
          <img
            src={swami3}
            alt="Swami Vivekananda"
            className="w-full h-auto object-cover rounded-lg shadow-lg m-1"
          />
        </div>
        <TestimonialSlider />
        <Contact />
        <Footer />
    </div>
  )
}

export default Home
