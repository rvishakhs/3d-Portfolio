import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section
      className='w-full h-screen relative mx-auto'
    >
      <div className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div  className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className='w-1 sm:h-80 h-40 violet-gradient '/>
          </div>
          <div className='p-2 mt-5 flex flex-col items-start justify-center gap-2'>
            <h1 className={`${styles.heroHeadText} text-white`}>  Hi I'm <span className='text-[#915eff] tracking-wide'>Visakh </span> </h1>
            <p className={`${styles.heroSubText}`}>Passionate MERN stack developer <br/> empowering dynamic web experiences <br/> from front to back.</p>

          </div>
      </div>
          <ComputersCanvas />
    </section>
  )
}

export default Hero