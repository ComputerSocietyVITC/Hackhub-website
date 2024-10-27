'use client'
import React from 'react';


const Aboutpage = () => {
  return (
    <div className="bg-cover bg-center h-screen w-screen flex items-center justify-center">
        <div
        className="bg-center bg-no-repeat bg-contain h-[2vh] w-[60vw] items-center absolute overflow-auto"
        style={{
          backgroundImage: 'url(/images/line2.webp)', // path to your .webp file
          top: '50%', // Adjust this position as needed
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
};

export default Aboutpage;