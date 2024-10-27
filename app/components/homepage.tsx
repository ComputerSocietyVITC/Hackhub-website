'use client';
import React from 'react';
import Image from 'next/image'

const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen relative">
      <div
        className="bg-center bg-no-repeat bg-contain h-[2vh] w-[33vw] absolute"
        style={{
          backgroundImage: 'url(/images/line2.webp)', // path to your .webp file
          top: '25%', // Adjust this position as needed
          left: '36%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Hackhub Logo */}
      <div
        className="bg-center bg-no-repeat bg-contain h-[50vh] w-[50vw] absolute homepage-logo"
        style={{
          backgroundImage: 'url(images/Hackhub_logo.svg)',
          top: '35%', // Base position; this will be overridden by media queries
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* 2025 Logo */}
      <div
        className="bg-no-repeat bg-contain h-[10vh] w-[10vw] absolute homepage-2025-logo"
        style={{
          backgroundImage: 'url(images/2025.svg)',
          top: '60%', // Base position; this will be overridden by media queries
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      />
    </div>
  );
};

export default Homepage;
