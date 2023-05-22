import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constant' 
import { fadeIn, textVariant } from '../uttils/motion'
import { Sectionwrapper } from '../HOC'

const Service = ({index, title, icon}) => {
  return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className='w-full green-pink-gradient p-[1px] ml-3 rounded-[20px] shadow-card'
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450
            }}
            className='bg-tertiary py-5 px-12 rounded-[20px] flex flex-col items-center justify-evenly min-h-[280px]'
          >
            <img  
              src={icon} 
              alt={title}
              className='w-16 h-16 object-contain'
            />
            <h3 className='text-center text-white text-[20px] font-bold tracking-wider'>{title}</h3>
           
          </div>
        </motion.div>
      </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>
          INTRODUCTION
        </p>
        <h1 className={styles.heroHeadText}>
          Overview
        </h1>
      </motion.div>

      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify'
      >
      Highly skilled and versatile DevOps & MERN Stack Developer with a strong passion for accelerating software development. Adept at bridging the gap between development and operations teams, leveraging the power of DevOps principles and expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js) to streamline processes and deliver efficient, high-quality web applications. Experienced in configuring infrastructure, automating deployment, implementing robust testing frameworks, and optimizing workflows for agile, iterative development. Collaborative and detail-oriented, committed to delivering seamless user experiences and driving continuous improvement in software development practices.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <Service key={service.title} index={index} {...service} />
        ) )}

      </div>
    </>
  )
}

export default Sectionwrapper(About, "about")