import { motion } from 'framer-motion'
import React from 'react'
import { styles } from '../styles'
import { staggerContainer } from '../uttils/motion'

const Sectionwrapper = (Component, idname) => 
function HOC () {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: "true", amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative`}
        >
            <span className='hash-span' id={idname}> &nbsp; </span>
                <Component />
        </motion.section>
    )
}

export default Sectionwrapper