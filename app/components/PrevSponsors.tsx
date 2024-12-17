import Image from "next/image";

export default function SponsorsGrid() {
  return (
    <div className=" w-full flex justify-center">
      <div className="mt-40 w-full px-5">
        <div className="flex justify-between items-center">
          <p className="text-white font-bold text-xl">00</p>
          <div className="flex-1 h-[1px] bg-white mx-4"></div>
          <p className="text-white text-xl sm:text-3xl font-bold">
            PREVIOUS SPONSORS
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {/* Left section */}
          <div className="col-span-2 grid grid-rows-2 gap-4">
            {/* Top row with two equal boxes */}
            <div className="grid grid-cols-2 gap-4">
              <img
                className="aspect-square rounded-sm bg-neutral-950"
                src={"/images/PreviousSponsors/devfolio.jpg"}
                width={500}
                height={500}
                alt="pic"
              ></img>
              <img
                className="aspect-square bg-neutral-950 rounded-sm"
                src={"/images/PreviousSponsors/digitalocean.png"}
                width={500}
                height={500}
                alt="pic"
              ></img>
            </div>
            {/* Bottom long box spanning full width */}
            <img
              className="row-span-fullrounded-sm bg-neutral-950"
              src={"/images/PreviousSponsors/gfg-new-logo.png"}
              height={500}
              width={1000}
              alt="pic"
            ></img>
          </div>

          {/* Right section */}
          <div className="col-span-2 grid grid-rows-2 gap-4">
            {/* Top long box spanning full width */}
            <img
              className="col-span-full rounded-sm justify-center bg-neutral-950"
              src={"/images/PreviousSponsors/koiiicon.jpg"}
              height={500}
              width={1000}
            ></img>
            {/* Bottom row with two equal boxes */}
            <div className="grid grid-cols-2 gap-4">
              <img
                className="aspect-square rounded-sm flex-justify-center bg-neutral-950"
                src="/images/PreviousSponsors/tezos.svg"
                width={500}
              ></img>
              <img
                className="aspect-square rounded-sm bg-neutral-950"
                src="/images/PreviousSponsors/cn.svg"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
