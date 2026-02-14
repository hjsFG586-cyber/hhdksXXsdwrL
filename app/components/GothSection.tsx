"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function GothSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const moonY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const quoteY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden"
    >
      {/* Animated Moon */}
      <motion.div
        className="absolute top-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-gray-300 to-gray-500 opacity-20"
        style={{ y: moonY }}
        animate={{
          boxShadow: [
            "0 0 60px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)",
            "0 0 80px rgba(255, 255, 255, 0.3), 0 0 120px rgba(255, 255, 255, 0.15)",
            "0 0 60px rgba(255, 255, 255, 0.2), 0 0 100px rgba(255, 255, 255, 0.1)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Moon craters */}
        <div className="absolute top-8 left-8 w-6 h-6 rounded-full bg-gray-600/30" />
        <div className="absolute top-16 right-12 w-4 h-4 rounded-full bg-gray-600/30" />
        <div className="absolute bottom-12 left-16 w-5 h-5 rounded-full bg-gray-600/30" />
      </motion.div>

      {/* Floating Dark Roses */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-30"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
          }}
          animate={{
            y: [
              Math.random() * 100,
              Math.random() * 100 + 200,
              Math.random() * 100,
            ],
            x: [
              Math.random() * 100,
              Math.random() * 100 + 100,
              Math.random() * 100,
            ],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🥀
        </motion.div>
      ))}

      {/* Main Content Container with Lace Border */}
      <motion.div
        className="relative z-10 w-full max-w-4xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Lace Border Container */}
        <div className="relative p-12 md:p-16">
          {/* Top Lace Border */}
          <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
            >
              <pattern
                id="lace-pattern-top"
                x="0"
                y="0"
                width="60"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M30,0 Q20,20 30,40 Q40,20 30,0 M0,20 Q15,10 30,20 Q45,10 60,20"
                  fill="none"
                  stroke="rgba(139, 0, 0, 0.4)"
                  strokeWidth="1.5"
                />
                <circle cx="30" cy="20" r="3" fill="rgba(139, 0, 0, 0.3)" />
              </pattern>
              <rect width="1200" height="40" fill="url(#lace-pattern-top)" />
            </svg>
          </div>

          {/* Bottom Lace Border */}
          <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden rotate-180">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 40"
              preserveAspectRatio="none"
            >
              <pattern
                id="lace-pattern-bottom"
                x="0"
                y="0"
                width="60"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M30,0 Q20,20 30,40 Q40,20 30,0 M0,20 Q15,10 30,20 Q45,10 60,20"
                  fill="none"
                  stroke="rgba(139, 0, 0, 0.4)"
                  strokeWidth="1.5"
                />
                <circle cx="30" cy="20" r="3" fill="rgba(139, 0, 0, 0.3)" />
              </pattern>
              <rect width="1200" height="40" fill="url(#lace-pattern-bottom)" />
            </svg>
          </div>

          {/* Left Lace Border */}
          <div className="absolute left-0 top-0 bottom-0 w-8 overflow-hidden">
            <svg
              className="w-full h-full"
              viewBox="0 0 40 1200"
              preserveAspectRatio="none"
            >
              <pattern
                id="lace-pattern-left"
                x="0"
                y="0"
                width="40"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,30 Q20,20 40,30 Q20,40 0,30 M20,0 Q10,15 20,30 Q10,45 20,60"
                  fill="none"
                  stroke="rgba(139, 0, 0, 0.4)"
                  strokeWidth="1.5"
                />
                <circle cx="20" cy="30" r="3" fill="rgba(139, 0, 0, 0.3)" />
              </pattern>
              <rect width="40" height="1200" fill="url(#lace-pattern-left)" />
            </svg>
          </div>

          {/* Right Lace Border */}
          <div className="absolute right-0 top-0 bottom-0 w-8 overflow-hidden rotate-180">
            <svg
              className="w-full h-full"
              viewBox="0 0 40 1200"
              preserveAspectRatio="none"
            >
              <pattern
                id="lace-pattern-right"
                x="0"
                y="0"
                width="40"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0,30 Q20,20 40,30 Q20,40 0,30 M20,0 Q10,15 20,30 Q10,45 20,60"
                  fill="none"
                  stroke="rgba(139, 0, 0, 0.4)"
                  strokeWidth="1.5"
                />
                <circle cx="20" cy="30" r="3" fill="rgba(139, 0, 0, 0.3)" />
              </pattern>
              <rect width="40" height="1200" fill="url(#lace-pattern-right)" />
            </svg>
          </div>

          {/* Deep Red Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-lg"
            animate={{
              boxShadow: [
                "inset 0 0 60px rgba(139, 0, 0, 0.3), 0 0 80px rgba(139, 0, 0, 0.2)",
                "inset 0 0 80px rgba(139, 0, 0, 0.4), 0 0 100px rgba(139, 0, 0, 0.3)",
                "inset 0 0 60px rgba(139, 0, 0, 0.3), 0 0 80px rgba(139, 0, 0, 0.2)",
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Quote Content with Parallax */}
          <motion.div
            className="relative text-center space-y-8"
            style={{ y: quoteY }}
          >
            {/* Decorative Top Element */}
            <motion.div
              className="flex justify-center items-center gap-4 mb-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent" />
              <div className="text-red-900 text-2xl">🥀</div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent" />
            </motion.div>

            {/* Main Quote */}
            <motion.blockquote
              className="font-[family-name:var(--font-gothic)] text-3xl md:text-5xl lg:text-6xl text-red-200 leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
              style={{
                textShadow: "0 0 20px rgba(220, 38, 38, 0.5)",
              }}
            >
              &ldquo;Even in the darkest themes,
              <br />
              <span className="text-red-400">you are my favorite color.</span>
              &rdquo;
            </motion.blockquote>

            {/* Decorative Bottom Element */}
            <motion.div
              className="flex justify-center items-center gap-4 mt-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent" />
              <div className="text-red-900 text-2xl">🖤</div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-900 to-transparent" />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              className="text-gray-400 text-lg font-light tracking-widest mt-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              viewport={{ once: true }}
            >
              A LOVE WRITTEN IN SHADOWS
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Additional Ambient Glow */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            "radial-gradient(circle at 30% 50%, rgba(139, 0, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, rgba(139, 0, 0, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, rgba(139, 0, 0, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
