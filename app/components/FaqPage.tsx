"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/ui/accordion';

import XIcon from '../components/ui/Socials/X.png';
import LinkedInIcon from '../components/ui/Socials/Linkedn.png';
import FacebookIcon from '../components/ui/Socials/Facebook.png';
import InstagramIcon from '../components/ui/Socials/Insta.png';

const FaqPage: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center">
      <div className="min-h-screen w-full flex flex-col justify-center px-10">
        {/* Header Section with 05 and FAQ */}
        <div className="flex justify-between items-center px-12">
          <p className="text-white text-base font-bold">05</p>
          <div className="flex-1 h-[1px] bg-white mx-4"></div>
          <p className="text-white text-4xl font-bold">FAQ</p>
        </div>

        {/* Centered Accordion Section */}
        <div className="flex justify-center mt-8">
          <div className="w-full max-w-7xl px-6">
            <Accordion type="multiple" className="space-y-4">
              {[
                'Lorem ipsum dolor sit amet consectetur adipiscing elit?',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit?',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit?',
                'Lorem ipsum dolor sit amet consectetur adipiscing elit?'
              ].map((question, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-600">
                  <AccordionTrigger onClick={() => toggleItem(index)} className="text-lg font-medium py-4 text-white hover:text-gray-300 transition">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 pl-4 pb-4">
                    Your answer here...
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section flex flex-col items-center mt-16 pt-8">
          <div className="flex justify-between items-center w-full px-12">
            <h2 className="text-xl font-bold text-white">GET IN TOUCH</h2>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-base font-bold">06</p>
          </div>
          <div className="flex justify-end pl-80 space-x-4 text-xl text-white mt-4">
            <a href="#" className="hover:text-gray-300"><Image src={XIcon} alt="Xing" className="w-6 h-6" /></a>
            <a href="#" className="hover:text-gray-300"><Image src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" /></a>
            <a href="#" className="hover:text-gray-300"><Image src={FacebookIcon} alt="Facebook" className="w-6 h-6" /></a>
            <a href="#" className="hover:text-gray-300"><Image src={InstagramIcon} alt="Instagram" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
