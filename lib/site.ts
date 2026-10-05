export const SITE_NAME = "Angelopedia";
export const SITE_TAGLINE = "The World of Beauty Pageants";
export const SITE_DESCRIPTION =
  "The authority on the fascinating world of beauty pageants — news, profiles, photographs and history from 195 nations, since 2011.";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.angelopedia.com"
).replace(/\/$/, "");

export const ROUTES = [
  {
    href: "/",
    label: "Home",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
  {
    href: "/news",
    label: "News",
    title: "The Latest",
    description:
      "Crowns, contests and the people who carry them — reported daily from 195 nations.",
  },
  {
    href: "/miss-universe",
    label: "Miss Universe",
    title: "Miss Universe",
    description: "Confidently beautiful, seventy-five years on.",
  },
  {
    href: "/miss-world",
    label: "Miss World",
    title: "Miss World",
    description: "Beauty with a purpose, seventy-three years on.",
  },
  {
    href: "/miss-earth",
    label: "Miss Earth",
    title: "Miss Earth",
    description: "Beauties for a cause — the environmental pageant.",
  },
  {
    href: "/miss-international",
    label: "Miss International",
    title: "Miss International",
    description: "The festival of beauty and goodwill.",
  },
  {
    href: "/other-pageants",
    label: "Other Pageants",
    title: "Other Pageants",
    description:
      "Miss Grand International, Miss Supranational and Miss Intercontinental — the crowns beyond the Big Four.",
  },
  {
    href: "/videos",
    label: "Interviews",
    title: "Interviews",
    description: "Angelopedia exclusive interviews, other interviews, and final videos.",
  },
  {
    href: "/pageants",
    label: "Pageants A–Z",
    title: "Pageants A–Z",
    description:
      "Every national pageant we cover, from Albania to Zimbabwe — organised by continent.",
  },
  // {
  //   href: "/gallery",
  //   label: "Photos",
  //   title: "The Gallery",
  //   description:
  //     "Runways, coronations and the quiet moments backstage — through our photographers’ lenses.",
  // },
  {
    href: "/Prediction-Game-for-Beauty-Pageants",
    label: "Play Zone",
    title: "Prediction Game",
    description: "Vote for your top favourites before the finale, and see how every past prediction game closed.",
  },
] as const;

export const NAV_LINKS = ROUTES.filter((route) => route.href !== "/").map(
  ({ href, label }) => ({ href, label }),
);

export const OTHER_PAGEANT_LINKS = [
  { href: "/other-pageants/miss-grand-international", label: "Miss Grand International" },
  { href: "/other-pageants/miss-supranational", label: "Miss Supranational" },
  { href: "/other-pageants/miss-intercontinental", label: "Miss Intercontinental" },
] as const;

export const CONTINENT_LINKS = [
  { href: "/pageants/asia", label: "Asia" },
  { href: "/pageants/south-america", label: "South America" },
  { href: "/pageants/north-america", label: "North America" },
  { href: "/pageants/europe", label: "Europe" },
  { href: "/pageants/africa", label: "Africa" },
  { href: "/pageants/oceania", label: "Oceania" },
] as const;

export const PLAY_LINKS = [
  { href: "/Prediction-Game-for-Beauty-Pageants", label: "Prediction Game" },
  { href: "/Polls", label: "Polls" },
] as const;

export const NAV_SUBMENUS: Record<
  string,
  { all?: string; links: readonly { href: string; label: string }[]; also?: readonly string[] }
> = {
  "/other-pageants": { all: "All pageants", links: OTHER_PAGEANT_LINKS },
  "/Prediction-Game-for-Beauty-Pageants": { links: PLAY_LINKS, also: ["/Prediction-Game"] },
};

export const UTILITY_LINKS = [
  { href: "/Prediction-Game-for-Beauty-Pageants", label: "Prediction Game" },
  { href: "/#newsletter", label: "Newsletter" },
] as const;
