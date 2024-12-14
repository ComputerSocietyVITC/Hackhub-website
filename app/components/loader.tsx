"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { montserrat } from "@/fonts";

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
          image.onerror = () => reject();
        }
      });
    };

    const loadAllImages = async (): Promise<void> => {
      try {
        const images = document.querySelectorAll("img");
        const imagesPromises = Array.from(images).map(loadImage);
        const timeOutPromise = new Promise<void>((resolve) => {
          setTimeout(() => resolve(), fallbackTimeout);
        });
        await Promise.race([Promise.all(imagesPromises), timeOutPromise]);
        setIsLoading(false);
      } catch (error: unknown) {
        if (error instanceof Error) {
          console.error("Error Loading images", error);
          setIsLoading(false);
        }
      }
    };
    loadAllImages();
    return () => {
      setIsLoading(false);
    };
  }, [children, fallbackTimeout]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black ${montserrat.className}`">
        <div className="text-center">
          <p className="text-white text-4xl mb-4 font-extrabold">
            Hackhub 2025
          </p>
          <div className="flex justify-center">
            <Loader2 className="animate-spin text-white" size={48} />
          </div>
        </div>
      </div>
    );
  }
  return <>{children}</>;
}
