import React from 'react'
import ProjectHelpingCard from './ProjectHelpingCard'
import { motion } from 'framer-motion';
import pic2 from '../images/pic2.png';
import pic3 from '../images/pic3.png';
import pic4 from '../images/pic4.png';
import pic5 from '../images/pic5.png';
const Projects = () => {
  const arr = [pic2,pic3,pic4,pic5];
  const arr1=["E-commerce","Notes-app","Resume-generator","Rock-paper"]
  const arr2=["Created a fully functional e-commerce website utilizing modern web technologies. The front-end was built with React.js, providing a responsive and dynamic user interface. For the back-end, Node.js and Express.js were employed, ensuring a robust and scalable server-side framework. This combination of technologies resulted in a seamless shopping experience, from browsing products to completing transactions.","Developed a notes app with capabilities to store, update, and delete notes. The front-end was built using React.js, offering a user-friendly and interactive interface. The back-end was powered by Node.js and Express.js, ensuring efficient data handling and a seamless user experience. This application provides a reliable platform for managing personal and professional notes effectively.","Created a resume generator application using React.js, leveraging the useState hook for state management. This tool allows users to input and update their resume information in real-time. At the end of the process, users can download their completed resume. The application provides an intuitive and efficient way to create professional resumes","Developed a Rock Paper Scissors game using HTML, CSS, and JavaScript. In this game, the user selects their choice, while the computer makes a random selection using a random number generator in JavaScript. The interface is simple and engaging, providing instant feedback on the game's outcome. This project showcases proficiency in front-end development and interactive web design."]

  const github=["https://github.com/beerlapavan8/e-commerce","https://github.com/beerlapavan8/notesapp","https://github.com/beerlapavan8/resume-generator","https://github.com/beerlapavan8/rock-paper"]

  const demo =["https://e-commerce-pavans-projects-08a5441f.vercel.app/","https://notesapp-pavans-projects-08a5441f.vercel.app/","https://beerlapavan8.github.io/resume-generator/","https://fancy-rolypoly-16c84d.netlify.app/"]
  return (
    <div>
      <h1 className='flex justify-center text-[80px] m-5'>Projects</h1>
    <motion.div 
// style={{ scaleX: scrollYProgress }} 
        initial={{ y: -300 }}
        animate={{ y: -100 }}

  transition={{ ease: "easeOut", duration: 1 }}
     className='grid grid-cols-3 gap-6 mt-24'>

      
        {arr.map((a,index)=>{
            return  <ProjectHelpingCard
            demo1={demo[index]}
            git={github[index]}
            prjt={arr1[index]}
            desc={arr2[index]}
            image={a}
            />
        })}
       
    </motion.div>
    </div>
  )
}

export default Projects
