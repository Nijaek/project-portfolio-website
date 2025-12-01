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

const sortProjects = (projects, sortKey) => {
  if (sortKey === 'date') {
    return [...projects].sort((a, b) => (b.year || 0) - (a.year || 0));
  }
  if (sortKey === 'title') {
    return [...projects].sort((a, b) => a.title.localeCompare(b.title));
  }
  return projects;
};

export const useProjects = ({ tags, category, searchTerm, sortBy } = {}) => {
  const projects = useMemo(() => {
    let results = [...allProjects];
    results = results.filter(
      (project) => matchesTags(project, tags) && matchesCategory(project, category) && matchesSearch(project, searchTerm),
    );
    results = sortProjects(results, sortBy);
    return results;
  }, [tags, category, searchTerm, sortBy]);

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
