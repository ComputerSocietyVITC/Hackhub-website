'use client'
import React, { useState } from 'react';


const Aboutpage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="bg-cover bg-center h-screen w-screen flex items-center justify-center">
      <div className="min-h-screen w-full flex justify-center">
        <div className="mt-40 w-full px-5">
          <div className="flex justify-between items-center px-12">
            <p className="text-white text-base font-bold">01</p>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-4xl font-bold ">ABOUT</p>
            <div
            className="absolute text-gray-300 leading-relaxed font-Archivo text-justify transition-all duration-500 ease-in-out"
            style={{
              width: '70%',
              height: isExpanded ? '40%' : '10%', // Expand height when expanded
              top: '30%',
              left: '9%',
              opacity: '1',
              fontSize: '140%',
            }}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis mauris eget lorem rhoncus finibus. Fusce volutpat metus sed lorem ultricies gravida. Nulla pulvinar tempus elit a commodo.
              {isExpanded && (
                <span> Fusce volutpat metus sed lorem. Donec vel orci condimentum, tristique tortor eget, viverra quam. Sed euismod, ex eget laoreet auctor, arcu eros ullamcorper odio, vel hendrerit sapien urna ut ex.</span>
              )}
            </p>
          </div>
          </div>
            

          {/* Button to toggle expand/collapse */}
          <div className="flex justify-center mt-0 md:mt-48  ">
            <button
              onClick={toggleExpand}
              className="flex bg-transparent text-white border border-gray-300 rounded-full px-6 py-2 hover:bg-[#FFFFFF17] transition-all duration-300 text-sm tracking-widest"
             >
              {isExpanded ? 'SHOW LESS' : 'LEARN MORE'}
            </button>
          </div>
        
          </div>
        </div>
        </div>
  );
};

export default Aboutpage;