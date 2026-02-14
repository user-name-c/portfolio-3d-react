import React, { useEffect, useState } from 'react';

import {motion} from 'framer-motion';


import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {

  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    setShowCanvas(true);
  }, []);

  return (
    <section className="relative w-full h-screen mx-auto">

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center items-center mt-5'>
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Ivan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}> 
            I develop API, user <br className='sm:block hidden'/> interfaces and web aplications
          </p>

          {/* --- UNDER CONSTRUCTION TAG --- */}
      {/* <div className="mt-5 p-3 border border-[#915eff] bg-[#915eff]/10 rounded-lg inline-block">
        <p className="text-sm sm:text-base text-white opacity-80 italic">
          ⚠️ <span className="font-bold text-[#915eff]">Note:</span> Currently renovating! Replacing tutorial projects with my personal work.
        </p>
      </div> */}
      {/* ------------------------------ */}

        </div>
      </div> 

      <div className="relative w-full h-screen mx-auto">
  {/* ... */}
  {showCanvas && <ComputersCanvas />}
  {/* ... */}
</div>
      
      

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'
      >
        <a href="#about">
          <div className='w-[30px] h-[58px] rounded-3xl border-4 border-secondary  flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y:[0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType:'loop'
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero