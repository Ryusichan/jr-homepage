# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JR-Homepage is a Korean-language portfolio/service website for "Pluton" (a web development agency). Built with Next.js 12 (Pages Router), React 17, TypeScript, Material-UI 5, and styled-components 5.

## Commands

- `yarn dev` — Start development server (Next.js dev mode)
- `yarn build` — Production build
- `yarn start` — Start production server
- `yarn lint` — Run ESLint (next/core-web-vitals config)

No test framework is configured.

## Architecture

### Styling (dual system)

Components use **both** MUI and styled-components together. MUI provides layout primitives (`Stack`, `Box`, `Typography`) and pre-built components, while styled-components handles custom styling and responsive media queries. The MUI theme is configured in `theme/` with a custom palette (primary: `#7162D7` purple, secondary: `#2E458D`), typography, breakpoints, and per-component overrides in `theme/overrides/`.

Global fonts (S-CoreDream Korean font family) are loaded in `styles/globals.css`.

### Page structure

Pages live in `pages/` using Next.js Pages Router. Each page wraps content in the `Seo` component for meta tags. The app shell (`pages/_app.tsx`) provides the MUI theme, AOS (Animate on Scroll) initialization, the `Appbar` navigation, `Footer`, and a loading state.

### Component organization

- `components/main/` — Homepage sections (hero, process tabs, portfolio gallery, project grid)
- `components/whypluton/` — "Why Pluton" page sections
- `components/UI/` — Reusable presentational components (containers, tab content, portfolio card layouts)
- `layout/popollayout/` — Layout components for portfolio detail pages ("Popol" pages)
- `components/library/menu.ts` — Portfolio gallery category/menu data

### Portfolio detail pages ("Popol")

Portfolio case studies live under `pages/portfolio/website/` and use a set of dedicated layout components from `layout/popollayout/` (title, date, content sections, web/mobile view showcases). These share a consistent structure via `PopolTitleContentLayout`, `PopolMainViewContent`, etc.

### Animations

Scroll-triggered animations use the AOS library. Components apply `data-aos` attributes (e.g., `data-aos="zoom-out"`) for entrance effects. AOS is initialized once in `components/utils/AOSINIT.tsx`.

### External assets

Images are served from both `/public/images/` and an AWS S3 bucket (`pluton-imageres.s3.ap-northeast-2.amazonaws.com`). Both domains are allowlisted in `next.config.js` for `next/image`.

## Key Configuration

- **next.config.js**: SWC minification, styled-components compiler plugin, image domains
- **tsconfig.json**: Strict mode, ES5 target, no path aliases configured
- **No .env files**: All configuration is currently hardcoded
