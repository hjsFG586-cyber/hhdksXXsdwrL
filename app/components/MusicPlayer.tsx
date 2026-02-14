"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [ReactPlayer, setReactPlayer] = useState<any>(null);
  const [isReady, setIsReady] = useState(false);
  const playerRef = useRef<any>(null);

  // Replace this with your desired YouTube URL
  const youtubeUrl = "https://www.youtube.com/watch?v=DWcJFNfaw9c";

  useEffect(() => {
    import("react-player").then((module) => {
      setReactPlayer(() => module.default);
      console.log("ReactPlayer loaded");
    });
  }, []);

  const togglePlay = () => {
    const newPlayingState = !isPlaying;
    setIsPlaying(newPlayingState);
    console.log("Playing:", newPlayingState);
  };

  const handleReady = () => {
    setIsReady(true);
    console.log("Player ready");
  };

  const handleError = (error: any) => {
    console.error("Player error:", error);
  };

  return (
    <>
      {ReactPlayer && (
        <div style={{ position: "fixed", top: -9999, left: -9999 }}>
          <ReactPlayer
            ref={playerRef}
            url={youtubeUrl}
            playing={isPlaying}
            loop={true}
            volume={0.5}
            width="0"
            height="0"
            onReady={handleReady}
            onError={handleError}
            config={{
              youtube: {
                playerVars: {
                  autoplay: 0,
                  controls: 0,
                  modestbranding: 1,
                },
              },
            }}
          />
        </div>
      )}

      <motion.div
        className="fixed bottom-8 right-8 z-50"
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
            className="w-14 h-14 rounded-full bg-gradient-to-br from-red-900 to-purple-900 border-2 border-red-500/50 flex items-center justify-center shadow-lg"
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
                  {isPlaying ? "🎵 Playing..." : isReady ? "🎵 Click to play" : "🎵 Loading..."}
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
    </>
  );
}
