export type DirectoryPageant = {
  slug: string;
  name: string;
  edition: string;
};

/** Same order and editions as angelopedia.com/International-Pageant.html. */
export const INTERNATIONAL_PAGEANTS: DirectoryPageant[] = [
  { slug: "miss-supranational", name: "Miss Supranational", edition: "Miss Supranational 2021" },
  { slug: "miss-united-continents", name: "Miss United Continents", edition: "Miss United Continents 2019" },
  { slug: "miss-grand-international", name: "Miss Grand International", edition: "Miss Grand International 2021" },
  { slug: "miss-intercontinental", name: "Miss Intercontinental", edition: "Miss Intercontinental 2019" },
  { slug: "miss-tourism-world", name: "Miss Tourism World", edition: "Miss Tourism World 2014" },
  { slug: "miss-tourism-international", name: "Miss Tourism International", edition: "Miss Tourism International 2018" },
  { slug: "the-miss-globe", name: "The Miss Globe", edition: "The Miss Globe 2015" },
  { slug: "miss-eco-universe", name: "Miss Eco Universe", edition: "Miss Eco Universe 2016" },
  { slug: "miss-eco-international", name: "Miss Eco International", edition: "Miss Eco International 2019" },
  { slug: "top-model-of-the-world", name: "Top Model of the World", edition: "Top Model of the World 2017" },
  { slug: "jewel-of-the-world", name: "Jewel of the World", edition: "Jewel of the World 2019" },
  { slug: "miss-landscapes-international", name: "Miss Landscapes International", edition: "Miss Landscapes International 2019" },
  {
    slug: "miss-tourism-metropolitan-international",
    name: "Miss Tourism Metropolitan International",
    edition: "Miss Tourism Metropolitan International 2019",
  },
  { slug: "reina-hispanoamericana", name: "Reina Hispanoamericana", edition: "Reina Hispanoamericana 2018" },
  {
    slug: "reinado-internacional-del-cafe",
    name: "Reinado Internacional del Cafe",
    edition: "Reinado Internacional del Cafe 2018",
  },
  { slug: "supermodel-international", name: "Supermodel International", edition: "Supermodel International 2016" },
  { slug: "miss-progress-international", name: "Miss Progress International", edition: "Miss Progress International 2015" },
  { slug: "miss-scuba-international", name: "Miss Scuba International", edition: "Miss Scuba International 2017" },
  {
    slug: "miss-asia-pacific-international",
    name: "Miss Asia Pacific International",
    edition: "Miss Asia Pacific International 2018",
  },
  { slug: "miss-cosmopolitan-world", name: "Miss Cosmopolitan World", edition: "Miss Cosmopolitan World 2017" },
];

export const DIRECTORY_LINKS = [
  { id: "info", label: "Info" },
  { id: "news", label: "News" },
  { id: "hall", label: "Hall of Fame" },
] as const;

export const DIRECTORY_EDITION_LINKS = [
  { id: "edition", label: "Info" },
  { id: "edition-news", label: "News" },
  { id: "winners", label: "Winners" },
  { id: "contestants", label: "Contestants" },
  { id: "photos", label: "Photo Gallery" },
  { id: "videos", label: "Video Gallery" },
] as const;

export function directoryPath(slug: string) {
  return `/other-pageants/${slug}`;
}
