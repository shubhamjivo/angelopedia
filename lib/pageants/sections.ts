// Desk section ↔ URL slug mapping. Dependency-free so `proxy.ts` can import it
// without pulling pageant content into the proxy bundle.

const SECTION_SLUG: Record<string, string> = {
  info: "info",
  news: "news",
  hall: "hall-of-fame",
  contestants: "contestants",
  winners: "winners",
  photos: "photo-gallery",
  videos: "video-gallery",
  edition: "edition",
  "edition-news": "edition-news",
};

const ID_BY_SLUG = Object.fromEntries(
  Object.entries(SECTION_SLUG).map(([id, slug]) => [slug, id]),
);

export function sectionSlug(id: string) {
  return SECTION_SLUG[id] ?? id;
}

export function tabFromSection(value: string) {
  if (SECTION_SLUG[value]) return value;
  return ID_BY_SLUG[value] ?? null;
}

export function deskHref(basePath: string, id: string, year?: string) {
  const path = `${basePath}/${sectionSlug(id)}`;
  if (!year) return path;
  return `${path}?${new URLSearchParams({ year }).toString()}`;
}

/**
 * Resolves a desk request to its tab id. `canonical` is false when the URL
 * should redirect to `deskHref(basePath, id, year)` — a missing section, a
 * legacy `?tab=` query, or a tab id used in place of its slug.
 */
export function resolveDeskSection(section?: string, tab?: string) {
  const requested = section ?? (tab ? (tabFromSection(tab) ?? undefined) : undefined);
  const id = requested ? tabFromSection(requested) : "info";
  const canonical = id !== null && section === sectionSlug(id) && !tab;
  return { id, canonical };
}
