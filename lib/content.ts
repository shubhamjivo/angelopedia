import { PICTURES_HREF } from "@/lib/pictures";
import { MOST_READ_STORIES, newsDeskPath, storyPath } from "@/lib/stories";

export const MOSAIC = [
  {
    title: "Joheirry Mola of the Dominican Republic Is Miss World 2026",
    href: "/news/prague-confirmed-host-73rd-miss-world",
    image: "/images/instagram/mw-joheirry.jpg",
    kicker: "Miss World",
    date: "5 Sep 2026",
    dek: "Crowned in Nha Trang on 5 September, she is the second Miss World from the Dominican Republic.",
  },
  {
    title: "Fátima Bosch Will Crown Her Successor in San Juan",
    href: "/news/bangkok-unveils-the-impact-arena-stage",
    image: "/images/instagram/mu-fatima.jpg",
    kicker: "Miss Universe",
    date: "26 Sep 2026",
    dek: "The 75th Miss Universe is set for 24 November at the José Miguel Agrelot Coliseum.",
  },
  {
    title: "Natálie Puškinová Is Still Miss Earth",
    href: "/news/from-advocacy-to-artistry",
    image: "/images/instagram/me-natalie-desert.jpg",
    kicker: "Miss Earth",
    date: "17 Aug 2026",
    dek: "The Czech titleholder, crowned in Manila in November 2025, is on the road until the next Earth final.",
  },
  {
    title: "Catalina Duque’s Year for the Global Goals",
    href: "/news/the-first-beauty-with-a-purpose-prize",
    image: "/images/instagram/mi-catalina.jpg",
    kicker: "Miss International",
    date: "26 Sep 2026",
    dek: "Colombia’s Miss International 2025 reigns until the Tokyo successor is chosen on 24 November.",
  },
];

export type BigFourTitleholder = {
  name: string;
  year: number;
  country: string;
  title: string;
  image: string;
};

export type BigFourTab = {
  id: "miss-world" | "miss-universe" | "miss-earth" | "miss-international";
  label: string;
  href: string;
  recent: BigFourTitleholder;
  previous: BigFourTitleholder[];
};

