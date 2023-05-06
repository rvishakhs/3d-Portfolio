import React from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import  logo  from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='max-w-7xl w-full flex justify-between items-center mx-auto'>
        <Link 
          to="/"
          className='flex items-center gap-2'
        >
          <img 
            src={logo}
            className='w-[90px] h-[70px] bg-blend-color-burn'
            
          />
          <p className='text-white font-bold'>Portfolio</p>
        </Link>
        <Link>
          Home
        </Link>
      </div>
    </nav>
  )
}

export default Navbar