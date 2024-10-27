'use client'
import React from 'react';
import Image from 'next/image'


const Sponsors = () => {
  return (
    <div className="bg-cover bg-center h-screen w-screen flex  relative justify-center">
    <div
        className="bg-center bg-no-repeat bg-contain h-[2vh] w-[60vw] absolute overflow-auto"
        style={{
          backgroundImage: 'url(/images/line2.webp)', // path to your .webp file
          top: '5%', // Adjust this position as needed
          left: '36%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
     
  );
};

export default Sponsors;

