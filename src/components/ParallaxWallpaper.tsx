import React, { useState, useEffect } from 'react'

const ParallaxWallpaper = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = (e.clientY / window.innerHeight) * 2 - 1
      
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Base sky/background color */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-300 via-blue-200 to-blue-100" />
      
      {/* Layer 1: Clouds (background - moves slowest) */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat transition-transform duration-300 ease-out"
        style={{
          backgroundImage: 'url(/bg-clouds.png)',
          backgroundSize: '100% auto',
          backgroundPosition: 'center bottom',
          transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
        }}
      />
      
      {/* Layer 2: Mountains (middle ground - moves at medium speed) */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat transition-transform duration-250 ease-out"
        style={{
          backgroundImage: 'url(/bg-mountains.png)',
          backgroundSize: '100% auto',
          backgroundPosition: 'center bottom',
          transform: `translate(${mousePosition.x * 12}px, ${mousePosition.y * 12}px)`,
        }}
      />
      
      {/* Layer 3: Trees (foreground - moves fastest) */}
      <div 
        className="absolute inset-0 bg-center bg-no-repeat transition-transform duration-200 ease-out"
        style={{
          backgroundImage: 'url(/bg-trees.png)',
          backgroundSize: '100% auto',
          backgroundPosition: 'center bottom',
          transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
        }}
      />
      
      {/* Subtle overlay for depth */}
      <div 
        className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent"
      />
    </div>
  )
}

export default ParallaxWallpaper



