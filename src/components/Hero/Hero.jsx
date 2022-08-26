import React from 'react'
import Slider from "react-slick";
import { HeroData } from './HeroData';
import "./Hero.css"


const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='hero'>
            <Slider {...settings}>
                {HeroData.map((item) => (
                    <div className='box' key={item.id}>
                        <div className='over' data-aos="fade-down"></div>
                        <div className='box-img'>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className='box-content'>
                            <h4>{item.name}</h4>
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Hero