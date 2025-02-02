'use client'
import React from 'react';
import Button from '../ui/button';

export const runtime = "edge";

const Aboutpage: React.FC = () => {
  return (
    <div className="bg-cover bg-center w-screen flex items-center justify-center">
      <div className=" w-full flex justify-center">
        <div className=" w-full px-5">
          <div className="flex justify-between items-center font-montserrat">
            <p className="text-white font-bold text-xl">01</p>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-xl sm:text-3xl font-extrabold">ABOUT</p>
          </div>

         
          <div
            className="flex flex-col items-center justify-center text-gray-300 leading-relaxed font-archivoNarrow text-left transition-all duration-500 ease-in-out mt-6"
            style={{
              width: '100%',
              height: 'auto',
              fontWeight: '500',
            }}
          >
            <p
              className="
                text-sm  
                sm:text-base
                md:text-xl
                lg:text-xl 
                xl:text-2xl 
                2xl:text-3xl
                text-left
                about-text-adjustment
              "
            >
             We at VIT Chennai are hosting an exciting Hackathon designed to challenge your creativity and technical skills. With tracks like AI/ML, Web3, Open Innovation, Health, and Environmental Sustainability, there’s something for everyone.

Get hands-on experience, collaborate with like-minded innovators, and build impactful solutions with guidance from expert mentors. Enjoy access to top-notch resources, technical support, and a platform to showcase your ideas.

Don’t miss this chance to network, learn, and compete for exciting prizes! Visit our official channels for registration and more details.
            </p>
          </div>
{/* Button container */}
<div className="flex flex-col items-center justify-center mt-20">
          <Button text='Know more about us' href='https://ieeecsvitc.com'/>
        </div>
      </div>


        </div>
      </div>
  );
};

export default Aboutpage;
