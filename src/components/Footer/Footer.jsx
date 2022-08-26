import React from 'react'
import "./Footer.css"
import { FooterData, FooterImages } from './FooterData'

const Footer = () => {
    return (
        <footer>
            <div className='container'>
                <div className='footer-content'>
                    <div className='links'>
                        <h2><span>e</span>Business</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
                        </p>
                        <div className='icons'>
                            {FooterData.map((item, i) => (
                                <a href={item.link} key={i}>
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className='information'>
                        <h4 className='head'>INFORMATION</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <div className='infor-email'>
                            <p>
                                <span>Tel: </span>
                                +123 456 789
                            </p>
                            <p>
                                <span>Email: </span>
                                contact@example.com
                            </p>
                            <p>
                                <span>Working Hours: </span>
                                9am-5pm
                            </p>
                        </div>
                    </div>
                    <div className='our-instgram'>
                        <h4 className='head'>INSTAGRAM</h4>
                        <div className='images'>
                            {FooterImages.map((item, i) => (
                                <div className='image' key={i}>
                                    <img src={item.image} alt="" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer