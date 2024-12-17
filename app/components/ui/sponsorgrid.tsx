import React from 'react';
import { Montserrat } from 'next/font/google';

export const runtime = "edge";

// Load Montserrat font with Extra Bold weight
const montserrat = Montserrat({
  weight: ['800'], // Use 800 for ExtraBold
  subsets: ['latin'], // Latin subset
});

const SponsorGrid = () => {
  return (
    <div className={`max-w-full mx-auto px-4 py-8 ${montserrat.className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-14">
        {/* Cards */}
        {[1, 2, 3, 4, 5, 6].map((sponsor) => (
          <div
            key={sponsor}
            className="w-70 h-70 rounded-lg shadow-lg bg-[#373737] p-4 sm:p-2 flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start">
              {/* Logo Circle */}
              <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
                {/* Placeholder for logo */}
              </div>
              {/* Sponsor Text */}
              <h1 className="text-[#141414] text-2xl font-extrabold mt-4">Sponsor {sponsor}</h1>
            </div>

            {/* Tracks and Prize Section */}
            <div className="mb-20 text-center">
              <p className="text-white text-lg font-extrabold mt-2">
                <span>Tracks:</span> TBA
              </p>
              <p className="text-white text-lg font-extrabold mt-2">
                <span>Prize:</span> TBA
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorGrid;
