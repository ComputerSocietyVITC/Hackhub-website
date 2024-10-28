'use client'
import React from 'react';
import Image from 'next/image'

const Event = () => {
  return (
<<<<<<< Updated upstream
    <div className="bg-cover bg-center h-screen w-screen flex items-center relative justify-center">
       <div
        className="bg-center bg-no-repeat bg-contain h-[2vh] w-[60vw] absolute overflow-auto"
        style={{
          backgroundImage: 'url(/images/line2.webp)', // path to your .webp file
          top: '5%', // Adjust this position as needed
          left: '60%',
          transform: 'translate(-50%, -50%)'
        }}
      />
=======
    <div className="bg-cover bg-center h-screen w-screen flex items-center justify-center">
      <div className="min-h-screen w-full flex justify-center">
        <div className="mt-12 w-full px-5">
          <div className="flex justify-between items-center px-12">
            <p className="text-white text-4xl font-bold">OTHER IEEE FLAGSHIP EVENTS</p>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-base font-bold ">02</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mt-20 px-32">
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
>>>>>>> Stashed changes
    </div>
  );
};

export default Event;