'use client';
import React from 'react';
import Image from 'next/image';
import Stopwatch from './ui/stopwatch';



const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen relative tracking-tighter shadow-white">
      <div
        className="absolute text-white md:text-4xl text-2xl font-extrabold italic
                    top-[37%] left-[30%]  
                   md:top-[25.5%] md:left-[67.5%] md:transform-x-1/2 "
      >
       IEEE <span className=" text-stroke  text-stroke-white text-black font-extrabold">COMPSOC</span> 
      

       
      </div>
      <Image src='/images/compsoc.webp' alt="Background Track" width={95} height={95} 
      className="absolute"
          style={{
        top:'2%' ,
        left:'2%'
       }} ></Image>
      {/* Hackhub Logo */}
      <div
        className="bg-center bg-no-repeat bg-contain md:h-[26vh] md:w-[68vw] h-[35vh] w-[80vw] absolute homepage-logo z-10"
        style={{
          backgroundImage: 'url(images/Hackhub_logo.png)',
          top: '43%', 
          left: '52%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* FLAGSHIP AND 2025 Logo */}
      
      <div
        className="absolute  text-white   font-archivoNarrow tracking-wide md:top-[56%] md:left-[27.25%] top-[46.5%] left-[53%] "
        style={{
          transform: 'translateX(-50%)'
        }}
      >
       <span className="md:text-2xl text-base ">FLAGSHIP EVENT </span>
       <span className='font-extrabold md:text-3xl text-lg italic'>2025</span>
      </div> 
      <div
        className="bg-center bg-no-repeat bg-contain h-[25vh] w-[38vw] md:top-[58.5%] md:left-[58%] hidden lg:block absolute "
        style={{
          backgroundImage: 'url(images/line1.webp)',
          transform: 'translate(-50%, -50%)'
        }}
      />
    <Stopwatch
        targetDate="2025-12-31T23:59:59"
        top="75%"
        left="50%"
    
      />
        <a
        href="/school-registration"
        className="absolute px-14 py-2 rounded-full border border-white text-white bg-black duration-300 hover:bg-gray-500 hover:text-black transition-all text-center hidden lg:block"
        style={{
          top: '85%',
          left: '31%',
        }}
      >
        SCHOOL REGISTRATION
      </a>
      <a
        href="/join-our-community"
        className="absolute px-14 py-2 rounded-full border border-white text-white bg-black duration-300 hover:bg-gray-500 hover:text-black transition-all text-center hidden lg:block"
        style={{
          top: '85%',
          left: '51%',
        }}
      >
        JOIN OUR COMMUNITY
      </a>
    </div>
   );
  };

export default Homepage;