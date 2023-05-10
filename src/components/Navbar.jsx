import React from 'react'
import { styles } from '../styles'
import { Link } from 'react-router-dom'
import  logo  from '../assets/logo.png';
import {navLinks} from '../constant/index'

const Links = [{name :"About", id : "about"},{name :"contact", id : "contact"} ]

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
            className='w-[85px] h-[70px] '
            
          />
          <p className='text-white font-bold'>Portfolio &nbsp; | MERN Stack Developer</p>
        </Link>
      <ul className='list-none flex justify-end items-center flex-row gap-4'>
       {Links.map((link) => {
        <li>
          {link}
        </li>
       } )}
      </ul>
      </div>
    </nav>
  )
}

export default Navbar