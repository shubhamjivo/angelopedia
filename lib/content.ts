export const MOSAIC = [
  {
    title: "Host Countries Announced for Miss Grand International 2024",
    href: "/news/miss-grand-international-2024-hosts",
    image: "/images/mosaic-grand.jpg",
    size: "feature" as const,
  },
  {
    title:
      "Miss Universe Nepal 2023 Jane Dipika Garrett Drops a Motivational Video",
    href: "/news/jane-dipika-garrett-video",
    image: "/images/mosaic-jane.jpg",
    size: "wide" as const,
  },
  {
    title: "Ana Luísa Silva crowned Miss Globe Portugal 2024",
    href: "/news/ana-luisa-silva-miss-globe-portugal",
    image: "/images/mosaic-ana.jpg",
    size: "half" as const,
  },
  {
    title: "Anudi Gunasekara crowned Miss World Sri Lanka 2024",
    href: "/news/anudi-gunasekara-miss-world-sri-lanka",
    image: "/images/mosaic-anudi.jpg",
    size: "half" as const,
  },
];

export const LATEST_FEATURED = {
  title: "Inês Perestrello Is Crowned Miss Grand Portugal 2024",
  dek: "The Lisbon-born titleholder closed the night with a walk that filled the hall — and an interview on literacy that drew the evening’s only standing ovation.",
  byline: "Story by Angelopedia · Photographs by Angelopedia Studio",
  href: "/news/ines-perestrello-miss-grand-portugal",
  image: "/images/ines.jpg",
};

export const LATEST_SIDE = [
  {
    title: "Grace Sugawara, Miss Earth Japan Hokkaido, Is a Beauty with a Brain",
    href: "/news/grace-sugawara",
    image: "/images/grace.jpg",
    byline: "Story by Angelopedia",
  },
  {
    title: "Krishnah Gravidez, a Strong Contender of Miss World Philippines 2024",
    href: "/news/krishnah-gravidez",
    image: "/images/krishnah.jpg",
    byline: "Story by Angelopedia",
  },
  {
    title: "Suzana Renaud’s Journey to First Runner-Up at Miss Universe Thailand",
    href: "/news/suzana-renaud",
    image: "/images/suzana.jpg",
    byline: "Story by Angelopedia",
  },
  {
    title: "Harashta Haifa Zahra Sets New Milestones as Miss Supranational 2024",
    href: "/news/harashta-zahra",
    image: "/images/harashta.jpg",
    byline: "Story by Angelopedia",
  },
];

export const OPINIONS = [
  {
    title: "Our Top 5 Favourites of Miss Earth Japan 2024",
    href: "/news/miss-earth-japan-top-5-favourites-2024",
    image: "/images/opinions/earth-japan.jpg",
    byline: "26 Jul 2024 · Irina Silva",
  },
  {
    title: "Our Top 5 Favourites of Miss Universe Japan 2024",
    href: "/news/miss-universe-japan-top-5-favourites-2024",
    image: "/images/opinions/universe-japan.jpg",
    byline: "25 Jul 2024 · Camilla Saurez",
  },
  {
    title: "Our Top 5 Favourites of Miss World Philippines 2024",
    href: "/news/miss-world-philippines-top-5-favourites-2024",
    image: "/images/opinions/world-philippines.jpg",
    byline: "17 Jul 2024 · Camilla Saurez",
  },
  {
    title: "Our Top 5 Favourites of Miss Universe Thailand 2024",
    href: "/news/miss-universe-thailand-top-5-favourites-2024",
    image: "/images/opinions/universe-thailand.jpg",
    byline: "14 Jul 2024 · Camilla Saurez",
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
      image: "/images/titleholders/mw-2026-joheirry.png",
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
      image: "/images/titleholders/mu-2025-fatima.jpg",
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
      image: "/images/titleholders/me-2025-natalie.jpg",
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
      image: "/images/titleholders/mi-2025-catalina.jpg",
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
    title: "The Coronation Night",
    meta: "Miss Universe 2025 · 42 Photos",
    href: "/gallery",
    image: "/images/gallery-1.jpg",
  },
  {
    title: "National Costume",
    meta: "Miss World 2025 · 36 Photos",
    href: "/gallery",
    image: "/images/gallery-2.jpg",
  },
  {
    title: "Backstage, Unscripted",
    meta: "Miss Earth 2025 · 28 Photos",
    href: "/gallery",
    image: "/images/gallery-3.jpg",
  },
  {
    title: "The Evening Gowns",
    meta: "Miss International · 31 Photos",
    href: "/gallery",
    image: "/images/gallery-4.jpg",
  },
  {
    title: "Arrivals in Bangkok",
    meta: "Miss Universe 2026 · 19 Photos",
    href: "/gallery",
    image: "/images/gallery-5.jpg",
  },
];

