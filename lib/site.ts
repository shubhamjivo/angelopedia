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
    href: "/pageants",
    label: "Pageants A–Z",
    title: "Pageants A–Z",
    description:
      "Every national pageant we cover, from Albania to Zimbabwe — organised by continent.",
  },
  {
    href: "/gallery",
    label: "Photos",
    title: "The Gallery",
    description:
      "Runways, coronations and the quiet moments backstage — through our photographers’ lenses.",
  },
  {
    href: "/videos",
    label: "Videos",
    title: "Videos",
    description: "Finals, interviews and masterclasses — the pageant world in motion.",
  },
  {
    href: "/play",
    label: "Play Zone",
    title: "Vote & Predict",
    description:
      "Have your say in this month’s polls, and predict the next crown to climb the leaderboard.",
  },
] as const;

export const NAV_LINKS = ROUTES.filter((route) => route.href !== "/").map(
  ({ href, label }) => ({ href, label }),
);

export const UTILITY_LINKS = [
  { href: "/play", label: "Prediction Game" },
  { href: "/#newsletter", label: "Newsletter" },
] as const;
