"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const handleExecuteLove = () => {
    // Create heart explosion
    const newHearts = Array.from({ length: 12 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 200 - 100,
      y: Math.random() * 200 - 100,
    }));
    setHearts(newHearts);

    // Clear hearts after animation
    setTimeout(() => setHearts([]), 1000);

    // Smooth scroll to next section
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const poemLines = [
    { text: "Roses are ", color: "text-gray-300" },
    { text: "#FF0000", color: "text-[#FF0000]" },
    { text: ",", color: "text-gray-300" },
  ];

  const poemLines2 = [
    { text: "Violets are ", color: "text-gray-300" },
    { text: "#0000FF", color: "text-[#0000FF]" },
    { text: ",", color: "text-gray-300" },
  ];

  const codeSymbols = ["<3", "{", "}", "[", "]", "(", ")", "</>"];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6">
      {/* Falling Petals */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-600/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: -20,
            rotate: 0,
          }}
          animate={{
            y: window.innerHeight + 20,
            x: Math.random() * window.innerWidth,
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-10 max-w-5xl w-full text-center space-y-12">
        {/* Gothic Heading with Poem */}
        <motion.div
          className="space-y-4"
          initial={{ y: 50 }}
          animate={{ y: [50, 0, -5, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.h1 className="font-[family-name:var(--font-gothic)] text-4xl md:text-6xl lg:text-7xl leading-tight">
            {/* Line 1 */}
            <motion.div className="mb-2">
              {poemLines.map((part, i) => (
                <motion.span
                  key={i}
                  className={part.color}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                >
                  {part.text}
                </motion.span>
              ))}
            </motion.div>

            {/* Line 2 */}
            <motion.div className="mb-2">
              {poemLines2.map((part, i) => (
                <motion.span
                  key={i}
                  className={part.color}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + i * 0.2 }}
                >
                  {part.text}
                </motion.span>
              ))}
            </motion.div>

            {/* Line 3 */}
            <motion.div
              className="text-purple-300 mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              You hacked my heart,
            </motion.div>

            {/* Line 4 */}
            <motion.div
              className="text-red-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              And now there&apos;s no undo.
            </motion.div>
          </motion.h1>
        </motion.div>

        {/* Glowing Code Heart */}
        <motion.div
          className="relative flex items-center justify-center h-32"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.div
            className="text-6xl text-red-500"
            animate={{
              textShadow: [
                "0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.4)",
                "0 0 30px rgba(239, 68, 68, 1), 0 0 60px rgba(239, 68, 68, 0.6)",
                "0 0 20px rgba(239, 68, 68, 0.8), 0 0 40px rgba(239, 68, 68, 0.4)",
              ],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ❤️
          </motion.div>

          {/* Orbiting Code Symbols */}
          {codeSymbols.map((symbol, i) => (
            <motion.div
              key={i}
              className="absolute text-purple-400 text-xl font-mono"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                x: Math.cos((i / codeSymbols.length) * Math.PI * 2) * 80,
                y: Math.sin((i / codeSymbols.length) * Math.PI * 2) * 80,
                rotate: 360,
              }}
              transition={{
                opacity: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                x: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
                y: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
                rotate: {
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {symbol}
            </motion.div>
          ))}
        </motion.div>

        {/* Execute Love Button */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          <motion.button
            onClick={handleExecuteLove}
            className="relative px-8 py-4 bg-gradient-to-r from-red-600 to-purple-600 text-white font-mono text-lg rounded-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-red-600 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Execute Love.exe</span>
            
            <motion.div
              className="absolute inset-0 border-2 border-white/50"
              animate={{
                boxShadow: [
                  "0 0 10px rgba(255, 255, 255, 0.3)",
                  "0 0 20px rgba(255, 255, 255, 0.6)",
                  "0 0 10px rgba(255, 255, 255, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.button>

          {/* Heart Explosion */}
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              className="absolute top-1/2 left-1/2 text-2xl pointer-events-none"
              initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
              animate={{
                x: heart.x,
                y: heart.y,
                opacity: 0,
                scale: 0,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              💖
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2.5, duration: 0.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="text-gray-500 text-sm">↓</div>
        </motion.div>
      </div>
    </section>
  );
}
