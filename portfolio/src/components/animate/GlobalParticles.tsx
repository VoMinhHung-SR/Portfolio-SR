'use client';

import { motion } from 'framer-motion';
import { useMemo } from 'react';

const GlobalParticles = () => {
  // Generate stable particle data using useMemo to prevent re-generation on re-renders
  const particleData = useMemo(() => {
    const particles = [];
    const stars = [];
    
    // Generate 60 floating particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: 2 + Math.random() * 3,
        delay: Math.random() * 4,
      });
    }
    
    // Generate 20 twinkling stars
    for (let i = 0; i < 20; i++) {
      stars.push({
        id: `star-${i}`,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 2 + 1,
        duration: 1.5 + Math.random() * 2,
        delay: Math.random() * 3,
      });
    }
    
    return { particles, stars };
  }, []); // Empty dependency array ensures this only runs once

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Floating particles */}
      {particleData.particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-blue-300 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          initial={{ 
            opacity: 0,
            scale: 1
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
      
      {/* Twinkling stars */}
      {particleData.stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          initial={{ 
            opacity: 0,
            scale: 0.8
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default GlobalParticles;
