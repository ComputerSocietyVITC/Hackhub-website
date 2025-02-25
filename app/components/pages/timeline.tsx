"use client";

import React, { useEffect, useRef, useCallback } from "react";
export const runtime = "edge";

const Timeline = () => {
  const timelineItems = [
    {
      month: "March",
      year: 2025,
      date: "7",
      time: "16:00-16:15",
      title: "Hackhub Kickoff",
    },
    {
      month: "March",
      year: 2025,
      date: "7",
      time: "16:30-19:30",
      title: "Speaker Session 1",
    },
    {
      month: "March",
      year: 2025,
      date: "7",
      time: "21:00",
      title: "Hackathon begins",
    },
    {
      month: "March",
      year: 2025,
      date: "8",
      time: "14:00-17:00",
      title: "Speaker Session 2",
    },
    {
      month: "March",
      year: 2025,
      date: "8",
      time: "21:00-23:59",
      title: "Speaker Session 3",
    },
    {
      month: "March",
      year: 2025,
      date: "9",
      time: "8:45-11:45",
      title: "Speaker Session 4",
    },
    {
      month: "March",
      year: 2025,
      date: "9",
      time: "12:00",
      title: "Hackathon Ends",
    },
    {
      month: "March",
      year: 2025,
      date: "9",
      time: "14:00-16:00",
      title: "Evaluation Hour",
    },
  ];

  const timelineRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-flip");
              entry.target.classList.remove("opacity-0", "translate-y-8");
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

  const setTimelineRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      timelineRefs.current[index] = el;
    },
    []
  );

  return (
    <div className={`relative w-full min-h-screen`}>
      {/* Header Section */}
      <div className="relative w-full mb-12 px-4 mx-4 md:px-16">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-4 md:pl-0">
          <span className="text-white font-bold text-xl">03</span>
        </div>

        <div className="w-full">
          <div className="relative flex items-center w-full">
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <span className="text-white text-xl sm:text-3xl font-extrabold sm:ml-8">
              TIMELINE
            </span>
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
                  ${
                    index % 2 === 0
                      ? "justify-start pl-[46%] md:pl-[52%]"
                      : "justify-end pr-[46%] md:pr-[52%]"
                  }
                  max-md:flex-row max-md:justify-between max-md:items-center max-md:px-4
                `}
              >
                {/* Desktop View */}
                <div
                  className={`
                  text-white hidden md:block
                  ${index % 2 === 0 ? "text-left" : "text-right"}
                `}
                >
                  <div
                    className={`flex flex-col ${
                      index % 2 === 0 ? "items-start" : "items-end"
                    }`}
                  >
                    <div className="mb-1">
                      <span className="text-white uppercase text-base tracking-wider">
                        {item.date} {item.month} {item.year} {item.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-5xl font-bold tracking-tight">
                        {item.title}
                      </span>
                    </div>
                    {/* <div>
                      <span className="text-xl tracking-tight">
                      {item.time}
                      </span>
                    </div>*/}
                  </div>
                </div>

                {/* Mobile View */}
                <div
                  className={`
                  md:hidden text-white w-full max-w-[120px]
                  ${
                    index % 2 === 0
                      ? "ml-auto mr-5 text-left"
                      : "mr-auto ml-5 text-right"
                  }
                `}
                >
                  <div className="flex flex-col">
                    <span className="text-white uppercase text-xs tracking-wider mb-1">
                      {item.date} {item.month} {item.year}
                    </span>
                    <div
                      className={`flex items-baseline gap-1 ${
                        index % 2 === 0 ? "" : "justify-end w-full"
                      }`}
                    >
                      <span className="text-2xl font-bold">{item.title}</span>
                    </div>
                    <div>
                      <span className="text-sm tracking-tight">
                        {item.time}
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
