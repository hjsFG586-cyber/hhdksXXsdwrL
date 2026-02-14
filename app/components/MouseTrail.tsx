"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TrailPoint {
  x: number;
  y: number;
  id: number;
}

export default function MouseTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let lastTime = Date.now();
    const throttleDelay = 30; // ms between trail points

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime < throttleDelay) return;
      lastTime = now;

      const newPoint: TrailPoint = {
        x: e.clientX,
        y: e.clientY,
        id: now,
      };

      setTrail((prev) => [...prev.slice(-15), newPoint]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9998]">
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: point.x,
            top: point.y,
            background: `radial-gradient(circle, rgba(220, 38, 38, ${
              0.6 - index * 0.04
            }) 0%, transparent 70%)`,
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}
