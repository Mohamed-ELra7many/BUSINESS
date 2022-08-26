import React, { useState } from 'react'
import "./Portfolio.css"
import { PortData } from "./PortData"


const Portfolio = () => {
    const All_Category = ["ALL", ...new Set(PortData.map((item) => item.cat))]    //To combine an All item with other items

    const [data, setData] = useState(PortData)
    const [filterCat, setFilterCat] = useState(All_Category)

    const [slideNumber, setSlideNumber] = useState(0)
    const [open, setOpen] = useState(false)

    const handleopen = (i) => {
        setSlideNumber(i)
        setOpen(true)
        console.log(open)
    }

    const handleMove = (dir) => {     // to open img in black screen
        let slide;
        if (dir === "l") {
            slide = slideNumber === 0 ? data.length - 1 : slideNumber - 1
        } else {
            slide = slideNumber === data.length - 1 ? 0 : slideNumber + 1
        }
        setSlideNumber(slide)
    }


    const Filtration = (category) => {     // to filter item portfolio 
        const newFilter = PortData.filter(item => item.cat === category)
        setData(newFilter)
        if (category === "ALL") {
            setData(PortData)
        }
    }

    return (
        <div className='portfolio' id='portfolio'>
            <div className='container'>
                <h3 className='heading'>Our Portfolio</h3>
                <div className='buttons'>
                    {filterCat.map(item => (
                        <button onClick={() => Filtration(item)} key={item.id} data-aos="zoom-out-down">{item}</button>
                    ))}
                </div>
                {open && <div className='slider'>
                    <i className='fa fa-close close' onClick={() => setOpen(false)}></i>
                    <i className='fa fa-arrow-circle-left arrow' onClick={() => handleMove("l")}></i>
                    <div className='sliderWrapper'>
                        <img src={data[slideNumber].image} alt="" className='sliderImg' />
                    </div>
                    <i className='fa fa-arrow-circle-o-right arrow' onClick={() => handleMove("r")}></i>
                </div>}
                <div className='Port-boxs'>
                    {data.map((item, i) => (
                        <div className="box" data-aos="fade-up" key={item.id}>
                            <div className='img'>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className='overlay' onClick={() => handleopen(i)} >
                                <h3>{item.title}</h3>
                                <p>{item.type}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio