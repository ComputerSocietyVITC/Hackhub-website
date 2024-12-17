"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { Montserrat } from 'next/font/google';
import { Archivo_Narrow } from 'next/font/google';

export const runtime = "edge";

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat' 
});

const archivo = Archivo_Narrow({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-archivo'
});

const Timeline = () => {
  const timelineItems = [
    { month: "Month", year: 2025, date: "10", title: "EVENT", desc: "Description to be announced" },
    { month: "Month", year: 2025, date: "10", title: "EVENT", desc: "Description to be announced" },
    { month: "Month", year: 2025, date: "10", title: "EVENT", desc: "Description to be announced" },
    { month: "Month", year: 2025, date: "10", title: "EVENT", desc: "Description to be announced" },
    { month: "Month", year: 2025, date: "10", title: "EVENT", desc: "Description to be announced" },
    { month: "Month", year: 2025, date: "10", title: "EVENT", desc: "Description to be announced" },
    { month: "Month", year: 2025, date: "10", title: "EVENT", desc: "Description to be announced" }
  ];

  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-flip');
              entry.target.classList.remove('opacity-0', 'translate-y-8');
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      const currentRefs = timelineRefs.current;
      currentRefs.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      return () => {
        currentRefs.forEach((ref) => {
          if (ref) observer.unobserve(ref);
        });
      };
    }
  }, []);

  const setTimelineRef = useCallback((index: number) => (el: HTMLDivElement | null) => {
    timelineRefs.current[index] = el;
  }, []);

  return (
    <div className={`relative w-full min-h-screen  ${montserrat.variable} ${archivo.variable} font-montserrat`}>
      {/* Header Section */}
      <div className="relative w-full mb-12 px-4 md:px-16">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-4 md:pl-0">
          <span className="text-white font-bold text-xl font-archivo">03</span>
        </div>

        <div className="w-full">
          <div className="relative flex items-center w-full">
            <div className="flex-1 h-[1px] bg-white"></div>
            <span className="text-white text-xl sm:text-3xl font-bold ml-4 sm:ml-8 font-archivo">TIMELINE</span>
          </div>
        </div>
      </div>

      {/* Timeline Container */}
      <div className="relative mt-24">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-[2px] bg-white brightness-200"></div>

        <div className="space-y-32">
          {timelineItems.map((item, index) => (
            <div key={index} className="relative">
              {/* Vertical Dot */}
              <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white z-10 brightness-200"></div>

              {/* Timeline Item */}
              <div
                ref={setTimelineRef(index)}
                className={`
                  relative flex opacity-0 translate-y-8 transition-all duration-1000 ease-out
                  ${index % 2 === 0 
                    ? "justify-start pl-[46%] md:pl-[52%]" 
                    : "justify-end pr-[46%] md:pr-[52%]"}
                  max-md:flex-row max-md:justify-between max-md:items-center max-md:px-4
                `}
              >
                {/* Desktop View */}
                <div className={`
                  text-white hidden md:block
                  ${index % 2 === 0 ? "text-left" : "text-right"}
                `}>
                  <div className={`flex flex-col ${
                    index % 2 === 0 ? "items-start" : "items-end"
                  }`}>
                    <div className="mb-1">
                      <span className="text-white uppercase text-base tracking-wider">
                      {item.date} {item.month} {item.year}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-6xl font-bold tracking-tight">
                        {item.title}
                      </span>
                    </div>
                    <div>
                      <span className="text-xl tracking-tight">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Mobile View */}
                <div className={`
                  md:hidden text-white w-full max-w-[120px]
                  ${index % 2 === 0 
                    ? "ml-auto mr-10 text-left" 
                    : "mr-auto ml-10 text-right"
                  }
                `}>
                  <div className="flex flex-col">
                    <span className="text-white uppercase text-xs tracking-wider mb-1">
                    {item.date} {item.month} {item.year}
                    </span>
                    <div className={`flex items-baseline gap-1 ${
                      index % 2 === 0 ? "" : "justify-end w-full"
                    }`}>
                      <span className="text-xl font-bold">
                        {item.title}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm tracking-tight">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;