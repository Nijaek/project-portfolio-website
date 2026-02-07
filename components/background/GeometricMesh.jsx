'use client';

import { useRef, useEffect, useCallback } from 'react';
import { createNodes, updateNodes, renderMesh } from '@/lib/mesh';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export default function GeometricMesh() {
  const canvasRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const rafRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const getNodeCount = useCallback(() => {
    if (typeof window === 'undefined') return 60;
    return window.innerWidth < 768 ? 30 : 80;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      nodesRef.current = createNodes(getNodeCount(), window.innerWidth, window.innerHeight);
    };

    resize();

    // Render one static frame if reduced motion
    if (reducedMotion) {
      renderMesh(ctx, nodesRef.current, window.innerWidth, window.innerHeight);
      window.addEventListener('resize', resize);
      return () => window.removeEventListener('resize', resize);
    }

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('resize', resize);

    const animate = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      updateNodes(nodesRef.current, w, h, mouseRef.current);
      renderMesh(ctx, nodesRef.current, w, h);
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, [reducedMotion, getNodeCount]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
