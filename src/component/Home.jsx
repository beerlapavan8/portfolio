import React from 'react'
import {motion} from 'framer-motion'
import pic from '../images/pic.jpg'
import { TypeAnimation } from 'react-type-animation';
const Home = () => {
  
    console.log(typeof(pic));
  return (
    <div>
<div style={{ height: '100vh', background: '#f5f5f5' }}>
        {/* <Example/> */}
      <motion.div  
      initial={{ x: 0,y:-500 }}
      animate={{ x: 0,y:-100 }}
      transition={{ ease: "easeOut", duration: 1 }}
      class="flex  justify-center items-center dark:bg-slate-800 mt-[102px]">
    
     <div class="flex pt-10 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden ml-20">
    <div class="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div class="w-full md:w-1/2 lg:pr-32">
            <h2 class="text-4xl lg:text-5xl text-center md:text-left text-black leading-tight font-medium">Hi There!</h2>
            <h2 class="text-4xl lg:text-5xl text-center md:text-left text-black leading-tight font-medium mt-3">
                {/* I'M PAVAN BEERLA */}
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        ' PAVAN BEERLA', 
                        1000,
                        'FullStack WebDeveloper',
                        1000,
                        
                    ]}
                    speed={10}
                    style={{ fontSize: '' }}
                    repeat={Infinity}
                />
                </h2>
            <h3
                class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                As a skilled web developer, I specialize in creating dynamic and responsive web applications. With expertise in frontend and backend technologies, I deliver efficient solutions that enhance user experiences and meet modern web development standards.
                
            </h3>
            <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
            <a href="https://black-antonie-2.tiiny.site" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-7 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Resume</a>
            </div>
        </div>
        <div class="w-full md:w-1/2 flex justify-center md:justify-evenly">
            <img src={pic} alt='pavan' className='w-auto h-96' />
        </div>  
    </div>
</div>
</ motion.div>
    </div>
    </div>
  )
}

export default Home
