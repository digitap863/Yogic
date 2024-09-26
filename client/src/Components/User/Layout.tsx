import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";



function Layout({ image, heading, description, ctaText, ctaLink }) {
    const items = Array(10).fill({
        icon: <MdWbSunny className="inline-block text-green-500 mx-2" />,
        text: 'Mindful Movement with Yogic',
    });
    console.log(heading,"###################")

  return (
    <div>
        <section className="bg-white md:px-20 pt-20 pb-4">
            <div className="container mx-auto bg-white">
                <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-white">
                    {/* mobile View */}
                    <div className="block md:hidden text-left">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 font-galano">
                            {heading}
                        </h2>
                       
                        <img
                            src={image}
                            alt="girl"
                            className="rounded-lg mb-6"
                        />
                        <div className="text-gray-600 mb-6 font-galano text-left" dangerouslySetInnerHTML={{ __html: description }}/>
                        {ctaLink == ''? '':<a
                            href={ctaLink}
                            className=" font-galano inline-flex items-center  px-10 py-3 bg-[#64BA75] text-white rounded-[50px] hover:bg-green-600 transition"
                        >
                            {ctaText} <FaArrowRight className="ml-2 mt-1" />
                        </a>}
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:flex md:flex-row items-center justify-between pb-20">
                        <div className="md:w-1/2 flex flex-col space-y-6 px-16 mx-6">
                            <img
                                src={image}
                                alt="girl"
                                className="rounded-lg"
                            />
                        </div>

                        <div className="md:w-1/2 px-12 md:mt-0 text-center md:text-left bg-white mr-20 self-start">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6 font-galano">
                            {heading}
                            </h2>
                            <div className="text-gray-600 mb-6 font-galano" dangerouslySetInnerHTML={{ __html: description }} />
                            {ctaLink == ''? '':<a
                                href={ctaLink}
                                className="inline-flex items-center px-10 py-3 bg-[#64BA75] text-white rounded-[50px] hover:bg-green-600 transition font-galano"
                            >
                                {ctaText} <FaArrowRight className="ml-2 mt-1" />
                            </a>
}
                        </div>
                    </div>
                </div>
                
            </div>       
      </section>
      {heading == 'Courses we offer for Yoga and Meditation' || heading == 'Welcome to the Beginner Yoga Series'? '':
                <div className="mt-8 py-4 bg-gray-100 overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap flex items-center">
                        {items.map((_, index) => (
                            <React.Fragment key={index}>
                                <span className="mx-2 text-green-500">
                                    <MdWbSunny className="inline-block" />
                                </span>
                                    <span className="mx-4 text-green-600 font-galano">
                                    Mindful Movement with Yogic
                                </span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
}

    
      
    </div>
  )
}

export default Layout
