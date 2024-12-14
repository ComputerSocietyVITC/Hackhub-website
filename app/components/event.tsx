'use client'
import React, { useEffect, useState } from 'react';

const PrevEditions = () => {


  // Creating the references to the images
  const imagesInit = Array.from({ length: 9 }, (_, i) => `/images/EventImages/${i + 1}.jpg`);

  // Using the useState hook to store the images
  const [images, setImages] = useState(imagesInit);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Using the useEffect hook to update the isDesktop state for responsive design
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const newImages = [...images];
      const firstImage = newImages.shift();
      if (firstImage) {
        newImages.push(firstImage);
      }
      if (setImages) {
        setImages(newImages);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [images])

  return (
    <div className="bg-cover bg-center w-screen flex items-center justify-center pb-4 mt-7">
      <div className="w-full flex justify-center items-center">
        <div className="mt-12 w-full px-5">
          <div className="flex justify-between items-center mb-12">
            <p className="text-white text-xl sm:text-3xl font-bold">PREVIOUS EDITIONS</p>
            <div className="flex-1 h-[1px] bg-white mx-4"></div>
            <p className="text-white font-bold text-xl">04</p>
          </div>
          {isDesktop ? <ImageGrid images={images} /> : <MobileCarousel images={images} setImages={setImages} />}
        </div>
      </div>
    </div>
  );
};

interface ImageGridProps {
  images: string[];
  setImages?: React.Dispatch<React.SetStateAction<string[]>>;
}


const MobileCarousel: React.FC<ImageGridProps> = ({ images }) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const touchStartX = React.useRef<number>(0);
  const touchEndX = React.useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {

    // UNSTABLE CODE

    // const touchDifference = touchStartX.current - touchEndX.current;
    // const swipeThreshold = window.innerWidth * 0.1; // 10% of window width

    // if (touchDifference > swipeThreshold) {

    //   if (carouselRef.current) {
    //     const children = carouselRef.current.childNodes;
    //     children.forEach((child: any) => {
    //       child.classList.remove('carouselAnimLeft');
    //       child.classList.remove('carouselAnimRight');
    //       setTimeout(() => {
    //         child.classList.add('carouselAnimLeft')
    //       }
    //         , 100);
    //     });

    //   }

    //   const newImages = [...images.slice(1), images[0]];
    //   if (setImages) {
    //     setImages(newImages);

    //   }
    // } else if (touchDifference < -swipeThreshold) {

    //   if (carouselRef.current) {


    //     const children = carouselRef.current.childNodes;
    //     children.forEach((child: any) => {
    //       child.classList.remove('carouselAnimRight');
    //       child.classList.remove('carouselAnimLeft');
    //       setTimeout(() => {
    //         child.classList.add('carouselAnimRight')
    //       }
    //         , 100);
    //     });
    //   }

    //   const newImages = [images[images.length - 1], ...images.slice(0, images.length - 1)];
    //   if (setImages) {
    //     setImages(newImages);

    //   }
    // }
  };


  useEffect(() => {
    if (carouselRef.current) {
      const children = carouselRef.current.childNodes;
      children.forEach((child) => {
        if (child instanceof HTMLElement) {
          child.classList.add('carouselAnim');
          setTimeout(() => {
            child.classList.remove('carouselAnim');
          }, 1000);
        }
      });

    }
  }, [images])

  return (
    <div
      className="grid w-full mx-auto h-[320px] grid-cols-5 grid-rows-5 gap-3"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="col-span-1 row-start-2 row-span-3 bg-slate-100 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[0]})`,
          animationDuration: '0.2s'
        }}
      ></div>
      <div
        className="col-span-3 col-start-2 row-start-1 row-span-5 bg-slate-800 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[1]})`,
          animationDuration: '0.4s'
        }}
      ></div>
      <div
        className="col-span-1 col-start-5 row-start-2 row-span-3 bg-slate-800 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: `url(${images[2]})`,
          animationDuration: '0.6s'
        }}
      ></div>
    </div>
  );
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {

  const carouselRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const children = carouselRef.current.childNodes;
      children.forEach((child) => {
        if (child instanceof HTMLElement) {
          child.classList.add('carouselAnim');
          setTimeout(() => {
            child.classList.remove('carouselAnim');
          }, 1000);
        }
      });
    }
  }, [images])

  return (
    <div className="grid w-full max-w-[1400px] mx-auto h-[430px] grid-cols-5 grid-rows-6 gap-5 mt-[100px]" ref={carouselRef}>
      <div className="col-span-1 row-start-2 row-span-4 bg-slate-100 rounded-xl filter hover:filter-none transform hover:scale-105 transition bg-cover bg-center"
        style={{ backgroundImage: `url(${images[0]})`, animationDuration: '0.65s' }}
      ></div>
      <div className="col-span-1 col-start-2 row-start-1 row-span-2 bg-slate-800 rounded-xl filter hover:filter-none transform hover:scale-105 transition bg-cover bg-center"
        style={{ backgroundImage: `url(${images[1]})`, animationDuration: '0.5s' }}
      ></div>
      <div className="col-span-1 col-start-2 row-start-3 row-span-2 bg-slate-800 rounded-xl filter hover:filter-none transform hover:scale-105 transition bg-cover bg-center"
        style={{ backgroundImage: `url(${images[2]})`, animationDuration: '0.35s' }}
      ></div>
      <div className="col-span-1 col-start-2 row-start-5 row-span-2 bg-slate-800 rounded-xl filter hover:filter-none transform hover:scale-105 transition bg-cover bg-center"
        style={{ backgroundImage: `url(${images[3]})`, animationDuration: '0.3s' }}
      ></div>
      <div className="col-span-2 col-start-3 row-start-1 row-span-6 bg-slate-800 rounded-xl filter hover:filter-none transform hover:scale-105 transition bg-cover bg-center"
        style={{ backgroundImage: `url(${images[4]})`, animationDuration: '0.2s' }}
      ></div>
      <div className="col-span-1 row-start-2 row-span-4 bg-slate-800 rounded-xl filter hover:filter-none transform hover:scale-105 transition bg-cover bg-center"
        style={{ backgroundImage: `url(${images[5]})`, animationDuration: '0.5s' }}
      ></div>
    </div>
  );
};

export default PrevEditions;