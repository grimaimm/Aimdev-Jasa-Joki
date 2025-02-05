import React from 'react';
import { motion } from 'framer-motion';

export function FireEmoji() {
  return (
    <motion.span
      aria-label='emoji'
      role='img'
      animate={{
        scale: [1, 1.1, 1], // Animasi scaling
        rotate: [0, 15, -10, 0], // Animasi rotasi
        y: [1, -2, 1], // Animasi gerakan naik turun
      }}
      transition={{
        duration: 2, // Durasi animasi
        repeat: Infinity, // Animasi diulang terus-menerus
        repeatType: 'mirror', // Efek memantul
        ease: 'easeInOut', // Efek slow-motion
      }}
      whileHover={{
        scale: 1.5, // Efek scaling saat dihover
        rotate: 360, // Efek rotasi saat dihover
        transition: { duration: 0.5 }, // Durasi animasi saat dihover
      }}
    >
      🔥
    </motion.span>
  );
}
