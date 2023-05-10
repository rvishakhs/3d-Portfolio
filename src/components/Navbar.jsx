import React, { useState } from 'react';
import { styles } from '../styles';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { navLinks } from '../constant/index';
import { close, menu } from '../assets';



const Navbar = () => {

  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='max-w-7xl w-full flex justify-between items-center mx-auto'>
        <Link to="/" className='flex items-center gap-2'>
          <img src={logo} className='w-[85px] h-[70px]' alt='Logo' />
          <p className='text-white font-bold'>Portfolio &nbsp; | MERN Stack Developer</p>
        </Link>
        <ul className='list-none  hidden sm:flex flex-row items-center gap-6'>
          {navLinks.map((link) => {
            return (
              <li 
                className={`${active === link.title ? " text-white border-b-[1px] border-red-500" : "text-secondary"}  hover:text-white text-[18px] font-medium cursor-pointer`}key={link.id}
                onClick={() => setActive(link.title)}
              >
                <a 
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>

        <div className='sm:hidden flex flex-1 items-center justify-end'>
          <img 
            src={toggle ? menu : close}
            alt='menu'
            className='w-7 h-7 object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
        </div>
        <div className={`${toggle ? " hidden" : "flex"} p-6 bg-slate-600 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
        <ul className='list-none flex  flex-col items-center gap-4'>
          {navLinks.map((link) => {
            return (
              <li 
                className={`${active === link.title ? " text-white border-b-[1px] border-red-500" : "text-secondary"}  hover:text-white text-[18px] font-medium cursor-pointer`}key={link.id}
                onClick={() => setActive(link.title)}
              >
                <a 
                  href={`#${link.id}`}
                >
                  {link.title}
                </a>
              </li>
            );
          })}
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
