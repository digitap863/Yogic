import React, { useState } from 'react'
import yogagirl from '../../assets/images/yogagirl.png'
import girl from '../../assets/images/Mask group.png';
import yogagirls from '../../assets/images/yogagirls.png'


function Profiles() {
    const [activeTab, setActiveTab] = useState<'yoga' | 'meditation'>('yoga')
  return (
       <div className='overflow-hidden '>
          <div className="container mx-auto max-w-7xl py-8  ">

            <div>
            <div className="flex flex-col md:flex-row items-center lg:max-w-7xl md:px-0 px-4 ">
              {/* Image section taking 1/3 width */}
              <div className="md:w-1/3 mb-6 md:mb-0 bg-white flex justify-center ">
                <div className="rounded-3xl overflow-hidden">
                <div data-aos="fade-right">
                  <img src={yogagirl} alt="Yoga practice" className="max-w-full h-auto object-cover" />
                 </div>
                </div>
              </div>
              {/* Text section taking 2/3 width */}
              <div className="md:w-2/3 md:pl-0 ">
                      <div className=''>
                        <h3 className="font-bold  text-xl font-Montserrat">RESHMA BS</h3>
                        <p className="text-gray-600 font-light md:pr-72  font-galano ">Internationally certified meditation teacher | Mindfulness Coach | Spiritual Coach</p>
                        <p className="text-gray-800  font-galano pt-4"> Reshma is a passionate and dedicated meditation teacher with over the past few years of experience in guiding individuals towards inner peace, mental clarity, and emotional balance. With a strong foundation in mindfulness practices, Reshma creates a nurturing space for students to cultivate self-awareness, reduce stress, and connect deeply with the present moment. <br/>
                            She has undergone comprehensive training in a variety of meditation traditions, guided by respected teacher, and has cultivated expertise in practices such as Zen, Vipassana, Mindfulness, Transcendental Meditation, breath works and other techniques etc. <br/>
                            Holding certifications from Soulversity Meditation Teacher Training center, Rishikesh, India.<br/>
                        </p>
                      </div>
              </div>

            </div>

            <p className="text-gray-800  font-galano  md:px-0 px-4 md:pt-8 md:pl-8 md:pr-16"> Reshma integrates both ancient wisdom and modern techniques to offer tailored sessions for people of all experience levels. She had completed Soulversity Meditation TTC on all three levels. Her practice is rooted in a blend of traditional mindfulness techniques and modern approaches, ensuring that each session resonates deeply with participants, regardless of their experience levels. These certifications ensure that her teaching is rooted in traditional practices while adapted to meet modern-day needs, offering students a balanced and enriching meditation experience. <br/>
            </p>
            </div>


             <div className="flex flex-col md:flex-row items-left justify-between px-6  bg-white md:py-20 py-8">
                {/* Mobile View */}
                <div className="block md:hidden text-left">
                    <h2 className=" font-galano text-2xl font-bold text-gray-800 mb-6 ">
                   Teaching Philosophy:
                    </h2>
                    <img
                        src={girl}
                        alt="girl"
                        className="rounded-lg mb-6"
                    />
                    <p className="text-gray-600 mb-6 font-galano">
                   Reshma believes that meditation is not a one-size-fits-all practice. By combining traditional teachings with a personalized approach, they help students explore what resonates with their unique mind and body. Whether it's through mindfulness, breathwork, guided visualization, or silent meditation, Reshma encourages individuals to deepen their awareness and foster compassion both towards themselves and others.
                    </p>
                </div>

                {/* Desktop View */}
                <div className="hidden md:flex md:flex-row items-center justify-between  ">   

                    <div className="md:w-[43%]  md:mt-0 text-center md:text-left bg-white mr-2 self-start">
                        <h2 className=" font-galano text-3xl font-semibold text-gray-800 mb-6">
                       Teaching Philosophy:
                        </h2>
                        <p className="text-gray-600 mb-6  font-galano">
                       Reshma believes that meditation is not a one-size-fits-all practice. By combining traditional teachings with a personalized approach, they help students explore what resonates with their unique mind and body. Whether it's through mindfulness, breathwork, guided visualization, or silent meditation, Reshma encourages individuals to deepen their awareness and foster compassion both towards themselves and others.
                        </p>
                    </div>

                    <div className="md:w-[57%] flex flex-col  px-16  ">
                    <div data-aos="fade-up">
                        <img
                            src={girl}
                            alt="girl"
                            className="w-full h-full"
                        />
                        </div>
                    </div>
                </div>
            </div>



            <div>
                <h3 className='font-galano text-2xl font-semibold pl-12 pb-8'>My Guru/Master </h3>

                <div className="flex flex-col md:flex-row items-center lg:max-w-7xl md:px-0 px-4">
              {/* Image section taking 1/3 width */}
              <div className="md:w-1/3 mb-6 md:mb-0 bg-white flex justify-center ">
                <div className="rounded-3xl overflow-hidden">
                <div data-aos="fade-right">
                  <img src={yogagirl} alt="Yoga practice" className="max-w-full h-auto object-cover" />
                 </div>
                </div>
              </div>
              {/* Text section taking 2/3 width */}
              <div className="md:w-2/3 md:pl-0 ">
                      <div className=''>
                        <p className="text-gray-800  font-galano pt-4 pr-4"><span className=' text-black font-semibold '>Dev OM</span>, a Himalayan yogi and spiritual guide from India is trained directly from Thich-Nhat-Hanh, Dalai Lama and Mother Teresa in mindfulness and spirituality. He has learned various therapies and has also received spiritual development in the ashrams of Maharshi Ramana and Osho. He has invented “Light Mindfulness”. He has directly trained 700+ meditation teachers worldwide to further spread the light of meditation and spirituality. <br/><br/> Meditation’ and ‘Circle of Light spiritual phenomena’ along with 50 + guided meditations and self-discovery tools to address all aspects of human consciousness and emotional problems. He is also an internationally acclaimed author of 12 spiritual and self-help books. His books –‘Beyond Karma’, ‘The Light’, ‘The Cosmic Energy & Chakras’ and ‘21 Meditations for Empowerment’ are best sellers and have shown the path to many seekers.
                            Since two decades, Dev OM’s path as a Spiritual Guide & Mentor and as an Enhanced Life Coach has assisted thousands of people all over the world to discover their spiritual & life path. His modern and practical techniques involve recognizing one’s full and true potential of creative powers for personal growth and self-evolution. <br/>
                        </p>
                      </div>
              </div>
            </div>

            <p className="text-gray-800  font-galano  md:px-0 px-4 md:pt-8 md:pl-8 md:pr-16">His coaching has given clarity, mental peace, focus, and purpose to many. His unique, non-religious, and non-judgemental approach is loved by thousands across the globe. Dev OM starts individual spiritual growth from where one stands in a practical and friendly way! <br />
            He is the founder of Soulversity. It’s a Global Conscious Community. Soul University. People’s University. They  have taught over 200 000 students and created 700+ Teachers, 400+ Mindfulness coaches,  200+ Sufi Trainers, 450+ Master breathwork trainers from 200+ countries in all over the world in last 2 decades. He is telling people not to leave their worldly life but to have a conscious and fulfilling life. He helps them to achieve the inner state of unshakable peace, love, and joy with his simple yet profound teachings and techniques.<br/>
            </p>
            </div>



            <div className='md:pt-20 pt-10'>
                <h3 className='font-galano text-3xl font-semibold pl-12 pb-8'>Yoga instructor </h3>

                <div className="flex flex-col md:flex-row  lg:max-w-7xl md:px-0 px-4 items-start">
              {/* Image section taking 1/3 width */}
              <div className="md:w-1/3 mb-6 md:mb-0 bg-white flex justify-center ">
                <div className="rounded-3xl overflow-hidden">
                <div data-aos="fade-right">
                  <img src={yogagirl} alt="Yoga practice" className="max-w-full h-auto object-cover" />
                 </div>
                </div>
              </div>
              {/* Text section taking 2/3 width */}
              <div className="md:w-2/3 md:pl-0 items-start md:pt-10 ">
                      <div className=''>
                        <p className="text-gray-800  font-galano pt-4 pr-4"><span className=' text-black font-semibold '>Lata Meghani Rawat </span>- Yoga instructor-influencer-fitness enthusiast She is 43 year old fitness enthusiast with years of yoga practice and 2 years of coaching experience. Along with being a mother, she has been working alongside dozens of clients, spreading the message of ultimate peace through the means of yoga -she is a certified dietician and nutritionist -she has completed 500 hours advanced yoga alliance with expertise in specific practices such as shat kriyaa, mudras and bandha
                            <br/>
                        </p>
                      </div>
              </div>
            </div>
            </div>

          </div>


             {/* what we offer section */}
             <div className='bg-[#D0F2DD] bg-gradient-to-r bg-opacity-40'>  
             <div className=" max-w-7xl mx-auto  py-20 px-10 w-full">
                  <div data-aos="fade-up">
                  <h2 className="text-3xl font-bold mb-6 text-center font-galano">WHAT WE OFFER</h2>
                  </div>

                  <div className="flex flex-col items-center">
                <div className="flex flex-col  md:flex-row md:space-x-4 md:mb-10 mb-4">
                    <button
                    className={`m-1 lg:px-14 px-7 py-4 rounded-full font-galano transition-colors duration-200 ${
                        activeTab === 'yoga'
                        ?  "bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]"
                        : "bg-transparent text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white"
                    }`}
                    onClick={() => setActiveTab('yoga')}
                    >
                    Yoga
                    </button>
                    <button
                    className={`m-1 lg:px-8 px-3 py-4 rounded-full font-galano transition-colors duration-200 ${
                        activeTab === 'meditation'
                        ?  "bg-[#64BA75] text-white border border-green-500 hover:text-white hover:bg-[#64BA75]"
                        : "bg-transparent text-[#64BA75] border border-green-500 hover:text-[#64BA75] hover:bg-white"
                    }`}
                    onClick={() => setActiveTab('meditation')}
                    >
                    Meditation
                    </button>
                </div>
                </div>
                

                    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                      {/* Left side: Image Section */}
                      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                          <img src={yogagirls} alt="Yoga Image" />
                      </div>
              
                      {/* Right side: Text Content */}
                      <div className="md:w-1/2">
                      <div data-aos="fade-left">
                                      
                        {activeTab === 'yoga' && (
                        <div className="space-y-4">
                            <YogaSection
                            number={1}
                            title="Beginner Yoga Classes"
                            details={[
                                "Gentle Yoga: Ideal for newcomers, focusing on foundational poses, breathwork, and alignment.",
                                "Intro to Flow: Slower yoga basics with guided instruction on poses, breathing techniques, and meditation.",
                                "Chair Yoga: A gentle practice that applies yoga poses to be done while seated or using a chair for support."
                            ]}
                            />
                            
                            <YogaSection
                            number={2}
                            title="Intermediate Yoga Classes"
                            details={[
                                "Vinyasa Flow: A more dynamic Flow class, focusing on linking breath with movement through sun salutations and sequences.",
                                "Hatha Yoga: A balance between active poses and static holds, focusing on building strength and flexibility.",
                                "Power Yoga: A more vigorous workout for those looking to challenge themselves with strength-building poses."
                            ]}
                            />

                            <YogaSection
                            number={3}
                            title="Advanced Yoga Classes"
                            details={[
                                "Ashtanga Yoga: A structured, fast-paced style with a set sequence of poses, great for seasoned yogis.",
                                "Advanced Vinyasa Flow: For those with a strong foundation.",
                                "Yoga Sculpt: Combines yoga poses with strength-training exercises using weights."
                            ]}
                            />

                            <YogaSection
                            number={4}
                            title="Therapeutic Yoga"
                            details={[
                                "Yoga for Stress Relief: A calming practice that integrates gentle stretches, breathwork, and meditation.",
                                "Restorative Yoga: Uses props to support the body in gentle poses.",
                                "Yoga Therapy: Tailored sessions for specific conditions or injuries."
                            ]}
                            />
                        </div>
                        )}

                        {activeTab === 'meditation' && (
                        <div className="space-y-4">
                            <YogaSection
                            number={1}
                            title="Personalized Meditation Coaching"
                            details={[
                                "One-on-one sessions tailored to your individual needs and goals",
                                "Custom practices to enhance focus, reduce stress, and promote emotional well-being",
                                "Ongoing support to deepen your meditation journey"
                            ]}
                            />
                            <YogaSection
                            number={2}
                            title="Workshops for special focus areas "
                            details={[
                                "targeted workshops covering themes like self-compassion, emotional healing, and mindfulness in daily life",
                                "ideal for individuals seeking to address specific challenges or deepen a particular area of practice",
                                "interactive practical sessions designed to inspire long-lasting change"
                            ]}
                            />
                            
                          

                            
                            <ul className=" text-base text-gray-700 space-y-0 font-galano">
                            <li  className="flex items-start">
                                <span className="text-green-500 mr-2">➤</span>
                                The quest to discover meaningful answers
                                </li>
                                <li className="flex items-start">
                                <span className="text-green-500 mr-2">➤</span>
                                Guided meditation sessions ( Group & Individual )
                                </li>
                                <li className="flex items-start">
                                <span className="text-green-500 mr-2">➤</span>
                                Breathwork and relaxation techniques 
                                </li>
                                <li className="flex items-start">
                                <span className="text-green-500 mr-2">➤</span>
                                Meditation online Retreats & Workshops
                                </li>
                                <li className="flex items-start">
                                <span className="text-green-500 mr-2">➤</span>
                                Group meditation classes 
                                </li>
                                <li className="flex items-start">
                                <span className="text-green-500 mr-2">➤</span>
                                Practical answers to questions about, why we are here, how we can live more Joyous lives, understanding an awareness of our purpose here, and what can we do to make our life better 
                                </li>
                                <li className="flex items-start">
                                <span className="text-green-500 mr-2">➤</span>
                                Offer sessions online  
                                </li>
                                <li className="flex items-start">
                                <span className="text-green-500 mr-2">➤</span>
                                Mindfulness practices  
                                </li>
                                <li className="flex items-start ">
                                <span className="text-green-500 mr-2">➤</span>
                                Different types of meditations
                                </li>
                                <li className="flex items-start">
                                <span className="text-green-500 mr-2">➤</span>
                                Breath works 
                                </li>
                                <li className="flex items-start ">
                                <span className="text-green-500 mr-2">➤</span>
                                Spiritual classes 
                                </li> <li className="flex items-start">
                                <span className="text-green-500 mr-2">➤</span>
                                Tools and techniques 
                                </li>
                                <li className="flex items-start ">
                                <span className="text-green-500 mr-2">➤</span>
                                Detail study of chakras and energy system
                                </li> <li className="flex items-start">
                                <span className="text-green-500 mr-2">➤</span>
                                Self-discovery programs
                                </li>
                                <li className="flex items-start ">
                                <span className="text-green-500 mr-2">➤</span>
                                Life coaching programs. 
                                </li>
                            </ul>
                        </div>
                        )}


                      </div>
                      </div>
                    </div>

            </div>
            </div>
        </div>
  )
}

export default Profiles



interface YogaSectionProps {
    number: number
    title: string
    details: string[]
  }
  
  function YogaSection({ number,title,details }: YogaSectionProps) {
    return (
      <div className="flex flex-row gap-4 items- font-galano">

        <div className='md:w-[1%] flex flex-col justify-start items-start '>
            <div className='items-start'> 
          <span className="text-green-500 ">➤</span>
          </div>    
        </div>
        <div className="md:w-[99%]">
          <div className="flex items-center gap-0">
            <div className="w-6 h-6 rounded-full text-gray-700 flex items-center justify-center text-base font-medium ">
              {number}.
            </div>
            <h3 className="text-base font-semibold text-gray-700 whitespace-nowrap">{title}:</h3>
          </div>
          {/* <p className="text-gray-600 mb-4">{description}</p> */}
          <ul className="space-y-0">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <span className="text-gray-700 mr-2">•</span>
                <span className="text-gray-700">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }


  
  
