"use client";

import Image from "next/image";
import React, { useEffect, useRef, useCallback } from "react";

const Speakers = () => {
  const speakerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fadeIn");
              entry.target.classList.remove("opacity-0", "translate-y-8");
            }
          });
        },
        {
          threshold: 0.05,
        }
      );

      const currentRefs = speakerRefs.current;
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

  const setSpeakerRef = useCallback(
    (index: number) => (el: HTMLDivElement | null) => {
      speakerRefs.current[index] = el;
    },
    []
  );

  const speakers = [
    {
      image: "/kamal.jpeg",
      name: "Kamal S.",
      company: "Microsoft",
      bio: "Senior Cloud Advocate @ Microsoft, Google Dev Expert - Flutter, Developer Advocate, Women Techmakers Ambassador!,OpenSource Community Builder, Speaker, Youtuber - Whatsupcoders, Google Mentor, Mentor @mentorcruise",
    },
    {
      image: "/lalith.jpeg",
      name: "Lalith Krishnan Haribabu",
      company: "Digital South Trust",
      bio: "Director - Partnerships and Growth | Blockchain Trainer | Former UPSC Aspirant | A Decade in Automotive Embedded Design | Ex-Wabco-ZF | Ex BOSCHier | Teach Solidity, embedded systems, Python, C, OOPS and Linux.",
    },
    {
      image: "/harshwardhan.jpeg",
      name: "Harshavardhan Bajoria",
      company: "Unstop",
      bio: "Associate Product Manager @Unstop | GitHub Campus Expert | Knight @LeetCode | Microsoft Certified *7 | Google Certified CDL | GitHub Certified x1 | Azure Developer Lead | Top Mentor @Unstop",
    },
    {
      image: "/meliodas.jpg",
      name: "Aayush Meliodas",
      company: "Magadha Studios",
      bio: "Founder of Magadha Studios | Unreal Engine Developer",
    },
  ];

  return (
    <div className="text-white">
      <div className="max-w-full mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-12">
          <p className="text-white text-xl font-extrabold uppercase sm:text-3xl">
            SPEAKERS
          </p>
          <div className="flex-1 h-[1px] bg-white mx-4"></div>
          <p className="text-white text-xl font-bold">07</p>
        </div>
      </div>
      <div className="xl:w-[75%] mx-16 flex flex-col space-y-10 xl:space-y-8">
        {speakers.map((speaker, index) => (
          <div
            key={index}
            ref={setSpeakerRef(index)}
            className="flex items-center space-x-8 opacity-0 translate-y-8 transition-all duration-1000 ease-out"
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <Image
              src={speaker.image}
              alt={speaker.name}
              width={150}
              height={150}
              className="rounded-full w-36 h-36"
            />
            <div>
              <h1 className="text-3xl font-black">{speaker.name}</h1>
              <h3 className="text-xl font-bold">{speaker.company}</h3>
              <p className="hidden sm:block">{speaker.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
