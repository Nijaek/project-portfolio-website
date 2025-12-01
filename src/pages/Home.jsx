import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { ProjectCard } from '../components/ProjectCard';

export function Home() {
  const { allProjects } = useProjects();
  const featured = allProjects.filter((project) => project.highlighted).slice(0, 3);
  const statsByCategory = featured.reduce((acc, project) => {
    acc[project.category] = (acc[project.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Software Engineer · Data & Systems</p>
          <h1>
            Shipping reliable products with <span className="gradient">speed</span> and{' '}
            <span className="gradient">clarity</span>.
          </h1>
          <p className="lede">
            I design and build pragmatic software — from resilient backends and observability stacks to
            polished frontends. This portfolio is data-driven: add or edit projects in one JSON file.
          </p>
          <div className="cta-row">
            <Link to="/projects" className="btn primary">
              View All Projects
            </Link>
            <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
              Download Resume
            </a>
            <a className="text-link" href="mailto:nking0306@gmail.com">
              Book a call →
            </a>
          </div>
          <div className="stats">
            <div>
              <strong>6+</strong>
              <span>showcased builds</span>
            </div>
            <div>
              <strong>Backend · ML · Frontend</strong>
              <span>cross-discipline</span>
            </div>
            <div>
              <strong>JSON-first</strong>
              <span>easy updates</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="card">
            <p className="eyebrow">About me</p>
            <h3>Nijae Ray King</h3>
            <p>Full-stack & data engineer focused on observable, scalable systems.</p>
            <ul>
              <li>React, Node, Rust, Python</li>
              <li>APIs, automation, observability</li>
              <li>Impactful portfolios & dashboards</li>
            </ul>
            <div className="chip-row">
              <span className="chip">Open to work</span>
              <span className="chip">Remote / Hybrid</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <p className="eyebrow">Stats</p>
        <h2>Snapshot</h2>
        <div className="stats stats-cards">
          <div className="card stat-card">
            <p className="label">Total projects</p>
            <h3>{allProjects.length}</h3>
          </div>
          <div className="card stat-card">
            <p className="label">Featured</p>
            <h3>{featured.length}</h3>
          </div>
          <div className="card stat-card">
            <p className="label">Categories (featured)</p>
            <div className="chip-row">
              {Object.entries(statsByCategory).map(([cat, count]) => (
                <span key={cat} className="chip">
                  {cat}: {count}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <div>
            <p className="eyebrow">Featured</p>
            <h2>Highlighted projects</h2>
            <p>Handpicked work that reflects systems thinking, polish, and measurable outcomes.</p>
          </div>
          <Link to="/projects" className="text-link">
            See all projects →
          </Link>
        </div>
        <div className="grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
