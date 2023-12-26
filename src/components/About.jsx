import React from 'react'
import '../styles/About.css';

import Toga from '../images/toga.jpg'

const About = () => {
  return (<>
    <h1 className='section-name about-title'>When Engineering meets App Development</h1>
    <div className='about-content'>
      <div className='about-wrapper'>
        <img src={Toga} alt='Jed in a toga' className='about-toga'/>
        <div className='about-narrative'>
          <p>
            Hi there! My name is Jed and I'm based in the Philippines. I have worked in the FMCG industry for 4 years before moving into the startup scene. Throughout my journey, I gained skills in project management, IT governance, portfolio management, financial management, and even Agile/ Scrum principles. In my free time since 2021, I have been studying all about project management, web development, and even AI. With such skills under my belt, I am more than ready to use my knowledge with your team.
          </p>
          <p>
            Ever since COVID-19 slammed the country, I realize that our talents and skills can be done at the comfort of our homes. Distance is no longer a barrier to work with a company based on the other side of the globe. With my skills in project management and web development, we will overcome any obstacle that may arise as we journey to your company’s long term vision.
          </p>
          <p>
            Outside of work, I love to explore new cuisine and complete video game series. I may be the awkward dude on our first meetup but that does not stop me from being the hard-working man people know me for. Lets connect!
          </p>     

        </div>
      </div>
    </div>
    <br />
  </>);
}

export default About