'use client'
import React, { useEffect, useState } from 'react';

const PrevEditions = () => {

  const imagesInit = [
    "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGV2ZW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1484494789010-20fc1a011197?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGV2ZW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGV2ZW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGV2ZW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXZlbnR8ZW58MHx8MHx8fDA%3D"
  ]
  const [images, setImages] = useState(imagesInit);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

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
      let newImages = [...images];
      const firstImage = newImages.shift();
      if (firstImage) {
        newImages.push(firstImage);
      }
      setImages(newImages);
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
          {isDesktop ? <ImageGrid images={images} /> : <MobileCarousel images={images} />}
        </div>
      </div>
    </div>
  );
};

interface ImageGridProps {
  images: string[];
}

const MobileCarousel: React.FC<ImageGridProps> = ({ images }) => {

  const carouselRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const children = carouselRef.current.childNodes;
      children.forEach((child: any) => {
        child.classList.add('carouselAnim');
      });

      setTimeout(() => {
        children.forEach((child: any) => {
          child.classList.remove('carouselAnim');
        });
      }, 3000);
    }
  }, [images])

  return (
    <div className="grid w-full mx-auto h-screen h-[450px] grid-cols-5 grid-rows-5 gap-3" ref={carouselRef}>
      <div className="col-span-1 row-start-2 row-span-3 bg-slate-100 rounded-lg"
        style={{ backgroundImage: `url(${images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center', animationDuration: '0.2s' }}
      ></div>
      <div className="col-span-3 col-start-2 row-start-1 row-span-5 bg-slate-800 rounded-lg"
        style={{ backgroundImage: `url(${images[1]})`, backgroundSize: 'cover', backgroundPosition: 'center', animationDuration:'0.4s' }}
      ></div>
      <div className="col-span-1 col-start-5 row-start-2 row-span-3 bg-slate-800 rounded-lg"
        style={{ backgroundImage: `url(${images[2]})`, backgroundSize: 'cover', backgroundPosition: 'center', animationDuration: '0.6s' }}
      ></div>
    </div>
  );
};

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {

  const carouselRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current) {
      const children = carouselRef.current.childNodes;
      children.forEach((child: any) => {
        child.classList.add('carouselAnim');
      });

      setTimeout(() => {
        children.forEach((child: any) => {
          child.classList.remove('carouselAnim');
        });
      }, 3000);
    }
  }, [images])

  return (
    <div className="grid max-w-[100%] mx-auto h-[400px] grid-cols-5 grid-rows-6 gap-5" ref={carouselRef}>
      <div className="col-span-1 row-start-2 row-span-4 bg-slate-100 rounded-xl"
        style={{ backgroundImage: `url(${images[0]})`, backgroundSize: 'cover', backgroundPosition: 'center', animationDuration: '0s' }}
      ></div>
      <div className="col-span-1 col-start-2 row-start-1 row-span-2 bg-slate-800 rounded-xl"
        style={{ backgroundImage: `url(${images[1]})`, backgroundSize: 'cover', backgroundPosition: 'center', animationDuration:'0.2s' }}
      ></div>
      <div className="col-span-1 col-start-2 row-start-3 row-span-2 bg-slate-800 rounded-xl"
        style={{ backgroundImage: `url(${images[2]})`, backgroundSize: 'cover', backgroundPosition: 'center', animationDuration: '0.35s' }}
      ></div>
      <div className="col-span-1 col-start-2 row-start-5 row-span-2 bg-slate-800 rounded-xl"
        style={{ backgroundImage: `url(${images[3]})`, backgroundSize: 'cover', backgroundPosition: 'center', animationDuration: '0.50s' }}
      ></div>
      <div className="col-span-2 col-start-3 row-start-1 row-span-6 bg-slate-800 rounded-xl"
        style={{ backgroundImage: `url(${images[4]})`, backgroundSize: 'cover', backgroundPosition: 'center', animationDuration: '0.65s' }}
      ></div>
      <div className="col-span-1 row-start-2 row-span-4 bg-slate-800 rounded-xl"
        style={{ backgroundImage: `url(${images[5]})`, backgroundSize: 'cover', backgroundPosition: 'center', animationDuration: '0.8s' }}
      ></div>
    </div>
  );
};

export default PrevEditions;