# React Project Portfolio

Modern, data-driven portfolio site built for myself but flexible enough for any software engineer. Projects, tags, and categories are defined in one JSON file so you can add or edit entries without touching React components.

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
- `src/data/projects.json` - single source of truth for all project content
- `src/hooks/useProjects.js` - filtering, search, and sorting helpers
- `src/App.css` & `src/index.css` - global styles and theme tokens
- `public/` - static assets (add `resume.pdf` and your `logo.png` here)

## Editing / Adding Projects
Update `src/data/projects.json`. Each project supports:
- `id`, `slug`, `title`, `year`
- `shortDescription`, `fullDescription`
- `problem`, `solution`, `architecture`, `challenges`, `results`
- `tags` (array), `category`, `techStack` (array), `role`
- `githubUrl`, optional `liveDemoUrl`, `highlighted` (bool)
- optional `thumbnail` (string path/URL)

Rules:
- Keep `slug` lowercase and hyphenated for clean URLs.
- Set `highlighted: true` to feature on the home page.
- Consistent spelling for `category`/`tags` keeps filters working.

## Project Data Schema
- Required fields: `id`, `slug`, `title`, `shortDescription`, `fullDescription`, `problem`, `solution`, `architecture`, `challenges`, `results`, `tags` (array of strings), `category`, `techStack` (array of strings), `role`, `year` (number), `githubUrl` (string), `highlighted` (boolean).
- Optional fields: `liveDemoUrl` (string; use empty string if none), `thumbnail` (string path/URL; shown on cards if provided).
- Slugs must be URL-safe (lowercase, hyphenated). `highlighted: true` surfaces the project on the home page.

Example entry:
```json
{
  "id": "p1",
  "slug": "smart-sprint-analytics",
  "title": "Smart Sprint Analytics",
  "shortDescription": "Analytics pipeline that turns Jira exports into delivery and quality dashboards.",
  "fullDescription": "Built a small data platform that ingests Jira exports, normalizes epics and stories, and publishes velocity, quality, and cycle-time dashboards. Added alerting for scope creep and regression warnings that reduced schedule misses.",
  "problem": "Teams lacked trustworthy delivery signals across multiple backlogs, causing schedule slips and unclear priorities.",
  "solution": "Automated ingestion of Jira exports, consistent epic/story taxonomy, and dashboards with trend lines and anomaly alerts.",
  "architecture": "Node ETL -> PostgreSQL warehouse -> Superset dashboards; event-driven refresh using lightweight cron workers.",
  "challenges": "Normalizing inconsistent labels and epics across teams; tuning alert thresholds to avoid noise.",
  "results": "Cut unplanned scope by 18% and improved sprint predictability; dashboards adopted by 4 squads.",
  "tags": ["Data", "Visualization", "Backend"],
  "category": "Backend",
  "techStack": ["TypeScript", "Node.js", "PostgreSQL", "Superset", "Docker"],
  "role": "Solo",
  "year": 2025,
  "githubUrl": "https://github.com/example/smart-sprint-analytics",
  "liveDemoUrl": "https://example.com/sprint-analytics",
  "thumbnail": "/thumbnails/smart-sprint-analytics.jpg",
  "highlighted": true
}
```

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
- Add your `public/resume.pdf`, your logo at `public/logo.png`, and adjust social links in `src/components/NavBar.jsx` and `src/components/Footer.jsx`.
- Run `npm run build` before sharing links to confirm routing and data changes render correctly.
