'use client';

import Image from 'next/image';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export default function Component() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="flex-1 w-full flex flex-col justify-center px-4 sm:px-10 pb-20">
        {/* Header Section with 05 and FAQ */}
        <div className="flex justify-between items-center mb-12">
          <p className="text-white font-bold text-xl">05</p>
          <div className="flex-1 h-[1px] bg-white mx-4"></div>
          <p className="text-white text-4xl font-bold">FAQ</p>
        </div>

        {/* Centered Accordion Section */}
        <div className="flex justify-start sm:justify-between mt-8">
          {/* Apply centering and max width for 2xl and above */}
          <div className="w-full max-w-full lg:max-w-screen-lg 2xl:max-w-screen-xl mx-auto px-4 sm:px-6">
            <Accordion type="multiple" className="space-y-5 text-semibold font-sans duration-500">
              {[
                'What is Hackhub and how is it useful?',
                'Who can participate in this Hackathon?',
                'What are the tracks for this Hackathon?',
                'What support will participants receive?',
                'What is the Hackhub registration process?',
              ].map((question, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-gray-600"
                >
                  <AccordionTrigger className="text-lg font-medium py-4 text-white hover:text-gray-300 transition">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white font-sans pb-4">
                    {index === 0 && (
                      <p>
                        A Hackhub is an intensive event where participants collaborate to solve specific problems or build innovative products within a limited timeframe.
                      </p>
                    )}
                    {index === 1 && (
                      <p>
                        Students, researchers, and industry professionals with a passion for technology are encouraged to participate.
                      </p>
                    )}
                    {index === 2 && (
                      <p>
                        The Hackathon will feature tracks in AI/ML, Web3, Open Innovation, Health, and Environmental Sustainability.
                      </p>
                    )}
                    {index === 3 && (
                      <p>
                        Participants will have access to technical resources, mentorship, and a conducive environment to foster creativity and innovation.
                      </p>
                    )}
                    {index === 4 && (
                      <p>
                        For registration and further information, please follow our official channels.
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section mt-16 pt-8">
          <div className="flex justify-between items-center mb-12">
            <p className="text-white text-xl font-bold">GET IN TOUCH</p>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white font-bold text-xl">06</p>
          </div>
          <div className="flex justify-end px-12">
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/" className="text-white hover:text-gray-300 transition-colors">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/compsoc.vitcc?igsh=NTc4MTIwNjQ2YQ==" className="text-white hover:text-gray-300 transition-colors">
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
