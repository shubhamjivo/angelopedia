import data from "./continents.json";

/** `href` is the desk on this site; `source` is the page it was filed from on angelopedia.com. */
export type ContinentPageant = { name: string; href: string; source?: string };
export type ContinentCountry = { name: string; pageants: ContinentPageant[] };
export type ContinentEdition = { title: string; country: string; href: string };
export type ContinentNews = { title: string; href: string };

export type Continent = {
  slug: string;
  name: string;
  countries: ContinentCountry[];
  editions: ContinentEdition[];
  news: ContinentNews[];
};

/** Same order and listings as the Country Pageants dropdown on angelopedia.com. */
export const CONTINENTS = data as Continent[];

export function continentPath(slug: string) {
  return `/pageants/${slug}`;
}

export function getContinent(slug: string) {
  return CONTINENTS.find((continent) => continent.slug === slug);
}

/** Country pages share the first URL segments of their pageant desks. */
export function countryPath(country: ContinentCountry) {
  const first = country.pageants[0];
  if (first) return first.href.split("/").slice(0, 3).join("/");
  return `/Beauty-Pageants-Info/${countryAnchor(country.name)}`;
}

export function getCountry(segment: string) {
  const path = `/Beauty-Pageants-Info/${decodeURIComponent(segment)}`.toLowerCase();
  for (const continent of CONTINENTS) {
    const country = continent.countries.find((item) => countryPath(item).toLowerCase() === path);
    if (country) return { continent, country };
  }
  return undefined;
}

export function countryAnchor(name: string) {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
