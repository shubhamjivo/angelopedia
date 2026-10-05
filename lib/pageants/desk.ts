import { pictureFor } from "@/lib/pageants/frames";
import type { PageantLayout, PageantPiece, PageantTab } from "@/lib/pageants/types";

export { deskHref, sectionSlug, tabFromSection } from "@/lib/pageants/sections";

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

export function isYearKicker(kicker: string) {
  return /^(19|20)\d{2}$/.test(kicker.trim());
}

export function layoutFor(tab: PageantTab): PageantLayout {
  if (tab.layout) return tab.layout;
  switch (tab.id) {
    case "info":
    case "edition":
      return "essay";
    case "news":
    case "edition-news":
      return "news";
    case "hall":
      return tab.pieces.some((piece) => isYearKicker(piece.kicker)) ? "roll" : "essay";
    case "contestants":
      return tab.pieces.some((piece) => piece.kicker === "Contestant") ? "portraits" : "essay";
    case "videos":
      return "videos";
    case "photos":
      return tab.pieces.some((piece) => pictureFor(piece)) ? "photos" : "essay";
    case "winners":
      return tab.pieces.some((piece) => piece.kicker === "Winner") ? "results" : "brief";
    default:
      return "cards";
  }
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

/** The requested year, when it is one the desk actually has filed. */
export function activeDeskYear(tabs: PageantTab[], year?: string) {
  return year && pageantYears(tabs).includes(year) ? year : undefined;
}

/** Puts the filtered year into a tab label: "Miss Universe 2021 : Contestants" → "Miss Universe 2019 : Contestants". */
export function yearLabel(label: string, year?: string) {
  if (!year) return label;
  if (/\b(19|20)\d{2}\b/.test(label)) return label.replace(/\b(19|20)\d{2}\b/, year);
  const [head, ...rest] = label.split(" : ");
  return rest.length ? `${head} ${year} : ${rest.join(" : ")}` : `${label} ${year}`;
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

export function heroTitle(id: string, year?: string) {
  const title = SHORT_LABEL[id] ?? "Info";
  return year ? `${title} ${year}` : title;
}
