# Chesapeake Trivia Site

Astro static site for Chesapeake Trivia.

## Editing Map

- `src/pages/index.astro` composes the homepage sections in order.
- `src/layouts/BaseLayout.astro` owns the document shell, metadata, fonts, favicon links, and global CSS import.
- `src/components/` contains the editable page sections.
- `src/data/site.ts` contains shared copy, links, image URLs, feature lists, leaderboard data, and form options.
- `src/styles/global.css` contains Tailwind, design tokens, textures, animations, and global utilities.

## Commands

```sh
npm install
npm run dev
npm run build
npm run preview
```

This project currently requires Node `>=22.12.0`, matching the installed Astro version.

## Deployment

This site deploys to GitHub Pages from `.github/workflows/deploy.yml`.

- Production URL: `https://chesapeaketrivia.com`
- Custom domain file: `public/CNAME`
- GitHub Pages source should be set to **GitHub Actions** in the repository settings.

For the apex domain, point DNS at GitHub Pages and configure the custom domain in the repository Pages settings.
