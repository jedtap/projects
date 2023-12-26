import React from 'react'
import '../styles/About.css';

import Toga from '../images/toga.jpg'

import ExpData from '../helpers/ExpData';
import CodeData from '../helpers/CodeData';
import ToolsData from '../helpers/ToolsData';

const About = () => {
  return (<>
    <div className='about-main'>
      <h1 className='section-name about-title'>When Engineering meets IT Project Management</h1>
      <div className='about-content'>
        <div className='about-wrapper'>
          <img src={Toga} alt='Jed in a toga' className='about-toga'/>
          <div className='about-narrative'>
            <p>
              Hi there! My name is Jed and I'm based in the Philippines. I have worked in the FMCG industry for 4 years before moving into the startup scene. Throughout my journey, I gained skills in project management, IT governance, portfolio management, financial management, product management, and even Agile/ Scrum principles. In my free time since 2021, I have been studying all about web development and applications of AI. With such skills under my belt, I am more than ready to use my knowledge with your team!
            </p>
            <p>
              It may be weird to see a licensed Mechanical Engineer learning about the IT industry. Do both disciplines even blend well? I get that a lot and I totally feel what you’re feeling right now. Fortunately, Mechanical Engineering is a more modern degree vs one generation ago. As early as my bachelor degree, we have been using tools such as MatLab and Lingo in solving equations. We even learn niche programming languages like C++, G-code, and Ladder logic to control the movement of machines. Even my master thesis made use of Genetic Algorithm to optimize components in a wind turbine.
            </p>
            <p>
              Ever since COVID-19 slammed the country, I realize that our talents and skills can be shared globally. Distance is no longer a barrier to work with an organization based on the other side of the globe. With my skills in IT project management, we will overcome any obstacle that may arise as we journey to your company’s long term vision.
            </p>
            <p>
              Outside of work, I love to explore new cuisine and complete video game series. I may be the awkward dude on our first meetup but that does not stop me from being the hard-working man people know me for. Lets connect!
            </p>
          </div>
        </div>
      </div>
      <br />

      <h1 className='section-name'>SKILLSET</h1>

      <div className='skillset-wrapper'>

        <div className='skillset-cols'>
          <h2 className='sub-name'>Experience in</h2>
          <div className='skillset-items-exp'>
              { ExpData.map((item, key) => 
                <div className='exp-items' key={key}>
                  <img src={item.img} alt={item.alt} className='exp-icons' />
                  <p className='exp-names'>{item.name}</p>
                </div>            
              )}
          </div>  
        </div>


        <div className='skillset-cols'>
          <h2 className='sub-name'>Code using</h2>
          <div className='skillset-items'>
            { CodeData.map((item, key) => 
              <div className='tile-wrapper' key={key}>
                <i className={item.img}/>
                <p className='item-label' >{item.name}</p>
              </div>
            )}
          </div>
        </div>

        <div className='skillset-cols'>
          <h2 className='sub-name'>Dev tools</h2>
          <div className='skillset-items'>
            { ToolsData.map((item, key) => 
              <div className='tile-wrapper' key={key}>
                <i className={item.img}/>
                <p className='item-label' >{item.name}</p>
              </div>
            )}
          </div>
        </div>


      </div>
      <br />
      <br />
    </div>


  </>);
}

export default About