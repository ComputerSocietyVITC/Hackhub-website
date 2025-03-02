import Image from "next/image";
import React from "react";

const Speakers = () => {
  return (
    <div className="text-white">
      <div className="max-w-full mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-12">
          <p className="text-white text-xl font-extrabold uppercase sm:text-3xl">
            SPEAKERS
          </p>
          <div className="flex-1 h-[1px] bg-white mx-4"></div>
          <p className="text-white text-xl sm:text-3xl font-bold">08</p>
        </div>
      </div>
      <div className="xl:w-[75%] mx-16 flex flex-col space-y-10 xl:space-y-8">
        <div className="flex items-center space-x-8">
          <Image
            src="/kamal.jpeg"
            alt="kamal"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-black">Kamal S.</h1>
            <h3 className="text-xl font-bold">Microsoft</h3>
            <p className="hidden sm:block">
              Senior Cloud Advocate @ Microsoft, Google Dev Expert - Flutter,
              Developer Advocate, Women Techmakers Ambassador!,OpenSource
              Community Builder, Speaker, Youtuber - Whatsupcoders, Google
              Mentor, Mentor @mentorcruise
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <Image
            src="/lalith.jpeg"
            alt="kamal"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-black">Lalith Krishnan Haribabu</h1>
            <h3 className="text-xl font-bold">Digital South Trust</h3>
            <p className="hidden sm:block">
              Director - Partnerships and Growth | Blockchain Trainer | Former
              UPSC Aspirant | A Decade in Automotive Embedded Design |
              Ex-Wabco-ZF | Ex BOSCHier | Teach Solidity, embedded systems,
              Python, C, OOPS and Linux.
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <Image
            src="/harshwardhan.jpeg"
            alt="kamal"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-black">Harshavardhan Bajoria</h1>
            <h3 className="text-xl font-bold">Unstop</h3>
            <p className="hidden sm:block">
              Associate Product Manager @Unstop | GitHub Campus Expert | Knight
              @LeetCode | Microsoft Certified *7 | Google Certified CDL | GitHub
              Certified x1 | Azure Developer Lead | Top Mentor @Unstop
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-8">
          <Image
            src="/meliodas.jpg"
            alt="kamal"
            width={150}
            height={150}
            className="rounded-full"
          />
          <div>
            <h1 className="text-3xl font-black">Aayush Meliodas</h1>
            <h3 className="text-xl font-bold">Magadha Studios</h3>
            <p className="hidden sm:block">
              Founder of Magadha Studios | Unreal Engine Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
