'use client'
import React from 'react';
import Image from 'next/image'

const Event = () => {
  return (
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
    </div>
  );
};

export default Event;