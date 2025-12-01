import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

const persistedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
const defaultTheme = persistedTheme || 'light';
document.documentElement.setAttribute('data-theme', defaultTheme);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
