"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FinalQuestion() {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [accepted, setAccepted] = useState(false);
  const [confettiHearts, setConfettiHearts] = useState<
    { id: number; x: number; y: number; rotation: number; delay: number }[]
  >([]);

  const handleNoHover = () => {
    // Move button to random position
    const maxX = 400;
    const maxY = 400;
    const randomX = Math.random() * maxX - maxX / 2;
    const randomY = Math.random() * maxY - maxY / 2;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  const handleYesClick = () => {
    setAccepted(true);

    // Create confetti hearts
    const hearts = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -50,
      rotation: Math.random() * 360,
      delay: Math.random() * 0.5,
    }));
    setConfettiHearts(hearts);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
      {/* Background Shift Animation */}
      <AnimatePresence>
        {accepted && (
          <motion.div
            className="fixed inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 50% 50%, rgba(139, 0, 0, 0.6) 0%, rgba(75, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 100%)",
                  "radial-gradient(circle at 50% 50%, rgba(185, 28, 28, 0.7) 0%, rgba(127, 29, 29, 0.8) 50%, rgba(0, 0, 0, 1) 100%)",
                  "radial-gradient(circle at 50% 50%, rgba(139, 0, 0, 0.6) 0%, rgba(75, 0, 0, 0.8) 50%, rgba(0, 0, 0, 1) 100%)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Confetti Hearts */}
      <AnimatePresence>
        {accepted &&
          confettiHearts.map((heart) => (
            <motion.div
              key={heart.id}
              className="fixed text-4xl pointer-events-none z-50"
              initial={{
                x: heart.x,
                y: heart.y,
                opacity: 1,
                scale: 0,
                rotate: heart.rotation,
              }}
              animate={{
                y: window.innerHeight + 100,
                opacity: [1, 1, 0],
                scale: [0, 1.5, 1],
                rotate: heart.rotation + 360,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 3,
                delay: heart.delay,
                ease: "easeOut",
              }}
            >
              {["💖", "💕", "💗", "💓", "🖤", "❤️"][
                Math.floor(Math.random() * 6)
              ]}
            </motion.div>
          ))}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl w-full text-center">
        <AnimatePresence mode="wait">
          {!accepted ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              {/* Question */}
              <motion.h2
                className="font-[family-name:var(--font-gothic)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-red-400"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(248, 113, 113, 0.5)",
                    "0 0 40px rgba(248, 113, 113, 0.8)",
                    "0 0 20px rgba(248, 113, 113, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Will you be my Valentine?
              </motion.h2>

              {/* Decorative Hearts */}
              <motion.div
                className="flex justify-center gap-8 text-6xl"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.span
                  animate={{
                    y: [0, -20, 0],
                    rotate: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  💀
                </motion.span>
                <motion.span
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🖤
                </motion.span>
                <motion.span
                  animate={{
                    y: [0, -20, 0],
                    rotate: [10, -10, 10],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                >
                  💀
                </motion.span>
              </motion.div>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                {/* Yes Button */}
                <motion.button
                  onClick={handleYesClick}
                  className="px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-red-600 to-pink-600 text-white font-mono text-xl sm:text-2xl rounded-lg shadow-lg w-full sm:w-auto"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(220, 38, 38, 0.8)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Yes 🖤
                </motion.button>

                {/* No Button (moves away on hover) */}
                <motion.button
                  onMouseEnter={handleNoHover}
                  onTouchStart={handleNoHover}
                  className="px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-mono text-xl sm:text-2xl rounded-lg shadow-lg w-full sm:w-auto"
                  animate={{
                    x: noButtonPosition.x,
                    y: noButtonPosition.y,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  whileHover={{
                    scale: 1.05,
                  }}
                >
                  No 💀
                </motion.button>
              </motion.div>

              {/* Hint Text */}
              <motion.p
                className="text-gray-500 text-sm font-mono mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                (Hint: There&apos;s only one right answer)
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="space-y-8"
            >
              {/* Achievement Badge */}
              <motion.div
                className="inline-block bg-gradient-to-r from-purple-900 to-red-900 px-8 py-4 rounded-lg border-2 border-red-500"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(239, 68, 68, 0.5)",
                    "0 0 40px rgba(239, 68, 68, 0.8)",
                    "0 0 20px rgba(239, 68, 68, 0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <motion.p
                  className="text-yellow-300 font-mono text-sm mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  🏆 ACHIEVEMENT UNLOCKED
                </motion.p>
                <motion.h3
                  className="font-[family-name:var(--font-gothic)] text-3xl sm:text-4xl md:text-6xl text-red-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Nerd Wifey 💘
                </motion.h3>
              </motion.div>

              {/* Success Message */}
              <motion.div
                className="space-y-4 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-3xl md:text-5xl text-red-400 font-light">
                  You made the right choice
                </p>
                <p className="text-xl text-purple-300 font-mono">
                  // Forever and always 🖤
                </p>
              </motion.div>

              {/* Animated Hearts */}
              <motion.div
                className="flex justify-center gap-4 text-5xl mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {["💖", "🖤", "💕", "🖤", "💖"].map((heart, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2,
                    }}
                  >
                    {heart}
                  </motion.span>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                className="mt-12 p-6 bg-black/50 rounded-lg border border-red-900/30 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <div className="font-mono text-sm text-gray-400 space-y-2">
                  <div className="flex justify-between">
                    <span>Love Level:</span>
                    <span className="text-red-400">∞</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Darkness:</span>
                    <span className="text-purple-400">Maximum</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Romance:</span>
                    <span className="text-pink-400">Eternal</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Ambient Particles */}
      {!accepted &&
        Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500/20 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
    </section>
  );
}
