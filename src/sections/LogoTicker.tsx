"use client";
import { plugin } from 'postcss';
import apexLogo from '../assets/logo-apex.png';
import acmeLogo from '../assets/logo-acme.png';
import celestialLogo from '../assets/logo-celestial.png';
import quantumLogo from '../assets/logo-quantum.png';
import pulseLogo from '../assets/logo-pulse.png';
import echoLogo from '../assets/logo-echo.png';
import {motion} from 'framer-motion'

export const LogoTicker = () => {
  return (
  <section className='py-20 md:py-24'>
    <div className="container">
      <div className='flex items-center gap-5'>
        <div className='flex-1 md:flex-none'>
          <h2>Trusted by top innovative teams</h2>
        </div>
        <div className=' flex flex-1 md:flex-none overflow-hidden w-28 md:w-[465px] lg:w-[777px] [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
          <motion.div 
          initial={{translateX:'-50%'}}
          animate={{
            translateX:'0%'
          }}
          transition={{
            duration:30,
            repeat:Infinity,
            ease:"linear"
          }}
          className='flex flex-none gap-14 pr-14 '>
              {[apexLogo, acmeLogo, celestialLogo, quantumLogo, pulseLogo, echoLogo, 
              apexLogo, acmeLogo, celestialLogo, quantumLogo, pulseLogo, echoLogo].map((logo, index) => (
                <img src={logo.src} key={index} className='h-6 w-auto' />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>)
};
