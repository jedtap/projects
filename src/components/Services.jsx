import React from 'react'
import ServicesData from '../helpers/ServicesData'

import '../styles/Services.css'

const Services = () => {
  return (<>
    <div className='alt-color'>
      <br />
      <br />
      <h1 className='section-name-alt'>SERVICES</h1>
      <br />
        <div className='service-list'>
          { ServicesData.map((item, key) => 
            <div className='service-unit' key={key}>
              <img className='service-img' src={item.img} alt={item.alt} />
              <div className='service-text'>
                <h2 className='service-title'>{item.title}</h2>
                <p className='service-desc'>{item.desc}</p>
              </div>
            </div>
          )}
        </div>
      <br />
      <br />
    </div>
  </>)
}

export default Services