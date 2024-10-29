'use client';

import React, { useEffect, useState, useRef } from 'react';
import ScrollFade from './ScrollFade';

interface GlobalLayoutProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ backgroundImage, children }) => {
  //for tracking mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //for determining if the screen is mobile-sized
  const [isMobile, setIsMobile] = useState(false);
  const requestRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      //to update mobile state based on screen width
      const updateIsMobile = () => setIsMobile(window.innerWidth <= 768);
      updateIsMobile(); // Set initial value on mount

      let targetX = 0;
      let targetY = 0;

      //to set the target position for background movement
      const handleMouseMove = (event: MouseEvent) => {
        const maxMove = isMobile ? 15 : 30;
        targetX = Math.max(-maxMove, Math.min(maxMove, (event.clientX / window.innerWidth) * maxMove));
        targetY = Math.max(-maxMove, Math.min(maxMove, (event.clientY / window.innerHeight) * maxMove));
      };

      //for smooth background movement based on mouse position
      const animateBackground = () => {
        setMousePosition((prevPos) => {
          const x = prevPos.x + (targetX - prevPos.x) * 0.08;
          const y = prevPos.y + (targetY - prevPos.y) * 0.08;
          return { x, y };
        });
        requestRef.current = requestAnimationFrame(animateBackground);
      };

      //for mouse movement and window resize
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('resize', updateIsMobile);
      requestRef.current = requestAnimationFrame(animateBackground);

      //for removing event listeners and cancelling animation
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', updateIsMobile);
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }
  }, [isMobile]);

  return (
    <section
      ref={sectionRef} 
      className="min-h-screen w-screen relative overflow-hidden flex items-center justify-center"
      style={{ perspective: '2000px' }} 
    >
      {/* Background with mouse move effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: isMobile ? 'cover' : '120%', 
          backgroundPosition: `${50 + mousePosition.x}% ${50 + mousePosition.y}%`, 
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
          transition: 'transform 0.2s ease-out, background-position 200ms ease-out', 
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
