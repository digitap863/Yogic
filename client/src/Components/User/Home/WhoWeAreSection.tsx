import React from 'react';
import { Button } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';


const WhoWeAreSection = () => {
    const navigate = useNavigate();
  return (
    <section className="bg-white md:py-10 py-0 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto font-galano">
        {/* Section Heading */}
        <h2 className="text-4xl font-semibold font-galano text-gray-900 mb-8 leading-tight">
          Who We Are
        </h2>

        {/* Main Content Paragraphs */}
        <p className="text-lg text-gray-700 leading-relaxed mb-1">
          At SoulRise Living, we are a sanctuary for all—a sacred space for self-discovery, healing, and mindful living through the
          practices of Yoga, Meditation, and Spiritual Coaching. Also a space where inner peace, conscious living, and soulful
          transformation come together. We empower individuals to realign with their inner truth, live with mindful purpose, and
          awaken to their highest potential. At SoulRise Living, we don't just teach you how to practice—we support you in
          embodying peace, purpose, and presence in every aspect of your life.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-1">
          In today's hectic world, we understand the deep connection between physical and mental well-being. While many are
          becoming more conscious of their physical health, mental, emotional, and spiritual health are often overlooked. At SoulRise
          Living, we believe everything is interconnected—body, mind, soul, and energy. We believe that true wellness is holistic—
          and that body, mind, soul, and energy must be nourished together.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-1">
          Our mission is to guide you back to balance. Whether you seek calm, clarity, healing, or a deeper connection with yourself,
          we're here to support your journey inward with compassion and wisdom.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          We also see the painful reality around us: more and more young people are struggling with depression, anxiety, stress,
          substance abuse, and even suicide. Despite material success, many feel lost, disconnected, and unfulfilled.
        </p>

        {/* Blockquote / Callout Text */}
        <blockquote className="text-center text-xl font-semibold text-gray-800 mb-12">
          &ldquo;The world is in need of deep healing &mdash; starting from within&rdquo;.
        </blockquote>

        {/* Call to Action Button */}
        <div className="flex justify-center pb-2">
            <Button 
                size='lg'
                onClick={()=>{navigate(`/about`)
                            window.scrollTo(0, 0);}}
                className="bg-[#64BA75] text-white px-6 py-2 rounded-full hover:bg-green-600 transition  hidden lg:block font-Epilogue hover:scale-105 duration-300">
                Learn More&nbsp; →
            </Button>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;
