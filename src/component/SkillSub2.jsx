import React from 'react'
import { motion } from 'framer-motion'
const SkillSub2 = () => {
  return (
    <motion.div 
    initial={{ x: -200, y: 0 }}
    animate={{ x: 6, y: 0 }}
    transition={{ ease: 'easeOut', duration: 1 }}
    className='grid grid-cols-5 gap-5 mt-20'>
      <div class="flex flex-col justify-center items-center bg-gray-100  hover:scale-[1.1]  shadow-2xl  ">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-40">
                            <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/181_Java_logo_logos-512.png" alt="Mountain" class="w-40  h-40 object-cover"/>
                            <div class="p-6 flex justify-center text-center mb-7">
                                <h2 class="text-2xl font-bold text-gray-800 mb-2">Java</h2>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center items-center bg-gray-100  hover:scale-[1.1]  shadow-2xl  ">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-40">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0UMxD2W_5SIFQLdN0eZHzzO45aTLxe9RPQ&s" alt="Mountain" class="w-40  h-40 object-cover"/>
                            <div class="p-6 flex justify-center text-center mb-7">
                                <h2 class="text-2xl font-bold text-gray-800 mb-2">Python</h2>
                            </div>
                        </div>
                    </div> 

                    <div class="flex flex-col justify-center items-center bg-gray-100  hover:scale-[1.1]  shadow-2xl  ">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-40">
                            <img src="https://e7.pngegg.com/pngimages/87/538/png-clipart-javascript-scalable-graphics-logo-encapsulated-postscript-javascript-icon-text-logo-thumbnail.png  " alt="Mountain" class="w-40  h-40 object-cover"/>
                            <div class="p-6 flex justify-center text-center mb-7">
                                <h2 class="text-2xl font-bold text-gray-800 mb-2">JavaScript</h2>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center items-center bg-gray-100  hover:scale-[1.1]  shadow-2xl  ">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-40">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" alt="Mountain" class="w-40  h-40 object-cover"/>
                            <div class="p-6 flex justify-center text-center mb-7">
                                <h2 class="text-2xl font-bold text-gray-800 mb-2">C</h2>
                            </div>
                        </div>
                    </div> 

                    <div class="flex flex-col justify-center items-center bg-gray-100  hover:scale-[1.1]  shadow-2xl  ">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-40">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_7F3i33mMNr4giX8B2mwy1yl4_QLKtuINA&s" alt="Mountain" class="w-40  h-40 object-cover"/>
                            <div class="p-6 flex justify-center text-center mb-7">
                                <h2 class="text-2xl font-bold text-gray-800 mb-2">Tailwind Css</h2>
                            </div>
                        </div>
                    </div> 
    </motion.div>
  )
}

export default SkillSub2
