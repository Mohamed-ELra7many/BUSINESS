import React from 'react'
import "./About.css"
import image from "./1.jpg"
import { AboutData } from './aboutData'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <h2 className='heading'>About EBusiness</h2>
        <div className='about-content'>
          <div className='about-img' data-aos="fade-down-right">
            <img src={image} alt="" />
          </div>
          <div className='about-text' data-aos="fade-down-left">
            <h3>project Maintenance</h3>
            <p>Redug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure aspernatur sit adipisci quaerat unde at nequeRedug Lagre dolor sit amet, consectetur adipisicing elit. Itaque quas officiis iure</p>
            <ul>
              {AboutData.map((item, i) => (
                <li key={i}>
                  <i className="fa fa-check"></i>
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About