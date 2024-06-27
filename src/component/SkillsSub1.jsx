import React from 'react'
import { motion } from 'framer-motion'
const SkillsSub1 = () => {
  return (
    <motion.div 
    initial={{ x: 0,y:-500 }}
      animate={{ x: 0,y:20 }}
      transition={{ ease: "easeOut", duration: 1 }}
    className='grid grid-cols-5 gap-5 mt-20'>
      <div class="flex flex-col justify-center items-center bg-gray-100  hover:scale-[1.1]  shadow-2xl  ">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-40">
                            <img src="https://dwglogo.com/wp-content/uploads/2017/09/1460px-React_logo.png" alt="Mountain" class="w-40  h-40 object-cover"/>
                            <div class="p-6 flex justify-center text-center mb-7">
                                <h2 class="text-2xl font-bold text-gray-800 mb-2">React js</h2>
                            </div>
                        </div>
                    </div> 

                    <div class="flex flex-col justify-center items-center bg-gray-100  hover:scale-[1.1]  shadow-2xl  ">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-40">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvCeq3uzcMcxdvC5F-gfZJpOaePBfpbcJpg&s" alt="Mountain" class="w-40  h-40 object-cover"/>
                            <div class="p-6 flex justify-center text-center mb-7">
                                <h2 class="text-2xl font-bold text-gray-800 mb-2">Node js</h2>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center items-center bg-gray-100  hover:scale-[1.1]  shadow-2xl  ">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-40">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDuQIHEzUwBGh6Z7DMWSgVopFi9EdZ-nHiQ&s" alt="Mountain" class="w-40  h-40 object-cover"/>
                            <div class="p-6 flex justify-center text-center mb-7">
                                <h2 class="text-2xl font-bold text-gray-800 mb-2">Express js</h2>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col justify-center items-center bg-gray-100  hover:scale-[1.1]  shadow-2xl  ">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-40">
                            <img src="https://e7.pngegg.com/pngimages/216/509/png-clipart-mongodb-node-js-npm-open-source-model-angularjs-leaf-leaf-logo.png" alt="Mountain" class="w-40  h-40 object-cover"/>
                            <div class="p-6 flex justify-center text-center mb-7">
                                <h2 class="text-2xl font-bold text-gray-800 mb-2">Express js</h2>
                            </div>
                        </div>
                    </div> 

                    <div class="flex flex-col justify-center items-center bg-gray-100  hover:scale-[1.1]  shadow-2xl  ">
                        <div class="bg-white rounded-lg shadow-lg overflow-hidden w-40">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdnJeM13WnrbxjGG7kgrfbYLJ9C2ftiOac_A&s" alt="Mountain" class="w-40  h-40 object-cover"/>
                            <div class="p-6 flex justify-center text-center mb-7">
                                <h2 class="text-2xl font-bold text-gray-800 mb-2">Postresql</h2>
                            </div>
                        </div>
                    </div> 
    </motion.div>
  )
}

export default SkillsSub1
