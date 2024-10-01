import React from 'react';
import yogagirl from '../../assets/images/pikaso_embed.png';
import yogagirl2 from '../../assets/images/pikaso_edit.png';
import { MdWbSunny } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import {Button} from "@nextui-org/react";
import { useNavigate } from 'react-router-dom';


const YogaSection = () => {
    const items = Array(10).fill({
        icon: <MdWbSunny className="inline-block text-green-500 mx-2" />,
        text: 'Mindful Movement with Yogic',
    });
    const navigate = useNavigate()

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto bg-white">
                <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-white">
                    {/* Mobile View */}
                    <div className="block md:hidden text-left">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6 font-galano">
                            Our Passion for Yoga, Your Path to Wellness
                        </h2>
                        <img
                            src={yogagirl}
                            alt="Yoga Pose 1"
                            className="rounded-lg mb-6"
                        />
                        <img
                            src={yogagirl2}
                            alt="Yoga Pose 2"
                            className="rounded-lg mb-6"
                        />
                        <p className="text-gray-600 mb-6 font-galano">
                            At Yogic, we believe in the transformative power of yoga to
                            enhance your well-being. Our dedicated instructors create a
                            welcoming space where you can explore and deepen your practice.
                            Whether you're a beginner or seasoned yogi, we’re here to support
                            your journey to balance, strength, and inner peace. Join us and
                            discover how yoga can enrich your life.
                        </p>
                        <Button 
                            size= 'sm'
                            onClick={() => navigate(`/yoga`)}
                            className='bg-[#64BA75] inline-flex items-center px-8 py-5 rounded-[50px] text-white font-Epilogue text-sm'>
                            Learn More <FaArrowRight className="" />
                        </Button>
                    </div>

                    {/* Desktop View */}
                    <div className="hidden md:flex md:flex-row items-center justify-between">
                        {/* Yoga Images */}
                        {/* </div> */}
                        <div className="md:w-1/2 flex flex-col space-y-6 px-16 mx-6">
                        <div data-aos="fade-right">
                            <img
                                src={yogagirl}
                                alt="Yoga Pose 1"
                                className="rounded-lg"
                            />
                            </div>
                            <div data-aos="fade-right">
                            <img
                                src={yogagirl2}
                                alt="Yoga Pose 2"
                                className="rounded-lg"
                            />
                            </div>

                        </div>

                        <div className="md:w-1/2 px-12 md:mt-0 text-center md:text-left bg-white mr-18 self-start">
                            <h2 className="text-4xl font-semibold text-gray-800 mb-6 font-galano">
                                Our Passion for Yoga, Your Path to Wellness
                            </h2>
                            <p className="text-gray-600 mb-6 pr-6 font-galano">
                                At Yogic, we believe in the transformative power of yoga to
                                enhance your well-being. Our dedicated instructors create a
                                welcoming space where you can explore and deepen your practice.
                                Whether you're a beginner or seasoned yogi, we’re here to support
                                your journey to balance, strength, and inner peace. Join us and
                                discover how yoga can enrich your life.
                            </p>
                            <Button 
                            size='lg'
                            onClick={() => navigate(`/yoga`)}
                            className='bg-[#64BA75] inline-flex items-center px-8 py-5 rounded-[50px] text-white font-Epilogue text-sm'>
                            Learn More <FaArrowRight className="" />
                        </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Scrolling Text */}
              
                
            </div>
            <div className="mt-20 py-4 bg-gray-100 overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap flex items-center">
                        {/* Loop over the array to generate icons and text */}
                        {items.map((_, index) => (
                            <React.Fragment key={index}>
                                <span className="mx-2 text-green-500">
                                    <MdWbSunny className="inline-block" />
                                </span>
                                <span className="mx-4 text-green-600">
                                    Mindful Movement with Yogic
                                </span>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
        </section>
    );
};

export default YogaSection;
