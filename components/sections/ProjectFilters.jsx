'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { motion } from 'motion/react';
import StaggerContainer from '@/components/animation/StaggerContainer';
import StaggerItem from '@/components/animation/StaggerItem';
import AnimatedCard from '@/components/ui/AnimatedCard';
import TextReveal from '@/components/animation/TextReveal';
import ProjectThumbnail from '@/components/ui/ProjectThumbnail';

export default function ProjectFilters({ projects, allTags, allCategories }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortField, setSortField] = useState('year');
  const [sortDirection, setSortDirection] = useState('desc');

  const filtered = useMemo(() => {
    let result = [...projects];

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.fullDescription.toLowerCase().includes(q),
      );
    }

    if (category) {
      result = result.filter((p) => p.category === category);
    }

    if (selectedTags.length > 0) {
      result = result.filter((p) => selectedTags.every((t) => p.tags.includes(t)));
    }

    result.sort((a, b) => {
      let cmp = 0;
      if (sortField === 'year') cmp = a.year - b.year;
      else if (sortField === 'title') cmp = b.title.localeCompare(a.title);
      return sortDirection === 'desc' ? -cmp : cmp;
    });

    return result;
  }, [projects, searchTerm, category, selectedTags, sortField, sortDirection]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setCategory('');
    setSelectedTags([]);
    setSortField('year');
    setSortDirection('desc');
  };

  const hasFilters = searchTerm || category || selectedTags.length > 0;

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <TextReveal text="All Projects" as="h1" className="mb-10 text-4xl font-bold" />

      {/* Filters */}
      <div className="mb-8 space-y-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-input-border bg-input-bg px-4 py-2.5 text-sm text-text placeholder-muted outline-none transition-colors focus:border-accent"
        />

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategory('')}
            className={clsx(
              'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
              !category
                ? 'bg-accent text-bg'
                : 'border border-line text-muted hover:border-accent/50 hover:text-text',
            )}
          >
            All
          </button>
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(category === cat ? '' : cat)}
              className={clsx(
                'rounded-full px-3 py-1.5 text-xs font-medium transition-colors',
                category === cat
                  ? 'bg-accent text-bg'
                  : 'border border-line text-muted hover:border-accent/50 hover:text-text',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tag chips */}
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={clsx(
                'rounded-full px-3 py-1 text-xs font-medium transition-colors',
                selectedTags.includes(tag)
                  ? 'bg-accent-2/20 text-accent-2 border border-accent-2/40'
                  : 'border border-line text-muted hover:border-accent-2/30 hover:text-text',
              )}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Sort + clear */}
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
            className="rounded-lg border border-input-border bg-input-bg px-3 py-1.5 text-xs text-text outline-none focus:border-accent"
          >
            <option value="year">Date</option>
            <option value="title">Title</option>
          </select>
          <button
            onClick={() => setSortDirection((d) => (d === 'desc' ? 'asc' : 'desc'))}
            className="rounded-lg border border-line px-3 py-1.5 text-xs text-muted transition-colors hover:text-text"
          >
            {sortField === 'year'
              ? sortDirection === 'desc' ? '↓ Newest' : '↑ Oldest'
              : sortDirection === 'desc' ? '↓ A–Z' : '↑ Z–A'}
          </button>
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="ml-auto text-xs text-accent hover:underline"
            >
              Clear filters
            </button>
          )}
        </div>

        <p className="text-xs text-muted">
          Showing {filtered.length} of {projects.length} projects
        </p>
      </div>

      {/* Project grid */}
      {filtered.length === 0 ? (
        <p className="py-16 text-center text-muted">
          No projects match your filters.
        </p>
      ) : (
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <StaggerItem key={project.slug}>
              <Link href={`/projects/${project.slug}`} className="block no-underline">
                <AnimatedCard className="flex h-full flex-col overflow-hidden">
                  <ProjectThumbnail thumbnail={project.thumbnail} title={project.title} />
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
                    <div className="mb-3 flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-accent/20 bg-accent/5 px-2 py-0.5 text-[10px] font-medium text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <span
                          role="link"
                          tabIndex={0}
                          className="cursor-pointer text-xs text-muted hover:text-accent"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
                          }}
                        >
                          GitHub
                        </span>
                      )}
                      {project.liveDemoUrl && (
                        <span
                          role="link"
                          tabIndex={0}
                          className="cursor-pointer text-xs text-muted hover:text-accent-2"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            window.open(project.liveDemoUrl, '_blank', 'noopener,noreferrer');
                          }}
                        >
                          Live Demo
                        </span>
                      )}
                    </div>
                  </div>
                </AnimatedCard>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </div>
  );
}
