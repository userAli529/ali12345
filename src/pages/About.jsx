import React from 'react'
import '../styles/About.css'
import Brand from '../components/brand/Brand'
import OurService from '../components/ourServie/OurService'
import Features from '../components/features/Features'
import SignUp from '../components/signUp/SignUp'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'

const About = () => {
  return (
    <div className='about'>
      <Header/>
      <h1 className='title'>A brand built on the love of craftmanship, <br />
      quality and outstanding customer service</h1>
      <Brand/>
      <OurService/>
      <Features/>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default About