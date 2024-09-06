import React, { useState } from 'react';
import { motion } from "framer-motion"
import CloseIcon from '@mui/icons-material/Close';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import Link from 'next/link';

import User from './userInfo/page';


const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}

export const BurgerMenu:React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-0 left-0 z-50 w-8">
      <button 
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="absolute top-4 left-4 p-2 rounded text-white"
      >
        {isOpen ? <CloseIcon  fontSize="large" className='text-black'/> :  <MenuOpenRoundedIcon color="disabled" fontSize="large" />}
      </button>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        initial='closed'
        transition={{ duration: 0.5 }}
        className="bg-white text-black p-4 h-screen w-64 border-x-2"
      >
        <hr className=' border-white mt-10'/>
        <User />
        <div className="mt-10 ml-5">
          <Link href='/'>
            <p className="py-2 hover:bg-slate-950 hover:text-white cursor-pointer">Home</p>
          </Link>
          <p className="py-2  hover:bg-slate-950 hover:text-white cursor-pointer">Item 2</p>
          <p className="py-2  hover:bg-slate-950 hover:text-white cursor-pointer">Item 3</p>
        </div>
      </motion.nav>
    </div>
  )
}

export default BurgerMenu;