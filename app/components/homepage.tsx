'use client';
import React from 'react';
import Image from 'next/image';



const Homepage: React.FC = () => {
  return (
   <div className="flex flex-col items-center justify-center h-screen w-screen relative">
      {/*<div
        className="absolute text-white text-8xl  font-light italic hidden md:block"
        style={{
          top: '29%', // Positioning above the logo
          left: '68%',
          transform: 'translateX(-50%)'
        }}
      >
       IEEE
      </div>
      
      <div
        className="absolute  text-white text-5xl  font-extralight italic hidden md:block"
        style={{
          top: '35%', // Positioning above the logo
          left: '83%',
          transform: 'translateX(-50%)'
        }}
      >
       CompSoc
      </div> 
      <Image src='/images/compsoc.webp' alt="Background Track" width={90} height={90} className="absolute"
       style={{
        top:'2%' ,
        left:'3%'
       }} ></Image>
      {/* Hackhub Logo */}
      <div
        className="bg-center bg-no-repeat bg-contain h-[50vh] w-[50vw] absolute homepage-logo"
        style={{
          backgroundImage: 'url(images/Hackhub_logo.svg)',
          top: '50%', 
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* 2025 Logo */}
      <div
        className="bg-no-repeat bg-contain h-[10vh] w-[10vw] top-[50%] left-[10%]  relative homepage-2025-logo transform -translate-x-1/2 -translate-y-1/2 md:top-[20%] md:-left-[15%] md:block hidden"
        style={{
          backgroundImage: 'url(images/2025.svg)',
        }}
      />
       <div>
       {/*<div
        className="absolute text-white text-sm font-Archivo Narrow line-clamp-2 hidden md:block"
        style={{ width: '13%', height: '10%', top: '60%', left: '62%', gap: '0px', opacity: '1', fontSize: '90%' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>*/}
      
      </div>
    </div>
   
  );
};

export default Homepage;
