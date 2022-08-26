import React from 'react'
import "./Team.css"
import { TeamData } from './TeamData'

const Team = () => {
    return (
        <div className='team' id='team'>
            <div className='container'>
                <h3 className='heading'>Our Special Team</h3>
                <div className='team-content'>
                    {TeamData.map((item) => (
                        <div className='box' data-aos="zoom-in-up" key={item.id}>
                            <div className='img-social'>
                                <img src={item.image} alt={item.name} />
                                <div className='social'>
                                    <a href='https:www.facebook.com'>
                                        <i className='fa fa-facebook'></i>
                                    </a>
                                    <a href='https:www.twitter.com'>
                                        <i className='fa fa-twitter'></i>
                                    </a>
                                    <a href='https:www.instagram.com'>
                                        <i className='fa fa-instagram'></i>
                                    </a>
                                </div>
                            </div>
                            <div className='text'>
                                <h4>{item.name}</h4>
                                <p>{item.jop}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Team
