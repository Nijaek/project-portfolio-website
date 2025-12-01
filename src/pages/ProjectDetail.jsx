import { Link, useParams } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { ProjectCard } from '../components/ProjectCard';

export function ProjectDetail() {
  const { slug } = useParams();
  const { getBySlug, allProjects } = useProjects();
  const project = getBySlug(slug);

  if (!project) {
    return (
      <div className="page">
        <section className="section">
          <h1>Project not found</h1>
          <p>Please check the URL or browse the catalog.</p>
          <Link className="btn primary" to="/projects">
            Back to projects
          </Link>
        </section>
      </div>
    );
  }

  const related = allProjects
    .filter((p) => p.id !== project.id && (p.category === project.category || p.tags.some((t) => project.tags.includes(t))))
    .slice(0, 3);

  return (
    <div className="page">
      <section className="section">
        <div className="breadcrumb-row">
          <Link to="/projects" className="text-link">
            ← Back to projects
          </Link>
          <span className="crumb-divider">/</span>
          <span className="crumb-current">{project.title}</span>
        </div>
        <p className="eyebrow">
          {project.category} · {project.role}
        </p>
        <h1>{project.title}</h1>
        <p className="lede">{project.shortDescription}</p>

        <div className="detail-meta">
          <div>
            <span className="label">Year</span>
            <p>{project.year}</p>
          </div>
          <div>
            <span className="label">Tech stack</span>
            <div className="pill-row">
              {project.techStack.map((tech) => (
                <span className="pill pill-ghost" key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <div>
            <span className="label">Links</span>
            <div className="action-links">
              <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
              {project.liveDemoUrl && (
                <>
                  <span className="divider">·</span>
                  <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">Live demo</a>
                </>
              )}
            </div>
          </div>
        </div>

        <article className="detail-body">
          <p>{project.fullDescription}</p>
          <div className="detail-grid">
            <div>
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </div>
            <div>
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </div>
            <div>
              <h3>Architecture / Approach</h3>
              <p>{project.architecture}</p>
            </div>
            <div>
              <h3>Challenges</h3>
              <p>{project.challenges}</p>
            </div>
            <div>
              <h3>Results</h3>
              <p>{project.results}</p>
            </div>
          </div>
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>{tag}</span>
            ))}
          </div>
        </article>
      </section>

      {related.length > 0 && (
        <section className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Related</p>
              <h2>More in this space</h2>
            </div>
            <Link to="/projects" className="text-link">Browse all →</Link>
          </div>
          <div className="grid">
            {related.map((item) => (
              <ProjectCard key={item.id} project={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
