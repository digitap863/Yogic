import React from 'react';

const BenefitsCard = ({ title, benefits, image, imagePosition }) => (
  <div className="bg-white rounded-3xl p-6 shadow-lg">
    <div className={`flex ${imagePosition === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className="flex-1">
        <h3 className="font-bold text-xl mb-4">{title}:</h3>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div>
                <p className="font-semibold">{benefit.title}</p>
                {benefit.description && <p className="text-sm text-gray-600">{benefit.description}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex justify-end">
        <div className="flex space-x-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-20 h-60 overflow-hidden rounded-full">
              <img src={`/api/placeholder/${image}`} alt={title} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);


const YogaMeditationBenefits = () => {
    const yogaBenefits = [
      { title: "Increased Flexibility", description: "Yoga helps improve flexibility, enhancing range of motion and reducing the risk of injury." },
      { title: "Strength Building" },
      { title: "Stress Relief" },
      { title: "Better Posture" },
      { title: "Enhanced Mental Focus" },
    ];
  
    const meditationBenefits = [
      { title: "Reduces Stress", description: "Meditation helps calm the mind, lowering stress levels and promoting relaxation." },
      { title: "Enhances Focus" },
      { title: "Boosts Emotional Well-Being" },
      { title: "Improves Sleep" },
      { title: "Increases Self-Awareness" },
    ];
  
    return (
      <div className="bg-gray-100 p-8">
        <h2 className="text-3xl font-bold mb-6">Benefits of Yoga and Meditation</h2>
        <div className="space-y-6">
          <BenefitsCard title="YOGA" benefits={yogaBenefits} image="300/400" imagePosition="right" />
          <BenefitsCard title="MEDITATION" benefits={meditationBenefits} image="300/400" imagePosition="left" />
        </div>
      </div>
    );
  };
  
  export default YogaMeditationBenefits;