export type WatchNowClip = {
  title: string;
  kicker: string;
  image: string;
  href: string;
};

export type WatchNowTab = {
  id: "finals" | "interviews" | "masterclass" | "documentaries";
  label: string;
  href: string;
  featured: WatchNowClip;
  items: WatchNowClip[];
};

export const WATCH_NOW_TABS: WatchNowTab[] = [
  {
    id: "finals",
    label: "Finals",
    href: "/videos",
    featured: {
      title: "The Final Question — Every Answer That Won a Crown",
      kicker: "Film · 12:48",
      image: "/images/video-1.png",
      href: "/videos",
    },
    items: [
      {
        title: "Coronation Night in Three Minutes — Extended Cut",
        kicker: "Highlights · 3:12",
        image: "/images/video-1.png",
        href: "/videos",
      },
      {
        title: "Miss Universe 2025: The Last Five",
        kicker: "Finals · 9:20",
        image: "/images/four-1.png",
        href: "/videos",
      },
      {
        title: "Miss World 2026: The Crowning in Nha Trang",
        kicker: "Finals · 7:04",
        image: "/images/four-5.jpg",
        href: "/videos",
      },
      {
        title: "Miss Earth 2025: Silver Anniversary Night",
        kicker: "Finals · 8:41",
        image: "/images/four-4.png",
        href: "/videos",
      },
    ],
  },
  {
    id: "interviews",
    label: "Interviews",
    href: "/videos",
    featured: {
      title: "Isabelle Fontaine: The First Interview",
      kicker: "Interview · 7:18",
      image: "/images/contestant.jpg",
      href: "/videos",
    },
    items: [
      {
        title: "Joheirry Mola on Beauty with a Purpose",
        kicker: "Interview · 11:02",
        image: "/images/titleholders/mw-2026-joheirry.png",
        href: "/videos",
      },
      {
        title: "Fátima Bosch After the Bangkok Crown",
        kicker: "Interview · 8:55",
        image: "/images/titleholders/mu-2025-fatima.jpg",
        href: "/videos",
      },
      {
        title: "Catalina Duque: Sisterhood in Tokyo",
        kicker: "Interview · 6:30",
        image: "/images/titleholders/mi-2025-catalina.jpg",
        href: "/videos",
      },
      {
        title: "Natálie Puškinová on Beauties for a Cause",
        kicker: "Interview · 9:14",
        image: "/images/titleholders/me-2025-natalie.jpg",
        href: "/videos",
      },
    ],
  },
  {
    id: "masterclass",
    label: "Masterclass",
    href: "/videos",
    featured: {
      title: "The Walk: A Masterclass in Ten Steps",
      kicker: "Masterclass · 6:40",
      image: "/images/video-4.png",
      href: "/videos",
    },
    items: [
      {
        title: "Inside the Atelier: Making a National Costume",
        kicker: "Craft · 8:12",
        image: "/images/video-2.png",
        href: "/videos",
      },
      {
        title: "Beauty Talks: The Quiet-Luxury Makeup Episode",
        kicker: "Series · 9:55",
        image: "/images/news-beauty.png",
        href: "/videos",
      },
      {
        title: "Evening Gown: How to Own the Last Look",
        kicker: "Masterclass · 5:28",
        image: "/images/gallery-4.jpg",
        href: "/videos",
      },
      {
        title: "The Interview Table: Ninety Seconds to the Crown",
        kicker: "Masterclass · 10:07",
        image: "/images/news-opinion.png",
        href: "/videos",
      },
    ],
  },
  {
    id: "documentaries",
    label: "Documentaries",
    href: "/videos",
    featured: {
      title: "Valentina Herrera: One Year with the Crown",
      kicker: "Documentary · 15:03",
      image: "/images/video-3.png",
      href: "/videos",
    },
    items: [
      {
        title: "The Final Question — Every Answer That Won a Crown",
        kicker: "Film · 12:48",
        image: "/images/video-1.png",
        href: "/videos",
      },
      {
        title: "From Advocacy to Artistry",
        kicker: "Documentary · 14:22",
        image: "/images/news-earth.png",
        href: "/videos",
      },
      {
        title: "A Decade of Queens",
        kicker: "Film · 18:10",
        image: "/images/mosaic-grand.jpg",
        href: "/videos",
      },
      {
        title: "Host City: Bangkok’s Diamond Jubilee",
        kicker: "Documentary · 11:36",
        image: "/images/news-bangkok.jpg",
        href: "/videos",
      },
    ],
  },
];

