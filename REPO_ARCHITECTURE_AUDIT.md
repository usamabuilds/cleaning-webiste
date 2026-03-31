# Repository Architecture + Code Philosophy Audit

Date: 2026-03-31 (UTC)
Scope: audited all git-tracked repository files (`git ls-files`), all Markdown files, and directory structure (`find . -maxdepth 4 -type d | sort`).

## 1) Executive Summary

- This repository is a **Next.js App Router frontend website** for a West Midlands rubbish-removal business, with no implemented backend logic. Most route pages are currently placeholders, with one implemented hero section and shared visual primitives.
- Architecture style is **single-package frontend app**, componentized but currently sparse: app routes + UI primitives + mostly empty planned component/data/lib scaffolding.
- Code philosophy reflects **design-system-first scaffolding and incremental build-out**: establish visual primitives, SEO/CTA intent in docs, then fill sections later.
- Maturity level is **prototype-grade / early phase-1 skeleton**: routing map exists, styles are detailed, but most functional/content modules are empty.

## 2) Repository Structure (real responsibilities)

- `src/app/**`: route-level entrypoints using Next App Router. Most routes return `Page placeholder`; home route currently returns empty `<main />`.
- `src/components/ui/**`: reusable UI primitives. Only `GlassPanel`, `LayerContent`, and `SectionFrame` are implemented.
- `src/components/sections/**`: intended homepage/page sections. Only `hero-section.tsx` implemented; all other section files exist but are empty.
- `src/components/layout/**` + `src/components/shared/**`: intended layout chrome and shared CTA/form controls; all files are empty.
- `src/data/**`, `src/lib/**`, `src/types/**`: planned data/config/helper/type layers; currently empty files.
- `public/`: static assets. `hero/hero.png` is used by hero section. Several SVG files are currently 0-byte placeholders.
- Root config (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `package.json`) defines a strict TypeScript Next.js 16 + Tailwind 4 toolchain.

Overall structure is **frontend feature-sliced by route/section intent**, but implementation is still partial.

## 3) Code Philosophy (inferred from implementation)

- **Strict typing intent**: TypeScript strict mode enabled.
- **Utility-first styling + design tokens**: strong central CSS token system in `globals.css` with layered panel semantics and accessibility media queries.
- **Reusable primitives first**: UI wrappers built (`GlassPanel`, `LayerContent`, `SectionFrame`) before broader feature implementation.
- **Conversion-focused content intent (documented)**: docs emphasize CTA visibility and local-service trust; partially reflected in hero copy/buttons.
- **No backend complexity by design (documented + implemented)**: docs forbid backend for now; repository contains no API routes/services/db/auth.

## 4) Real Architecture (actual, not aspirational)

### Frontend architecture
- Next.js App Router (`src/app`) with one root layout and many page routes.
- Layout applies base shell with layered z-index structure; page content rendered in `children` container.
- Home page currently renders empty main, so no section composition is wired.
- One implemented section component (`HeroSection`) uses `next/image` and UI wrappers.

### Backend architecture
- **Not implemented**. No API route handlers, controllers, services, or server actions found.

### Database/auth/permissions/validation/error handling
- **Not implemented**. No ORM schema, migrations, auth middleware, role checks, validation schemas, or centralized error system in code.

### Async/jobs/webhooks/integrations/caching/tenancy
- **Not implemented**. No queues, schedulers, webhook handlers, integration adapters, cache layer, or workspace scoping.

### State management
- No global state management present; no hooks implemented.

## 5) Request / Data Flow (current reality)

### HTTP page request flow (implemented)
1. Request enters Next.js route under `src/app/**`.
2. Root layout wraps all pages and injects global CSS + font variables.
3. Route page component returns static JSX (mostly placeholder main text).
4. Response is server-rendered static React output (no dynamic data fetch logic found).

### Hero section rendering flow (implemented, but not wired to home)
1. `HeroSection` composes `GlassPanel` + `LayerContent` wrappers.
2. `next/image` serves `/public/hero/hero.png`.
3. CTA anchors render hardcoded `Get a Quote`, `Call Now`, `WhatsApp Enquiry` links.