export const BIG_FOUR_TABS: BigFourTab[] = [
  {
    id: "miss-world",
    label: "Miss World",
    href: "/miss-world",
    recent: {
      name: "Joheirry Mola",
      year: 2026,
      country: "Dominican Republic",
      title:
        "Joheirry Mola of the Dominican Republic Is Now Miss World",
      image: "/images/instagram/mw-joheirry.jpg",
    },
    previous: [
      {
        name: "Suchata Chuangsri",
        year: 2025,
        country: "Thailand",
        title: "Suchata Chuangsri Became Thailand’s First Miss World",
        image: "/images/titleholders/mw-2025-suchata.jpg",
      },
      {
        name: "Krystyna Pyszková",
        year: 2023,
        country: "Czech Republic",
        title: "Krystyna Pyszková Brought the Crown Back to Czechia",
        image: "/images/titleholders/mw-2023-krystyna.png",
      },
      {
        name: "Karolina Bielawska",
        year: 2021,
        country: "Poland",
        title: "Karolina Bielawska’s Beauty with a Purpose Reign",
        image: "/images/titleholders/mw-2021-karolina.jpg",
      },
      {
        name: "Toni-Ann Singh",
        year: 2019,
        country: "Jamaica",
        title: "Toni-Ann Singh, Jamaica’s Fourth Miss World",
        image: "/images/titleholders/mw-2019-toni-ann.jpg",
      },
    ],
  },
  {
    id: "miss-universe",
    label: "Miss Universe",
    href: "/miss-universe",
    recent: {
      name: "Fátima Bosch",
      year: 2025,
      country: "Mexico",
      title: "Fátima Bosch of Mexico Is Now Miss Universe",
      image: "/images/instagram/mu-fatima.jpg",
    },
    previous: [
      {
        name: "Victoria Kjær Theilvig",
        year: 2024,
        country: "Denmark",
        title: "Victoria Kjær Theilvig Took Denmark’s First Universe Crown",
        image: "/images/titleholders/mu-2024-victoria.jpg",
      },
      {
        name: "Sheynnis Palacios",
        year: 2023,
        country: "Nicaragua",
        title: "Sheynnis Palacios Made History for Nicaragua",
        image: "/images/titleholders/mu-2023-sheynnis.jpg",
      },
      {
        name: "R'Bonney Gabriel",
        year: 2022,
        country: "United States",
        title: "R’Bonney Gabriel, the Designer Who Won Miss Universe",
        image: "/images/titleholders/mu-2022-rbonney.jpg",
      },
      {
        name: "Harnaaz Sandhu",
        year: 2021,
        country: "India",
        title: "Harnaaz Sandhu Brought the Crown Home to India",
        image: "/images/titleholders/mu-2021-harnaaz.jpg",
      },
    ],
  },
  {
    id: "miss-earth",
    label: "Miss Earth",
    href: "/miss-earth",
    recent: {
      name: "Natálie Puškinová",
      year: 2025,
      country: "Czech Republic",
      title:
        "Natálie Puškinová of the Czech Republic Is Now Miss Earth",
      image: "/images/instagram/me-natalie-desert.jpg",
    },
    previous: [
      {
        name: "Jessica Lane",
        year: 2024,
        country: "Australia",
        title: "Jessica Lane Gave Australia a Complete Big Four",
        image: "/images/titleholders/me-2024-jessica.jpg",
      },
      {
        name: "Drita Ziri",
        year: 2023,
        country: "Albania",
        title: "Drita Ziri Became Albania’s First Miss Earth",
        image: "/images/titleholders/me-2023-drita.jpg",
      },
      {
        name: "Mina Sue Choi",
        year: 2022,
        country: "South Korea",
        title: "Mina Sue Choi, South Korea’s Earth Queen",
        image: "/images/titleholders/me-2022-mina.png",
      },
      {
        name: "Destiny Wagner",
        year: 2021,
        country: "Belize",
        title: "Destiny Wagner Carried the Crown for Belize",
        image: "/images/titleholders/me-2021-destiny.jpg",
      },
    ],
  },
  {
    id: "miss-international",
    label: "Miss International",
    href: "/miss-international",
    recent: {
      name: "Catalina Duque",
      year: 2025,
      country: "Colombia",
      title: "Catalina Duque of Colombia Is Now Miss International",
      image: "/images/instagram/mi-catalina.jpg",
    },
    previous: [
      {
        name: "Huỳnh Thị Thanh Thủy",
        year: 2024,
        country: "Vietnam",
        title: "Huỳnh Thị Thanh Thủy Became Vietnam’s First Miss International",
        image: "/images/titleholders/mi-2024-thanhthuy.png",
      },
      {
        name: "Andrea Rubio",
        year: 2023,
        country: "Venezuela",
        title: "Andrea Rubio, Venezuela’s Ninth International Crown",
        image: "/images/titleholders/mi-2023-andrea.jpg",
      },
      {
        name: "Jasmin Selberg",
        year: 2022,
        country: "Germany",
        title: "Jasmin Selberg Took the Title for Germany",
        image: "/images/titleholders/mi-2022-jasmin.jpg",
      },
      {
        name: "Sireethorn Leearamwat",
        year: 2019,
        country: "Thailand",
        title: "Sireethorn Leearamwat, Thailand’s Pharmacist Queen",
        image: "/images/titleholders/mi-2019-sireethorn.jpg",
      },
    ],
  },
];

