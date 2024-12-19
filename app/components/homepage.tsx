'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import Image from 'next/image';
import Stopwatch from './ui/stopwatch';


const Homepage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      2000
    );
    camera.position.z = 800;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Starfield
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 10000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2000; // Random star positions
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 1.5,
      transparent: true,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Handle perspective changes on mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = (event.clientX / innerWidth - 0.5) * 2;
      const mouseY = (event.clientY / innerHeight - 0.5) * 2;

      gsap.to(camera.rotation, {
        x: mouseY * 0.1,
        y: mouseX * 0.1,
        duration: 0.7,
        ease: 'power1.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animate stars
    const animateStars = () => {
      const positions = stars.geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] -= 0.05; // Move stars downward

        if (positions[i + 1] < -1000) {
          positions[i + 1] = 1000; // Reset star position
        }
      }
      stars.geometry.attributes.position.needsUpdate = true;
    };

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      stars.rotation.y += 0.0005;
      stars.rotation.x += 0.0002;

      animateStars();
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen relative tracking-tighter shadow-white">
      <div
        className="absolute text-white md:text-4xl text-xl font-extrabold italic
                    top-[36%] left-[35%]  
                    md:top-[32%] md:left-[35%]
                   lg:top-[25.5%] lg:left-[67.5%] lg:transform-x-1/2 "
      >
       IEEE <span className=" text-stroke sm:[-webkit-text-stroke:0] md:[-webkit-text-stroke:1px_white] font-extrabold lg:text-black">COMPSOC</span> 

      

       
      </div>
    <div className="flex flex-col items-center justify-center h-screen w-screen relative">
      <canvas
        ref={canvasRef}
        style={{
          display: 'block',
          position: 'absolute',
          zIndex: 0,
          top: 0,
          left: 0,
        }}
      ></canvas>
        
      <Image src='/images/compsoc.webp' alt="Background Track" width={95} height={95} 
      className="absolute"
          style={{
        top:'2%' ,
        left:'2%'
       }} ></Image>
      {/* Hackhub Logo */}
      <div
        className="bg-center bg-no-repeat bg-contain md:h-[26vh] md:w-[68vw] h-[35vh] w-[80vw] absolute homepage-logo z-10"
        style={{
          backgroundImage: 'url(images/Hackhub_logo.png)',
          top: '43%', 
          left: '52%',
          transform: 'translate(-50%, -50%)'
        }}
      />
      </div>

      {/* FLAGSHIP AND 2025 Logo */}
      
      <div
        className="absolute text-white   font-archivoNarrow tracking-wide lg:top-[56%] lg:left-[27.25%] md:top-[49%] md:left-[51.5%] top-[46.5%] left-[53%] "
        style={{
          transform: 'translateX(-50%)'
        }}
      >
       <span className="md:text-3xl text-base ">FLAGSHIP EVENT </span>
       <span className='font-extrabold md:text-4xl text-lg italic '>2025</span>
      </div> 
      <div
        className="bg-center bg-no-repeat bg-contain h-[25vh] w-[38vw] md:top-[58.5%] md:left-[58%] hidden lg:block absolute "
        style={{
          backgroundImage: 'url(images/line1.webp)',
          transform: 'translate(-50%, -50%)'
        }}
      />
    <Stopwatch
        targetDate="2025-03-09T23:59:59"
        top="70%"
        left="50%"
        
        />
      <div className="absolute flex flex-wrap items-center justify-center lg:top-[80%] md:top-[78%] top-[75%] w-full">
      <a
        href="/school-registration"
        className="lg:px-24 lg:py-2 md:px-24 md:py-1 px-10 py-0.5 rounded-full border border-white text-white bg-black duration-300 hover:bg-gray-500 hover:text-black transition-all text-center font-archivoNarrow mx-2"
      >
        REGISTRATION
      </a>
      <a
        href="/join-our-community"
        className="lg:px-16 lg:py-2 md:px-20 md:py-1 px-6 py-0.5 rounded-full border border-white text-white bg-black duration-300 hover:bg-gray-500 hover:text-black transition-all text-center font-archivoNarrow mx-2"
      >
        JOIN OUR COMMUNITY
      </a>
      </div>

    </div>

  );
};

export default Homepage;



