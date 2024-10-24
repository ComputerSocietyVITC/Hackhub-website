'use client';

import React, { useEffect, useState } from 'react';

interface GlobalLayoutProps {
  backgroundImage: string;
  children: React.ReactNode;
}

const GlobalLayout: React.FC<GlobalLayoutProps> = ({ backgroundImage, children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      let x = (event.clientX / window.innerWidth) * 25;
      let y = (event.clientY / window.innerHeight) * 25;

      const maxMove = 30; // This controls the maximum translation
      x = Math.max(-maxMove, Math.min(maxMove, x));
      y = Math.max(-maxMove, Math.min(maxMove, y));

      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main
      className="h-screen w-screen relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: `calc(50% + ${mousePosition.x}px) calc(50% + ${mousePosition.y}px)`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        transition: 'background-position 200ms ease-out',
      }}
    >
      {children}
    </main>
  );
};

export default GlobalLayout;
