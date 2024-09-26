import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import www from '../../assets/images/www.png'

const testimonials = [
  {
    name: "Riya John",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Yoga with this community has been life-changing! My flexibility and peace of mind have never been better.",
    course: "Hatha Course",
  },
  {
    name: "Riya John",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Yoga with this community has been life-changing! My flexibility and peace of mind have never been better.",
    course: "Hatha Course",
  },
  {
    name: "Riya John",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Yoga with this community has been life-changing! My flexibility and peace of mind have never been better.",
    course: "Hatha Course",
  },
  {
    name: "Riya John",
    image: "https://i.pravatar.cc/150?img=47",
    review:
      "Yoga with this community has been life-changing! My flexibility and peace of mind have never been better.",
    course: "Hatha Course",
  },
  
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 3 cards in one row (3 columns)
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 cards in one row on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 card in one row on small screens
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gradient-to-r from-green-100 to-blue-100">
      <h2 className="text-4xl font-semibold text-center mb-8 font-galano">WHAT OUR CLIENT SAY</h2>
      <div className="container mx-auto px-10 ">
  <Slider {...settings}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="px-4"> {/* Wrapper with padding or margin */}
        <div className="p-4 rounded-3xl  flex flex-col  bg-white">
          <div className="flex flex-row ">
          <img
            className="w-16 h-16 rounded-full object-cover mb-4  m-2"
            src={testimonial.image}
            alt={testimonial.name}
          />
          <div className="flex flex-col  items-center justify-center">
          <h3 className="text-lg font-bold">{testimonial.name}</h3>
          <div className="flex justify-center ">
            <span className="text-yellow-500 pt-0">★★★★★</span>
          </div>
          </div>
          </div>
          <p className="text-gray-600 font-galano mb-4 text-left">
            {testimonial.review}
          </p>
         <div className="flex flex-row justify-between items-center">
         <p className="font-bold font-galano">{testimonial.course}</p>
         <img src={www} alt="" className="h-3/4" />
         </div>
        </div>
      </div>
    ))}
  </Slider>
      </div>

    </div>
  );
};

export default TestimonialSlider;