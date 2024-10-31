import React from 'react';
import localFont from "next/font/local";





const archivoNarrow = localFont({
  src: "../../fonts/ArchivoNarrow-VariableFont_wght.ttf",
  variable: "--font-archivo-narrow",
  weight: "200",
});

type CardProps = {
  imgUrl: string,
  alt: string,
  description:string
};

const Card: React.FC<CardProps> = ({ imgUrl,alt,description }) => (
  <div className="relative md:h-[350px] lg:h-[400px] xl:h-[450px] group border border-gray-600 rounded-[28px] col-span-1 bg-white/10 group overflow-hidden ">
    
    <img
      src={imgUrl}
      alt={alt}
      className="transition-all ease-in duration-150 h-full w-full object-cover lg:saturate-0 lg:group-hover:saturate-100"
    />


    <div className=" p-6 text-xs md:text-sm xl:text-base z-1 absolute bottom-0 left-0 w-full h-max lg:translate-y-full lg:group-hover:translate-y-0 bg-black/50 text-neutral-100 transition-all ease-in duration-150">
        <p className={archivoNarrow.className}>{description}</p>
    </div>

  </div>
);

export default Card;
