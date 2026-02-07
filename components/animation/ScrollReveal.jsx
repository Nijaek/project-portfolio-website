'use client';

import { motion } from 'motion/react';
import { fadeUp } from '@/lib/animations';

export default function ScrollReveal({ children, variants = fadeUp, className = '' }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
