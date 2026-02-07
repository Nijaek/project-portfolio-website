'use client';

import Link from 'next/link';
import TextReveal from '@/components/animation/TextReveal';
import StaggerContainer from '@/components/animation/StaggerContainer';
import StaggerItem from '@/components/animation/StaggerItem';
import AnimatedCard from '@/components/ui/AnimatedCard';
import TechPill from '@/components/ui/TechPill';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { motion, staggerContainer } from '@/lib/animations';

export default function FeaturedProjects({ projects }) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <TextReveal
          text="Featured Projects"
          as="h2"
          className="mb-10 text-3xl font-bold"
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="block no-underline">
                <AnimatedCard className="flex h-full flex-col overflow-hidden">
                  {project.thumbnail && (
                    <div className="relative aspect-video w-full overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="mb-2 flex items-center gap-2 text-xs text-muted">
                      <span>{project.category}</span>
                      <span>&middot;</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-text">
                      {project.title}
                    </h3>
                    <p className="mb-4 flex-1 text-sm text-muted">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-accent/20 bg-accent/5 px-2 py-0.5 text-[10px] font-medium text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-10 text-center">
          <AnimatedButton href="/projects" variant="ghost">
            View All Projects
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
