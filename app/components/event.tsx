'use client'
import React from 'react';
import Card from './ui/card';

const Event = () => {
  return (
    <div className="bg-cover bg-center w-screen flex items-center justify-center pb-4">
      <div className="min-h-screen w-full flex justify-center ">
        <div className="mt-12 w-full px-5">
          <div className="flex justify-between items-center px-12">
            <p className="text-white text-4xl font-bold">OTHER IEEE FLAGSHIP EVENTS</p>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-base font-bold ">02</p>
          </div>
          <div className="grid container mx-auto py-12 md:py-20 lg:py-24 xl:py-36 grid-cols-1 sm:grid-cols-4 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 px-6 sm:px-12 md:px-24 xl:px-44">
            <Card imgUrl='/images/paradox.png' alt="XYZ" description="Paradox24 is a competitive Capture The Flag (CTF) event organized by the IEEE Computer Society at VITC, designed to challenge participants across multiple tracks, including Reverse Engineering, Cryptography, Forensics, and OSINT."/>
            <Card imgUrl='/images/bitwars.png' alt="XYZ" description="BitWars is an annual coding competition hosted by the IEEE Computer Society at VITC, where participants showcase their programming and problem-solving skills. The event includes challenges in algorithms, data structures, and software development, promoting innovation and collaboration among aspiring developers."/>
            <Card imgUrl='https://images.unsplash.com/photo-1729829471656-8488135a99ec' alt="XYZ" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempore ab a nihil sint blanditiis deserunt saepe molestiae libero praesentium? Cupiditate recusandae repellat quaerat id iusto accusamus dolore laboriosam eum!"/>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Event;