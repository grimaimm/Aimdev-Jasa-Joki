import React from 'react';
import { motion } from 'framer-motion';

export const FireEmojiAnimation = () => {
  return (
    <motion.span
      aria-label='emoji'
      role='img'
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 15, -10, 0],
        y: [1, -2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
      }}
      whileHover={{
        scale: 1.5,
        rotate: 360,
        transition: { duration: 0.5 },
      }}
    >
      🔥
    </motion.span>
  );
};
