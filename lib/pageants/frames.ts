export type Frame = {
  src: string;
  alt: string;
};

const NAMED: { re: RegExp; frame: Frame }[] = [
  { re: /joheirry/i, frame: { src: "/images/instagram/mw-joheirry.jpg", alt: "Joheirry Mola, Miss World" } },
  { re: /suchata/i, frame: { src: "/images/titleholders/mw-2025-suchata.jpg", alt: "Suchata Chuangsri, Miss World 2025" } },
  { re: /krystyna/i, frame: { src: "/images/titleholders/mw-2023-krystyna.png", alt: "Krystyna Pyszková, Miss World 2023" } },
  { re: /bielawska/i, frame: { src: "/images/titleholders/mw-2021-karolina.jpg", alt: "Karolina Bielawska, Miss World 2021" } },
  { re: /toni-ann|toni ann/i, frame: { src: "/images/titleholders/mw-2019-toni-ann.jpg", alt: "Toni-Ann Singh, Miss World 2019" } },
  { re: /anudi/i, frame: { src: "/images/mosaic-anudi.jpg", alt: "Anudi Gunasekara, Miss World Sri Lanka" } },
  { re: /krishnah/i, frame: { src: "/images/krishnah.jpg", alt: "Krishnah Gravidez" } },
  { re: /harnaaz/i, frame: { src: "/images/titleholders/mu-2021-harnaaz.jpg", alt: "Harnaaz Sandhu, Miss Universe 2021" } },
  { re: /f[aá]tima bosch|fatima bosch/i, frame: { src: "/images/instagram/mu-fatima.jpg", alt: "Fátima Bosch, Miss Universe" } },
  { re: /r.?bonney/i, frame: { src: "/images/titleholders/mu-2022-rbonney.jpg", alt: "R'Bonney Gabriel, Miss Universe 2022" } },
  { re: /sheynnis/i, frame: { src: "/images/titleholders/mu-2023-sheynnis.jpg", alt: "Sheynnis Palacios, Miss Universe 2023" } },
  { re: /kj[aæ]r|theilvig/i, frame: { src: "/images/titleholders/mu-2024-victoria.jpg", alt: "Victoria Kjær Theilvig, Miss Universe 2024" } },
  { re: /suzana/i, frame: { src: "/images/suzana.jpg", alt: "Suzana Renaud, Miss Universe Thailand" } },
  { re: /destiny wagner/i, frame: { src: "/images/titleholders/me-2021-destiny.jpg", alt: "Destiny Wagner, Miss Earth 2021" } },
  { re: /pu[sš]kin/i, frame: { src: "/images/instagram/me-natalie-desert.jpg", alt: "Natálie Puškinová, Miss Earth" } },
  { re: /drita/i, frame: { src: "/images/titleholders/me-2023-drita.jpg", alt: "Drita Ziri, Miss Earth 2023" } },
  { re: /mina sue/i, frame: { src: "/images/titleholders/me-2022-mina.png", alt: "Mina Sue Choi, Miss Earth 2022" } },
  { re: /jessica lane/i, frame: { src: "/images/titleholders/me-2024-jessica.jpg", alt: "Jessica Lane, Miss Earth 2024" } },
  { re: /grace sugawara/i, frame: { src: "/images/grace.jpg", alt: "Grace Sugawara, Miss Earth Japan Hokkaido" } },
  { re: /catalina duque/i, frame: { src: "/images/instagram/mi-catalina.jpg", alt: "Catalina Duque, Miss International" } },
  { re: /sireethorn/i, frame: { src: "/images/titleholders/mi-2019-sireethorn.jpg", alt: "Sireethorn Leearamwat, Miss International 2019" } },
  { re: /jasmin selberg/i, frame: { src: "/images/titleholders/mi-2022-jasmin.jpg", alt: "Jasmin Selberg, Miss International 2022" } },
  { re: /andrea rubio/i, frame: { src: "/images/titleholders/mi-2023-andrea.jpg", alt: "Andrea Rubio, Miss International 2023" } },
  { re: /thanh th[uủ]y|thanhthuy/i, frame: { src: "/images/titleholders/mi-2024-thanhthuy.png", alt: "Huỳnh Thị Thanh Thủy, Miss International 2024" } },
  { re: /harashta/i, frame: { src: "/images/harashta.jpg", alt: "Harashta Haifa Zahra, Miss Supranational 2024" } },
  { re: /perestrello/i, frame: { src: "/images/ines.jpg", alt: "Inês Perestrello, Miss Grand Portugal 2024" } },
];

