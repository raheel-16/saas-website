# New Personal Website

Minimal personal website built with React + Vite and styled with Tailwind CSS. Includes reusable components (Navbar, Hero, Features, Pricing, Testimonials, Footer) and example data.

## 🚀 Live Demo

[Click here to view the live demo](https://tourmaline-froyo-f10715.netlify.app/)

![Website screenshot](public/screenshot.png)

## Quick start

Requirements:

- Node.js 16+ / npm (macOS)

Install and run locally:

```sh
# install dependencies
npm install

# start dev server
npm run dev

# build for production
npm run build

# preview production build locally
npm run preview
```

## Project structure

- src/

  - App.jsx — main app
  - main.jsx — app entry
  - index.css — Tailwind + global styles
  - components/
    - Navbar.jsx
    - Hero.jsx
    - Features.jsx
    - Pricing.jsx
    - Testimonials.jsx
    - Footer.jsx
  - data/
    - CodeExample.js — example/demo data

- index.html — Vite HTML entry
- package.json — scripts & deps
- vite.config.js — Vite config

## Features

- Vite-powered React app for fast dev builds
- Tailwind CSS utility-first styling
- Lucide icons used across components
- Responsive layout with accessible markup

## Common tasks

- Replace placeholder assets (logo.png) in /public or import into components.
- Edit site text inside component files under src/components.
- Add or update Tailwind config in tailwind.config.js (if present).

## Deployment

Deploy to Vercel, Netlify, or any static host that supports a built SPA. Typical settings:

- Build command: npm run build
- Publish directory: dist

## Notes & tips

- Use absolute paths (e.g., `/images/...`) for public assets with Vite.
- Ensure accessibility attributes (aria-label, alt text) are set for icons and images.
- Fix any sample typos in src/data/CodeExample.js before publishing.

## Contributing

Open issues or PRs. Run tests/linting before submitting changes if configured:

```sh
npm run lint
```

## License

Add your license file (e.g., LICENSE) if you plan to publish.
