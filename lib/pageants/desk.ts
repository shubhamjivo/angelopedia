import type { PageantPiece, PageantTab } from "@/lib/pageants/types";

export const SHORT_LABEL: Record<string, string> = {
  info: "Info",
  news: "News",
  hall: "Hall of Fame",
  contestants: "Contestants",
  winners: "Winners",
  photos: "Photo Gallery",
  videos: "Video Gallery",
  edition: "Info",
  "edition-news": "News",
};

const NAV_TAB_IDS = ["info", "news", "hall", "contestants", "winners", "photos", "videos"];

const EDITION_TAB_IDS = new Set([
  "contestants",
  "winners",
  "videos",
  "photos",
  "edition",
  "edition-news",
]);

export function deskHref(basePath: string, id: string, year?: string) {
  const params = new URLSearchParams();
  if (id !== "info") params.set("tab", id);
  if (year) params.set("year", year);
  const query = params.toString();
  return query ? `${basePath}?${query}` : basePath;
}

export function pieceYear(piece: Pick<PageantPiece, "kicker" | "title">) {
  const kicker = piece.kicker.trim();
  if (/^(19|20)\d{2}$/.test(kicker)) return kicker;
  const titled = piece.title.match(/\b((?:19|20)\d{2})\b/);
  if (titled) return titled[1];
  const kicked = kicker.match(/\b((?:19|20)\d{2})\b/);
  return kicked ? kicked[1] : null;
}

export function pageantYears(tabs: PageantTab[]) {
  const years = new Set<string>();
  for (const tab of tabs) {
    for (const piece of tab.pieces) {
      const year = pieceYear(piece);
      if (year) years.add(year);
    }
  }
  return [...years].sort((a, b) => Number(b) - Number(a));
}

export function resolveTab(tabs: PageantTab[], tab?: string) {
  if (tab) {
    const match = tabs.find((item) => item.id === tab);
    if (match) return match;
  }
  return tabs[0];
}

export function navTabs(tabs: PageantTab[]) {
  const byId = new Map(tabs.map((tab) => [tab.id, tab]));
  return NAV_TAB_IDS.flatMap((id) => {
    const tab = byId.get(id);
    return tab ? [tab] : [];
  });
}

export function isEditionTab(id: string) {
  return EDITION_TAB_IDS.has(id);
}

export function heroTitle(id: string) {
  return SHORT_LABEL[id] ?? "Info";
}
