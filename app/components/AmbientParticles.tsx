"use client";

import { motion } from "framer-motion";

export default function AmbientParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large floating particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            background: `radial-gradient(circle, ${
              i % 3 === 0
                ? "rgba(139, 0, 0, 0.3)"
                : i % 3 === 1
                ? "rgba(88, 28, 135, 0.3)"
                : "rgba(30, 58, 138, 0.3)"
            } 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Small twinkling particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={`small-${i}`}
          className="absolute w-1 h-1 rounded-full bg-red-500/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Drifting mist effect */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`mist-${i}`}
          className="absolute rounded-full blur-3xl"
          style={{
            width: Math.random() * 300 + 200,
            height: Math.random() * 300 + 200,
            background: `radial-gradient(circle, ${
              i % 2 === 0
                ? "rgba(139, 0, 0, 0.05)"
                : "rgba(88, 28, 135, 0.05)"
            } 0%, transparent 70%)`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200, 0],
            y: [0, Math.random() * 400 - 200, 0],
          }}
          transition={{
            duration: Math.random() * 40 + 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
