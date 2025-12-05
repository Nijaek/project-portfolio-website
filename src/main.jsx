import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { DEFAULT_THEME, SHOW_THEME_TOGGLE } from './config/themeConfig';

const persistedTheme =
  SHOW_THEME_TOGGLE && typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
const defaultTheme = persistedTheme || DEFAULT_THEME;
document.documentElement.setAttribute('data-theme', defaultTheme);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
