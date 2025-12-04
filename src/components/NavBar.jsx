import { Link, NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  `nav-link ${isActive ? 'nav-link-active' : ''}`;

export function NavBar() {
  const showBrandName = true;

  return (
    <header className="nav-shell">
      <div className="nav-branding">
        <Link to="/" className={`brand-mark ${showBrandName ? '' : 'logo-only'}`}>
          <img src="/logo.png" alt="Nijae King logo" className="brand-logo" />
          {showBrandName && <span className="brand-text">Nijae King</span>}
        </Link>
        <div className="brand-meta">
          <p>Software Engineer</p>
          <span>Building fast, reliable solutions</span>
        </div>
      </div>
      <nav className="nav-menu">
        <NavLink to="/" className={navLinkClass} end>
          Home
        </NavLink>
        <NavLink to="/projects" className={navLinkClass}>
          Projects
        </NavLink>
        <a className="nav-link nav-link-cta" href="mailto:nking0306@gmail.com">
          Contact
        </a>
      </nav>
    </header>
  );
}