export const NEWS_FILTERS = [
  { href: "/news", label: "All" },
  { href: "/news?section=opinions", label: "Opinions" },
  { href: "/news?section=beauty-talks", label: "Beauty Talks" },
  { href: "/news?section=featured", label: "Featured" },
  { href: "/news?section=specials", label: "Specials" },
  { href: "/news?section=in-pictures", label: "In Pictures" },
];

export const NEWS_FEATURED = {
  slug: "bangkok-unveils-the-impact-arena-stage",
  kicker: "Breaking",
  title: "Bangkok Unveils the Impact Arena Stage for Miss Universe's 75th Anniversary",
  dek: "A 360-degree runway, a live orchestra and the largest broadcast footprint in pageant history — Thailand intends to make the diamond jubilee unforgettable.",
  byline: "By Nared Suksawat · July 17, 2026",
  image: "/images/news-bangkok.jpg",
  href: "/news/the-year-of-grace",
};

export const NEWS_FEED = [
  {
    slug: "prague-confirmed-host-73rd-miss-world",
    kicker: "Miss World",
    title: "Prague Confirmed as Host City for the 73rd Miss World Festival",
    dek: "The Czech capital beat bids from three continents; organisers promise a month-long festival of arts, sport and the Beauty with a Purpose gala.",
    date: "July 16, 2026",
    image: "/images/news-prague.png",
    href: "/news/prague-confirmed-host-73rd-miss-world",
  },
  {
    slug: "isabelle-fontaine-crowned-miss-france",
    kicker: "National",
    title: "Isabelle Fontaine Crowned Miss France — A Story Written in Lyon",
    dek: "The 24-year-old architect closed the show with an interview answer on literacy that drew the evening's only standing ovation.",
    date: "July 15, 2026",
    image: "/images/news-isabelle.png",
    href: "/contestants/isabelle-fontaine",
  },
  {
    slug: "from-advocacy-to-artistry",
    kicker: "Miss Earth",
    title: "From Advocacy to Artistry: The New Face of Environmental Pageantry",
    dek: "Miss Earth's 2026 cycle introduces a project-based advocacy score — delegates will be judged on measurable impact, not manifests.",
    date: "July 14, 2026",
    image: "/images/news-earth.png",
    href: "/news/from-advocacy-to-artistry",
  },
  {
    slug: "why-the-interview-round-now-decides",
    kicker: "Opinion",
    title: "Why the Interview Round Now Decides Every Major Crown",
    dek: "Gowns dazzle and walks command, but the last five international titles were all won at a table, under a single spotlight, in ninety seconds.",
    date: "July 13, 2026",
    image: "/images/news-opinion.png",
    href: "/news/why-the-interview-round-now-decides",
  },
  {
    slug: "quiet-luxury-of-pageant-beauty",
    kicker: "Beauty Talks",
    title: "The Quiet Luxury of Pageant Beauty: Less Shimmer, More Skin",
    dek: "Backstage artists from three continents on the decade's biggest shift — and the five products they will not board a plane without.",
    date: "July 12, 2026",
    image: "/images/news-beauty.png",
    href: "/news/quiet-luxury-of-pageant-beauty",
  },
  {
    slug: "forty-two-frames-from-coronation-night",
    kicker: "In Pictures",
    title: "Forty-Two Frames from Coronation Night",
    dek: "Our photographers had the wings, the runway and the confetti drop. This is the night in full, from first look to final walk.",
    date: "July 11, 2026",
    image: "/images/gallery-1.jpg",
    href: "/gallery",
  },
];

