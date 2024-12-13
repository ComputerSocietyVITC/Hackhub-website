import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const domains = [
  { id: "1", name: "AIML", imgUrl: "https://via.placeholder.com/500x200" },
  { id: "2", name: "Web3", imgUrl: "https://via.placeholder.com/500x200" },
  { id: "3", name: "Open Innovation", imgUrl: "https://via.placeholder.com/500x400" },
  { id: "4", name: "", imgUrl: "https://via.placeholder.com/750x200" },
  { id: "5", name: "Health", imgUrl: "https://via.placeholder.com/500x200" },
];

export default function Domains() {
  return (
    <div className="w-full px-4 py-8">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-8">
        <span className="text-white font-bold text-xl">DOMAINS</span>
        <div className="flex-1 h-[1px] bg-white"></div>
        <span className="text-white font-bold text-xl">02</span>
      </div>

      {/* Domains Grid */}
      <div className="grid grid-cols-5 gap-4 max-w-[1400px] mx-auto">
        {/* First Row */}
        <div
          className="relative bg-zinc-800/80 rounded-xl h-[200px] col-span-2 group overflow-hidden"
          style={{ backgroundImage: `url('${domains[0].imgUrl}')` }}
        >
          <div className="absolute bottom-4 right-4 text-white text-xl font-bold opacity-0 group-hover:opacity-100 group-hover:text-2xl group-hover:scale-110 transition-all duration-300">
            {domains[0].name}
          </div>
        </div>
        <div
          className="relative bg-zinc-800/80 rounded-xl h-[200px] col-span-2 group overflow-hidden"
          style={{ backgroundImage: `url('${domains[1].imgUrl}')` }}
        >
          <div className="absolute bottom-4 right-4 text-white text-xl font-bold opacity-0 group-hover:opacity-100 group-hover:text-2xl group-hover:scale-110 transition-all duration-300">
            {domains[1].name}
          </div>
        </div>

        {/* Box 3 (Spans both rows, positioned on the far-right) */}
        <div
          className="relative bg-zinc-800/80 rounded-xl row-span-2 col-span-1 group overflow-hidden"
          style={{ backgroundImage: `url('${domains[2].imgUrl}')` }}
        >
          <div className="absolute bottom-4 right-4 text-white text-xl font-bold opacity-0 group-hover:opacity-100 group-hover:text-2xl group-hover:scale-110 transition-all duration-300">
            {domains[2].name}
          </div>
        </div>

        {/* Second Row */}
        <div
          className="relative bg-zinc-800/80 rounded-xl h-[200px] col-span-3 group overflow-hidden"
          style={{ backgroundImage: `url('${domains[3].imgUrl}')` }}
        >
          <div className="absolute bottom-4 right-4 text-white text-xl font-bold opacity-0 group-hover:opacity-100 group-hover:text-2xl group-hover:scale-110 transition-all duration-300">
            {domains[3].name}
          </div>
        </div>
        <div
          className="relative bg-zinc-800/80 rounded-xl h-[200px] col-span-1 group overflow-hidden"
          style={{ backgroundImage: `url('${domains[4].imgUrl}')` }}
        >
          <div className="absolute bottom-4 right-4 text-white text-xl font-bold opacity-0 group-hover:opacity-100 group-hover:text-2xl group-hover:scale-110 transition-all duration-300">
            {domains[4].name}
          </div>
        </div>
      </div>
    </div>
  );
}
