# AGENTS.md

Guidelines for AI coding agents working in this repository.

## Project

Angelopedia — a Next.js 16 (App Router) + TypeScript content site styled with
Tailwind CSS v4. Design tokens live in `app/globals.css`.

## Commands

```bash
bun install
bun dev          # start dev server
bun run lint     # run ESLint
bun run build    # production build / typecheck
```

## Conventions

### Section spacing (IMPORTANT)

Every top-level `<section>` must own its vertical padding via `py-*`. Never use
`mt-*` to push one section away from another — the page rhythm comes from each
section's own block padding.

The one and only section padding is **`py-16 desk:py-20`** — 64px mobile / 80px
at the `desk:` (90rem) breakpoint. This applies to every `<section>` on every
page, including the full-viewport `screen-section` blocks on the homepage
(HeroMosaic, LatestNews, Opinions, BigFour, WatchNow, GalleryPreview, VoteCta).

```tsx
<section className="py-16 desk:py-20">          // standard
<section className="screen-section py-16 desk:py-20">
<section className="bg-footer py-16 desk:py-20"> // dark band
<section className="border-t border-hairline py-16 desk:py-20">
```

The spacing between consecutive full-viewport sections on the homepage comes
from `globals.css` (`screen-section:not(:first-child)::before`, header-height
spacer) — do not add any margin to those. `PageHero` keeps its own hero padding
(`pt-16` / `pb-16 desk:pb-20`); it is a page header, not a stacked section.

Do not reintroduce `py-8`, `py-10`, `py-12`, `py-14`, `pb-16`-only, `desk:py-24`,
or `py-5 lg:py-8` on sections.

### Typography (IMPORTANT)

Every text element must declare its font family explicitly. The four families map
to tokens in `globals.css` — use them by role, never `font-sans` for content:

| Family        | Token      | Use                                     |
| ------------- | ---------- | --------------------------------------- |
| `font-heading`| Cormorant  | Titles, headlines, card titles, numbers |
| `font-body`   | Newsreader | Paragraphs, descriptions, deks, lists   |
| `font-nav`    | Jost       | Labels, kickers, bylines, meta, captions, buttons, links |
| `font-sans`   | Inter      | Base/UI chrome only (body, form inputs) |

Follow this mapping everywhere. Do not `import` new web fonts; only
`font-heading` / `font-body` / `font-nav` / `font-sans` and the semantic colors
in `globals.css`.

### Styling

- Style with Tailwind utility classes inline in JSX. Use semantic color aliases
  (`text-ink`, `text-heading`, `text-muted`, `bg-paper`, `border-hairline`,
  `bg-footer`, `text-accent`, `text-gold`, `text-neutral-300/400`) over raw hex.
- `font-heading`, `font-body`, `font-nav`, `font-sans` map to the tokens in
  `globals.css`; do not bring in new web fonts.
- Wrap page content in the shared `Container` (max-width 1360px + gutters) —
  never define page-wide widths inline.
- Prefer `desk:` (`90rem`) for desktop overrides over `lg:`/`xl:` unless near
  existing `lg:` usage.