export const HOME_GALLERY = [
  {
    title: "Beauty with a Purpose",
    meta: "Miss World 2026 · @joheirry_mola",
    href: "https://www.instagram.com/p/DctiVPEkd23/",
    image: "/images/instagram/pictures-joheirry.jpg",
  },
  {
    title: "Fátima Bosch, for Caras",
    meta: "Miss Universe 2025 · Instagram",
    href: "https://www.instagram.com/p/DUDuFMWDgYL/",
    image: "/images/instagram/pictures-fatima.jpg",
  },
  {
    title: "Received at the Old Town Hall",
    meta: "Miss Earth · @missczechrepublic",
    href: "https://www.instagram.com/p/DRNEpknDDrw/",
    image: "/images/instagram/pictures-natalie.jpg",
  },
  {
    title: "The Queen from Medellín",
    meta: "Miss International 2025 · Official",
    href: "https://www.instagram.com/p/DRTKz1lk_5k/",
    image: "/images/instagram/pictures-catalina.jpg",
  },
  {
    title: "Arrivals in Bangkok",
    meta: "Miss Universe 2026 · 19 Photos",
    href: "/gallery",
    image: "/images/gallery-5.jpg",
  },
];

export const NEWS_FILTERS = [
  { href: newsDeskPath(), label: "All" },
  { href: newsDeskPath("opinions"), label: "Opinions" },
  { href: newsDeskPath("beauty-talks"), label: "Beauty Talks" },
  { href: newsDeskPath("featured"), label: "Featured" },
  { href: newsDeskPath("specials"), label: "Specials" },
  { href: newsDeskPath("in-pictures"), label: "News In Pictures" },
  { href: "/videos", label: "Angelopedia Exclusive" },
];

export const MOST_READ = MOST_READ_STORIES.map((story) => ({
  title: story.title,
  href: storyPath(story),
}));

export const FOLLOW_PAGEANTS = [
  { href: "/miss-universe", label: "Miss Universe" },
  { href: "/miss-world", label: "Miss World" },
  { href: "/miss-earth", label: "Miss Earth" },
  { href: "/miss-international", label: "Miss International" },
  { href: "/other-pageants/miss-supranational", label: "Supranational" },
  { href: "/other-pageants/miss-grand-international", label: "Grand International" },
  { href: "/pageants", label: "Miss India" },
  { href: "/pageants", label: "Miss USA" },
  { href: "/pageants", label: "Binibining Pilipinas" },
  { href: "/pageants", label: "Miss Venezuela" },
];

export const CONTESTANT = {
  slug: "isabelle-fontaine",
  kicker: "Delegate Profile · France",
  name: "Isabelle Fontaine",
  subtitle: "Miss France 2026 · Bound for Bangkok",
  image: "/images/contestant.jpg",
  caption: "Portrait · Lyon, June 2026",
  facts: [
    { label: "Age", value: "24" },
    { label: "Height", value: "1.78 m" },
    { label: "Hometown", value: "Lyon, Auvergne-Rhône-Alpes" },
    { label: "Education", value: "M.Arch, École de Lyon" },
    { label: "Advocacy", value: "Adult Literacy — “Lire Encore”" },
  ],
  story: [
    "The night Isabelle Fontaine was crowned, she thanked three people: her mother, her thesis adviser, and a woman named Colette — a seventy-one year old from her literacy programme who read her first novel last spring. It was, pageant historians noted, the first time an acceptance speech had cited a bibliography.",
    "Fontaine is part of a generation refashioning what a national titleholder looks like. By day she works in a Lyon architecture practice restoring social housing; her weekends belong to “Lire Encore”, the adult literacy initiative she founded at twenty-one, now operating in fourteen cities. The sash, she says, is scaffolding — a structure you climb to build something taller.",
    "In Bangkok this November she will carry France's best hopes in a decade. Bookmakers have noticed; so have we.",
  ],
  milestones: [
    { year: "2022", text: "Founds Lire Encore, an adult literacy nonprofit in Lyon" },
    { year: "2024", text: "Graduates with distinction, M.Arch, École de Lyon" },
    { year: "2025", text: "Crowned Miss Auvergne-Rhône-Alpes on first attempt" },
    { year: "2026", text: "Crowned Miss France, Paris — standing ovation for final answer" },
    { year: "Nov 2026", text: "Competes at Miss Universe, Bangkok" },
  ],
  photos: [
    { title: "The Crowning Moment", meta: "Paris · July 2026", image: "/images/contestant.jpg" },
    { title: "First Portrait Session", meta: "Lyon Studio", image: "/images/news-isabelle.png" },
    { title: "With Lire Encore", meta: "Marseille Chapter", image: "/images/article-inline.jpg" },
    { title: "Evening Gown Fitting", meta: "Atelier Rousseau", image: "/images/queens-6.jpg" },
  ],
};

