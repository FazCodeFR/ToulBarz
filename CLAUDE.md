# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ToulBarz is the website for a street workout association in Toulouse, France. It's a Vue 3 app pre-rendered to static HTML via **vite-ssg** (SSG), with TypeScript and Tailwind CSS, deployed on Vercel.

**Primary Language**: French (all content and UI)

## Commands

```bash
pnpm dev              # Start dev server (port 3000, auto-opens browser)
pnpm build            # Type-check + production build
pnpm type-check       # TypeScript validation only
pnpm lint             # ESLint + Prettier fix

# Testing
pnpm test             # Unit tests (watch mode) — Vitest
pnpm test-e2e         # E2E tests (headed mode) — Playwright
pnpm coverage         # Unit tests with coverage
pnpm test -- tests/unit/example.test.ts   # Run a single unit test file
pnpm test-e2e -- -g "pattern"             # Run E2E tests matching a title pattern
```

**Always use pnpm** - never npm or yarn.

## Architecture

### Auto-Imports (No Manual Imports Needed)

The project uses `unplugin-auto-import` and `unplugin-vue-components`. These are auto-imported:

```typescript
// Vue + Vue Router + Pinia
const { ref, computed, onMounted } = /* auto from vue */
const route = useRoute()
const router = useRouter()

// Store
const store = useStore()

// Composables
const { isVisible } = useScrollAnimation(elementRef, 'fade-up')
// Or use the directive: v-scroll-animate="{ animation: 'fade-up', delay: 200 }"

// @unhead/vue composables
useHead({ title: '...' })
```

### Component Auto-Registration

Components in `src/components/` auto-register globally. No import statements needed.

### Custom Web Components

The Vite config recognizes `youtube-video` and `media-theme-*` as custom elements (web components from youtube-video-element and player.style).

### Routing & Code-Splitting

Routes live in [src/router/index.ts](src/router/index.ts) and are exported as a named `routes` constant (consumed by vite-ssg — it builds the router itself). `IndexPage` is eagerly imported (LCP-critical); all other pages are lazy-loaded via dynamic `import()`. Each route defines `meta.title` used by `@unhead/vue`. Vite's `manualChunks` in [vite.config.ts](vite.config.ts) groups vendor chunks (vue, motion, calendar, youtube, etc.) — keep heavy new deps chunked the same way.

### SSG (vite-ssg) — SSR safety

`pnpm build` runs `vite-ssg build`, which pre-renders every route in [src/router/index.ts](src/router/index.ts) to a static `.html` file in `dist/`. [src/main.ts](src/main.ts) exports `createApp = ViteSSG(App, { routes, scrollBehavior }, ({ app, router }) => { ... })` — plugins (Pinia, MotionPlugin) are registered inside the setup callback.

**Rules for new code** (code runs on Node during prerender):

- No `window`, `document`, `localStorage`, `IntersectionObserver`, etc. at module top level, in `setup()`, or inside `computed()`. Gate with `typeof window === 'undefined'` or move to `onMounted`.
- `new Date()` is fine, but don't rely on locale/timezone matching the client.
- For components that must only run client-side, wrap in `<ClientOnly>` (auto-registered by vite-ssg).
- Packages that break SSR bundling (CJS-only, browser-only) go in `ssr.noExternal` in [vite.config.ts](vite.config.ts). Current list: `@fireworks-js/vue`, `motion-v`, `@vueuse/motion`, `v-calendar`, `youtube-video-element`, `player.style`.
- Fallback SPA build (no prerender): `pnpm build-spa`.

### Pinia Store Injection

[src/main.ts](src/main.ts) injects the router onto every store via `pinia.use(({ store }) => { store.router = markRaw(router) })` — the `router` comes from the vite-ssg setup callback argument. Inside store actions, use `this.router.push(...)` — do **not** call `useRouter()` there.

### Production Build Behavior

`esbuild.drop` strips `console.*` and `debugger` in production. Don't rely on logs for prod debugging; use proper error handling instead.

### Key Integrations

| Service | Purpose |
|---------|---------|
| HelloAsso | Membership payments (iframe in Formule.vue) |
| Elfsight | Instagram feed embed |
| Cloudflare R2 | Video hosting (hero section) |
| ical.js + rrule | iCal feed parsing for events |
| v-calendar | Calendar component |

## Code Style

- **No semicolons**, single quotes, 2-space indent
- **Tailwind utilities only** - no custom CSS
- All components use `<script setup lang="ts">`
- Path alias: `@/*` → `./src/*`

### Tailwind Colors

```
primary: #000000 (black)
secondary: #ffffff (white)
accent: #ff7f11 (orange), accent-dark: #e56500
```

### Icons

Use Tailwind icon classes from mdi and bxl collections:
```html
<i class="i-mdi-calendar" />
<i class="i-bxl-instagram" />
```

## Important Notes

1. **Preserve French text** when editing content
2. **Run `pnpm type-check`** after changes before committing
3. **ESLint pinned to v8.x** via pnpm override (don't upgrade)
4. **Commit messages in English**

## Key Files for Common Tasks

- **Membership pricing**: [src/components/Formule.vue](src/components/Formule.vue)
- **Practice hours**: [src/components/Footer.vue](src/components/Footer.vue)
- **Stats/member count**: [src/components/Stats.vue](src/components/Stats.vue)
- **Event calendar**: [src/components/Event.vue](src/components/Event.vue) (uses iCal feeds)
- **News/actus page**: [src/pages/ActuPage.vue](src/pages/ActuPage.vue) (PDFs live in [public/pdfs/](public/pdfs/))
- **Routes**: [src/router/index.ts](src/router/index.ts)
- **Store**: [src/store/index.ts](src/store/index.ts)
- **Scroll animation composable/directive**: [src/composables/useScrollAnimation.ts](src/composables/useScrollAnimation.ts)
