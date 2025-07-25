import React from 'react'

function CoreValueSection() {

    const coreValues = [
  {
    id: 1,
    title: 'Accessibility',
    description: 'we believe that meditation & Yoga practices should be available to everyone, regardless of background, location, or experience level.<br/> Our platform is designed to make mindfulness and meditation easily accessible to all.',
  },
  {
    id: 2,
    title: 'Inclusivity',
    description: 'We honor diversity and create a welcoming space for individuals from all walks of life.<br/> Our content is designed to support people of different cultures, beliefs, and meditation & yoga experiences.',
  },
  {
    id: 3,
    title: 'Compassion',
    description: 'At the heart of our teachings is compassion—for oneself and others.<br/> We strive to cultivate empathy and kindness in all that we do, helping our community foster deeper connections.',
  },
  {
    id: 4,
    title: 'Personal Growth',
    description: 'We are committed to supporting individuals in their journey of self-discovery, inner peace, and emotional well-being.<br/> Our platform offers tools to help users grow, evolve, and live more mindfully.',
  },
  {
    id: 5,
    title: 'Authenticity',
    description: 'We value authenticity in our teachings and content.<br/> Our instructors and resources are grounded in time-honored traditions and evidence-based practices, ensuring a genuine, trustworthy experience.',
  },
  {
    id: 6,
    title: 'Wellness',
    description: 'We prioritize holistic well-being, supporting physical, mental, and emotional health through meditation, mindfulness, yoga practices and other stress-relief practices.',
  },
  {
    id: 7,
    title: 'Simplicity',
    description: 'We emphasize simplicity in our approach, ensuring that meditation and yoga practices are easy to understand and incorporate into everyday life.',
  },
  {
    id: 8,
    title: 'Community',
    description: 'We believe in the power of community to enhance personal practice.<br/> Our platform fosters a sense of belonging, offering spaces where individuals can connect, share, and grow together.',
  },
];

  return (
    <div className='relative overflow-hidden '>
       <div className="bg-gradient-to-r from-green-100 to-green-200 md:py-20 py-10 md:px-10 px-4">
            <div data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-6 text-center font-galano">OUR CORE VALUES</h2>
            </div>
        
              <div className=" max-w-7xl mx-auto flex flex-col md:gap-14 gap-2 md:flex-row items-start ">
                {/* Left side: 1 to 4 */}
                <div className="md:w-[48%] flex flex-col gap-2 items-start">
                {coreValues.slice(0,4).map((value) =>(
                   <div key={value.id} className="flex items-start">
                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <span className="text-green-500 mr-2">➤</span>
                    </div>
                    {/* Value Content */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        <span className="font-bold">{value.id}.</span> {value.title}
                        </h3>
                        <p className="text-base text-gray-700 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: value.description }}/>
                        {/* {value.description} */}
                        {/* </p> */}
                    </div>
                    </div> 
                )) }

                </div>
        
                {/* Right side: 5 to 8  */}
                <div className="md:w-[48%] flex flex-col gap-2 items-start">
                 {coreValues.slice(4,8).map((value) =>(
                   <div key={value.id} className="flex items-start pr-2">
                    {/* Arrow Icon */}
                    <div className="flex-shrink-0 mt-1 mr-3">
                      <span className="text-green-500 mr-2">➤</span>
                    </div>
                    {/* Value Content */}
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        <span className="font-bold">{value.id}.</span> {value.title}
                        </h3>
                        <p className="text-base text-gray-700 leading-relaxed text-justify" dangerouslySetInnerHTML={{ __html: value.description }}/>
                    </div>
                    </div> 
                )) }                
                </div>
              </div>
            </div>
    </div>
  )
}

export default CoreValueSection
