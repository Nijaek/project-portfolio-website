import { useCallback, useMemo } from 'react';
import projectsData from '../data/projects.json';

const allProjects = projectsData;

const normalize = (value) => value.toLowerCase();

const matchesTags = (project, tags) => {
  if (!tags || tags.length === 0) return true;
  const projectTags = project.tags.map(normalize);
  return tags.every((tag) => projectTags.includes(normalize(tag)));
};

const matchesCategory = (project, category) => {
  if (!category) return true;
  return normalize(project.category) === normalize(category);
};

const matchesSearch = (project, term) => {
  if (!term) return true;
  const needle = term.trim().toLowerCase();
  return (
    project.title.toLowerCase().includes(needle) ||
    project.shortDescription.toLowerCase().includes(needle) ||
    project.fullDescription.toLowerCase().includes(needle)
  );
};

const sortProjects = (projects, sortField, sortDirection = 'desc') => {
  const dir = sortDirection === 'asc' ? 1 : -1;
  if (sortField === 'title') {
    return [...projects].sort((a, b) => a.title.localeCompare(b.title) * dir);
  }
  // default to date/year sort
  return [...projects].sort((a, b) => ((a.year || 0) - (b.year || 0)) * dir);
};

export const useProjects = ({ tags, category, searchTerm, sortField = 'date', sortDirection = 'desc' } = {}) => {
  const projects = useMemo(() => {
    let results = [...allProjects];
    results = results.filter(
      (project) => matchesTags(project, tags) && matchesCategory(project, category) && matchesSearch(project, searchTerm),
    );
    results = sortProjects(results, sortField, sortDirection);
    return results;
  }, [tags, category, searchTerm, sortField, sortDirection]);

  const getBySlug = useCallback(
    (slug) => allProjects.find((project) => project.slug === slug),
    [],
  );

  const allTags = useMemo(
    () => Array.from(new Set(allProjects.flatMap((project) => project.tags))).sort(),
    [],
  );

  const allCategories = useMemo(
    () => Array.from(new Set(allProjects.map((project) => project.category))).sort(),
    [],
  );

  return {
    projects,
    allProjects,
    getBySlug,
    allTags,
    allCategories,
  };
};
