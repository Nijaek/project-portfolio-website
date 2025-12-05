import { Link } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import { ProjectCard } from '../components/ProjectCard';

export function Home() {
  const { allProjects } = useProjects();
  const featured = allProjects.filter((project) => project.highlighted).slice(0, 3);
  const featuredCategories = Array.from(new Set(featured.map((project) => project.category)));

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Power Platform Engineer, Automation, & Analytics</p>
          <h1>
            Automating request workflows with <span className="gradient">clarity</span> and{' '}
            <span className="gradient">impact</span>.
          </h1>
          <p className="lede">
            Power Platform engineer focused on scaling intake, analytics, and Copilot-assisted workflows. Built
            enterprise-ready apps and automations with 90k+ internal launches and measurable cost savings.
          </p>
          <div className="cta-row">
            <Link to="/projects" className="btn download">
              View All Projects
            </Link>
            <a className="btn download" href="/resume.pdf" download>
              Download resume
            </a>
          </div>
          <div className="stats">
            <div>
              <strong>Frontend • Backend • ML</strong>
              <span>cross-discipline</span>
            </div>
          </div>
        </div>
        <div className="hero-card">
          <div className="card">
            <p className="eyebrow">About me</p>
            <h3>Nijae Ray King</h3>
            <p>Power Platform engineer automating request workflows and scaling operational analytics.</p>
            <ul>
              <li>React, JavaScript, Python, C++, C#</li>
              <li>Power Automate, Power Apps, Power BI, Copilot Studio, process automation</li>
              <li>Scrum, Agile, Waterfall, stakeholder management, requirements gathering & translation</li>
            </ul>
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
              {featuredCategories.map((cat) => (
                <span key={cat} className="chip">{cat}</span>
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
