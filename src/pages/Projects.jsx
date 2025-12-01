import { useMemo, useState } from 'react';
import { useProjects } from '../hooks/useProjects';
import { ProjectCard } from '../components/ProjectCard';

export function Projects() {
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');

  const { projects, allTags, allCategories } = useProjects({
    tags: selectedTags.length ? selectedTags : undefined,
    category: selectedCategory !== 'All' ? selectedCategory : undefined,
    searchTerm: searchTerm || undefined,
    sortBy,
  });

  const tags = useMemo(() => allTags, [allTags]);
  const categories = useMemo(() => ['All', ...allCategories], [allCategories]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  return (
    <div className="page">
      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Work</p>
            <h1>Projects</h1>
            <p>Filter by category, tag, or search to find the most relevant examples.</p>
          </div>
          <button
            className="btn ghost"
            type="button"
            onClick={() => {
              setSelectedTags([]);
              setSelectedCategory('All');
              setSearchTerm('');
              setSortBy('date');
            }}
          >
            Clear filters
          </button>
        </div>

        <div className="filters">
          <div className="filter-row">
            <div className="filter-group">
              <span>Search</span>
              <input
                type="search"
                placeholder="Search title or description..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-group narrow">
              <span>Sort</span>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="date">Date (newest)</option>
                <option value="title">Title (A-Z)</option>
              </select>
            </div>
          </div>

          <div className="filter-row">
            <div className="filter-group">
              <span>Category</span>
              <div className="pill-row">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`pill ${selectedCategory === category ? 'pill-active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <span>Tags</span>
              <div className="pill-row">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    className={`pill ${selectedTags.includes(tag) ? 'pill-active' : ''}`}
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="result-meta">
          <p className="result-count">
            Showing {projects.length} project{projects.length !== 1 ? 's' : ''}
          </p>
          <div className="stats-inline">
            <span>Total: {projects.length}</span>
            <span>Categories: {allCategories.length}</span>
            <span>Tags: {allTags.length}</span>
          </div>
        </div>

        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
