import React from 'react';
import '@fontsource/montserrat'; 

const SponsorGrid = () => {
  return (
    <div className="max-w-full mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
        {/* Cards */}
        {[1, 2, 3, 4, 5, 6].map((sponsor) => (
          <div
            key={sponsor}
            className="w-full h-80 rounded-lg shadow-lg border bg-[#373737] p-4 sm:p-2 flex flex-col justify-between transition-transform duration-300 ease-in-out transform hover:scale-110"
          >
            {/* Top Section */}
            <div className="flex justify-between items-start">
              {/* Logo Circle */}
              <div className="w-16 h-16 rounded-full bg-white flex justify-center items-center">
                {/* Placeholder for logo */}
              </div>
              {/* Sponsor Text */}
              <h1 className="text-white text-2xl font-montserrat font-bold mt-4 ">Sponsor {sponsor}</h1>
            </div>

            {/* Tracks and Prize Section */}
            <div className="mb-20 text-center">
              <p className="text-white text-lg font-montserrat font-bold">
                <span className="font -montserrat font-bold">Tracks:</span> TBD
              </p>
              <p className="text-white text-lg font-montserrat  font-bold mt-2">
                <span className="font-montserrat font-bold">Prize:</span> TBD
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorGrid;
