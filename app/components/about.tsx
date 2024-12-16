'use client'
import React from 'react';

const Aboutpage: React.FC = () => {
  return (
    <div className="bg-cover bg-center h-screen w-screen flex items-center justify-center">
      <div className=" w-full flex justify-center">
        <div className=" w-full px-5">
          <div className="flex justify-between items-center">
            <p className="text-white font-bold text-xl">01</p>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-xl sm:text-3xl font-bold">ABOUT</p>
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
              The IEEE Computer Society Club from VIT Chennai is organizing a Hackathon with exciting tracks like AI/ML, Web3, Open Innovation, Health, and Environmental Sustainability. This is a great opportunity to learn new skills, network with experts, and build innovative solutions. Participants will have access to mentors, resources, and technical support. For registration and further information, please follow our official channels.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
