'use client'

import { Montserrat } from 'next/font/google';
import { useCallback, useState } from "react";

export const runtime = "edge";

// Import Montserrat ExtraBold
const montserrat = Montserrat({
  weight: ["800"], // Use 800 for ExtraBold
  subsets: ["latin"],
});

const domains = [
  "AIML",
  "WEB3",
  "HEALTH",
  "GAME&nbsp;DEV",
  "Hardware",
  "OPEN&nbsp;INNOVATION"
  
];

export default function Domains() {
  const [hoveredDomain, setHoveredDomain] = useState<number | null>(null);

  const handleMouseEnter = useCallback((idx: number) => {
    setHoveredDomain(idx);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredDomain(null);
  }, []);

  return (
    <div className="w-full h-full px-4 py-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8 font-montserrat">
        <span className="text-white font-extrabold text-2xl ">DOMAINS</span>
        <div className="flex-1 h-[1px] bg-white"></div>
        <span className="text-white font-bold text-xl">02</span>
      </div>
      <div className=" text-white p-8">
        <div className="space-y-6 sm:ml-10">
          {domains.map((domain, idx) => (
            <div
              key={domain}
              className={`relative block overflow-hidden whitespace-nowrap text-sm sm:text-xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-7xl font-bold uppercase ${montserrat.className} text-ellipsis overflow-hidden`}
              style={{ 
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                transform: 'translateZ(0)',
              }}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative">
                {domain.split(/(&nbsp;|)/).map((part, i) => (
                  part === '&nbsp;' ? (
                    <span key={`space-${i}`}>&nbsp;</span>
                  ) : (
                    part.split('').map((letter, j) => (
                      <span
                        key={`${letter}-${i}-${j}-top`}
                        className="inline-block transition-transform duration-500 [backface-visibility:hidden]"
                        style={{
                          transform: hoveredDomain === idx 
                            ? 'translateY(-100%)' 
                            : 'translateY(0)',
                          transitionDelay: `${(i * part.length + j) * 20}ms`,
                          willChange: 'transform',
                        }}
                      >
                        {letter}
                      </span>
                    ))
                  )
                ))}
              </div>
              <div 
                className="absolute inset-0"
                style={{
                  WebkitFontSmoothing: 'antialiased',
                  textRendering: 'optimizeLegibility'
                }}
              >
                {domain.split(/(&nbsp;|)/).map((part, i) => (
                  part === '&nbsp;' ? (
                    <span key={`space-${i}`}>&nbsp;</span>
                  ) : (
                    part.split('').map((letter, j) => (
                      <span
                        key={`${letter}-${i}-${j}-bottom`}
                        className="inline-block transition-transform duration-500 [backface-visibility:hidden]"
                        style={{
                          transform: hoveredDomain === idx 
                            ? 'translateY(0)' 
                            : 'translateY(100%)',
                          transitionDelay: `${(i * part.length + j) * 20}ms`,
                          willChange: 'transform'
                        }}
                      >
                        {letter}
                      </span>
                    ))
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
