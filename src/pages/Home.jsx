import React from 'react'
import NewCeramics from '../components/newCeramics/NewCeramics'
import Header from '../components/header/Header'
import Hero from '../components/hero/Hero'
import Features from '../components/features/Features'
import { Routes } from 'react-router-dom'
import SignUp from '../components/signUp/SignUp'
import Brand from '../components/brand/Brand'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <Features/>
      <Routes></Routes>
      <NewCeramics/>
      <SignUp/>
      <Brand/>
      <Footer/>
    </div>
  )
}

export default Home