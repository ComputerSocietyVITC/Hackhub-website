'use client';
import React from 'react';
import Button from './ui/button';

const Sponsors = () => {
  return (
    <div className="bg-cover bg-center h-screen w-screen flex relative justify-center mt-7">
      <div className="min-h-screen w-full flex justify-center">
        <div className="mt-12 w-full px-5">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center px-4 sm:px-12">
            <p className="text-white text-base font-bold hidden sm:block">03</p>
            <div className="flex-1 h-[1px] bg-white mx-4 hidden sm:block"></div>
            <p className="text-white text-4xl font-bold text-center sm:text-left">SPONSORS</p>
          </div>
          <div className="flex justify-center items-center h-screen">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
