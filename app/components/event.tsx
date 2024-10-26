'use client'
import React from 'react';
import Card from './ui/card';

const Event = () => {
  return (
    <div className="bg-cover bg-center h-screen w-screen flex items-center justify-center">
      <div className="min-h-screen w-full flex justify-center">
        <div className="mt-12 w-full px-5">
          <div className="flex justify-between items-center px-12">
            <p className="text-white text-4xl font-bold">OTHER IEEE FLAGSHIP EVENTS</p>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-base font-bold text-3xl">02</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 mt-20 px-32">
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;