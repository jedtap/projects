import React from 'react'

import TestimonialData from '../helpers/TestimonialData'

import Slider from "react-slick"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"

import '../styles/Testimonials.css'

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000
  };

  return (<>
    <br />
    <br />
    <h1 className='section-name'>TESTIMONIALS</h1>
    <br />

    <div className='testimonials-wrapper'>
      <Slider {...settings}>
        { TestimonialData.map((item, key) => 
          <div className='testimonial-unit' key={key} data-name={item.name}>
            <img src={item.img} className='testimonial-photo'/>
            <div className='testimonial-desc' data-name={item.name}>
              <p>{item.testimonial}</p>
              <p className='testimonial-end'>{item.name}</p>
              <p className='testimonial-end'>{item.position}</p>
              <p className='testimonial-end'>{item.affiliation}</p>
            </div>
          </div>
        )}
      </Slider>
    </div>

  </>)
}

export default Testimonial