'use client';
import React from 'react';
import Button from '../ui/button';
import 'aos/dist/aos.css';

const Sponsors = () => {
  return (
    <section 
      className="relative w-full min-h-screen bg-cover bg-center py-12 font-montserrat">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header with section number and title */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-white font-bold text-2xl">06</span>
          <div className="flex-1 h-px bg-white"></div>
          <h2 className="text-white text-2xl sm:text-4xl font-extrabold uppercase">Sponsors</h2>
        </div>

        {/* Description text */}
        <div className="max-w-6xl mx-auto mb-24">
          <p className="text-center text-white text-lg sm:text-xl leading-relaxed font-montserrat">
            Join hands with <span className="font-bold">HackHub</span>, a premier college-level hackathon that brings together brilliant minds to solve real-world problems and create groundbreaking solutions. This event is more than just a competition—it’s a celebration of innovation, collaboration, and technological advancement.
          </p>
          <p className="text-center text-white text-lg sm:text-xl leading-relaxed mt-4 font-montserrat">
            As a partner, you’ll enjoy unparalleled visibility among a vibrant, tech-oriented audience and have the chance to connect with some of the brightest up-and-coming talents. Showcase your brand as a thought leader in the tech community, contribute to shaping the future of innovation, and align with a mission that empowers the next generation of changemakers.
          </p>
          <p className="text-center text-white text-lg sm:text-xl leading-relaxed mt-4 font-montserrat">
            Let’s drive change together. Partner with HackHub and make a lasting impact on the future of technology and innovation.
          </p>
        </div>

        {/* Button container */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-10">
          <Button text='Sponsor US' href='https://forms.gle/J7wsFqay4miemAtc8'/>
          <Button text='Brochure' href='/Hackhub_Broucher_gallery.pdf'/>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;