### Data and form flows
- **Documented, not implemented**: quote flow with photo upload in AGENTS.md; no form logic exists in code.
- **Stub/placeholder**: `src/components/shared/quote-form.tsx` exists but is empty.

## 6) Feature Inventory (only code-backed)

### Implemented
- Route map for main phase-1 pages and a blog/gallery route (all as placeholder pages).
- Root layout with Geist font setup and layered shell.
- Global style system with panel layers, mobile sticky CTA guardrail classes, reduced-motion/reduced-transparency accessibility handling.
- Hero section UI component with background image and three CTA links.
- Reusable UI wrappers: `GlassPanel`, `LayerContent`, `SectionFrame`.

### Partially implemented
- Conversion UX: CTA links exist in hero section, but sticky CTA component and quote form are not implemented.
- SEO intent: `src/lib/seo.ts` exists as placeholder; metadata currently still default create-next-app values.

### Stub/placeholder
- Most route pages output "Page placeholder".
- Most component, data, lib, and types files are empty.
- Several public SVG assets are 0-byte files.

## 7) Repeated Engineering Patterns (actual)

- **App Router page-per-route skeleton** with explicit route directories.
- **UI primitive wrappers with className composition via array/filter/join pattern**.
- **Design-token-driven CSS variables in globals.css** for visual consistency.
- **Placeholder-first scaffolding pattern**: create files/routes for future modules before implementation.

Patterns *not present yet*: service layer, DTO validation, adapters, repositories, queues, domain modules, state hooks.

## 8) Strengths (grounded)

- Clear target-product constraints and conversion priorities are captured in AGENTS.md.
- Good foundational visual system in `globals.css` (tokens, layering, accessibility media queries).
- Strong typing + linting baseline configured from day one.
- Route scaffold already matches intended information architecture for phase 1.

## 9) Weaknesses / Risks (grounded)

- High mismatch between planned pages and implemented content: most routes are placeholders.
- Home page currently empty despite many section files existing.
- Many critical components/data files are empty, increasing "false completeness" risk.
- Metadata, README, and default naming still partly create-next-app defaults, which can hurt SEO and project clarity if shipped as-is.
- CTA links include placeholders (`tel:+440000000000`, `href="#"`) that could reduce conversion if not replaced.

## 10) Docs vs Code Reality

### Docs aligned with code
- "Use Next.js App Router / TypeScript / Tailwind": all true in code.
- "No backend unless requested": true; backend absent.

### Docs ahead of code (documented, not implemented)
- Homepage section list beyond hero.
- Sticky mobile CTA, quote request with photo upload.
- Local SEO/trust structure across pages.

### Code ahead of docs
- Detailed layered glass CSS system and accessibility guardrails are implemented more concretely than README-level docs describe.

### Docs drift / mismatch
- `README.md` still generic create-next-app instructions/content and does not describe actual business/site architecture.
- Root metadata still default create-next-app title/description.

## 11) Final Classification

- **Architecture style**: single-app Next.js App Router frontend scaffold with component primitives.
- **Code philosophy style**: pragmatic scaffold-first, design-token-centric, conversion-intent but currently placeholder-heavy.
- **Maturity level**: early prototype / foundation stage.
- **Likely developer mindset**: establish IA + design system + route skeleton before filling feature/content modules.
- **Optimization target today**: fast shipping foundation; not yet maintainability/scale challenged because feature depth is low.

## 12) Repo-aware Guidance for Future Implementation

- Keep using `src/app/<route>/page.tsx` App Router convention for new pages.
- Compose pages from `components/sections/*` and keep shared visual wrappers in `components/ui/*`.
- Put reusable action controls (call/WhatsApp/quote) in `components/shared/*`, then consume from sections/pages.
- Populate `src/data/*` with explicit typed content objects (no hardcoded repeated literals across sections).
- Keep global style semantics centralized in `globals.css` variables; avoid ad-hoc one-off utility sprawl for core brand tokens.
- Replace placeholders early (metadata, phone/WhatsApp hrefs, README) to prevent production leakage.
- If forms are added, centralize validation in `src/lib/*` and types in `src/types/*` to preserve separation.
- Avoid introducing backend/API complexity until project rules change; current architecture is static-first.

