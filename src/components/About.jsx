import React from 'react'
// tilt  para animacion de tarjetas
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';

import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant} from '../utils';

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
        I am a Geological Engineer with a strong foundation in object-oriented programming (especially in Java) and data analysis. Passionate about technology, software development, and creating innovative, user-centered digital experiences. I have experience in tech support and customer service in both English and Spanish, which has helped me develop strong communication skills and the ability to work effectively in multicultural and remote environments.
      </motion.p>
    </>
  )
}

export default About