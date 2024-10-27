'use client';

import React, { useEffect, useRef } from 'react';
import ScrollFade from './ScrollFade';

interface GlobalLayoutProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ backgroundImage, children }) => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={sectionRef} 
      className="h-screen w-screen relative overflow-hidden flex items-center justify-center"
      style={{ perspective: '2000px' }}
    >
      {/* Background image with a fixed transition effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transition: 'transform 0.2s ease-out',
        }}
      />

      {/* ScrollFade component for opacity effect based on scroll */}
      <ScrollFade />

      {/* Main content displayed above the background */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default GlobalLayout;
