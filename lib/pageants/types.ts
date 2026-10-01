export type PageantPiece = {
  kicker: string;
  title: string;
  dek: string;
  byline: string;
  image?: string;
  href?: string;
};

export type PageantLayout = "cards" | "essay" | "news" | "roll" | "portraits" | "results" | "videos";

export type PageantTab = {
  id: string;
  label: string;
  dek: string;
  body: string[];
  pieces: PageantPiece[];
  layout?: PageantLayout;
};

export type PageantDesk = {
  slug: string;
  name: string;
  basePath: string;
  editionName: string;
  tabs: PageantTab[];
};
