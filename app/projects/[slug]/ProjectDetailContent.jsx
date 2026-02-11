'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import ScrollReveal from '@/components/animation/ScrollReveal';
import StaggerContainer from '@/components/animation/StaggerContainer';
import StaggerItem from '@/components/animation/StaggerItem';
import TextReveal from '@/components/animation/TextReveal';
import AnimatedCard from '@/components/ui/AnimatedCard';
import AnimatedButton from '@/components/ui/AnimatedButton';
import GlassCard from '@/components/ui/GlassCard';
import TechPill from '@/components/ui/TechPill';
import ProjectThumbnail from '@/components/ui/ProjectThumbnail';
import { staggerContainer, fadeUp, slideInLeft, slideInRight } from '@/lib/animations';

function Section({ title, content }) {
  if (!content) return null;
  return (
    <ScrollReveal>
      <div className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-text">{title}</h2>
        <p className="leading-relaxed text-muted">{content}</p>
      </div>
    </ScrollReveal>
  );
}

export default function ProjectDetailContent({ project, related }) {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      {/* Breadcrumb */}
      <ScrollReveal>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors no-underline hover:text-accent"
        >
          &larr; Back to projects
        </Link>
      </ScrollReveal>

      {/* Header */}
      <div className="mb-10">
        <ScrollReveal>
          <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-0.5 text-xs font-medium text-accent">
              {project.category}
            </span>
            <span>{project.role}</span>
            <span>&middot;</span>
            <span>{project.year}</span>
          </div>
        </ScrollReveal>

        <TextReveal
          text={project.title}
          as="h1"
          className="mb-4 text-4xl font-bold sm:text-5xl"
        />

        <ScrollReveal>
          <p className="text-lg text-muted">{project.shortDescription}</p>
        </ScrollReveal>

        {/* Links */}
        <StaggerContainer className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl && (
            <StaggerItem>
              <AnimatedButton
                href={project.githubUrl}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </AnimatedButton>
            </StaggerItem>
          )}
          {project.liveDemoUrl && (
            <StaggerItem>
              <AnimatedButton
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </AnimatedButton>
            </StaggerItem>
          )}
        </StaggerContainer>
      </div>

      {/* Thumbnail */}
      <ScrollReveal className="mb-10">
        <ProjectThumbnail thumbnail={project.thumbnail} title={project.title} variant="detail" />
      </ScrollReveal>

      {/* Tech stack */}
      <ScrollReveal className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-text">Tech Stack</h2>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {project.techStack.map((tech) => (
            <TechPill key={tech} label={tech} />
          ))}
        </motion.div>
      </ScrollReveal>

      {/* Content sections */}
      <Section title="Overview" content={project.fullDescription} />
      <Section title="Problem" content={project.problem} />
      <Section title="Solution" content={project.solution} />
      <Section title="Architecture" content={project.architecture} />
      <Section title="Challenges" content={project.challenges} />
      <Section title="Results" content={project.results} />

      {/* Related projects */}
      {related.length > 0 && (
        <div className="mt-16 border-t border-line pt-12">
          <TextReveal
            text="Related Projects"
            as="h2"
            className="mb-8 text-2xl font-bold"
          />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((rp) => (
              <StaggerItem key={rp.slug}>
                <Link href={`/projects/${rp.slug}`} className="block no-underline">
                  <AnimatedCard className="p-5">
                    <div className="mb-2 text-xs text-muted">
                      {rp.category} &middot; {rp.year}
                    </div>
                    <h3 className="mb-2 font-semibold text-text">{rp.title}</h3>
                    <p className="text-sm text-muted">{rp.shortDescription}</p>
                  </AnimatedCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      )}
    </div>
  );
}
