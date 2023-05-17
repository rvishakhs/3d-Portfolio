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
          <div className='absolute xs:bottom-10 bottom-32 w-full flex items-center justify-center'>
            <a href='#about'>
              <div 
                className='w-[32px] h-[52px] rounded-3xl border-4 border-secondary justify-center flex items-start p-2 hover:border-white'>
                <motion.dev 
                  animate={{ 
                    y : [0, 14, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat : Infinity,
                    repeatType: 'loop',
                  }}
                  className="w-3 h-3 rounded-full bg-secondary mb-1 hover:bg-white"  
                />
              </div>
            </a>
          </div>
    </section>
  )
}

export default Hero