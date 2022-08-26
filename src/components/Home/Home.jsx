import React from 'react'
import About from '../../Pages/About/About'
import Services from '../../Pages/Services/Services'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import Team from "../../Pages/Team/Team"
import Portfolio from '../../Pages/Portfolio/Portfolio'
import Contact from '../../Pages/Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default Home

