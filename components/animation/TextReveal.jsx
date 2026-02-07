'use client';

import { motion } from 'motion/react';
import { staggerContainer, wordReveal } from '@/lib/animations';

export default function TextReveal({ text, as: Tag = 'h1', className = '' }) {
  const words = text.split(' ');

  return (
    <Tag className={className}>
      <motion.span
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="inline"
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordReveal}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
