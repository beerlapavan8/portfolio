import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
export const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    //console.log(username)
    emailjs
      .sendForm('service_oe81ryc', 'template_ngz41i8', form.current, {
        publicKey: '3O8-2NQYElasTXzVI',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      navigate("/");  
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   {/* <label>Name</label><br />
    //   <input type="text" name="user_name" /><br /> */}
    //   <label>Email</label><br />
    //   <input type="email" name="from__name"/><br />
    //   <label>Message</label><br />
    //   <textarea name="message"  /><br />
    //   <input type="submit" value="Send" />
    // </form>
    <div>
    <motion.div  
    initial={{ x: 0,y:-500 }}
    animate={{ x: 0,y:-100 }}
    transition={{ ease: "easeOut", duration: 1 }}>
      <div class="flex flex-col items-center justify-center   mt-52">
      <h1 className='flex justify-center text-[80px]   '>Contact</h1>
  <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    {/* <h2 class="text-2xl font-bold text-gray-900 mb-4">Contact</h2> */}
    <form class="flex flex-col" ref={form} onSubmit={sendEmail}>
      <input type="email" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="from__name" placeholder="Email address"/>
      <textarea type="password" class="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" name="message" placeholder="message"/>
      {/* <div class="flex items-center justify-between flex-wrap">
        <label for="remember-me" class="text-sm text-gray-900 cursor-pointer">
          <input type="checkbox" id="remember-me" class="mr-2"/>
          Remember me
        </label>
        <a href="#" class="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
        <p class="text-gray-900 mt-4"> Don't have an account? <a href="#" class="text-sm text-blue-500 -200 hover:underline mt-4">Signup</a></p>
      </div> */}
      <button type="submit" class="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150">Submit</button>
    </form>
  </div>
</div>

    </motion.div>
    </div>
  );
};