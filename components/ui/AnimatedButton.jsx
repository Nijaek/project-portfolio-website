'use client';

import { motion } from 'motion/react';
import clsx from 'clsx';

export default function AnimatedButton({ children, variant = 'primary', href, className = '', ...props }) {
  const base =
    'inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors no-underline';
  const variants = {
    primary: 'bg-accent text-bg hover:bg-accent/90',
    ghost: 'border border-line text-text hover:border-accent/50 hover:text-accent',
  };

  const motionProps = {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.97 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        className={clsx(base, variants[variant], className)}
        {...motionProps}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={clsx(base, variants[variant], className)}
      {...motionProps}
      {...props}
    >
      {children}
    </motion.button>
  );
}