const POOLS: Record<string, Frame[]> = {
  "miss-world": [
    { src: "/images/instagram/mw-crowning.jpg", alt: "Miss World on the coronation stage" },
    { src: "/images/instagram/mw-joheirry.jpg", alt: "Joheirry Mola, Miss World" },
    { src: "/images/titleholders/mw-2021-karolina.jpg", alt: "Karolina Bielawska, Miss World 2021" },
    { src: "/images/titleholders/mw-2019-toni-ann.jpg", alt: "Toni-Ann Singh, Miss World 2019" },
    { src: "/images/instagram/mw-court.jpg", alt: "The Miss World court" },
    { src: "/images/titleholders/mw-2025-suchata.jpg", alt: "Suchata Chuangsri, Miss World 2025" },
  ],
  "miss-universe": [
    { src: "/images/instagram/mu-fatima.jpg", alt: "Fátima Bosch, Miss Universe" },
    { src: "/images/titleholders/mu-2021-harnaaz.jpg", alt: "Harnaaz Sandhu, Miss Universe 2021" },
    { src: "/images/titleholders/mu-2024-victoria.jpg", alt: "Victoria Kjær Theilvig, Miss Universe 2024" },
    { src: "/images/titleholders/mu-2023-sheynnis.jpg", alt: "Sheynnis Palacios, Miss Universe 2023" },
    { src: "/images/instagram/mu-interview.jpg", alt: "Miss Universe interview" },
    { src: "/images/titleholders/mu-2022-rbonney.jpg", alt: "R'Bonney Gabriel, Miss Universe 2022" },
  ],
  "miss-earth": [
    { src: "/images/instagram/me-natalie-desert.jpg", alt: "Natálie Puškinová, Miss Earth" },
    { src: "/images/titleholders/me-2021-destiny.jpg", alt: "Destiny Wagner, Miss Earth 2021" },
    { src: "/images/titleholders/me-2024-jessica.jpg", alt: "Jessica Lane, Miss Earth 2024" },
    { src: "/images/instagram/me-natalie.jpg", alt: "Natálie Puškinová" },
    { src: "/images/titleholders/me-2023-drita.jpg", alt: "Drita Ziri, Miss Earth 2023" },
    { src: "/images/titleholders/me-2022-mina.png", alt: "Mina Sue Choi, Miss Earth 2022" },
  ],
  "miss-international": [
    { src: "/images/instagram/mi-catalina.jpg", alt: "Catalina Duque, Miss International" },
    { src: "/images/titleholders/mi-2019-sireethorn.jpg", alt: "Sireethorn Leearamwat, Miss International 2019" },
    { src: "/images/instagram/mi-catalina-head.jpg", alt: "Catalina Duque" },
    { src: "/images/titleholders/mi-2023-andrea.jpg", alt: "Andrea Rubio, Miss International 2023" },
    { src: "/images/titleholders/mi-2022-jasmin.jpg", alt: "Jasmin Selberg, Miss International 2022" },
    { src: "/images/titleholders/mi-2024-thanhthuy.png", alt: "Huỳnh Thị Thanh Thủy, Miss International 2024" },
  ],
  "miss-grand-international": [
    { src: "/images/mosaic-grand.jpg", alt: "Miss Grand International" },
    { src: "/images/ines.jpg", alt: "Inês Perestrello, Miss Grand Portugal 2024" },
  ],
  "miss-supranational": [
    { src: "/images/harashta.jpg", alt: "Harashta Haifa Zahra, Miss Supranational 2024" },
  ],
};

const TAB_SHIFT: Record<string, number> = {
  info: 0,
  news: 1,
  hall: 2,
  contestants: 3,
  winners: 4,
  photos: 2,
  videos: 1,
  edition: 4,
  "edition-news": 1,
};

export function slugFromPath(basePath: string) {
  return basePath.split("/").filter(Boolean).pop() ?? "";
}

export function matchNamed(text: string) {
  return NAMED.find((item) => item.re.test(text))?.frame;
}

export function framesFor(basePath: string) {
  return POOLS[slugFromPath(basePath)] ?? [];
}

export const SAMPLE_FRAMES: Frame[] = [
  { src: "/images/samples/karolina.jpg", alt: "Sample · Karolina Bielawska" },
  { src: "/images/samples/manushi.jpg", alt: "Sample · Manushi Chhillar" },
  { src: "/images/samples/megan.jpg", alt: "Sample · Megan Young" },
  { src: "/images/samples/rolene.jpg", alt: "Sample · Rolene Strauss" },
  { src: "/images/samples/universe-2021.jpg", alt: "Sample · Miss Universe 2021" },
  { src: "/images/samples/camille.jpg", alt: "Sample · Camille Munro" },
];

export function sampleFrame(index: number) {
  return SAMPLE_FRAMES[Math.abs(index) % SAMPLE_FRAMES.length];
}

function withSamples(frames: Frame[], shift: number) {
  const padded = [...frames];
  let step = 0;
  while (padded.length < 3 && step < SAMPLE_FRAMES.length) {
    const sample = SAMPLE_FRAMES[(shift + step) % SAMPLE_FRAMES.length];
    if (!padded.some((frame) => frame.src === sample.src)) padded.push(sample);
    step += 1;
  }
  return padded.slice(0, 3);
}

export function pictureFor(item: { title: string; dek: string; image?: string }) {
  if (item.image) return { src: item.image, alt: item.title };
  return matchNamed(`${item.title} ${item.dek}`);
}

export function openingFrames(
  basePath: string,
  tabId: string,
  editionName: string,
  featured?: { title: string; dek: string; image?: string },
) {
  const pool = framesFor(basePath);
  const named = featured ? pictureFor(featured) : undefined;
  const year = editionName.match(/\b(20\d{2})\b/)?.[1];
  const editionFrame =
    year && (tabId === "winners" || tabId === "contestants" || tabId === "videos" || tabId === "edition")
      ? pool.find((frame) => frame.alt.includes(year))
      : undefined;
  const shift = TAB_SHIFT[tabId] ?? 0;
  const lead = named ?? editionFrame ?? pool[shift % Math.max(pool.length, 1)];
  if (!lead) return withSamples([], shift);
  const rest = pool.filter((frame) => frame.src !== lead.src);
  return withSamples([lead, ...rest], shift);
}
