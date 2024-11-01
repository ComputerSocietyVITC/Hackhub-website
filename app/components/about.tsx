'use client'
import React from 'react';


const Aboutpage = () => {
  
  return (
    <div className="bg-cover bg-center h-screen w-screen flex items-center justify-center">
      <div className="min-h-screen w-full flex justify-center">
        <div className="mt-40 w-full px-5">
          <div className="flex justify-between items-center px-12">
            <p className="text-white text-base font-bold hidden sm:block">01</p>
            <div className="flex-1 h-[1px] bg-white mx-4 hidden sm:block"></div>
            <p className="text-white text-4xl font-bold sm:text-center sm:ml-10 md:text-center ml-20 mt-0">ABOUT</p>
            <div
            className="absolute text-gray-300 leading-relaxed font-archivoNarrow text-left transition-all duration-500 ease-in-out"
            style={{
              width: '80%',
              height: '10%', 
              top: '30%',
              left: '9%',
              opacity: '1',
              fontSize: '140%',
              fontWeight:"400"
            }}
          >
            <p>
            The IEEE Computer Society Club from VIT Chennai is organizing a Hackathon with exciting tracks like AI/ML, Web3, Open Innovation, Health, and Environmental Sustainability. This is a great opportunity to learn new skills, network with experts, and build innovative solutions. Participants will have access to mentors, resources, and technical support. For registration and further information, please follow our official channels.</p>
          </div>
          </div>
            

         {/* 
          <div className="flex justify-center mt-0 md:mt-48  ">
            <button
              onClick={toggleExpand}
              className="flex bg-transparent text-white border border-gray-400 rounded-full px-6 py-2 hover:bg-[#FFFFFF17] transition-all duration-300 text-sm tracking-widest"
             >
              
              {isExpanded ? 'SHOW LESS' : 'LEARN MORE'}
            </button>
          </div>  */}
        
          </div>
        </div>
        </div>
  );
};

export default Aboutpage;