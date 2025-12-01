# Repository Guidelines

## Project Structure & Module Organization
- React + Vite app with routing in `src/App.jsx` and entry in `src/main.jsx`.
- UI pieces live under `src/components/`; route-level screens under `src/pages/`.
- Project data is centralized in `src/data/projects.json` (single source of truth, editable without touching React).
- Reusable data helpers are in `src/hooks/useProjects.js` (filters, search, sort).
- Global styling is in `src/App.css` and `src/index.css`. Public assets (favicons, resume file) belong in `public/`.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start the Vite dev server with hot reload.
- `npm run build` — production build; also the quickest sanity check before pushing.
- `npm run preview` — serve the production build locally.
- `npm run lint` — run ESLint across the project; fix warnings before commits.

## Coding Style & Naming Conventions
- Use functional React components and hooks; keep components small and composable.
- Prefer descriptive names: `PascalCase` for components/files, `camelCase` for variables/functions, hyphenated slugs/paths.
- Keep layout/content props explicit; avoid implicit globals. Co-locate component-specific styles or use existing utility classes.
- Favor semantic HTML elements and accessible attributes (aria labels, focus states).
- Follow the light-theme tokens in `App.css`; optional dark mode via `[data-theme='dark']` token overrides.

## Testing Guidelines
- No dedicated test runner is wired yet; rely on `npm run build` and manual checks in dev server.
- When adding tests, align file names with the component (e.g., `ComponentName.test.jsx`) and keep them near the source.
- Smoke-test routing (`/`, `/projects`, `/projects/:slug`) after data changes to ensure slugs resolve.

## Commit & Pull Request Guidelines
- Write concise, present-tense commits (e.g., "Add project filters", "Wire project detail route").
- Pull requests should include: summary of changes, screenshots or GIFs for UI updates, and steps to validate (`npm run build` or key user flows).
- Link issues when applicable; call out breaking changes or config steps (e.g., adding `public/resume.pdf`).

## Data & Content Management
- Add or edit projects only in `src/data/projects.json`. Required fields: `id`, `slug`, `title`, `shortDescription`, `fullDescription`, `problem`, `solution`, `architecture`, `challenges`, `results`, `tags`, `category`, `techStack`, `role`, `year`, `githubUrl`, optional `liveDemoUrl`, and `highlighted`.
- Keep slugs URL-safe (lowercase, hyphenated). Toggle `highlighted: true` to feature on the home page.
- If you add new categories or tags, ensure spelling is consistent to keep filters accurate. Filters support multi-tag selection and category pills; sorting supports date and title.
