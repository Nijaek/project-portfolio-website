import { Link, NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  `nav-link ${isActive ? 'nav-link-active' : ''}`;

export function NavBar() {
  return (
    <header className="nav-shell">
      <div className="nav-branding">
        <Link to="/" className="brand-mark">
          <span className="brand-dot" />
          <span className="brand-text">NRK</span>
        </Link>
        <div className="brand-meta">
          <p>Software Engineer</p>
          <span>Building fast, reliable systems</span>
        </div>
      </div>
      <nav className="nav-menu">
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>
        <a className="nav-link" href="/resume.pdf" target="_blank" rel="noreferrer">
          Resume
        </a>
        <a className="nav-link nav-link-cta" href="mailto:nking0306@gmail.com">
          Contact
        </a>
      </nav>
    </header>
  );
}
