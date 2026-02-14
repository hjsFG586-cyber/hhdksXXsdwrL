"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import Terminal from "./components/Terminal";
import PickupLines from "./components/PickupLines";
import GothSection from "./components/GothSection";
import FinalQuestion from "./components/FinalQuestion";
import MouseTrail from "./components/MouseTrail";
import SimpleMusicPlayer from "./components/SimpleMusicPlayer";
import AmbientParticles from "./components/AmbientParticles";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tiltStyle, setTiltStyle] = useState({});

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Calculate tilt based on mouse position
      const x = (e.clientY / window.innerHeight - 0.5) * 2;
      const y = (e.clientX / window.innerWidth - 0.5) * 2;

      setTiltStyle({
        transform: `perspective(1000px) rotateX(${x * 2}deg) rotateY(${y * 2}deg)`,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Mouse Trail Effect */}
      <MouseTrail />

      {/* Custom Cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Ambient Particles */}
      <AmbientParticles />

      {/* Music Player */}
      <SimpleMusicPlayer />

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(88, 28, 135, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(30, 58, 138, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(88, 28, 135, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 20%, rgba(220, 38, 38, 0.2) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(30, 58, 138, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 80%, rgba(88, 28, 135, 0.3) 0%, transparent 50%), radial-gradient(circle at 50% 50%, rgba(220, 38, 38, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(30, 58, 138, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(88, 28, 135, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(220, 38, 38, 0.2) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(30, 58, 138, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Page Transition Wrapper */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <Hero />

        {/* Terminal Section */}
        <Terminal />

        {/* Pickup Lines Section */}
        <PickupLines />

        {/* Goth Aesthetic Section */}
        <GothSection />

        {/* Final Question Section */}
        <FinalQuestion />

        {/* Next Section */}
        <motion.section
          id="next-section"
          className="min-h-screen flex flex-col items-center justify-center px-6 py-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={tiltStyle}
        >
          <div className="max-w-4xl w-full text-center space-y-12">
            {/* Gothic Heading */}
            <motion.h2
              className="font-[family-name:var(--font-gothic)] text-6xl md:text-8xl text-red-600 drop-shadow-[0_0_30px_rgba(220,38,38,0.5)]"
              initial={{ y: -50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Dark Valentine
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-purple-300 font-light tracking-wide"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Where shadows dance with crimson hearts
            </motion.p>

            {/* Decorative Elements */}
            <motion.div
              className="flex justify-center items-center gap-8 my-16"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="w-16 h-16 border-2 border-red-600 rotate-45"
                animate={{
                  rotate: [45, 225, 45],
                  borderColor: ["#dc2626", "#7c3aed", "#dc2626"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="text-4xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🖤
              </motion.div>
              <motion.div
                className="w-16 h-16 border-2 border-purple-600 rotate-45"
                animate={{
                  rotate: [45, -135, 45],
                  borderColor: ["#7c3aed", "#dc2626", "#7c3aed"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Message */}
            <motion.div
              className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <p className="italic">
                In the depths of midnight&apos;s embrace,
              </p>
              <p className="italic">
                Where moonlight fades and stars erase,
              </p>
              <p className="italic">
                A love eternal, dark and true,
              </p>
              <p className="italic">
                Forever bound, me and you.
              </p>
            </motion.div>

            {/* Footer */}
            <motion.div
              className="pt-16 text-sm text-gray-500 tracking-widest"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
            >
              MMXXVI
            </motion.div>
          </div>
        </motion.section>
      </motion.div>
    </>
  );
}
