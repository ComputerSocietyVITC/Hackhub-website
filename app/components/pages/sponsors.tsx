'use client';
import React from 'react';
import Button from '../ui/button';
import 'aos/dist/aos.css';
import Image from 'next/image';

const Sponsors = () => {
  return (
    <section className="relative w-full min-h-screen bg-cover bg-center py-12 font-montserrat">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header with section number and title */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-white font-bold text-2xl">06</span>
          <div className="flex-1 h-px bg-white"></div>
          <h2 className="text-white text-2xl sm:text-4xl font-extrabold uppercase">
            Sponsors
          </h2>
        </div>

        {/* Title Sponsor Section */}
        <div className="flex flex-col items-center text-center mb-12 p-5">
          <h2 className="text-white text-3xl sm:text-4xl font-extrabold uppercase mb-6">
            Title Sponsor
          </h2>
          <div className="w-[250px] h-[120px] lg:w-1/4">
            <Image 
              src="/images/github-4.png" 
              alt="GitHub Logo" 
              width={250} 
              height={120} 
              className="mx-auto object-contain rounded-lg drop-shadow-lg"
            />
          </div>
        </div>

        {/* Description text */}
        <div className="max-w-6xl mx-auto mb-24 text-center">
          <p className="text-white text-lg sm:text-xl leading-relaxed">
            Join hands with <span className="font-bold">HackHub</span>, a premier college-level hackathon that brings together brilliant minds to solve real-world problems and create groundbreaking solutions. This event is more than just a competition—it’s a celebration of innovation, collaboration, and technological advancement.
          </p>
          <p className="text-white text-lg sm:text-xl leading-relaxed mt-4">
            As a partner, you’ll enjoy unparalleled visibility among a vibrant, tech-oriented audience and have the chance to connect with some of the brightest up-and-coming talents. Showcase your brand as a thought leader in the tech community, contribute to shaping the future of innovation, and align with a mission that empowers the next generation of changemakers.
          </p>
          <p className="text-white text-lg sm:text-xl leading-relaxed mt-4">
            Let’s drive change together. Partner with HackHub and make a lasting impact on the future of technology and innovation.
          </p>
        </div>

        {/* Button container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          <Button text="Sponsor Us" href="https://forms.gle/J7wsFqay4miemAtc8" />
          <Button text="Brochure" href="/Hackhub_Broucher_gallery.pdf" />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
