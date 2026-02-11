# Portfolio — nijae.dev

Modern portfolio built with Next.js 15, Tailwind CSS v4, and Framer Motion. Features a geometric mesh background animation, scroll-triggered animations, and statically exported pages.

## Getting Started
```bash
npm install
npm run dev    # start Next.js dev server
npm run build  # static export to out/
npm run start  # serve the built site
```

## Project Structure
- `app/` — Next.js App Router pages and layout
- `components/` — UI building blocks organized by role
  - `layout/` — NavBar, Footer, PageTransition
  - `background/` — GeometricMesh canvas animation
  - `animation/` — ScrollReveal, TextReveal, CountUp, etc.
  - `ui/` — AnimatedCard, AnimatedButton, GlassCard, etc.
  - `sections/` — HeroSection, StatsSection, FeaturedProjects, ProjectFilters
- `lib/` — Data access, animation variants, mesh simulation
- `hooks/` — Custom React hooks
- `data/projects.json` — Single source of truth for all project content
- `public/` — Static assets (thumbnails, resume, logo)

## Editing / Adding Projects
Update `data/projects.json`. Each project supports:
- `id`, `slug`, `title`, `year`
- `shortDescription`, `fullDescription`
- `problem`, `solution`, `architecture`, `challenges`, `results`
- `tags` (array), `category`, `techStack` (array), `role`
- `githubUrl`, optional `liveDemoUrl`, `highlighted` (bool)
- optional `thumbnail` (string path)

Rules:
- Keep `slug` lowercase and hyphenated for clean URLs.
- Set `highlighted: true` to feature on the home page.
- Consistent spelling for `category`/`tags` keeps filters working.

## Deployment
- `npm run build` produces a static `out/` directory.
- Deploy to any static host: Netlify, Vercel, GitHub Pages, etc.
- Set build command to `npm run build` and publish directory to `out`.

## Notes
- Add your `public/resume.pdf` and `public/logo.png`.
- The geometric mesh background renders ~80 nodes on desktop, ~30 on mobile.
- All animations respect `prefers-reduced-motion`.
- Run `npm run build` before pushing to confirm all routes export correctly.

## License

[MIT](LICENSE)
