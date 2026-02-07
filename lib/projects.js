import projects from '@/data/projects.json';

export function getAllProjects() {
  return projects;
}

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}

export function getFeaturedProjects(limit = 3) {
  return projects.filter((p) => p.highlighted).slice(0, limit);
}

export function getAllSlugs() {
  return projects.map((p) => p.slug);
}

export function getAllTags() {
  const tags = new Set();
  for (const p of projects) {
    for (const t of p.tags) tags.add(t);
  }
  return [...tags].sort();
}

export function getAllCategories() {
  const cats = new Set();
  for (const p of projects) cats.add(p.category);
  return [...cats].sort();
}

export function filterProjects({ searchTerm = '', category = '', tags = [], sortField = 'year', sortDirection = 'desc' } = {}) {
  let filtered = [...projects];

  if (searchTerm) {
    const q = searchTerm.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.fullDescription.toLowerCase().includes(q),
    );
  }

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (tags.length > 0) {
    filtered = filtered.filter((p) => tags.every((t) => p.tags.includes(t)));
  }

  filtered.sort((a, b) => {
    let cmp = 0;
    if (sortField === 'year') cmp = a.year - b.year;
    else if (sortField === 'title') cmp = a.title.localeCompare(b.title);
    return sortDirection === 'desc' ? -cmp : cmp;
  });

  return filtered;
}
