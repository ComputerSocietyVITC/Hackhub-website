"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useContext, useRef, useState } from "react";

type MouseEnterContextType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
const MouseEnterContext = createContext<MouseEnterContextType | undefined>(undefined);

interface AlternateLayoutProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  bgImage?: string;
}

export default function AlternateLayout({
  children,
  className,
  containerClassName,
  bgImage,
}: AlternateLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    
    // Calculate movement as a percentage of container size
    // Adjust the divisor (20) to control movement intensity
    const moveX = ((e.clientX - left) / width - 0.5) * -90;
    const moveY = ((e.clientY - top) / height - 0.5) * -90;
    
    containerRef.current.style.transform = `translate(${moveX}px, ${moveY}px)`;
  };

  const handleMouseEnter = () => {
    setIsMouseEnter(true);
    if (containerRef.current) {
      containerRef.current.style.transition = 'none'; // Remove transition on mouse enter for smooth movement
    }
  };

  const handleMouseLeave = () => {
    setIsMouseEnter(false);
    if (containerRef.current) {
      containerRef.current.style.transition = 'transform 200ms ease-out';
      containerRef.current.style.transform = `translate(0px, 0px)`;
    }
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEnter, setIsMouseEnter]}>
      <div className={cn("bg-black relative w-full overflow-hidden", containerClassName)}>
        {/* Background container with translation effect */}
        <div
          ref={containerRef}
          className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
          style={{
            backgroundImage: bgImage ? `url(${bgImage})` : undefined,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition: 'transform 500ms ease-out',
          }}
        />

        {/* Optional overlay */}
        <div className="absolute inset-0 bg-black/50 z-[5]" />

        {/* Content container (stays stable) */}
        <div
          className={cn(
            "relative z-10 flex items-center justify-center w-full",
            className
          )}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
}

export function useMouseEnter() {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a AlternateLayout");
  }
  return context;
}