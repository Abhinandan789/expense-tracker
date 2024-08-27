import React from 'react'

import Navbar from './navbar';
import Main from './mainPage';

export const home = () => {
  return (
    <div className='max-w-full  max-h-max'>
        <Navbar />
        <Main />
    </div>
  )
}


export default home;