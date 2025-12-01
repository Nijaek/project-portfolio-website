# React Portfolio

Modern, data-driven portfolio site for a software engineer. Projects, tags, and categories are defined in one JSON file so you can add or edit entries without touching React components.

## Getting Started
```bash
npm install
npm run dev   # start Vite dev server
npm run build # production build
npm run preview # serve the built site
```

## Project Structure
- `src/App.jsx` — routes and layout shell
- `src/pages/` — `Home`, `Projects`, `ProjectDetail`
- `src/components/` — UI building blocks (nav, footer, cards)
- `src/data/projects.json` — single source of truth for all project content
- `src/hooks/useProjects.js` — filtering, search, and sorting helpers
- `src/App.css` & `src/index.css` — global styles and theme tokens
- `public/` — static assets (add `resume.pdf` here)

## Editing / Adding Projects
Update `src/data/projects.json`. Each project supports:
- `id`, `slug`, `title`, `year`
- `shortDescription`, `fullDescription`
- `problem`, `solution`, `architecture`, `challenges`, `results`
- `tags` (array), `category`, `techStack` (array), `role`
- `githubUrl`, optional `liveDemoUrl`, `highlighted` (bool)

Rules:
- Keep `slug` lowercase and hyphenated for clean URLs.
- Set `highlighted: true` to feature on the home page.
- Consistent spelling for `category`/`tags` keeps filters working.

## Filters, Tags, and Categories
- Multi-select tag chips and a category pill bar filter the projects list.
- Text search checks title and descriptions.
- Sorting options: date (newest) or title (A–Z).
- Filters combine client-side; clear all with the “Clear filters” button.

## Deployment
- Build: `npm run build` produces `dist/`.
- Deploy options:
  - **Netlify**: drag-drop `dist/` or connect repo; set build command `npm run build` and publish directory `dist`.
  - **Vercel**: import repo; framework “Vite”; build command `npm run build`; output `dist`.
  - **GitHub Pages**: `npm run build` then serve `dist` with a static host (e.g., `gh-pages` branch via an action).

## Notes
- Add your `public/resume.pdf` and adjust social links in `src/components/NavBar.jsx` and `src/components/Footer.jsx`.
- Run `npm run build` before sharing links to confirm routing and data changes render correctly.
