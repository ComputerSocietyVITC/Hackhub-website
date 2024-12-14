'use client'

import { useState, useCallback } from "react"
import { Montserrat } from 'next/font/google';

// Import Montserrat ExtraBold
const montserrat = Montserrat({
  weight: ["800"], // Use 800 for ExtraBold
  subsets: ["latin"],
});

const domains = [
  "AIML",
  "WEB3",
  "HEALTH",
  "OPEN&nbsp;INNOVATION",
  "ENVIRONMENTAL&nbsp;SUSTAINABILITY"
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
    <div className="w-full px-4 py-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-white font-bold text-xl">DOMAINS</span>
        <div className="flex-1 h-[1px] bg-white"></div>
        <span className="text-white font-bold text-xl">02</span>
      </div>
      <div className="min-h-screen bg-black text-white p-8">
        <div className="space-y-6">
          {domains.map((domain, idx) => (
            <a
              key={domain}
              href="#"
              className={`relative block overflow-hidden whitespace-normal text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-bold uppercase ${montserrat.className}`}
              style={{ 
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative">
                {domain.split(/(&nbsp;|\s+)/).map((part, wordIndex) => (
                  <span key={`${part}-${wordIndex}`} className="inline-block">
                    {part === '&nbsp;' ? (
                      <span>&nbsp;</span>
                    ) : (
                      part.split('').map((letter, letterIndex) => (
                        <span
                          key={`${letter}-${wordIndex}-${letterIndex}`}
                          className="inline-block transition-transform duration-500 [backface-visibility:hidden] md:transform-none"
                          style={{
                            transform: hoveredDomain === idx && window.innerWidth >= 768
                              ? 'translateY(-100%)' 
                              : 'translateY(0)',
                            transitionDelay: `${(wordIndex * part.length + letterIndex) * 20}ms`,
                            willChange: 'transform',
                          }}
                        >
                          {letter}
                        </span>
                      ))
                    )}
                  </span>
                ))}
              </div>
              <div 
                className="absolute inset-0 hidden md:block"
                style={{
                  WebkitFontSmoothing: 'antialiased',
                  textRendering: 'optimizeLegibility'
                }}
              >
                {domain.split(/(&nbsp;|\s+)/).map((part, wordIndex) => (
                  <span key={`${part}-${wordIndex}-bottom`} className="inline-block">
                    {part === '&nbsp;' ? (
                      <span>&nbsp;</span>
                    ) : (
                      part.split('').map((letter, letterIndex) => (
                        <span
                          key={`${letter}-${wordIndex}-${letterIndex}-bottom`}
                          className="inline-block transition-transform duration-500 [backface-visibility:hidden]"
                          style={{
                            transform: hoveredDomain === idx 
                              ? 'translateY(0)' 
                              : 'translateY(100%)',
                            transitionDelay: `${(wordIndex * part.length + letterIndex) * 20}ms`,
                            willChange: 'transform'
                          }}
                        >
                          {letter}
                        </span>
                      ))
                    )}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

