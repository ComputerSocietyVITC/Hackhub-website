'use client'

import { useEffect, useState } from 'react';
import React from 'react';

const Sponsors = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      // Define the movement scaling
      let x = (event.clientX / window.innerWidth) * 25
      let y = (event.clientY / window.innerHeight) * 25

      // Clamp the x and y values to keep the image in bounds
      const maxMove = 30 // This controls the maximum translation (adjust as needed)
      x = Math.max(-maxMove, Math.min(maxMove, x))
      y = Math.max(-maxMove, Math.min(maxMove, y))

      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="h-screen w-screen relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/bgtrack4.webp")',
        backgroundSize: 'cover',
        backgroundPosition: `calc(50% + ${mousePosition.x}px) calc(50% + ${mousePosition.y}px)`,
        backgroundRepeat: 'no-repeat', 
        backgroundColor: 'black', 
        transition: 'background-position 200ms ease-out',
      }}
    >

    </div>
  )
}

export default Sponsors
