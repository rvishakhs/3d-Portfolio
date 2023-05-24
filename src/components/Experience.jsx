import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constant';
import { textVariant } from '../uttils/motion';
import { Sectionwrapper } from '../HOC';
import { motion } from 'framer-motion';


const ExperienceCard = ({data}) => {
  return (
      <VerticalTimelineElement
        contentStyle={{background : "#1d1836", color : "#fff"}}
        contentArrowStyle={{ borderRight:"7px solid #232631" }}
        date={data.date}
        iconStyle={{background:data.iconBg}}
        icon={
          <div className='flex w-full h-full items-center justify-center '>
            <img 
              src={data.icon}
              alt={data.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div>
          <h3 className='font-bold text-lg tracking-wide'>{data.title}</h3>
          <p className='font-semibold text-base text-gray-300'>{data.company_name}</p>
        </div>
        <div className='mt-2'>
          <ul className='flex mt-2 flex-col list-disc ml-5 space-y-2'>
            {data.points.map((point, index) => {
              return (
                <li key={`experience-point-${index}`}>
                    {point}
                </li>
              )
            })}
          </ul>
        </div>
      </VerticalTimelineElement>
  )
} 

export {ExperienceCard}


const Experience = () => {
  return (
    <>
      <motion.div
         variants={textVariant()}
         className="mx-auto flex flex-col items-center justify-center"
      >
        <p className={styles.sectionSubText}>
          What i did so far
        </p>
        <h1 className={styles.heroHeadText}>
          Work Experience
        </h1>
      </motion.div>

      <VerticalTimeline>
        {experiences.map((experience, index) => {
          return (
            <ExperienceCard key={index} data={experience}/>
          )
          })}

      </VerticalTimeline>
    </>
  )
}

export default Sectionwrapper(Experience, "work")