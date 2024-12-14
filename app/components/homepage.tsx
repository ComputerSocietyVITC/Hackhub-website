'use client';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

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

      {/* Hackhub Logo */}
      <div
        className="bg-center bg-no-repeat bg-contain h-[50vh] w-[50vw] absolute homepage-logo z-10"
        style={{
          backgroundImage: 'url(images/Hackhub_logo.svg)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* 2025 Logo */}
      <div
        className="bg-no-repeat bg-contain absolute z-0
                   h-[calc(12vh)] w-[calc(12vw)] 
                   left-1/2 -translate-x-1/2 
                   top-[calc(44%+10vh)]
                   md:left-[calc(31%)] md:top-[calc(45%+15vh)]"
        style={{
          backgroundImage: 'url(images/2025.svg)',
        }}
      />
    </div>
  );
};

export default Homepage;
