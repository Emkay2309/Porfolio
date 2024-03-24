"use client"

import Lottie  from "lottie-react";
import animationData from "../../../public/Animation - 1711142674680.json";
import {motion} from 'framer-motion'

const Skills = () => {
  return  (
    <div className="grid grid-cols-12 text-white  font-semibold  justify-evenly min-h-screen bg-[#121212] px-12 py-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" place-self-center text-center sm:text-left justify-self-start"
        >
          <div className="col-span-8 h-[400px] w-[500px]">
            <Lottie animationData={animationData} />
          </div >
          <div className="col-span-4 mt-32">
            <label className="mb-12">
              <h3 className="mt-12 mb-6  underline-offset-4 underline text-5xl">FrontEnd</h3>
              <span className="mt-4 text-xl">HTML , CSS , JavaScript</span>
              <br/>
              <span className="mt-4 text-xl">Next JS , Tailwind, Typescript </span>
            </label>

            <br/>

            <label className="mb-12">
              <h3 className="mt-12 mb-6  underline-offset-4 underline text-5xl">BackEnd</h3>
              <span className="mt-4 text-xl">Java , Spring , SpringBoot</span>
              <br/>
              <span className="mt-4 text-xl">MySql , GIT, Design Patterns </span>
            </label>
          </div>
      </motion.div>
  </div>

    
  ); 
}
export default Skills;