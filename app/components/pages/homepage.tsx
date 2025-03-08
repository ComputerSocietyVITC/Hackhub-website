"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import Image from "next/image";
import Stopwatch from "../ui/stopwatch";
import Button from "../ui/button";

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

    starGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(starPositions, 3)
    );
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
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

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

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          position: "absolute",
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
      <div className="flex flex-col items-center justify-center gap-y-4 relative z-15">
        {/* Combined Flex Box */}
        <div className="flex flex-col items-center text-center justify-center w-full gap-y-6 relative z-15">
          <div className="responsive-heading">
            {/* IEEE COMPSOC */}
            <div className="text-white text-xl sm:text-2xl md:text-3xl xl:text-5xl font-extrabold italic flex flex-row justify-center items-center gap-x-4 pb-3 pt-6 w-full lg:justify-end">
              IEEE{" "}
              <span className="text-stroke md:[-webkit-text-stroke:0] lg:[-webkit-text-stroke:1px_white] font-extrabold md:text-white lg:text-black">
                COMPSOC /
              </span>
              <Image
                src="/images/github-4.webp"
                alt="GitHub Logo"
                width={150}
                height={150}
              />
            </div>
          </div>

          {/* Hackhub Logo */}
          <div className="responsive-container relative z-10">
            <div
              className="bg-center bg-no-repeat bg-contain sm:h-[10vh] sm:w-[68vw] h-[18vh] md:h-[15vh] md:w-[70vw] lg:h-[25vh] mx-auto homepage-logo w-[80vw]"
              style={{
                backgroundImage: "url(images/Hackhub_logo.svg)",
              }}
            ></div>
          </div>

          {/* Year */}
          <div className="font-extrabold italic text-lg text-center sm:text-3xl md:text-5xl lg:text-6xl lg:text-left text-white w-full relative z-15">
            2025
          </div>
        </div>
      </div>

      {/* Stopwatch */}
      <div className="flex flex-col justify-center items-center mt-20 lg:mb-10 transform -translate-x-1/2 -translate-y-1/2 z-15">
        <Stopwatch targetDate="2025-03-09T08:00:00" />
      </div>
      {/*
      <div className="absolute top-[90%] left-[50%] w-full transform -translate-x-1/2 z-15">
        <Button href="https://hackhubvitc.devfolio.co" text="Register Here" />
      </div> */}

      {/* Buttons */}
      <div className=" hidden absolute ">
        <div
          className="apply-button"
          data-hackathon-slug="hackhubvitc"
          data-button-theme="dark"
          style={{ height: "44px", width: "312px" }}
        >
          <a href="https://hackhubvitc.devfolio.co"></a>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
