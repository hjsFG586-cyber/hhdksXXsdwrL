"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Terminal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalLines = [
    "$ initializing feelings...",
    "$ compiling affection...",
    "$ running love_protocol.sh",
    "ERROR: cannot stop thinking about you",
    "STATUS: hopelessly into you",
  ];

  useEffect(() => {
    if (!isInView) return;

    // Blinking cursor
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;
    if (currentLineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[currentLineIndex];
    
    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (newLines[currentLineIndex] === undefined) {
            newLines[currentLineIndex] = "";
          }
          newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex((prev) => prev + 1);
      }, 50); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      // Move to next line after a pause
      const timeout = setTimeout(() => {
        setCurrentLineIndex((prev) => prev + 1);
        setCurrentCharIndex(0);
      }, 500); // Pause between lines

      return () => clearTimeout(timeout);
    }
  }, [currentCharIndex, currentLineIndex, isInView, terminalLines]);

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6 py-12"
    >
      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        {/* Terminal Window */}
        <motion.div
          className="relative bg-black/90 rounded-lg overflow-hidden border border-green-500/30"
          animate={{
            boxShadow: [
              "0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1)",
              "0 0 30px rgba(34, 197, 94, 0.4), 0 0 60px rgba(34, 197, 94, 0.2)",
              "0 0 20px rgba(34, 197, 94, 0.3), 0 0 40px rgba(34, 197, 94, 0.1)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center gap-2 border-b border-green-500/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center text-gray-400 text-sm font-mono">
              love_terminal.sh
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-green-400 min-h-[300px]">
            {displayedLines.map((line, index) => (
              <motion.div
                key={index}
                className="mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {line.startsWith("ERROR:") ? (
                  <span className="text-red-400">{line}</span>
                ) : line.startsWith("STATUS:") ? (
                  <span className="text-cyan-400">{line}</span>
                ) : (
                  <span>{line}</span>
                )}
              </motion.div>
            ))}
            
            {/* Blinking Cursor */}
            {currentLineIndex < terminalLines.length && (
              <motion.span
                className="inline-block w-2 h-5 bg-green-400 ml-1"
                animate={{ opacity: showCursor ? 1 : 0 }}
              />
            )}

            {/* Final cursor after all lines are done */}
            {currentLineIndex >= terminalLines.length && (
              <div className="mt-2">
                <span>$ </span>
                <motion.span
                  className="inline-block w-2 h-5 bg-green-400 ml-1"
                  animate={{ opacity: showCursor ? 1 : 0 }}
                />
              </div>
            )}
          </div>

          {/* Scan line effect */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(transparent 50%, rgba(34, 197, 94, 0.03) 50%)",
              backgroundSize: "100% 4px",
            }}
            animate={{
              backgroundPosition: ["0% 0%", "0% 100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Bottom text */}
        <motion.p
          className="text-center mt-8 text-gray-400 text-sm font-mono"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          &lt;/3 System compromised by your charm
        </motion.p>
      </motion.div>
    </section>
  );
}
