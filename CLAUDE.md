# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev           # Start dev server
pnpm build         # Build site (runs prebuild + astro build)
pnpm preview       # Preview built site locally
pnpm lint          # Run ESLint
pnpm lint:fix      # Auto-fix lint issues
pnpm format        # Format with Prettier
pnpm format:check  # Check formatting without writing
pnpm new <title>   # Scaffold a new blog post
```

No test suite is configured.

## Architecture

**Astro 5 static site** deployed to Netlify. Polish-language blog for ELFA Publikacje (DTP/publishing services company). Forked from the [astro-chiri](https://github.com/the3ash/astro-chiri) theme.

### Key directories

- `src/pages/` — Astro file-based routing. `index.astro` (homepage), `oferta.astro` (services), `realizacje.astro` (portfolio), `blog/[...slug].astro` (dynamic post route)
- `src/content/posts/` — Markdown blog posts. Drafts are prefixed with `_` and filtered at build time
- `src/layouts/` — `BaseLayout`, `PostLayout`, `IndexLayout`
- `src/components/` — Split into `layout/`, `ui/`, `widgets/`, `examples/`
- `src/plugins/` — Custom remark/rehype plugins (reading time, TOC, image processing, media embeds, copy code)
- `src/config.ts` — Central theme config: site metadata, layout options, feature flags
- `src/content.config.ts` — Content collection schema (Zod)
- `scripts/` — TypeScript build scripts (`new-post.ts`, `toggle-proxy.ts`, `update-theme.ts`)

### Content

Blog post frontmatter schema (defined in `src/content.config.ts`):
```yaml
---
title: 'Post Title'      # required
pubDate: '2025-09-04'    # required
image: 'thumbnail.jpg'   # optional
---
```

Post assets (images) live in `src/content/posts/_assets/`.

### Markdown pipeline

`astro.config.ts` wires up:
- `remark-math` + `rehype-katex` — LaTeX equations
- `remark-directive` — custom block syntax
- Custom plugins: `remarkEmbeddedMedia`, `remarkReadingTime`, `remarkTOC`, `rehypeImageProcessor`, `rehypeCopyCode`, `rehypeCleanup`

### Path alias

`@/` resolves to `src/` (configured in both `tsconfig.json` and Vite).

### Deployment

Netlify adapter (`@astrojs/netlify`). Config in `netlify.toml`: build output to `dist/`, long-cache headers for static assets, 24h cache for blog posts, security headers (CSP, X-Frame-Options, etc.), pretty URLs enabled.

A `prebuild` script (`toggle-proxy.ts`) runs before `astro build` to enable/disable the link card proxy serverless function.
