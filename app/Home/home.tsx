'use client'

import React from 'react'
import Navbar from './Navbar';
import Main from './mainPage';
import VantaBackground from './uiComponents/VantaBackground';

const Home = () => {
  return (
    <div className='relative min-h-screen'>
      <VantaBackground />
      <div className='relative z-10 max-w-full max-h-max'>
        <Navbar />  
        <Main />
      </div>
    </div>
  )
}

export default Home;