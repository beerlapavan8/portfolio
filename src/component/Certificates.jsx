
import React from 'react';
import { motion } from 'framer-motion';

const Certificates = () => {
  return (
    <div>
           <h1 className='flex justify-center text-[80px] mt-10 '>Certifications</h1>
    <motion.div
      initial={{ x: -200, y: 0 }}
      animate={{ x: 6, y: 0 }}
      transition={{ ease: 'easeOut', duration: 1 }}
      className='grid grid-cols-3 gap-6 mt-20 '
    >
      <div className="pt-12 bg-white shadow-2xl dark:bg-gray-700">
        <div className="flex flex-col h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900">
          <div className="flex-1 px-4 pb-6 border-b">
            <div className="my-4 text-center">
              <img className="w-32 h-32 mx-auto my-4 border-4 border-white rounded-full dark:border-gray-800"
                src="https://i.pinimg.com/736x/d4/74/7c/d4747cb7dcbecb5223b83355ea97a3be.jpg" alt="" />
              <div className="py-2">
                <p className="mb-1 text-2xl font-bold text-gray-800 dark:text-white">Amazon web services cloud practitioner</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 px-2 pb-6 text-center">
            
            <a href="https://www.credly.com/badges/8a5d9a90-1c23-4047-862f-2b7336f417ba/public_url" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-7  py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">view</a>

          </div>
        </div>
      </div>

      <div className="pt-12 bg-white shadow-2xl dark:bg-gray-700">
        <div className="flex flex-col h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900">
          <div className="flex-1 px-4 pb-6 border-b">
            <div className="my-4 text-center">
              <img className="w-32 h-32 mx-auto my-4 border-4 border-white rounded-full dark:border-gray-800"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/redhat-2752087-2284904.png?f=webp" alt="" />
              <div className="py-2">
                <p className="mb-1 text-2xl font-bold text-gray-800 dark:text-white">Red Hat Certified Enterprise Application Developer</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 px-2 pb-6 text-center">
            
            <a href="https://www.credly.com/badges/a1efbba8-a078-41d9-bc42-0e9a0b5194ee/public_url" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-7  py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">view</a>

          </div>
        </div>
      </div>

      <div className="pt-12 bg-white shadow-2xl dark:bg-gray-700">
        <div className="flex flex-col h-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-900">
          <div className="flex-1 px-4 pb-6 border-b">
            <div className="my-4 text-center">
              <img className="w-32 h-32 mx-auto my-4 border-4 border-white rounded-full dark:border-gray-800"
                src="https://university.automationanywhere.com/templates/g5_helium/custom/images/icons/cert-level-3.png" alt="" />
              <div className="py-2">
                <p className="mb-1 text-2xl font-bold text-gray-800 dark:text-white">Automation Anywhere Certified Essentials RPA Professional</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 px-2 pb-6 text-center">
            
            <a href="https://api.accredible.com/v1/auth/invite?code=11ad0152404078d7154f&credential_id=008b67e8-eab8-4748-bad8-c8a1cc96728c&url=https%3A%2F%2Fcertificates.automationanywhere.com%2F008b67e8-eab8-4748-bad8-c8a1cc96728c&ident=e82016c2-e504-4536-8eb3-178e29662814" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xl px-7   py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">view  </a>

          </div>
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default Certificates;
