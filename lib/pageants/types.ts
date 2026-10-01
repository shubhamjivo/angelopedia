export type ReactionCounts = {
  like: number;
  dislike: number;
  love: number;
  flower: number;
};

export type PageantPiece = {
  kicker: string;
  title: string;
  dek: string;
  byline: string;
  image?: string;
  href?: string;
  reactions?: ReactionCounts;
};

export type PageantLayout =
  | "cards"
  | "essay"
  | "news"
  | "roll"
  | "portraits"
  | "results"
  | "videos"
  | "photos"
  | "brief";

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
