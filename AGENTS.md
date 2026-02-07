# Repository Guidelines

## Project Structure & Module Organization
- Next.js 15 (App Router) with static export. Entry layout in `app/layout.jsx`.
- Route pages live under `app/` using file-system routing: `app/page.jsx` (Home), `app/projects/page.jsx` (Projects listing), `app/projects/[slug]/page.jsx` (Project detail).
- Reusable UI components live under `components/` in subdirectories: `layout/`, `background/`, `animation/`, `ui/`, `sections/`.
- Project data is centralized in `data/projects.json` (single source of truth, editable without touching components).
- Server-compatible data helpers are in `lib/projects.js`. Animation variants in `lib/animations.js`. Mesh simulation in `lib/mesh.js`.
- Custom hooks in `hooks/` (`useReducedMotion`, `useMousePosition`).
- Global styling uses Tailwind CSS v4 with design tokens in `app/globals.css`. Public assets (thumbnails, resume, logo) belong in `public/`.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start the Next.js dev server with hot reload.
- `npm run build` — production static export to `out/` directory.
- `npm run start` — serve the production build locally.
- `npm run lint` — run ESLint (next/core-web-vitals) across the project.

## Coding Style & Naming Conventions
- Use functional React components and hooks; keep components small and composable.
- Server components are the default. Add `'use client'` only when needed (hooks, event handlers, browser APIs).
- Prefer descriptive names: `PascalCase` for components/files, `camelCase` for variables/functions, hyphenated slugs/paths.
- Use Tailwind utility classes. Design tokens defined as `@theme inline` CSS custom properties.
- Favor semantic HTML elements and accessible attributes (aria labels, focus states).
- Animation components use `motion` (Framer Motion). Centralized variants in `lib/animations.js`.

## Testing Guidelines
- No dedicated test runner is wired yet; rely on `npm run build` and manual checks in dev server.
- Smoke-test all routes (`/`, `/projects`, `/projects/:slug`, 404) after changes.
- Verify static export produces correct files in `out/`.

## Commit & Pull Request Guidelines
- Write concise, present-tense commits (e.g., "Add project filters", "Wire project detail route").
- Pull requests should include: summary of changes, screenshots or GIFs for UI updates, and steps to validate.
- Link issues when applicable; call out breaking changes or config steps.

## Data & Content Management
- Add or edit projects only in `data/projects.json`. Required fields: `id`, `slug`, `title`, `shortDescription`, `fullDescription`, `problem`, `solution`, `architecture`, `challenges`, `results`, `tags`, `category`, `techStack`, `role`, `year`, `githubUrl`, optional `liveDemoUrl`, and `highlighted`.
- Keep slugs URL-safe (lowercase, hyphenated). Toggle `highlighted: true` to feature on the home page.
- If you add new categories or tags, ensure spelling is consistent to keep filters accurate.

## Server vs Client Components
- Server components: `app/layout.jsx`, `app/page.jsx`, `app/projects/page.jsx`, `app/projects/[slug]/page.jsx`, `Footer`
- Client components (`'use client'`): `NavBar`, `PageTransition`, `GeometricMesh`, all `animation/*`, all `sections/*`, `ProjectFilters`
