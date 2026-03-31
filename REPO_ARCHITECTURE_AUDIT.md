# Repository Architecture + Code Philosophy Audit

Date: 2026-03-31 (UTC)
Scope: audited all git-tracked repository files (`git ls-files`), all Markdown files, and directory structure (`find . -maxdepth 4 -type d | sort`).

## 1) Executive Summary

- This repository is a **Next.js App Router frontend website** for a West Midlands rubbish-removal business, with no implemented backend logic. Most route pages are currently placeholders, with one implemented hero section and shared visual primitives.
- Architecture style is **single-package frontend app**, componentized but currently sparse: app routes + UI primitives + mostly empty planned component/data/lib scaffolding.
- Code philosophy reflects **design-system-first scaffolding and incremental build-out**: establish visual primitives, SEO/CTA intent in docs, then fill sections later.
- Maturity level is **prototype-grade / early phase-1 skeleton**: routing map exists, styles are detailed, but most functional/content modules are empty.

## Docs-stated architecture, philosophy, and instructions (explicit from docs)

### Docs-stated architecture
- Use **Next.js App Router**, **TypeScript**, and **Tailwind CSS**.
- Build a **frontend-only Phase 1 marketing site** (no backend unless explicitly requested; no CMS/booking system yet).
- Prioritize pages for Phase 1: home, services, service detail pages, about, reviews, FAQ, quote, legal pages.

### Docs-stated code philosophy
- Keep components **reusable and simple**.
- Optimize for **mobile-first conversion** and **local SEO structure**.
- Keep copy **lean/replaceable** and avoid fake claims/testimonials/pricing.
- Design should be clean, sturdy, trustworthy, and practical (not overdesigned startup visuals).

### Docs-stated UX and product instructions
- Primary conversions: WhatsApp enquiry, phone call, quote request with photo upload.
- Homepage should contain hero, trust strip, services, why-choose-us, how-it-works, areas served, reviews, FAQ, final CTA.
- Sticky mobile CTA, click-to-call, WhatsApp CTA, and quote CTA should be visible on major pages.

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

## 13) How to build components in this repo (practical blueprint)

This section translates the current repository style into concrete build rules for navbar, hero, pages, footer, and shared components.

### A. Navbar (`src/components/layout/site-header.tsx`)
- Keep it as a **layout shell component** with minimal business logic.
- Structure:
  1. Outer semantic `<header>` + container wrapper using spacing consistent with `section-frame`.
  2. Brand block (text/logo).
  3. Primary nav links (phase-1 routes only).
  4. High-priority CTAs: call + WhatsApp (mobile-visible).
- Styling:
  - Reuse global layer semantics (`layer-base` or a single `layer-glass` shell only).
  - Avoid nested translucent wrappers; follow guardrails in `globals.css`.
- Behavior:
  - Keep mobile-first (menu collapses or stacks without heavy JS).
  - Keep links hardcoded first; migrate to `src/data/*` once content model is defined.

### B. Hero (`src/components/sections/hero-section.tsx`)
- Continue current pattern: `GlassPanel` + `LayerContent` + background media.
- Keep copy replaceable and factual; do not hardcode unverified claims.
- Keep CTA trio consistent with project conversion goals:
  - Call CTA (`tel:`)
  - WhatsApp CTA
  - Quote CTA (anchor to quote section/page)
- Ensure CTA hrefs are real production values before shipping.

### C. Other homepage sections (`src/components/sections/*`)
- Build each required homepage block as **one file per section**:
  - `trust-strip.tsx`
  - `service-cards-section.tsx`
  - `why-choose-us-section.tsx`
  - `how-it-works-section.tsx`
  - `areas-section.tsx`
  - `reviews-section.tsx`
  - `faq-section.tsx`
  - `final-cta-section.tsx`
- Each section should:
  1. Export a single named component.
  2. Accept small typed props when content varies.
  3. Use `SectionFrame` for width/padding consistency.
  4. Use shared CTA components instead of duplicating button markup.

### D. Page assembly (`src/app/**/page.tsx`)
- Keep route pages thin.
- Composition pattern:
  1. Import section components.
  2. Render sections in conversion order.
  3. Keep page files mostly declarative (minimal inline logic).
- For service detail pages:
  - Reuse shared section primitives and pass service-specific content via typed objects from `src/data/services.ts`.

### E. Footer (`src/components/layout/site-footer.tsx`)
- Keep footer informational and trust-oriented:
  - Contact methods
  - Service area mention (West Midlands only unless verified expansion)
  - Legal links (`/legal/*`)
  - Licence/compliance link
- Keep copy factual and short.

### F. Shared action components (`src/components/shared/*`)
- `call-button.tsx`, `whatsapp-button.tsx`, and quote UI should be reusable with consistent variants.
- Recommended props:
  - `label?: string`
  - `className?: string`
  - `size?: "sm" | "md" | "lg"`
  - destination prop (`phone`, `href`, etc.) kept explicit and typed.
- Avoid embedding page-specific copy in shared components.

### G. UI primitives (`src/components/ui/*`)
- Keep these presentation-only and composable.
- No business rules here.
- Add primitives only when they are reused by 2+ sections/pages.

### H. Data, types, validation placement
- `src/data/*`: structured page/service/review/faq content objects.
- `src/types/index.ts`: shared interfaces/types for service cards, FAQs, reviews, CTA props.
- `src/lib/*`: helper functions (SEO metadata helpers, formatting utilities, optional validation helpers if forms are added).
- If quote form is implemented in Phase 1 frontend-only mode:
  - Validate client-side only.
  - Keep schema near form logic (or in `src/lib`) and keep submission flow clearly marked as placeholder if backend is absent.

### I. Conventions to preserve
- App Router route structure.
- Global token/layer styling model in `globals.css`.
- Mobile CTA visibility and trust markers near top sections.
- No invented claims/testimonials/pricing/areas.
- Prefer simple, predictable, typed component APIs.
