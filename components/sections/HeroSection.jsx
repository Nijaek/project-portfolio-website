'use client';

import Link from 'next/link';
import TextReveal from '@/components/animation/TextReveal';
import ScrollReveal from '@/components/animation/ScrollReveal';
import StaggerContainer from '@/components/animation/StaggerContainer';
import StaggerItem from '@/components/animation/StaggerItem';
import ParallaxLayer from '@/components/animation/ParallaxLayer';
import GlassCard from '@/components/ui/GlassCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import GradientText from '@/components/ui/GradientText';
import TechPill from '@/components/ui/TechPill';
import { staggerContainer } from '@/lib/animations';
import { motion } from 'motion/react';

const skills = [
  'React', 'Next.js', 'TypeScript', 'Python', 'Node.js', 'Tailwind CSS',
  'PostgreSQL', 'Redis', 'Canvas API', 'Machine Learning',
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col justify-center">
          <ParallaxLayer speed={0.15}>
            <TextReveal
              text="Building Fast, Reliable Solutions"
              as="h1"
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            />
          </ParallaxLayer>

          <ScrollReveal className="mt-6">
            <p className="max-w-lg text-lg text-muted">
              Hi, I&apos;m <GradientText>Nijae King</GradientText> — a software engineer
              who builds things people actually enjoy using.
            </p>
          </ScrollReveal>

          <StaggerContainer className="mt-8 flex flex-wrap gap-3">
            <StaggerItem>
              <AnimatedButton href="/projects">View Projects</AnimatedButton>
            </StaggerItem>
            <StaggerItem>
              <AnimatedButton href="https://github.com/Nijaek" variant="ghost" target="_blank" rel="noopener noreferrer">
                GitHub
              </AnimatedButton>
            </StaggerItem>
            <StaggerItem>
              <AnimatedButton href="/resume.pdf" variant="ghost" target="_blank" rel="noopener noreferrer">
                Resume
              </AnimatedButton>
            </StaggerItem>
          </StaggerContainer>
        </div>

        {/* Right column */}
        <ParallaxLayer speed={0.1} className="flex items-center">
          <ScrollReveal className="w-full">
            <GlassCard>
              <h2 className="mb-1 text-xl font-semibold text-text">About Me</h2>
              <p className="mb-5 text-sm text-muted">
                Full-stack developer focused on building clean, data-driven tools — from
                interactive visualizers and real-time games to security analysis platforms.
              </p>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted">
                Tech Stack
              </h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((s) => (
                  <TechPill key={s} label={s} />
                ))}
              </motion.div>
            </GlassCard>
          </ScrollReveal>
        </ParallaxLayer>
      </div>
    </section>
  );
}
