import { Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { SHOW_THEME_TOGGLE } from './config/themeConfig';

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route
            path="*"
            element={
              <div className="page">
                <section className="section">
                  <h1>Page not found</h1>
                  <p>Try visiting the projects page instead.</p>
                </section>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
      {SHOW_THEME_TOGGLE && <ThemeToggle />}
    </div>
  );
}

export default App;
