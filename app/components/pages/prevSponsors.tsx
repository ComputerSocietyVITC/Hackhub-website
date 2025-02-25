"use client";

import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SponsorsGrid() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    });
    Aos.refresh();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-full flex justify-center">
        <div className="mt-10 w-full px-5">
          <div className="flex justify-between items-center" data-aos="fade-up">
            <p className="text-white font-bold text-xl">05</p>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white text-xl sm:text-3xl font-extrabold">
              PREVIOUS SPONSORS
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
            {/* Left section */}
            <div className="col-span-2 grid grid-rows-2 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="aspect-square bg-neutral-950 rounded-sm"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Image
                    className="rounded-sm"
                    src="/images/PreviousSponsors/devfolio.jpg"
                    width={800}
                    height={800}
                    alt="Devfolio logo"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div
                  className="aspect-square bg-neutral-950 rounded-sm"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <Image
                    className="rounded-sm"
                    src="/images/PreviousSponsors/digitalocean.png"
                    width={800}
                    height={800}
                    alt="DigitalOcean logo"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div
                className="bg-neutral-950 rounded-sm"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Image
                  className="rounded-sm"
                  src="/images/PreviousSponsors/gfg-new-logo.png"
                  width={1600}
                  height={800}
                  alt="GeeksForGeeks logo"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Right section */}
            <div className="col-span-2 grid grid-rows-2 gap-4">
              <div
                className="bg-neutral-950 rounded-sm"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <Image
                  className="rounded-sm"
                  src="/images/PreviousSponsors/koiiicon.jpg"
                  width={1600}
                  height={800}
                  alt="Koii logo"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="aspect-square bg-neutral-950 rounded-sm"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <Image
                    className="rounded-sm"
                    src="/images/PreviousSponsors/tezos.svg"
                    width={800}
                    height={800}
                    alt="Tezos logo"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div
                  className="aspect-square bg-neutral-950 rounded-sm"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <Image
                    className="rounded-sm"
                    src="/images/PreviousSponsors/cn.svg"
                    width={800}
                    height={800}
                    alt="Coding Ninjas logo"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
