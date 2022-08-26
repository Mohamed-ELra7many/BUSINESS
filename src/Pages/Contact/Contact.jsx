import React from 'react'
import "./Contact.css"
import { ContactData } from './ContactData'
import image from "./reviews-bg.jpg"

const Contact = () => {
    return (
        <div className='Contact' id='contact'>
            <div className='container'>
                <h3 className='heading'>Contact Us</h3>
                <div className='contact-info'>
                    {ContactData.map((item) => (
                        <div className='box' key={item.id} data-aos='flip-left'>
                            {item.icon}
                            <p>
                                {item.title}
                                <br />
                                <span>{item.title2}</span>
                            </p>
                        </div>
                    ))}
                </div>
                <div className='form-content'>
                    <div className='box-content' data-aos="zoom-in-down">
                        <img src={image} alt="" />
                        <div className='text'>
                            <h2>WORKING WITH US</h2>
                            <h5>WEB DESIGN, READY HOME, CONSTRUCTION AND CO-OPERATE OUTSTANDING BUILDINGS.</h5>
                        </div>
                    </div>
                    <form>
                        <input type="text" placeholder='Your Name' required data-aos='flip-left' />
                        <input type='email' placeholder='Your Email' required data-aos='flip-left' />
                        <input type='teaxt' placeholder='Subject' required data-aos='flip-left' />
                        <textarea placeholder='Message' />
                        <button data-aos='flip-left'>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact