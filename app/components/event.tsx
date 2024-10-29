'use client'
import React from 'react';
import Card from './ui/card';

const Event = () => {
  return (
    <div className="bg-cover bg-center w-screen flex items-center justify-center pb-4">
      <div className="min-h-screen w-full flex justify-center">
        <div className="mt-12 w-full px-5">
          <div className="flex justify-between items-center px-12">
            <p className="text-white text-4xl font-bold">OTHER IEEE FLAGSHIP EVENTS</p>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-base font-bold ">02</p>
          </div>
          <div className="grid grid-cols-1 mt-20 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 px-12 xl:px-40">
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