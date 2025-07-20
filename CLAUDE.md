# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based personal blog/website starter template configured for deployment on Cloudflare Workers. It uses the Astro static site generator with TypeScript and content collections for blog management.

## Development Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start development server at localhost:4321 |
| `npm run build` | Build production site to ./dist/ |
| `npm run preview` | Build and preview with Wrangler dev server |
| `npm run check` | Full validation: build + TypeScript check + dry-run deploy |
| `npm run deploy` | Deploy to Cloudflare Workers |
| `npm run cf-typegen` | Generate Cloudflare Worker types |

## Architecture

### Content Management
- Blog posts are managed through Astro's content collections in `src/content/blog/`
- Content schema defined in `src/content.config.ts` with Zod validation
- Supports both Markdown (.md) and MDX (.mdx) files
- Frontmatter schema includes title, description, pubDate, updatedDate, and heroImage

### Routing & Pages
- File-based routing with pages in `src/pages/`
- Dynamic blog post routing via `src/pages/blog/[...slug].astro`
- RSS feed generation at `/rss.xml` via `src/pages/rss.xml.js`
- Static generation for all blog posts using `getStaticPaths()`

### Layouts & Components
- Default layout: `src/layouts/Default.astro`
- Reusable components in `src/components/`
- Global site constants in `src/consts.ts`

### Deployment
- Configured for Cloudflare Workers via `@astrojs/cloudflare` adapter
- Wrangler configuration in `wrangler.json`
- Static assets served from `./dist` directory
- Platform proxy enabled for local development

### TypeScript Configuration
- Strict TypeScript configuration extending `astro/tsconfigs/strict`
- Cloudflare Worker types included via `worker-configuration.d.ts`
- Type safety for content collections and frontmatter

## Key Patterns

### Adding Blog Posts
1. Create new `.md` or `.mdx` file in `src/content/blog/`
2. Include required frontmatter: title, description, pubDate
3. Posts automatically appear in blog index and RSS feed

### Content Validation
- All blog post frontmatter is validated against the Zod schema
- Use `getCollection('blog')` to retrieve type-safe blog posts
- Schema ensures consistent data structure across all posts

### Cloudflare Integration
- Uses Cloudflare Workers for serverless deployment
- Assets binding configured for static file serving
- Observability and source maps enabled for production debugging
