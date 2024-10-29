"use client";

import React, { useState } from 'react';
import { FaXing, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/ui/accordion';
import Image from 'next/image';

export default function Component() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex-1 w-full flex flex-col justify-center px-10 pb-20">
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
        <div className="contact-section mt-16 pt-8">
          <div className="flex justify-between items-center px-12 mb-8">
            <h2 className="text-xl font-bold text-white">GET IN TOUCH</h2>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-base font-bold">06</p>
          </div>
          <div className="flex justify-end px-12">
            <div className="flex space-x-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaXing className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black/50 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <Image
              src="/images/hackhub_logo.png"
              alt="HACKHUB Logo"
              width={200}
              height={50}
              className="h-auto w-auto"
              priority
            />
            <p className="text-gray-400 text-sm">
              © IEEE Computer Society VIT Chennai 2024 - All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}