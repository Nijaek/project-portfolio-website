import { Link } from 'react-router-dom';

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.thumbnail && (
        <div className="project-thumb">
          <img src={project.thumbnail} alt={`${project.title} thumbnail`} loading="lazy" />
        </div>
      )}
      <div className="project-meta">
        <div className="project-year">{project.year}</div>
        <div className="project-category">{project.category}</div>
      </div>
      <div className="project-body">
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="tech-row">
          {project.techStack.slice(0, 4).map((tech) => (
            <span className="pill pill-ghost" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="project-actions">
        <Link to={`/projects/${project.slug}`} className="btn ghost">
          Details
        </Link>
        <div className="action-links">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
          {project.liveDemoUrl && (
            <>
              <span className="divider">·</span>
              <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">
                Live
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  );
}