export const GALLERY_FILTERS = [
  "All",
  "Coronations",
  "Runway",
  "National Costume",
  "Backstage",
  "Portraits",
];

export const GALLERIES = [
  {
    title: "The Coronation Night",
    meta: "Miss Universe 2025 · 42 Photos",
    image: "/images/gallery-1.jpg",
  },
  {
    title: "The Evening Gowns",
    meta: "Miss International 2025 · 31 Photos",
    image: "/images/gallery-4.jpg",
  },
  {
    title: "Preliminaries, Golden Hour",
    meta: "Miss Supranational · 24 Photos",
    image: "/images/contestant.jpg",
  },
  {
    title: "National Costume Parade",
    meta: "Miss World 2025 · 36 Photos",
    image: "/images/gallery-2.jpg",
  },
  {
    title: "Isabelle, First Portraits",
    meta: "Miss France 2026 · 14 Photos",
    image: "/images/news-isabelle.png",
  },
  {
    title: "A Decade of Queens",
    meta: "Retrospective · 50 Photos",
    image: "/images/mosaic-grand.jpg",
  },
  {
    title: "Backstage, Unscripted",
    meta: "Miss Earth 2025 · 28 Photos",
    image: "/images/gallery-3.jpg",
  },
  {
    title: "Arrivals in Bangkok",
    meta: "Miss Universe 2026 · 19 Photos",
    image: "/images/gallery-5.jpg",
  },
  {
    title: "The Grand Gala",
    meta: "Miss Grand International · 22 Photos",
    image: "/images/mosaic-ana.jpg",
  },
];

export type Poll = {
  kicker: string;
  question: string;
  options: string[];
  note: string;
};

export const POLLS: Poll[] = [
  {
    kicker: "Poll of the month · 46,213 votes",
    question: "Which continent takes the Miss Universe 2026 crown?",
    options: ["The Americas", "Asia", "Europe", "Africa & Oceania"],
    note: "Voting closes November 20 · One vote per reader",
  },
  {
    kicker: "This week · 12,904 votes",
    question: "Best national costume of the season so far?",
    options: [
      "Thailand — “The River Queen”",
      "Philippines — “Sampaguita in Bloom”",
      "Mexico — “Monarcas”",
      "France — “L’Aube”",
    ],
    note: "Closes Sunday midnight",
  },
];

export const LEADERBOARD = [
  { rank: 1, handle: "@crownwatcher_mnl", score: "2,140" },
  { rank: 2, handle: "@sashfactor", score: "2,085" },
  { rank: 3, handle: "@reina.predicts", score: "1,990" },
  { rank: 4, handle: "@pageant_atlas", score: "1,875" },
  { rank: 5, handle: "@missology_fr", score: "1,820" },
];

