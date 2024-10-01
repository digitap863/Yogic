import React from 'react'
import Navbar from '../../Components/User/Navbar'
import Footer from '../../Components/User/Footer'
import GallerySection from '../../Components/User/GallerySection'
import TestimonialSlider from '../../Components/User/Testimonial'
import Contact from '../../Components/User/Contact'

function Gallery() {
  return (
    <div>
        {/* <Navbar/> */}
        <GallerySection />
        <TestimonialSlider/>
        <Contact/>
        <Footer />    
    </div>
  )
}

export default Gallery
