'use client';

import { motion } from 'motion/react';
import { pillItem } from '@/lib/animations';

export default function TechPill({ label }) {
  return (
    <motion.span
      variants={pillItem}
      className="inline-block rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
    >
      {label}
    </motion.span>
  );
}