export const MOST_READ = [
  "The Year of Grace: Inside the Road to Miss Universe 2026",
  "Isabelle Fontaine Crowned Miss France",
  "Beyond the Sash: How a Crown Became a Career",
  "Prague to Host the 73rd Miss World",
  "Prediction: Who Takes the 2026 Crown?",
];

export const FOLLOW_PAGEANTS = [
  { href: "/miss-universe", label: "Miss Universe" },
  { href: "/miss-world", label: "Miss World" },
  { href: "/miss-earth", label: "Miss Earth" },
  { href: "/miss-international", label: "Miss International" },
  { href: "/pageants", label: "Supranational" },
  { href: "/pageants", label: "Grand International" },
  { href: "/pageants", label: "Miss India" },
  { href: "/pageants", label: "Miss USA" },
  { href: "/pageants", label: "Binibining Pilipinas" },
  { href: "/pageants", label: "Miss Venezuela" },
];

export const ARTICLE = {
  slug: "the-year-of-grace",
  kicker: "The Cover · Miss Universe",
  title: "The Year of Grace: Inside the Road to Miss Universe 2026",
  dek: "Seventy-five years after the first crown, the world's most-watched pageant reinvents itself for a new generation — and 130 nations are answering the call.",
  byline: "By Amara Castellanos",
  credit: "Photography L. Devereux",
  date: "July 17, 2026",
  hero: "/images/news-bangkok.jpg",
  inline: "/images/article-inline.jpg",
  caption: "Barrasquilla, day twelve — the opening number takes shape",
  tags: ["Miss Universe", "2026 Season", "Thailand", "Cover Story"],
  paragraphs: [
    "Bangkok in July is a city rehearsing. In the vast cool dark of the Impact Arena, carpenters are building a runway shaped like a lotus in first bloom; in a hotel ballroom across the river, a choreographer counts to eight in three languages at once. Everyone here is preparing for November, when one hundred and thirty women will arrive carrying the hopes of one hundred and thirty nations — and the 75th anniversary of the most-watched pageant on earth will begin.",
    "It is tempting to describe Miss Universe as unchanged — the crown, the sash, the single impossible question. But the institution turning seventy-five this year is quietly unrecognisable. The swimsuit score is gone. The age ceiling is gone. The interview, once a formality, is now the axis on which every campaign turns.",
  ],
  quote: {
    text: "We are not choosing a face. We are choosing a voice that a billion people will hear.",
    credit: "Anuchit Vorachai · Executive Producer, MU 2026",
  },
  more: [
    "The numbers tell the story of the new era. Applications to national franchises rose forty percent this cycle. The average delegate now arrives with a university degree, a founded organisation, and a media following that would flatter a mid-sized broadcaster. The pageant, in return, has professionalised: contracted stylists, media training, and a year-long calendar that treats the titleholder less like an ornament and more like a head of state on tour.",
    "What has not changed is the walk. Ten steps, a turn, ten steps more. Every woman who has ever worn the crown describes the same silence — the moment the music drops away and the arena holds its breath. In November, in Bangkok, one hundred and thirty women will chase that silence. One will own it.",
  ],
};

