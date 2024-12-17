'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import Image from 'next/image';
import Stopwatch from '../ui/stopwatch';

export const runtime = "edge";

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
    const starCount = 5000;
    const starPositions = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      starPositions[i] = (Math.random() - 0.5) * 2000;
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
        positions[i + 1] -= 0.05;

        if (positions[i + 1] < -1000) {
          positions[i + 1] = 1000;
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

      {/* COMPSOC Logo */}
      <div className="absolute top-4 left-4 z-10">
        <Image
          src="/images/compsoc.webp"
          alt="COMPSOC Logo"
          width={100}
          height={95}
        />
      </div>

      {/* Content */}
<div className="flex flex-col items-center justify-center z-10">
  {/* Combined Flex Box */}
  <div className="flex flex-col items-center text-center justify-center  w-full">
  <div className='responsive-heading'>
    {/* IEEE COMPSOC */}
    <div className="text-white text-xl sm:text-2xl md:text-4xl xl:text-5xl font-extrabold italic flex flex-row justify-center items-center -mb-16 sm:-mb-0 lg:justify-end w-full">
      IEEE{' '}
      <span className="text-stroke md:[-webkit-text-stroke:0] lg:[-webkit-text-stroke:1px_white] font-extrabold md:text-white lg:text-black">
        COMPSOC
      </span>
    </div>
    </div>

    {/* Hackhub Logo */}
    <div className="responsive-container">
    <div
      className="bg-center bg-no-repeat bg-contain sm:h-[10vh] sm:w-[68vw] h-[18vh]  md:h-[15vh] md:w-[70vw] lg:h-[26vh] mx-auto  homepage-logo w-[80vw]"
      style={{
        backgroundImage: 'url(images/hackhub_logo.png)',
      }}
    ></div>
    </div>

    {/* Year */}
    <div className=" font-extrabold italic text-lg gap-2  sm:text-3xl md:text-5xl  lg:text-6xl lg:text-left text-white w-full z-15">
      2025
    </div>
    
  </div>
</div>


      {/* Stopwatch */}
      <div className="flex justify-center items-center mt-20 lg:mt-15 transform -translate-x-1/2 -translate-y-1/2">
        <Stopwatch targetDate="2025-12-31T23:59:59" />
      </div>

      {/* Buttons */}
      <div className="absolute flex flex-col lg:flex-row gap-10  items-center justify-center top-[80%] left-[50%] transform -translate-x-1/2 mt-10 lg:mt-12">
        <a
          href="/school-registration"
          className="w-40 h-12 flex items-center justify-center rounded-full border border-white text-white bg-black duration-300 hover:bg-white/10 transition-all text-center font-archivoNarrow"
        >
          REGISTRATION
        </a>
        <a
          href="/join-our-community"
          className="w-40 h-12 flex items-center justify-center rounded-full border border-white text-white bg-black duration-300 hover:bg-white/10 transition-all text-center font-archivoNarrow"
        >
          JOIN OUR COMMUNITY
        </a>
      </div>
    </div>
  );
};

export default Homepage;
