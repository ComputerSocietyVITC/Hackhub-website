import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Button = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false, // Whether animation should happen only once
      offset: 100, // Offset from the bottom of the viewport
    });

    AOS.refresh();
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      data-aos-delay="50"
      className="flex justify-center"
    >
      <a
        href="https://forms.gle/J7wsFqay4miemAtc8"
        className="relative inline-block group mb-20"
      >
        {/* Curved white edge (bottom-right reveal on hover) */}
        <div
          className="absolute inset-0 w-full h-full rounded-full bg-white opacity-0 translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-active:opacity-0 transition-all duration-300 ease-out pointer-events-none"
        ></div>

        {/* Button (moves up on hover, turns white when pressed) */}
        <button
          className="relative z-10 inline-flex items-center justify-center rounded-full border border-slate-400 bg-black px-8 py-3 tracking-widest text-white text-lg transform transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:-translate-x-2 group-active:bg-white group-active:text-black"
        >
          SPONSOR US
        </button>
      </a>
    </div>
  );
};

export default Button;
