import React from 'react'
import '../styles/Hero.css';

const Hero = () => {
  return (<>
    <div className='hero-wrapper'>
      <h1 className='value-statement'>I help SMBs <span className='emphasize'>get more value</span> out of their IT projects with practical approaches to project management.</h1>
      <div className='cta'>
        <h2 className='spiel'>Ready to elevate your projects and deliver exceptional value? Let's discuss your IT project management needs.</h2>
        <div className='right-arrow'>➜</div>
        <div className='contact-jed'>
          <h2 className='action'>Start here.</h2>
          <a className="nav-link" href="https://forms.gle/3DhefWUMXfsuUnEk8" target="_blank" rel="noopener noreferrer">
            <button type="button" className="btn btn-info">Contact Jed</button>
          </a>
        </div>
      </div>
    </div>
  </>)
}

export default Hero