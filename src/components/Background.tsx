"use client";

import { motion } from "framer-motion";
import Starfield from "react-starfield";

export default function Background() {
  return (
    <div className="bg-container">
      {/* Stars - at the back */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Starfield
          starCount={2000}
          speedFactor={0.03}
          backgroundColor="#0a0a0a"
          starColor={[255, 255, 255]}
        />
      </div>
      
      {/* Nebula purple */}
      <motion.div
        style={{
          position: 'absolute',
          top: '-10%',
          left: '10%',
          width: '600px',
          height: '600px',
          backgroundColor: 'rgba(147, 51, 234, 0.15)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 1,
        }}
        animate={{
          x: [0, 30, -20, 10, 0],
          y: [0, -20, 30, -10, 0],
          opacity: [0.6, 0.9, 0.7, 1, 0.6],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Nebula red */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '-10%',
          right: '10%',
          width: '500px',
          height: '500px',
          backgroundColor: 'rgba(220, 38, 38, 0.12)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          zIndex: 1,
        }}
        animate={{
          x: [0, -25, 15, -10, 0],
          y: [0, 25, -30, 15, 0],
          opacity: [0.5, 0.8, 0.6, 0.9, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Center glow */}
      <motion.div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          x: '-50%',
          y: '-50%',
          width: '400px',
          height: '400px',
          backgroundColor: 'rgba(147, 51, 234, 0.08)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: 1,
        }}
        animate={{
          x: ['-50%', '-45%', '-55%', '-48%', '-50%'],
          y: ['-50%', '-48%', '-52%', '-45%', '-50%'],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="bg-grid" style={{ zIndex: 2 }} />
    </div>
  );
}
