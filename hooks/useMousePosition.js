'use client';

import { useState, useEffect } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: null, y: null });

  useEffect(() => {
    const handler = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return position;
}
