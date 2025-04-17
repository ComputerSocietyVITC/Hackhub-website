import React from "react";
import Image from "next/image";

export const runtime = "edge";

const Prizes = () => {
  return (
    <div className="min-h-screen w-full mt-10">
      <div className="max-w-full mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-white font-extrabold text-xl">06</span>
          <div className="flex-1 h-[1px] bg-white"></div>
          <span className="text-white font-bold text-xl sm:text-3xl">
            PRIZES
          </span>
        </div>

        <div className="flex mb-12 sm:items-center lg:flex-row flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full sm:w-1/2 md:w-full lg:w-2/3 justify-center">
            {/* Gold Prize (1st Place) */}
            <div className="flex flex-col items-center relative">
              <Image
                src="/images/1st_prize.webp"
                alt="First Prize"
                width={300}
                height={400}
                className="rounded-lg shadow-xl drop-shadow-[0_0_20px_rgba(255,215,0,0.8)] transition-transform transform "
              />
              <p className="mt-3 text-yellow-500 text-4xl font-semibold">
                ₹25,000
              </p>
            </div>

            {/* Silver Prize (2nd Place) */}
            <div className="flex flex-col items-center relative">
              <Image
                src="/images/2nd_Prize.webp"
                alt="Second Prize"
                width={300}
                height={400}
                className="rounded-lg shadow-xl drop-shadow-[0_0_20px_rgba(192,192,192,0.8)] transition-transform transform "
              />
              <p className="mt-3 text-gray-300 text-4xl font-semibold">
                ₹15,000
              </p>
            </div>

            {/* Bronze Prize (3rd Place) */}
            <div className="flex flex-col items-center relative">
              <Image
                src="/images/3rd_Prize.webp"
                alt="Third Prize"
                width={300}
                height={400}
                className="rounded-lg shadow-xl drop-shadow-[0_0_20px_rgba(205,127,50,0.8)] transition-transform transform"
              />
              <p className="mt-3 text-orange-500 text-4xl font-semibold">
                ₹5,000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;
