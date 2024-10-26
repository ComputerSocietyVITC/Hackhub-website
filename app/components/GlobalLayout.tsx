'use client';

import React, { useEffect, useState, useRef } from 'react';

interface GlobalLayoutProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ backgroundImage, children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 200;
      const y = (event.clientY / window.innerHeight - 0.5) * 200;
      setMousePosition({ x, y });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const scrollProgress = 1 - entry.intersectionRatio;
            setOpacity(Math.min(scrollProgress * 1.2, 0.85));
          }
        });
      },
      {
        threshold: new Array(101).fill(0).map((_, i) => i / 100),
        rootMargin: "-100px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="h-screen w-screen relative overflow-hidden flex items-center justify-center"
      style={{ perspective: '2000px' }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale(1.1)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
      <div
        className="absolute inset-0 bg-black transition-opacity duration-300 ease-in-out"
        style={{ opacity }}
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </section>
  );
};

export default GlobalLayout;