"use client";

import React, { useState, useEffect } from "react";

interface StopwatchProps {
  targetDate: string; // Target date for countdown
  top?: string;       // Adjustable top position
  left?: string;      // Adjustable left position
}

const Stopwatch: React.FC<StopwatchProps> = ({ targetDate, top = "85%", left = "50%" }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(target: string) {
    const targetTime = new Date(target).getTime();
    const now = Date.now();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return (
    <div
      className="absolute flex gap-6 "
      style={{ top, left, transform: "translate(-50%, -50%)" }}
    >
      {Object.entries(timeLeft).map(([label, value]) => (
        <div
          key={label}
          className="flex flex-col items-center justify-center md:w-32 md:h-20 w-20 h-15 bg-black text-white border-b-4 border-b-white border-t-2 border-r-2 border-l-2 rounded-2xl "
        >
          <span className="font-bold md:text-5xl text-2xl mr-9 ">{value}</span>
          <span className="uppercase md:text-xs text-xs tracking-wide ml-2 mt-1 font-archivoNarrow text-gray-400">{label}</span>
        </div>
        
      ))}
    </div>
  );
};

export default Stopwatch;