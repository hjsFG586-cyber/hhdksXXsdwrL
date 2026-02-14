"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface PickupCard {
  front: string;
  back: string;
  icon: string;
}

export default function PickupLines() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const pickupLines: PickupCard[] = [
    {
      front: "💻",
      back: "Are you a recursive function? Because I can't stop calling you.",
      icon: "🔄",
    },
    {
      front: "⌨️",
      back: "You auto-complete my life.",
      icon: "✨",
    },
    {
      front: "🎨",
      back: "You're the CSS to my HTML.",
      icon: "💕",
    },
    {
      front: "🐛",
      back: "I must be a bug, because I'm falling for you.",
      icon: "💘",
    },
  ];

  const handleCardHover = (index: number, isHovered: boolean) => {
    if (isHovered) {
      setFlippedCards((prev) => [...prev, index]);
    } else {
      setFlippedCards((prev) => prev.filter((i) => i !== index));
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-6xl w-full">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            className="font-[family-name:var(--font-gothic)] text-5xl md:text-7xl text-purple-400 mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(168, 85, 247, 0.4)",
                "0 0 30px rgba(168, 85, 247, 0.6)",
                "0 0 20px rgba(168, 85, 247, 0.4)",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Nerd Pickup Lines
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg font-mono"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            // Hover to reveal the code of love
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pickupLines.map((line, index) => (
            <motion.div
              key={index}
              className="perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              onHoverStart={() => handleCardHover(index, true)}
              onHoverEnd={() => handleCardHover(index, false)}
            >
              <motion.div
                className="relative w-full h-64 cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                animate={{
                  rotateY: flippedCards.includes(index) ? 180 : 0,
                }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
              >
                {/* Front of Card */}
                <motion.div
                  className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-br from-purple-900/50 to-red-900/50 border-2 border-purple-500/30 flex items-center justify-center backdrop-blur-sm"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(168, 85, 247, 0.2)",
                      "0 0 30px rgba(168, 85, 247, 0.4)",
                      "0 0 20px rgba(168, 85, 247, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-7xl mb-4"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {line.front}
                    </motion.div>
                    <p className="text-purple-300 text-sm font-mono">
                      Hover to reveal
                    </p>
                  </div>
                </motion.div>

                {/* Back of Card */}
                <motion.div
                  className="absolute inset-0 w-full h-full rounded-lg bg-gradient-to-br from-red-900/80 to-purple-900/80 border-2 border-red-500/50 flex items-center justify-center p-6 backdrop-blur-sm"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                      "0 0 30px rgba(239, 68, 68, 0.5)",
                      "0 0 20px rgba(239, 68, 68, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-4xl mb-3"
                      initial={{ scale: 0 }}
                      animate={{
                        scale: flippedCards.includes(index) ? 1 : 0,
                      }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      {line.icon}
                    </motion.div>
                    <motion.p
                      className="text-red-200 text-base font-mono leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: flippedCards.includes(index) ? 1 : 0,
                      }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      {line.back}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Decoration */}
        <motion.div
          className="flex justify-center items-center gap-4 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <motion.div
            className="text-2xl"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            💝
          </motion.div>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
        </motion.div>

        {/* Fun Stats */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm font-mono">
            console.log(&quot;Cheesy? Maybe. Effective? Absolutely.&quot;) 🖤
          </p>
        </motion.div>
      </div>
    </section>
  );
}
