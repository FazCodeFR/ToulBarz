# CLAUDE.md - ToulBarz Project Guide

This document provides essential information for AI assistants working with the ToulBarz codebase.

## Project Overview

ToulBarz is the official website for a street workout association based in Toulouse, France. It's a modern Single Page Application (SPA) built with Vue 3, TypeScript, and Tailwind CSS.

**Live Site**: Deployed on Vercel
**Primary Language**: French (content and UI)

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Vue | 3.5.12 | Frontend framework |
| TypeScript | 5.6.3 | Type safety |
| Vite | 5.4.19 | Build tool & dev server |
| Tailwind CSS | 3.4.14 | Styling |
| Pinia | 2.2.5 | State management |
| Vue Router | 4.4.5 | Client-side routing |
| pnpm | 10+ | Package manager |

## Project Structure

```
ToulBarz/
├── src/
│   ├── components/       # Vue components (16 files)
│   │   ├── Header.vue    # Sticky navigation with mobile menu
│   │   ├── Footer.vue    # Multi-column footer
│   │   ├── Heroe.vue     # Hero section with video background
│   │   ├── Event.vue     # Event calendar with iCal integration
│   │   ├── Formule.vue   # Membership pricing tiers
│   │   └── ...           # Other UI components
│   ├── pages/            # Route pages
│   │   ├── IndexPage.vue        # Home (/)
│   │   ├── AdhesionPage.vue     # Membership (/adhesions)
│   │   ├── EventPage.vue        # Events (/evenements)
│   │   ├── FiguresPage.vue      # Street workout (/street-workout)
│   │   └── MentionsLegalesPage.vue  # Legal (/mentions-legales)
│   ├── router/index.ts   # Route definitions
│   ├── store/index.ts    # Pinia store
│   ├── assets/           # Global styles (index.postcss)
│   ├── App.vue           # Root component
│   └── main.ts           # Application entry
├── tests/
│   ├── unit/             # Vitest unit tests
│   ├── e2e/              # Playwright E2E tests
│   └── setup/            # Test configuration
├── public/               # Static assets (images, favicon)
└── Configuration files   # See below
```

## Development Workflow

### Package Manager

**Always use pnpm** - The project is configured for pnpm v10+.

### Essential Commands

```bash
# Development
pnpm dev              # Start dev server (port 3000, auto-opens browser)
pnpm build            # Type-check + production build
pnpm type-check       # TypeScript validation only

# Code Quality
pnpm lint             # ESLint + Prettier fix

# Testing
pnpm test             # Unit tests (watch mode)
pnpm coverage         # Unit tests with coverage report
pnpm test-e2e         # E2E tests (headed mode)
pnpm test:ci          # CI unit tests
pnpm test:ci-e2e      # CI E2E tests
```

### Development Server

- Port: 3000
- Hot Module Replacement (HMR) enabled
- Auto-opens browser on start

### Build Output

- Directory: `dist/`
- Gzip compression enabled
- Bundle analysis generated
- Console logs stripped in production

## Key Conventions

### TypeScript

- Strict mode enabled
- Path alias: `@/*` resolves to `./src/*`
- Vue components use `<script setup lang="ts">`

### Auto-Import (No Manual Imports Needed)

The project uses `unplugin-auto-import` and `unplugin-vue-components`:

```typescript
// These are auto-imported - no import statements needed:
const route = useRoute()
const router = useRouter()
const store = useStore()
const { ref, computed, onMounted } = /* auto-imported from vue */
```

### Styling with Tailwind

**Color Palette**:
- Primary: Black (`#000000`)
- Secondary: White (`#ffffff`)
- Accent: Orange (`#ff7f11`) / Dark Orange (`#e56500`)

**Font**: Rubik (Google Fonts)

**Responsive Design**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints

**Icons**: Use Tailwind icon classes:
```html
<i class="i-mdi-calendar" />
<i class="i-bxl-instagram" />
```

### Component Patterns

1. **Scoped styles with Tailwind utilities** - No CSS-in-JS
2. **Composition API** - All components use `<script setup>`
3. **Auto-registration** - Components in `src/components/` auto-register

### Code Quality

**ESLint Rules**:
- No console logs in production (warning)
- Vue 3 recommended rules
- Security plugin enabled
- Trailing commas only on multiline

**Prettier Settings**:
- No semicolons
- Single quotes
- 2-space indentation
- 120 character line width

## Testing

### Unit Tests (Vitest)

- Location: `tests/unit/` and `src/**/*.spec.ts`
- Environment: jsdom
- Coverage threshold: 10% (lines, branches, statements)

### E2E Tests (Playwright)

- Location: `tests/e2e/`
- Device profiles: iPhone 6, Macbook 11 (Firefox), Desktop (Chrome)
- Base URL: `http://localhost:5173`

## External Integrations

| Service | Purpose |
|---------|---------|
| HelloAsso | Membership payments (iframe) |
| Elfsight | Instagram feed embed |
| Google Analytics | Site analytics (G-JNS3NEMVE0) |
| Cloudflare R2 | Video hosting (hero section) |
| v-calendar | Event calendar component |
| ical.js + rrule | iCal feed parsing |

## Important Files

### Configuration

- `vite.config.ts` - Vite plugins and build settings
- `tailwind.config.cjs` - Custom colors, fonts, plugins
- `tsconfig.app.json` - App TypeScript config
- `.eslintrc.cjs` - Linting rules
- `.prettierrc.json` - Formatting rules
- `vercel.json` - Deployment configuration (SPA rewrites)

### Key Components

- `src/components/Event.vue` - Complex event management with calendar
- `src/components/Heroe.vue` - Responsive video hero section
- `src/components/Formule.vue` - Membership pricing (Classic 175€, Athlete 250€)
- `src/store/index.ts` - Pinia store with router injection

## Common Tasks

### Adding a New Page

1. Create page component in `src/pages/`
2. Add route in `src/router/index.ts`
3. Update navigation in `Header.vue` if needed

### Modifying Membership Pricing

Edit `src/components/Formule.vue` - pricing is hardcoded in the component.

### Updating Practice Hours

Hours appear in `src/components/Footer.vue`:
- Friday: 17h30 - 20h00
- Sunday: 16h00 - 18h30

### Updating Stats

Edit `src/components/Stats.vue` - membership count and other stats.

### Working with Events

Events use iCal feeds parsed with `ical.js`. Event logic is in `src/components/Event.vue`.

## Deployment

- Platform: Vercel
- Mode: SPA (all routes rewrite to `/index.html`)
- CI/CD: GitHub Actions (type-check on push/PR)

## Git Workflow

- Main branch for production
- Feature branches for development
- Type-check runs on all PRs

## Troubleshooting

### ESLint Issues

ESLint is pinned to v8.x due to configuration format incompatibility with v9. Do not upgrade.

### Type Errors

Run `pnpm type-check` to see all TypeScript errors before building.

### Build Failures

1. Check TypeScript errors: `pnpm type-check`
2. Check lint errors: `pnpm lint`
3. Verify dependencies: `pnpm install`

## Notes for AI Assistants

1. **Language**: Content is in French - preserve French text when editing
2. **No manual imports**: Vue composables and components auto-import
3. **Styling**: Use Tailwind utility classes, not custom CSS
4. **Package manager**: Always use `pnpm`, never `npm` or `yarn`
5. **Code style**: Follow existing patterns - no semicolons, single quotes
6. **Testing**: Run `pnpm type-check` after making changes
7. **Commits**: Use descriptive commit messages in English
