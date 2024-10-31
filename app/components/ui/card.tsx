import React from 'react';

type CardProps = {
  imgUrl: string,
  alt: string,
  description:string
};

const Card: React.FC<CardProps> = ({ imgUrl,alt,description }) => (
  <div className="min-h-[350px] relative max-h-[450px] group border border-gray-600 rounded-[22px] col-span-1 bg-white/10 group overflow-hidden sm:col-span-2 lg:col-span-1 last:sm:col-start-2 last:sm:col-end-4 lg:last:col-start-3 lg:last:col-end-4">
    
    <img
      src={imgUrl}
      alt={alt}
      className="transition-all ease-in duration-150 h-full w-full object-cover lg:saturate-0 lg:group-hover:saturate-100"
    />


    <div className=" p-6 text-xs xl:text-sm z-1 absolute bottom-0 left-0 w-full h-max lg:translate-y-full lg:group-hover:translate-y-0 bg-black/50 text-white transition-all ease-in duration-150">
        <p className='mb-6'>{description}</p>
        <a href="#" className=' bg-white text-black px-4 py-2 rounded-lg'>
            Learn More
        </a>
    </div>

  </div>
);

export default Card;
