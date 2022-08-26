/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Links } from './LinksData'
import "./Header.css"

const Header = () => {
    const [responsev, setResponsev] = useState(false)     //responcev screen media
    return (
        <div className='Header'>
            <div className='container'>
                <div className='navbar'>
                    <a href='#' className='logo' data-aos="fade-right">
                        <span>e</span>
                        Business</a>
                    <ul className={responsev ? "nav-mobile" : "nav"} onClick={() => setResponsev(false)}>
                        {Links.map((item, i) => (
                            <li key={i}>
                                <a href={item.href}>{item.title}</a>
                            </li>
                        ))}
                    </ul>
                    <button className="toggle" onClick={() => setResponsev(!responsev)}>
                        <i className='fa fa-bars '></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header