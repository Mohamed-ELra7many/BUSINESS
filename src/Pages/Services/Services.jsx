import React from 'react'
import "./Services.css"
import { ServicesData } from './ServicesData'

const Services = () => {
  return (
    <div className='services' id='services'>
      <div className='container'>
        <h3 className='heading'>Our Services</h3>
        <div className='ser-content'>
          {ServicesData.map((item) => (
            <div className='box' key={item.id} data-aos="flip-right">
              <div className='icon'>
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
