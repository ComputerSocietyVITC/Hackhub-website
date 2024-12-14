"use client";

import { useEffect, useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["800"], // Use 800 for ExtraBold
  subsets: ["latin"],
});

export default function Loader({
  children,
  fallbackTimeout = 10000,
}: {
  children: React.ReactNode;
  fallbackTimeout?: number;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadImage = (image: HTMLImageElement) => {
      return new Promise<void>((resolve, reject) => {
        if (image.complete) {
          resolve();
        } else {
          image.onload = () => resolve();
          image.onerror = () => reject(new Error("Image failed to load."));
        }
      });
    };

    const loadAllAssets = async () => {
      try {
        const images = document.querySelectorAll("img");
        const imagePromises = Array.from(images).map(loadImage);

        const windowLoadPromise = new Promise<void>((resolve) => {
          if (document.readyState === "complete") {
            resolve();
          } else {
            window.addEventListener(
              "load",
              () => resolve(),
              { once: true } // Ensure the event listener only fires once
            );
          }
        });

        await Promise.race([
          Promise.all([...imagePromises, windowLoadPromise]),
          new Promise<void>((resolve) => setTimeout(resolve, fallbackTimeout)),
        ]);

        setIsLoading(false);
      } catch (error) {
        console.error("Error loading assets:", error);
        setIsLoading(false);
      }
    };

    loadAllAssets();
  }, [fallbackTimeout]);

  if (isLoading) {
    return (
      <div
        className={`min-h-screen flex flex-col items-center justify-center bg-black text-white transition-opacity duration-500 ease-in-out ${montserrat.className}`}
      >
        <div className="text-center space-y-6">
          {/* Responsive heading text */}
          <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl tracking-wide">
            Welcome to Hackhub 2025
          </h1>
          <div className="relative w-16 h-16 mx-auto mt-5">
            <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-white animate-spin"></div>
            <div className="absolute inset-0 rounded-full border-t-4 border-b-4 border-gray-500 animate-spin-reverse"></div>
          </div>
          {/* Responsive paragraph text */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300">
            Loading, please wait...
          </p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