export const READ_NEXT = [
  {
    kicker: "The Long Read",
    title: "Beyond the Sash: How a Crown Became a Career",
    href: "/news/beyond-the-sash",
    image: "/images/news-isabelle.png",
  },
  {
    kicker: "Profile",
    title: "Isabelle Fontaine: A Story Written in Lyon",
    href: "/contestants/isabelle-fontaine",
    image: "/images/contestant.jpg",
  },
  {
    kicker: "Opinion",
    title: "Why the Interview Round Decides Every Crown",
    href: "/news/why-the-interview-round-now-decides",
    image: "/images/adline.jpg",
  },
];

export const UNIVERSE_STATS = [
  { value: "74", label: "Editions held" },
  { value: "130", label: "Nations competing" },
  { value: "1B+", label: "Broadcast reach" },
  { value: "Nov 21", label: "Finale · Bangkok" },
];

export const UNIVERSE_TIMELINE = [
  {
    date: "Jul",
    title: "National Finals — 68 of 130 delegates now crowned, from Paris to Manila",
    place: "Worldwide",
  },
  {
    date: "Sep",
    title: "Delegate Reveal — the full class of 2026 announced",
    place: "Digital",
  },
  {
    date: "Nov 3",
    title: "Arrivals & Registration — three weeks of events begin",
    place: "Bangkok",
  },
  {
    date: "Nov 17",
    title: "Preliminary Competition — gown, swimwear and closed-door interviews",
    place: "Impact Arena",
  },
  {
    date: "Nov 21",
    title: "The 74th Miss Universe — live finale & coronation",
    place: "Impact Arena",
  },
];

export const DECADE_OF_QUEENS = [
  { name: "Valentina Herrera", meta: "Colombia · 2025", image: "/images/mosaic-grand.jpg" },
  { name: "Freja Lindqvist", meta: "Denmark · 2024", image: "/images/queens-1.png" },
  { name: "Camila Duarte", meta: "Nicaragua · 2023", image: "/images/queens-2.png" },
  { name: "Anong Chaipasit", meta: "Thailand · 2022", image: "/images/queens-3.png" },
  { name: "Lucía Fernández", meta: "India · 2021", image: "/images/queens-4.jpg" },
  { name: "Doe Papadopoulos", meta: "Mexico · 2020", image: "/images/queens-5.png" },
];

