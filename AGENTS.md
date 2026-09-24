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
page, including the homepage front page and the sections under it (the latest
edition, BigFour, GalleryPreview, WatchNow, VoteCta). Homepage sections are
stacked editorial blocks — a lead story, a news list, and a rail — not
full-viewport screens.

```tsx
<section className="py-16 desk:py-20">          // standard
<section className="bg-footer py-16 desk:py-20"> // dark band
<section className="border-t border-hairline py-16 desk:py-20">
```

The spacing between consecutive homepage sections comes from each section's own
`py-16 desk:py-20` — there is no `::before` spacer, so do not add any margin to
those sections. `PageHero` keeps its own hero padding (`pt-16` / `pb-16
desk:pb-20`); it is a page header, not a stacked section.

Do not reintroduce `py-8`, `py-10`, `py-12`, `py-14`, `pb-16`-only, `desk:py-24`,
or `py-5 lg:py-8` on sections. The homepage photo mosaic is the exception and
keeps `py-6 desk:py-10`.

### Section titles (IMPORTANT)

Every section title uses one `<h2>` with the exact same classes — 30px mobile /
36px at `desk:`, `text-heading` on light bands, `text-white` on dark bands.
Story headlines stay smaller: a lead is 22px / 26px, a card headline is 16px,
rail headlines are 15px.

```tsx
<h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">Title</h2>
<h2 className="font-heading text-[30px] font-semibold leading-none text-white desk:text-[36px]">Title</h2> // dark band
```

Keep a consistent `mt-10` between the title and the first content block below it.
Reserve other sizes for in-content headlines (featured stories, card titles,
CTA/hero copy) — the section title is always the 30/36 pattern above.

### Typography (IMPORTANT)

Every text element must declare its font family explicitly. The four families map
to tokens in `globals.css` — use them by role, never `font-sans` for content:

| Family        | Token            | Use                                     |
| ------------- | ---------------- | --------------------------------------- |
| `font-heading`| Times New Roman  | Titles, headlines, card titles, numbers |
| `font-body`   | Times New Roman  | Paragraphs, descriptions, deks, lists   |
| `font-nav`    | Poppins          | Labels, kickers, bylines, meta, captions, buttons, links |
| `font-sans`   | Poppins          | Base/UI chrome only (body, form inputs) |

The logo wordmark is the Montage outlines in `public/icons/logo.svg`. Do not
`import` further web fonts. Brand colors are `#be1e2d`, `#cccccc`, `#414042`,
and `#ffffff`. Follow this mapping everywhere, and only use
`font-heading` / `font-body` / `font-nav` / `font-sans` plus the semantic colors
in `globals.css`.

### Styling

- The whole site renders at 90% scale (`zoom: 0.9` on `html` in `globals.css`) —
  this is intentional and mirrors the 90% browser-zoom look the design targets.
  Don't remove it, and don't compensate with larger font/size tokens.
- Style with Tailwind utility classes inline in JSX. Use semantic color aliases
  (`text-ink`, `text-heading`, `text-muted`, `bg-paper`, `border-hairline`,
  `bg-footer`, `text-accent`, `text-gold`, `text-neutral-300/400`) over raw hex.
- `font-heading`, `font-body`, `font-nav`, `font-sans` map to the tokens in
  `globals.css`; do not bring in new web fonts.
- Wrap page content in the shared `Container` (max-width 1360px + gutters) —
  never define page-wide widths inline.
- Prefer `desk:` (`90rem`) for desktop overrides over `lg:`/`xl:` unless near
  existing `lg:` usage.