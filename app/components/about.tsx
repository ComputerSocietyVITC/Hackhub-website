'use client'
import React from 'react';


const Aboutpage = () => {
  return (
    <div className="bg-cover bg-center h-screen w-screen flex items-center justify-center">
      <div className="min-h-screen w-full flex justify-center">
        <div className="mt-40 w-full px-5">
          <div className="flex justify-between items-center px-12">
            <p className="text-white text-base font-bold">01</p>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-4xl font-bold ">ABOUT</p>
          </div>
          <div className="absolute text-gray-300 leading-relaxed font-Archivo Narrow text-justify" 
              style={{ width: '70%', height: '10%', top: '30%', left: '9%', gap: '0px', opacity: '1', fontSize: '140%' }}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras iaculis mauris eget lorem rhoncus finibus. Fusce volutpat metus sed lorem ultricies gravida. Nulla pulvinar tempus elit a commodo. Fusce volutpat metus sed lorem.</p>
          </div>
          
          <div
            className="relative"
            style={{ top: '50%', left: '85%' }}
          >
              <a className="inline-flex bg-transparent text-white border border-gray-300 rounded-full px-4 py-2 hover:bg-gray-700 hover:border-gray-700 transition-all">
                LEARN MORE
            </a>
            </div>
      
          </div>
        </div>
      </div>
  );
};

export default Aboutpage;