export const UNIVERSE_NEWS = [
  {
    kicker: "Breaking",
    title: "Bangkok Unveils the Impact Arena Stage for the 75th Anniversary",
    date: "July 17, 2026",
    href: "/news/the-year-of-grace",
    image: "/images/news-bangkok.jpg",
  },
  {
    kicker: "The Cover",
    title: "The Year of Grace: Inside the Road to Miss Universe 2026",
    date: "July 17, 2026",
    href: "/news/the-year-of-grace",
    image: "/images/news-isabelle.png",
  },
  {
    kicker: "Dispatches",
    title: "France Sends an Architect: Isabelle Fontaine Heads to Bangkok",
    date: "July 15, 2026",
    href: "/contestants/isabelle-fontaine",
    image: "/images/contestant.jpg",
  },
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

export const VIDEOS = {
  featured: {
    kicker: "Featured",
    title: "The Final Question — Every Answer That Won a Crown, 2015–2025",
    meta: "18:45 · A film by Angelopedia Studio",
    image: "/images/video-1.png",
  },
  items: [
    {
      title: "Inside the Atelier: Making a National Costume",
      meta: "Craft · July 2026",
      duration: "8:12",
      image: "/images/video-2.png",
    },
    {
      title: "Valentina Herrera: One Year with the Crown",
      meta: "Documentary · June 2026",
      duration: "15:03",
      image: "/images/video-3.png",
    },
    {
      title: "The Walk: A Masterclass in Ten Steps",
      meta: "Masterclass · June 2026",
      duration: "6:40",
      image: "/images/video-4.png",
    },
    {
      title: "Coronation Night in Three Minutes — Extended Cut",
      meta: "Highlights · May 2026",
      duration: "3:12",
      image: "/images/video-1.png",
    },
    {
      title: "Beauty Talks: The Quiet-Luxury Makeup Episode",
      meta: "Series · May 2026",
      duration: "9:55",
      image: "/images/news-beauty.png",
    },
    {
      title: "Isabelle Fontaine: The First Interview",
      meta: "Interview · July 2026",
      duration: "7:18",
      image: "/images/contestant.jpg",
    },
  ],
};

export const POLLS = [
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

export const PAGEANT_HUBS = {
  "/miss-universe": {
    kicker: "Pageant Hub · Est. 1952",
    title: "Miss Universe",
    dek: "Confidently beautiful, seventy-five years on.",
    reigning: {
      name: "Fátima Bosch",
      title: "Miss Universe 2025 · Mexico",
      copy: "Crowned in Bangkok, the Tabasco-born titleholder is Mexico’s fourth Miss Universe — and the woman the 75th anniversary will send on the road.",
      image: "/images/titleholders/mu-2025-fatima.jpg",
      caption: "The reigning titleholder",
    },
  },
  "/miss-world": {
    kicker: "Pageant Hub · Est. 1951",
    title: "Miss World",
    dek: "Beauty with a purpose, seventy-three years on.",
    reigning: {
      name: "Joheirry Mola",
      title: "Miss World 2026 · Dominican Republic",
      copy: "Crowned in Nha Trang on 5 September 2026, the Dominican educator and journalist is the second Miss World from her country — forty-four years after Mariasela Álvarez.",
      image: "/images/titleholders/mw-2026-joheirry.png",
      caption: "The reigning titleholder",
    },
  },
  "/miss-earth": {
    kicker: "Pageant Hub · Est. 2001",
    title: "Miss Earth",
    dek: "Beauties for a cause — the environmental pageant.",
    reigning: {
      name: "Natálie Puškinová",
      title: "Miss Earth 2025 · Czech Republic",
      copy: "Crowned in Manila on the pageant’s silver anniversary, she is the Czech Republic’s second Miss Earth — and the current face of Beauties for a Cause.",
      image: "/images/titleholders/me-2025-natalie.jpg",
      caption: "The reigning titleholder",
    },
  },
  "/miss-international": {
    kicker: "Pageant Hub · Est. 1960",
    title: "Miss International",
    dek: "The festival of beauty and goodwill.",
    reigning: {
      name: "Catalina Duque",
      title: "Miss International 2025 · Colombia",
      copy: "Crowned in Tokyo on 27 November 2025, she is Colombia’s fourth Miss International — the country’s first in twenty-one years.",
      image: "/images/titleholders/mi-2025-catalina.jpg",
      caption: "The reigning titleholder",
    },
  },
} as const;

export const FOOTER_COLUMNS = [
  {
    heading: "Pageants",
    links: [
      { href: "/miss-universe", label: "Miss Universe" },
      { href: "/miss-world", label: "Miss World" },
      { href: "/miss-earth", label: "Miss Earth" },
      { href: "/miss-international", label: "Miss International" },
      { href: "/pageants", label: "Pageants A–Z" },
    ],
  },
  {
    heading: "Editorial",
    links: [
      { href: "/news", label: "The Latest" },
      { href: "/news?section=opinions", label: "Opinions" },
      { href: "/news?section=beauty-talks", label: "Beauty Talks" },
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
