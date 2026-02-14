"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function SimpleMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Using the dark romance song from /public folder
  const audioUrl = "/dark-romance.mp3";

  useEffect(() => {
    console.log("Initializing audio player...");
    // Create audio element
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.7; // Increased volume
    audio.preload = "auto";
    
    audio.addEventListener("canplaythrough", () => {
      setIsLoaded(true);
      console.log("Audio loaded and ready to play");
      
      // Auto-play when loaded
      audio.play().then(() => {
        console.log("Auto-playing audio");
        setIsPlaying(true);
      }).catch((error) => {
        console.log("Auto-play blocked by browser:", error);
        // Browser blocked auto-play, user will need to click
      });
    });

    audio.addEventListener("loadeddata", () => {
      console.log("Audio data loaded");
    });

    audio.addEventListener("error", (e) => {
      console.error("Audio error:", e);
      console.error("Error details:", audio.error);
    });

    audio.addEventListener("play", () => {
      console.log("Audio play event fired");
    });

    audio.addEventListener("pause", () => {
      console.log("Audio pause event fired");
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [audioUrl]);

  const togglePlay = () => {
    if (!audioRef.current) {
      console.error("Audio element not ready");
      return;
    }

    if (isPlaying) {
      audioRef.current.pause();
      console.log("Audio paused");
      setIsPlaying(false);
    } else {
      console.log("Attempting to play audio...");
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio playing successfully!");
            console.log("Volume:", audioRef.current?.volume);
            console.log("Muted:", audioRef.current?.muted);
            setIsPlaying(true);
          })
          .catch((error) => {
            console.error("Play failed:", error);
            alert(`Failed to play audio: ${error.message}`);
          });
      }
    }
  };

  return (
    <motion.div
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 2, duration: 0.5 }}
    >
      <motion.div
        className="relative"
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <motion.button
          onClick={togglePlay}
          disabled={!isLoaded}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-red-900 to-purple-900 border-2 border-red-500/50 flex items-center justify-center shadow-lg disabled:opacity-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: isPlaying
              ? [
                  "0 0 20px rgba(220, 38, 38, 0.5)",
                  "0 0 30px rgba(220, 38, 38, 0.8)",
                  "0 0 20px rgba(220, 38, 38, 0.5)",
                ]
              : "0 0 10px rgba(220, 38, 38, 0.3)",
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: isPlaying ? Infinity : 0,
              ease: "easeInOut",
            },
          }}
        >
          {isPlaying ? (
            <motion.div
              className="flex gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="w-1 h-4 bg-red-300 rounded-full"
                animate={{ scaleY: [1, 1.5, 0.8, 1.2, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="w-1 h-4 bg-red-300 rounded-full"
                animate={{ scaleY: [1.2, 0.8, 1.5, 1, 1.2] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.1,
                }}
              />
              <motion.div
                className="w-1 h-4 bg-red-300 rounded-full"
                animate={{ scaleY: [0.8, 1.2, 1, 1.5, 0.8] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
              />
            </motion.div>
          ) : (
            <svg
              className="w-6 h-6 text-red-300 ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="absolute bottom-full right-0 mb-2 bg-black/90 border border-red-500/30 rounded-lg px-4 py-2 whitespace-nowrap"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-red-300 text-sm font-mono">
                {isPlaying ? "🎵 Playing..." : isLoaded ? "🎵 Click to play" : "🎵 Loading..."}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {isPlaying && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-red-500"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}
