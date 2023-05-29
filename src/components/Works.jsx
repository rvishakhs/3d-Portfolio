import { Tilt } from "react-tilt"
import { projects } from "../constant"
import { motion } from "framer-motion"
import { Sectionwrapper } from "../HOC"
import { fadeIn, textVariant } from "../uttils/motion"
import { styles } from "../styles"


const projectCard = ({index,
  name,
  description,
  tags,
  image,
  source_code_link,}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}      
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img
              src={image}
              alt='project_image'
              className='w-full h-full object-cover rounded-2xl'
          />

        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText}`}>My Works</p>
        <p className={`${styles.heroHeadText}`}>Projects.</p>
      </motion.div>
      <div
        className="w-full flex"
      >
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-base max-w-3xl leading-[30px] text-justify"
        >
          Here is some little things about me as a self taugt developer projects are the best way to showcase my skills,
           so i spends more and more time to create projects and implyment new techs in each products. it's my pleasure to 
           see somebody scrolling through my works that's the great reward for me.  

        </motion.p>
      </div>
      <div className="flex flex-wrap gap-7 mt-20">
        {projects.map((project, index) => (
          <projectCard 
            key={`project-${index}`} 
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  )
}

export default Sectionwrapper(Works, "about")