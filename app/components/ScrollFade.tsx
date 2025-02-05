import React, { useEffect, useState, useRef } from 'react';

interface ScrollFadeProps {
  children?: React.ReactNode;
}

export const runtime = "edge";

const ScrollFade: React.FC<ScrollFadeProps> = ({ children }) => {
  const [opacity, setOpacity] = useState(0); 
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // For Parallax effect which is removed bcuz Glitch
    /*const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 200;
      const y = (event.clientY / window.innerHeight - 0.5) * 200;
      setMousePosition({ x, y });
    };*/

    // Initialize intersection observer to control opacity based on scroll position
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Calculate scroll progress and adjust opacity
            const scrollProgress = 1 - entry.intersectionRatio;
            setOpacity(Math.max(scrollProgress * 1.2, 0.25)); 
          }
        });
      },
      {
        threshold: new Array(101).fill(0).map((_, i) => i / 100),
        rootMargin: "-100px 0px",
      }
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup the observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="absolute inset-0 transition-opacity duration-300 ease-in-out"
      style={{ opacity }}
    >
      {children}
    </div>
  );
};

export default ScrollFade;