# Agents Towards Production — Frontend

A small static site that lists the tutorials in this repository, with search and category filters. Each card links to the tutorial's folder on GitHub.

Built with React, TypeScript and Vite.

## Requirements

Node.js `^20.19.0 || >=22.12.0` (required by Vite 8).

## Commands

```bash
npm install      # install dependencies
npm run dev      # start the dev server with hot reload
npm run build    # type-check and build to dist/
npm run preview  # serve the production build locally
npm run lint     # lint with oxlint
```

## Adding a tutorial

Add an entry to `src/tutorials.ts` with the folder name (`slug`), a title, a one-line description and a category.

## Deploying

`dist/` is a fully static build with relative asset paths (`base: './'` in `vite.config.ts`), so it can be served from a domain root or a sub-path such as GitHub Pages.
