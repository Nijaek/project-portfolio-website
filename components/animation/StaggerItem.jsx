'use client';

import { motion } from 'motion/react';
import { staggerItem } from '@/lib/animations';

export default function StaggerItem({ children, className = '' }) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
