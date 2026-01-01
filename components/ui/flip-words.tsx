"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const FlipWords = ({
  words,
  duration = 3000,
  className = "",
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={words[index]}
        initial={{ rotateX: 90, opacity: 0 }}
        animate={{ rotateX: 0, opacity: 1 }}
        exit={{ rotateX: -90, opacity: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100, damping: 10 }}
        className={`inline-block relative ${className}`}
        style={{
          perspective: "1000px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Glitter effect background */}
        {isHovered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-yellow-400"
                style={{
                  fontSize: "0.5em",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.075,
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
              >
                ✨
              </motion.span>
            ))}
          </>
        )}

        {/* Text with hover effect */}
        <motion.span
          animate={{
            scale: isHovered ? 1.1 : 1,
            color: isHovered ? "#fbbf24" : "currentColor",
            textShadow: isHovered 
              ? "0 0 20px rgba(251, 191, 36, 0.8), 0 0 40px rgba(251, 191, 36, 0.4)"
              : "none"
          }}
          transition={{ duration: 0.3 }}
          className="relative inline-block"
        >
          {words[index]}
        </motion.span>
      </motion.div>
    </AnimatePresence>
  );
};
