  'use client';

  import React, { useEffect, useState, useRef } from 'react';

  interface GlobalLayoutProps {
    backgroundImage: string;
    children: React.ReactNode;
  }

  const GlobalLayout: React.FC<GlobalLayoutProps> = ({ backgroundImage, children }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const requestRef = useRef<number | null>(null);

    useEffect(() => {
      let targetX = 0;
      let targetY = 0;

      const handleMouseMove = (event: MouseEvent) => {
    
        const isMobile = window.innerWidth <= 768;
        const maxMove = isMobile ? 15 : 30; 
        targetX = Math.max(-maxMove, Math.min(maxMove, (event.clientX / window.innerWidth) * 25));
        targetY = Math.max(-maxMove, Math.min(maxMove, (event.clientY / window.innerHeight) * 25));
      };

      const animateBackground = () => {
        setMousePosition((prevPos) => {
          const x = prevPos.x + (targetX - prevPos.x) * 0.1;
          const y = prevPos.y + (targetY - prevPos.y) * 0.1;
          return { x, y };
        });
        requestRef.current = requestAnimationFrame(animateBackground);
      };

      window.addEventListener('mousemove', handleMouseMove);
      requestRef.current = requestAnimationFrame(animateBackground);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }, []);

    return (
      <main
        className="relative overflow-hidden flex items-center justify-center"
        style={{
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: window.innerWidth <= 768 ? 'cover' : '100%',
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
