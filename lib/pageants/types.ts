export type PageantPiece = {
  kicker: string;
  title: string;
  dek: string;
  byline: string;
  image?: string;
  href?: string;
};

export type PageantTab = {
  id: string;
  label: string;
  dek: string;
  body: string[];
  pieces: PageantPiece[];
};

export type PageantDesk = {
  slug: string;
  name: string;
  basePath: string;
  editionName: string;
  tabs: PageantTab[];
};
