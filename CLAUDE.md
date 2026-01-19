# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ToulBarz is the website for a street workout association in Toulouse, France. It's a Vue 3 SPA with TypeScript and Tailwind CSS, deployed on Vercel.

**Primary Language**: French (all content and UI)

## Commands

```bash
pnpm dev              # Start dev server (port 3000, auto-opens browser)
pnpm build            # Type-check + production build
pnpm type-check       # TypeScript validation only
pnpm lint             # ESLint + Prettier fix

# Testing
pnpm test             # Unit tests (watch mode)
pnpm test-e2e         # E2E tests (headed mode)
pnpm coverage         # Unit tests with coverage
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

- **Membership pricing**: `src/components/Formule.vue`
- **Practice hours**: `src/components/Footer.vue`
- **Stats/member count**: `src/components/Stats.vue`
- **Event calendar**: `src/components/Event.vue` (uses iCal feeds)
- **Routes**: `src/router/index.ts`
- **Store**: `src/store/index.ts`
