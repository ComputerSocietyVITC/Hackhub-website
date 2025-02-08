// components/Prizes.tsx
import React from 'react';
import '@fontsource/montserrat'; 


export const runtime = "edge";

const Prizes = () => {
  return (
    <div className="min-h-screen w-full mt-10">
      {/* Main Content Wrapper */}
      <div className="max-w-full mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-12 font-montserrat">
          {/* Left text */}
          <p className="text-white text-xl font-extrabold uppercase  sm:text-3xl ">PRIZES</p>

          {/* Divider line */}
          <div className="flex-1 h-[1px] bg-white mx-4"></div>

          {/* Right text */}
          <p className="text-white text-xl sm:text-3xl lg:text-xl font-bold">07</p>
        </div>

        {/* Main Content Section */}
        <div className="flex  mb-12 sm:items-center lg:flex-row flex-col gap-8 justify-center">
        

          {/* Cards Section - Right Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full sm:w-1/2 md:w-full lg:w-2/3 justify-center">
            {/* Card 1 */}
            <div
              className="bg-center bg-cover h-64 sm:h-72 lg:h-96 rounded-lg shadow-md"
              style={{ paddingBottom: '125%', backgroundImage: 'url("/images/1st_prize.png")' }}
            ></div>

            {/* Card 2 */}
            <div
              className="bg-cover bg-center h-64 sm:h-70 lg:h-96 rounded-lg shadow-md"
              style={{ paddingBottom: '125%',backgroundImage: 'url("/images/2nd_Prize.png")' }}
            ></div>

            {/* Card 3 */}
            <div
              className="bg-cover bg-center h-64 sm:h-72 lg:h-96 rounded-lg shadow-md"
              style={{paddingBottom: '125%', backgroundImage: 'url("/images/3rd_Prize.png")' }}
            ></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Prizes;
