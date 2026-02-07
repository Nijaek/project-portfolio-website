'use client';

import { motion } from 'motion/react';
import { cardHover } from '@/lib/animations';
import clsx from 'clsx';

export default function AnimatedCard({ children, className = '', ...props }) {
  return (
    <motion.div
      whileHover={cardHover}
      className={clsx(
        'rounded-2xl border border-white/10 bg-bg-panel/80 backdrop-blur-sm transition-colors',
        className,
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
