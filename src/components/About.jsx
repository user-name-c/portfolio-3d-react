import React from 'react'
// tilt  para animacion de tarjetas
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils';
import { SectionWrapper } from '../hoc';

const ServiceCard =({index, title, icon}) => {
  return (
    <Tilt className='xs:w-[250px] w-full' >
      <motion.div 
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px]
      shadow-card'>
        <div 
          options={{max:45, scale:1, speed:450}}

          className='bg-tertiary py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white font-bold text-[20px] text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    // <> regular react fragment
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[25px]'
      >
        I am a Geological Engineer transitioning into software development, with a strong foundation in object-oriented programming (especially Java) and data analysis. I’m passionate about technology and building user-centered digital solutions.

My background in bilingual technical support and customer service has strengthened my communication skills, problem-solving mindset, and ability to work effectively in remote and multicultural environments. I’m currently seeking opportunities where I can continue growing as a software or data-focused professional.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, `about`)