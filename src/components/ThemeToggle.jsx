import { useEffect, useState } from 'react';
import { DEFAULT_THEME, SHOW_THEME_TOGGLE } from '../config/themeConfig';

export function ThemeToggle() {
  if (!SHOW_THEME_TOGGLE) return null;

  const [theme, setTheme] = useState(
    document.documentElement.getAttribute('data-theme') || DEFAULT_THEME,
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  return (
    <button
      type="button"
      className="theme-toggle-floating"
      onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
      aria-label="Toggle color theme"
    >
      {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}