export const PAGEANT_DIRECTORY = [
  {
    continent: "Asia",
    count: "28 nations",
    nations: [
      { name: "India", count: "12 pageants" },
      { name: "Japan", count: "5 pageants" },
      { name: "South Korea", count: "4 pageants" },
      { name: "Nepal", count: "3 pageants" },
      { name: "Philippines", count: "9 pageants" },
      { name: "Indonesia", count: "6 pageants" },
      { name: "Malaysia", count: "4 pageants" },
      { name: "China", count: "3 pageants" },
      { name: "Thailand", count: "7 pageants" },
      { name: "Vietnam", count: "8 pageants" },
      { name: "Sri Lanka", count: "3 pageants" },
      { name: "Singapore", count: "2 pageants" },
    ],
  },
  {
    continent: "Europe",
    count: "24 nations",
    nations: [
      { name: "France", count: "4 pageants" },
      { name: "Italy", count: "3 pageants" },
      { name: "Portugal", count: "3 pageants" },
      { name: "Ukraine", count: "3 pageants" },
      { name: "United Kingdom", count: "5 pageants" },
      { name: "Germany", count: "3 pageants" },
      { name: "Czechia", count: "3 pageants" },
      { name: "Finland", count: "2 pageants" },
      { name: "Spain", count: "4 pageants" },
      { name: "Netherlands", count: "4 pageants" },
      { name: "Poland", count: "4 pageants" },
      { name: "Albania", count: "2 pageants" },
    ],
  },
  {
    continent: "The Americas",
    count: "31 nations",
    nations: [
      { name: "United States", count: "8 pageants" },
      { name: "Brazil", count: "6 pageants" },
      { name: "Canada", count: "4 pageants" },
      { name: "Nicaragua", count: "2 pageants" },
      { name: "Venezuela", count: "8 pageants" },
      { name: "Mexico", count: "5 pageants" },
      { name: "Peru", count: "3 pageants" },
      { name: "Panama", count: "3 pageants" },
      { name: "Colombia", count: "5 pageants" },
      { name: "Puerto Rico", count: "4 pageants" },
      { name: "Argentina", count: "3 pageants" },
      { name: "Chile", count: "2 pageants" },
    ],
  },
  {
    continent: "Africa & Oceania",
    count: "26 nations",
    nations: [
      { name: "South Africa", count: "5 pageants" },
      { name: "Ghana", count: "3 pageants" },
      { name: "Australia", count: "3 pageants" },
      { name: "Papua New Guinea", count: "1 pageant" },
      { name: "Nigeria", count: "4 pageants" },
      { name: "Senegal", count: "2 pageants" },
      { name: "New Zealand", count: "2 pageants" },
      { name: "Kenya", count: "3 pageants" },
      { name: "Egypt", count: "2 pageants" },
      { name: "Fiji", count: "1 pageant" },
    ],
  },
];

export const FOOTER_COLUMNS = [
  {
    heading: "Pageants",
    links: [
      { href: "/miss-universe", label: "Miss Universe" },
      { href: "/miss-world", label: "Miss World" },
      { href: "/miss-earth", label: "Miss Earth" },
      { href: "/miss-international", label: "Miss International" },
      { href: "/other-pageants", label: "Other Pageants" },
      { href: "/pageants", label: "Pageants A–Z" },
    ],
  },
  {
    heading: "Editorial",
    links: [
      { href: "/news", label: "The Latest" },
      { href: newsDeskPath("opinions"), label: "Opinions" },
      { href: newsDeskPath("beauty-talks"), label: "Beauty Talks" },
      { href: "/fashion-and-beauty", label: "Fashion and Beauty" },
      { href: PICTURES_HREF, label: "News In Pictures" },
      { href: "/gallery", label: "Photographs" },
      { href: "/videos", label: "Videos" },
    ],
  },
  {
    heading: "Angelopedia",
    links: [
      { href: "/play", label: "Play Zone" },
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact" },
      { href: "/advertise", label: "Advertise" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
];

export const SOCIAL_LINKS = [
  { href: "https://www.instagram.com/angelopedia", label: "Instagram" },
  { href: "https://www.tiktok.com/@angelopedia", label: "TikTok" },
  { href: "https://www.youtube.com/@angelopedia", label: "YouTube" },
  { href: "https://x.com/angelopedia", label: "X" },
];

export const HEADER_SOCIAL = [
  { href: "https://www.facebook.com/angelo.pedia", label: "Facebook" },
  { href: "https://twitter.com/AngelopediaNews", label: "Twitter" },
  { href: "https://www.pinterest.com/angelopedianews", label: "Pinterest" },
  { href: "https://www.youtube.com/channel/UCnV5wmGZhQMgEcHMjv_Xu8w", label: "YouTube" },
] as const;
