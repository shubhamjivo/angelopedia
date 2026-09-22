export type StorySection =
  | "news"
  | "opinions"
  | "beauty-talks"
  | "featured"
  | "specials"
  | "in-pictures";

export type Story = {
  slug: string;
  section: StorySection;
  kicker: string;
  title: string;
  dek: string;
  author: string;
  date: string;
  dateISO: string;
  image: string;
  credit: string;
  caption: string;
  tags: string[];
  paragraphs: string[];
  quote?: { text: string; credit: string };
  inline?: { src: string; caption: string };
  links?: { href: string; label: string }[];
};

export const EDITION_LABEL = "Tuesday, 22 September 2026";

export const SECTION_LABELS: Record<StorySection, string> = {
  news: "News",
  opinions: "Opinions",
  "beauty-talks": "Beauty Talks",
  featured: "Featured",
  specials: "Specials",
  "in-pictures": "In Pictures",
};

const STORIES: Story[] = [
  {
    slug: "bangkok-unveils-the-impact-arena-stage",
    section: "news",
    kicker: "Breaking",
    title: "Bangkok Unveils the Impact Arena Stage for Miss Universe's 75th Anniversary",
    dek: "A 360-degree runway, a live orchestra and the largest broadcast footprint in pageant history — Thailand intends to make the diamond jubilee unforgettable.",
    author: "Nared Suksawat",
    date: "22 September 2026",
    dateISO: "2026-09-22",
    image: "/images/news-bangkok.jpg",
    credit: "Angelopedia",
    caption: "Impact Arena, Bangkok — the anniversary stage on the morning it was shown to the press",
    tags: ["Miss Universe", "Thailand", "2026"],
    paragraphs: [
      "Bangkok showed its hand on Tuesday morning. Inside Impact Arena, carpenters were still on the lotus-shaped runway when the organising committee walked reporters onto the floor and confirmed what the drawings had only suggested: Miss Universe’s 75th anniversary will be staged in the round, with the orchestra in the room rather than on a tape.",
      "The broadcast plan is the largest the pageant has commissioned. Cameras ring the stage at floor level, and a second feed will follow the final five off the runway and into the interview room without a cut to a studio desk. Producers say the aim is to keep the night in one place.",
      "Delegates arrive in the first week of November. The finale remains set for 21 November. Tuesday’s unveiling was the host city’s argument that the anniversary should be remembered for the room, not only for the crown.",
    ],
    quote: {
      text: "We are not choosing a face. We are choosing a voice that a billion people will hear.",
      credit: "Anuchit Vorachai · Executive Producer, Miss Universe 2026",
    },
  },
  {
    slug: "the-year-of-grace",
    section: "featured",
    kicker: "The Cover",
    title: "The Year of Grace: Inside the Road to Miss Universe 2026",
    dek: "Seventy-five years after the first crown, the world's most-watched pageant reinvents itself for a new generation — and 130 nations are answering the call.",
    author: "Amara Castellanos",
    date: "21 September 2026",
    dateISO: "2026-09-21",
    image: "/images/queens-1.png",
    credit: "L. Devereux",
    caption: "Rehearsal week — the opening number takes shape",
    tags: ["Miss Universe", "2026 Season", "Cover Story"],
    paragraphs: [
      "Bangkok in September is a city rehearsing. In the cool dark of Impact Arena, a runway shaped like a lotus is going up board by board. Across the river, a choreographer counts to eight in three languages at once. One hundred and thirty women will arrive in November carrying one hundred and thirty nations, and the 75th anniversary of the most-watched pageant on earth will begin.",
      "It is tempting to describe Miss Universe as unchanged — the crown, the sash, the single question. The institution turning seventy-five is quieter than that, and less familiar. The swimsuit score is gone. The age ceiling is gone. The interview, once a courtesy, is now the axis of the campaign.",
      "Applications to national franchises rose sharply this cycle. The delegate who arrives now tends to bring a degree, an organisation she founded, and an audience of her own. The pageant has professionalised in return: stylists on contract, media training, and a year on the road that treats the titleholder as a working representative rather than an ornament.",
      "What has not changed is the walk. Ten steps, a turn, ten steps more. Women who have worn the crown describe the same silence, the moment the music drops and the arena holds its breath. In November, one hundred and thirty women will chase that silence. One will own it.",
    ],
    inline: {
      src: "/images/article-inline.jpg",
      caption: "A fitting, three days before the delegate reveal",
    },
  },
  {
    slug: "prague-confirmed-host-73rd-miss-world",
    section: "news",
    kicker: "Miss World",
    title: "Prague Confirmed as Host City for the 73rd Miss World Festival",
    dek: "The Czech capital beat bids from three continents. Organisers promise a month-long festival of arts, sport and the Beauty with a Purpose gala.",
    author: "Camilla Saurez",
    date: "20 September 2026",
    dateISO: "2026-09-20",
    image: "/images/news-prague.png",
    credit: "Angelopedia",
    caption: "Prague — the host city announced for the 73rd Miss World festival",
    tags: ["Miss World", "Czechia", "2026"],
    paragraphs: [
      "Prague will host the 73rd Miss World. The announcement, made on Sunday, ends a bidding year in which three continents were still in the conversation into the summer. The Czech capital’s offer paired a riverside festival site with a month of public events rather than a single televised night.",
      "Organisers described a programme that runs from a sports meeting through a Beauty with a Purpose gala and into the final. The city’s pageant history is part of the pitch: the crown has been here before, and the local franchise has spent two years building the volunteer and venue plan the bid required.",
      "Delegates are expected in the city several weeks before the final. A full calendar will be published once the head of state reception and the beach fashion filming days are locked.",
    ],
  },
  {
    slug: "isabelle-fontaine-crowned-miss-france",
    section: "news",
    kicker: "National",
    title: "Isabelle Fontaine Crowned Miss France — A Story Written in Lyon",
    dek: "The 24-year-old architect closed the show with an interview answer on literacy that drew the evening's only standing ovation.",
    author: "Camilla Saurez",
    date: "19 September 2026",
    dateISO: "2026-09-19",
    image: "/images/news-isabelle.png",
    credit: "Angelopedia",
    caption: "Paris — Isabelle Fontaine after the crowning",
    tags: ["Miss France", "France", "Miss Universe"],
    paragraphs: [
      "Isabelle Fontaine is Miss France. The Lyon architect, 24, took the title in Paris on Saturday night after an interview answer on adult literacy that brought the hall to its feet — the only standing ovation of the final.",
      "She thanked three people from the stage: her mother, her thesis adviser, and a woman from the reading programme she founded at 21. Pageant historians in the press seats noted that it was the first acceptance speech of the night to mention a classroom.",
      "Fontaine will represent France at Miss Universe in Bangkok this November. Bookmakers moved her into the leading group of European delegates before the stage lights were down.",
    ],
    links: [
      {
        href: "/contestants/isabelle-fontaine",
        label: "Read Isabelle Fontaine’s delegate profile",
      },
    ],
  },
  {
    slug: "from-advocacy-to-artistry",
    section: "news",
    kicker: "Miss Earth",
    title: "From Advocacy to Artistry: The New Face of Environmental Pageantry",
    dek: "Miss Earth's 2026 cycle introduces a project-based advocacy score. Delegates will be judged on measurable impact, not on a manifesto alone.",
    author: "Irina Silva",
    date: "18 September 2026",
    dateISO: "2026-09-18",
    image: "/images/news-earth.png",
    credit: "Angelopedia",
    caption: "A delegate project book, open at the preliminary briefing",
    tags: ["Miss Earth", "2026"],
    paragraphs: [
      "Miss Earth will score advocacy as a project this year, not as a speech. Delegates must file a record of what the work has already done — a site restored, a class taught, a measure passed — and judges will mark that record alongside the evening presentation.",
      "The change is the largest shift in the pageant’s judging sheet since the elemental titles were introduced. Directors say the point is to separate a prepared paragraph from a year of work a community can point to.",
      "National directors have been given the new sheet. The first projects are due before delegates travel, so the score exists before anyone reaches the stage.",
    ],
  },
  {
    slug: "why-the-interview-round-now-decides",
    section: "opinions",
    kicker: "Opinion",
    title: "Why the Interview Round Now Decides Every Major Crown",
    dek: "Gowns dazzle and walks command, but the last five international titles were all won at a table, under a single spotlight, in ninety seconds.",
    author: "Amara Castellanos",
    date: "17 September 2026",
    dateISO: "2026-09-17",
    image: "/images/news-opinion.png",
    credit: "Angelopedia",
    caption: "The interview table, before the final five are called",
    tags: ["Opinion", "Interview", "Judging"],
    paragraphs: [
      "Count the last five major crowns. The gown was noticed. The walk was cheered. The title turned, in each case, on an answer given sitting down. Ninety seconds, one question, no music. That is the round the franchises are now coaching for, and it is the round the audience has learned to wait for.",
      "This is not a complaint about spectacle. A final without a gown is a meeting. It is an observation about where the decision has moved. Judges who will defend a choice in public the next morning want a sentence they can repeat. A walk does not give them one.",
      "The women who understand this arrive with a subject they have already lived, not a subject they were handed in the week of the final. Literacy, a coastline, a clinic. The table rewards the delegate who can finish the thought when the clock is louder than the room.",
    ],
  },
  {
    slug: "quiet-luxury-of-pageant-beauty",
    section: "beauty-talks",
    kicker: "Beauty Talks",
    title: "The Quiet Luxury of Pageant Beauty: Less Shimmer, More Skin",
    dek: "Backstage artists from three continents on the decade's biggest shift — and the five products they will not board a plane without.",
    author: "Irina Silva",
    date: "16 September 2026",
    dateISO: "2026-09-16",
    image: "/images/news-beauty.png",
    credit: "Angelopedia",
    caption: "A backstage table, stripped back for the new brief",
    tags: ["Beauty Talks", "Makeup"],
    paragraphs: [
      "Ask a pageant artist what changed in ten years and the answer is almost dull: less powder, fewer stones on the lid, skin that still looks like skin when the broadcast truck pushes the contrast. The brief from three franchises this season used the same phrase. Quiet. Then they asked for the walk to do the shouting.",
      "The kits have shrunk with the brief. Five products come up in every conversation: a cream that does not pill under heat, a pencil that stays through a cry, a lip that reads on camera without a ring of liner, a grip for hair that has already been teased once, and a balm for the hour between gown and interview.",
      "None of this is a retreat from glamour. It is a change in where the glamour sits. The gown is louder. The face, by design, is letting it.",
    ],
  },
  {
    slug: "forty-two-frames-from-coronation-night",
    section: "in-pictures",
    kicker: "In Pictures",
    title: "Forty-Two Frames from Coronation Night",
    dek: "Our photographers had the wings, the runway and the confetti drop. This is the night in full, from first look to final walk.",
    author: "Angelopedia Studio",
    date: "15 September 2026",
    dateISO: "2026-09-15",
    image: "/images/gallery-1.jpg",
    credit: "Angelopedia Studio",
    caption: "The coronation walk, from the pit",
    tags: ["In Pictures", "Miss Universe", "Coronation"],
    paragraphs: [
      "Forty-two frames, filed between the first look and the moment the crown came down. The photographers were in the wings for the lining-up, on the floor for the walk, and behind the throne for the confetti, which looks orderly in a wide shot and chaotic from underneath.",
      "What the sequence shows, more than any single portrait, is the hour the broadcast compresses. A pin adjusted. A name checked. A delegate who had already lost, still walking as if the night were hers, because for another minute it was.",
    ],
    links: [{ href: "/gallery", label: "Open the full gallery" }],
  },
  {
    slug: "who-takes-the-2026-crown",
    section: "opinions",
    kicker: "Opinion",
    title: "Prediction: Who Takes the 2026 Crown?",
    dek: "The board has narrowed. Europe’s interview form, Asia’s host-city tide and a French architect have split the early money.",
    author: "Camilla Saurez",
    date: "14 September 2026",
    dateISO: "2026-09-14",
    image: "/images/gallery-5.jpg",
    credit: "Angelopedia",
    caption: "Arrivals — the field, before the board settles",
    tags: ["Opinion", "Miss Universe", "2026"],
    paragraphs: [
      "Three stories are doing the work in the early market. The host city always flatters its own region, and Bangkok’s anniversary stage will be kind to a delegate who can use the room. Europe’s recent interview form is the second story. The third is specific: a French architect whose final answer at home already travelled further than her gown.",
      "None of this is a crowning. It is a map of where attention sits six weeks out, which is the only honest prediction a desk can print. The table in November will throw at least one of these stories out.",
    ],
    links: [{ href: "/play", label: "Cast a vote in this month’s poll" }],
  },
  {
    slug: "evening-gown-the-last-look",
    section: "beauty-talks",
    kicker: "Beauty Talks",
    title: "The Evening Gown: How the Last Look Is Built",
    dek: "Stylists on the hour between the fitting and the step onto the stage — and why the final pin is never decorative.",
    author: "Irina Silva",
    date: "13 September 2026",
    dateISO: "2026-09-13",
    image: "/images/gallery-4.jpg",
    credit: "Angelopedia",
    caption: "The last look, pinned and not yet walked",
    tags: ["Beauty Talks", "Evening Gown"],
    paragraphs: [
      "The last look is built backwards from the first step. A train that photographs is a train that can be kicked, and the pin that holds it is placed where a hand can find it in the dark at the top of the stairs. Stylists talk about this hour more than they talk about the sketch.",
      "What reaches the broadcast is the still version of a garment that has already been walked in a corridor. If the corridor went well, the stage is a repetition. If it did not, no amount of light will invent a hem.",
    ],
  },
  {
    slug: "five-things-in-the-kit",
    section: "beauty-talks",
    kicker: "Beauty Talks",
    title: "Five Things Every Pageant Artist Packs",
    dek: "The list is short, and it has barely changed in five seasons. Heat is the reason.",
    author: "Irina Silva",
    date: "12 September 2026",
    dateISO: "2026-09-12",
    image: "/images/article-inline.jpg",
    credit: "Angelopedia",
    caption: "A kit, reduced to what survives the lights",
    tags: ["Beauty Talks", "Backstage"],
    paragraphs: [
      "The bag is smaller than the audience thinks. Cotton that will not shed on a dark gown. Tape that will release without taking a finish with it. A sponge kept dry until the minute it is needed. A lip that can be redrawn in a wings corridor. A clip for the piece of hair the wind, or a hug, will undo.",
      "Artists who work more than one franchise keep this list and discard the rest at the hotel. The lights are hot, the call is early, and a product that needs ten minutes is a product that will not be used.",
    ],
  },
  {
    slug: "beyond-the-sash",
    section: "specials",
    kicker: "Special",
    title: "Beyond the Sash: How a Crown Became a Career",
    dek: "The year after the final is the job. Former titleholders on contracts, calendars and the work the sash was only the start of.",
    author: "Amara Castellanos",
    date: "11 September 2026",
    dateISO: "2026-09-11",
    image: "/images/queens-2.png",
    credit: "Angelopedia",
    caption: "A titleholder on the road, a season after the crowning",
    tags: ["Special", "Titleholders"],
    paragraphs: [
      "The sash is a costume. The year is a contract. Ask a former titleholder what the reign was and she will talk about airports, a foundation’s budget, and the Tuesday when the invitations outnumbered the days. The final is the photograph. The work starts when the photograph is already old.",
      "Franchises have caught up to this, slowly. Media training now assumes a year of questions, not an evening of them. The women who use the reign well treat it as a term of office with an end date, and they build the thing that will still be there when the crown is passed on.",
    ],
  },
  {
    slug: "czech-crown-returns",
    section: "specials",
    kicker: "Special",
    title: "When the Miss World Crown Came Back to Czechia",
    dek: "A long gap, a home final, and a city that already knew how to host the festival. The return, told from the record.",
    author: "Camilla Saurez",
    date: "10 September 2026",
    dateISO: "2026-09-10",
    image: "/images/miss-world-73.jpg",
    credit: "Angelopedia",
    caption: "The Miss World crown, between reigns",
    tags: ["Special", "Miss World", "Czechia"],
    paragraphs: [
      "Czechia’s relationship with Miss World is a matter of record: a win, a long absence, and a hosting bid built on the memory of both. The return of the crown was not a surprise to the people who had kept the national franchise staffed through the quiet years. It was a surprise to everyone else.",
      "What the season proved is that a host city is a decade of untelevised work. Choirs, venues, a gala nobody abroad had heard of until the year it mattered. Prague’s confirmation this month sits on that ground.",
    ],
  },
  {
    slug: "beauty-with-a-purpose-first",
    section: "specials",
    kicker: "Special",
    title: "The First Beauty with a Purpose Prize",
    dek: "Before the award was a category everyone prepared for, it was a single recognition. This is how it entered the final.",
    author: "Irina Silva",
    date: "9 September 2026",
    dateISO: "2026-09-09",
    image: "/images/queens-3.png",
    credit: "Angelopedia",
    caption: "An early Beauty with a Purpose presentation",
    tags: ["Special", "Miss World", "Beauty with a Purpose"],
    paragraphs: [
      "Beauty with a Purpose began as a prize inside the final, not as a parallel competition. One delegate’s work was called out, a trophy that was not the crown was handed over, and the rest of the field understood that the pageant had added a second way to be remembered.",
      "The category is now prepared for, which is the fate of every prize that matters. The first one was not. It was noticed because the work was already done, and the final simply found a moment to say so.",
    ],
  },
  {
    slug: "national-costume-in-frames",
    section: "in-pictures",
    kicker: "In Pictures",
    title: "National Costume, Frame by Frame",
    dek: "Thirty-six photographs from the parade: the entrance, the turn, and the moment the piece is heavier than it looked on the sketch.",
    author: "Angelopedia Studio",
    date: "8 September 2026",
    dateISO: "2026-09-08",
    image: "/images/gallery-2.jpg",
    credit: "Angelopedia Studio",
    caption: "National costume — the turn at centre stage",
    tags: ["In Pictures", "National Costume"],
    paragraphs: [
      "A national costume is a structure that has to move like clothing. The frames from this parade keep both facts in view: the width of the piece as it enters, and the adjustment, always slightly late, as the delegate turns.",
      "The best photographs are not the posed ones at the end of the walk. They are the step before, when the weight is still a surprise and the smile has not yet been arranged for it.",
    ],
    links: [{ href: "/gallery", label: "See the costume gallery" }],
  },
  {
    slug: "backstage-before-the-walk",
    section: "in-pictures",
    kicker: "In Pictures",
    title: "Backstage, in the Hour Before the Walk",
    dek: "Pins, lists, and the quiet that sits between call times. Twenty-eight frames from the wings.",
    author: "Angelopedia Studio",
    date: "7 September 2026",
    dateISO: "2026-09-07",
    image: "/images/gallery-3.jpg",
    credit: "Angelopedia Studio",
    caption: "The wings, ten minutes before the line is called",
    tags: ["In Pictures", "Backstage"],
    paragraphs: [
      "The hour before a walk is mostly paper. A list of names. A pin dish. Someone counting heads and coming up one short, then finding her on a chair with her shoes already off. The photographs are of that hour, not of the number that follows it.",
      "Broadcasts begin when the curtain does. The night, for the people in these frames, has been going since the hem was marked that afternoon.",
    ],
    links: [{ href: "/gallery", label: "Open the backstage set" }],
  },
  {
    slug: "miss-grand-international-2024-hosts",
    section: "news",
    kicker: "Miss Grand",
    title: "Host Countries Announced for Miss Grand International 2024",
    dek: "Organisers name the countries that will stage the 2024 season, and set the finale date.",
    author: "Angelopedia",
    date: "18 July 2024",
    dateISO: "2024-07-18",
    image: "/images/mosaic-grand.jpg",
    credit: "Angelopedia",
    caption: "The 2024 host announcement",
    tags: ["Miss Grand", "2024"],
    paragraphs: [
      "Miss Grand International named the countries that would share the 2024 season and put a date on the finale. The split-host plan spreads the preliminary events across more than one nation and brings the field together for the final night.",
      "National directors were told to plan travel against that calendar. The announcement is the point at which a season stops being a poster and becomes a schedule.",
    ],
  },
  {
    slug: "jane-dipika-garrett-video",
    section: "featured",
    kicker: "Miss Universe Nepal",
    title: "Miss Universe Nepal 2023 Jane Dipika Garrett Drops a Motivational Video",
    dek: "The reigning titleholder shares a message ahead of the next national season.",
    author: "Angelopedia",
    date: "17 July 2024",
    dateISO: "2024-07-17",
    image: "/images/mosaic-jane.jpg",
    credit: "Angelopedia",
    caption: "Jane Dipika Garrett, Miss Universe Nepal 2023",
    tags: ["Nepal", "Miss Universe", "Featured"],
    paragraphs: [
      "Jane Dipika Garrett, Miss Universe Nepal 2023, released a short film addressed to the women preparing for the next national season. The piece is a dispatch from a reign still in progress, not a farewell.",
      "She talks about the year as work: the visits, the preparation, the decision to treat the title as a post with duties. The video landed the week directors began confirming the next field.",
    ],
  },
  {
    slug: "ana-luisa-silva-miss-globe-portugal",
    section: "news",
    kicker: "Miss Globe",
    title: "Ana Luísa Silva Crowned Miss Globe Portugal 2024",
    dek: "Portugal crowns its Miss Globe titleholder at the national finale.",
    author: "Angelopedia",
    date: "16 July 2024",
    dateISO: "2024-07-16",
    image: "/images/mosaic-ana.jpg",
    credit: "Angelopedia",
    caption: "Ana Luísa Silva after the Miss Globe Portugal crowning",
    tags: ["Portugal", "Miss Globe", "2024"],
    paragraphs: [
      "Ana Luísa Silva is Miss Globe Portugal 2024. She was crowned at the national finale and will carry the title into the international season.",
      "The result closes Portugal’s Miss Globe selection for the year. Her first portraits as titleholder were released with the result.",
    ],
  },
  {
    slug: "anudi-gunasekara-miss-world-sri-lanka",
    section: "news",
    kicker: "Miss World",
    title: "Anudi Gunasekara Crowned Miss World Sri Lanka 2024",
    dek: "Sri Lanka sends a new delegate to Miss World after the national crowning.",
    author: "Angelopedia",
    date: "16 July 2024",
    dateISO: "2024-07-16",
    image: "/images/mosaic-anudi.jpg",
    credit: "Angelopedia",
    caption: "Anudi Gunasekara, Miss World Sri Lanka 2024",
    tags: ["Sri Lanka", "Miss World", "2024"],
    paragraphs: [
      "Anudi Gunasekara was crowned Miss World Sri Lanka 2024 and becomes the country’s delegate to Miss World. The national final confirmed both the title and the representative in the same night.",
      "She takes the post into a season that will ask for a Beauty with a Purpose project as well as the stage rounds. The franchise said that work would be presented with her introductory portraits.",
    ],
  },
  {
    slug: "ines-perestrello-miss-grand-portugal",
    section: "featured",
    kicker: "Crowning",
    title: "Inês Perestrello Is Crowned Miss Grand Portugal 2024",
    dek: "The Lisbon-born titleholder closed the night with a walk that filled the hall — and an interview on literacy that drew the evening’s only standing ovation.",
    author: "Angelopedia",
    date: "15 July 2024",
    dateISO: "2024-07-15",
    image: "/images/ines.jpg",
    credit: "Angelopedia Studio",
    caption: "Inês Perestrello, Miss Grand Portugal 2024",
    tags: ["Portugal", "Miss Grand", "Featured"],
    paragraphs: [
      "Inês Perestrello is Miss Grand Portugal 2024. The Lisbon-born titleholder closed the final with a walk that filled the hall, then with an interview on literacy that drew the only standing ovation of the night.",
      "The answer was not a set piece. She spoke about a programme already running, and about why a national title was useful to it. The judges’ sheet, people in the room said afterwards, had been close until that minute.",
    ],
  },
  {
    slug: "grace-sugawara",
    section: "featured",
    kicker: "Featured",
    title: "Grace Sugawara, Miss Earth Japan Hokkaido, Is a Beauty with a Brain",
    dek: "A portrait of the Hokkaido titleholder whose studies sit alongside the sash.",
    author: "Angelopedia",
    date: "26 July 2024",
    dateISO: "2024-07-26",
    image: "/images/grace.jpg",
    credit: "Angelopedia",
    caption: "Grace Sugawara, Miss Earth Japan Hokkaido 2024",
    tags: ["Japan", "Miss Earth", "Featured"],
    paragraphs: [
      "Grace Sugawara holds the Miss Earth Japan title for Hokkaido and a course of study she has declined to pause for the reign. The combination is the reason her name has travelled beyond the prefecture.",
      "In a season when Miss Earth is asking delegates to show the work and not only the wish, a titleholder who can point to a classroom is the profile the franchise wants on the record. This portrait is that record.",
    ],
  },
  {
    slug: "krishnah-gravidez",
    section: "news",
    kicker: "Miss World",
    title: "Krishnah Gravidez, a Strong Contender of Miss World Philippines 2024",
    dek: "Why her name sits among those to watch at the national final.",
    author: "Angelopedia",
    date: "17 July 2024",
    dateISO: "2024-07-17",
    image: "/images/krishnah.jpg",
    credit: "Angelopedia",
    caption: "Krishnah Gravidez ahead of Miss World Philippines 2024",
    tags: ["Philippines", "Miss World", "2024"],
    paragraphs: [
      "Krishnah Gravidez goes into Miss World Philippines 2024 among the names directors and reporters are circling. The interest is not a single round. It is the evenness: a preliminary score that did not spike and did not drop.",
      "National finals in Manila are decided late. A contender at this stage is a delegate the sheet can still support on the night, which is as much as a preview can honestly say.",
    ],
  },
  {
    slug: "suzana-renaud",
    section: "news",
    kicker: "Miss Universe",
    title: "Suzana Renaud’s Journey to First Runner-Up at Miss Universe Thailand",
    dek: "How the finalist reached the step beside the crown.",
    author: "Angelopedia",
    date: "14 July 2024",
    dateISO: "2024-07-14",
    image: "/images/suzana.jpg",
    credit: "Angelopedia",
    caption: "Suzana Renaud, first runner-up at Miss Universe Thailand 2024",
    tags: ["Thailand", "Miss Universe", "2024"],
    paragraphs: [
      "Suzana Renaud finished first runner-up at Miss Universe Thailand 2024. The path to that step was a national season of preliminaries in which her interview mark stayed with her when other scores moved.",
      "Runner-up is an awkward place in the photograph and a precise one on the sheet: close enough that a different question would have been a different night. She left the final as the delegate the room had nearly chosen.",
    ],
  },
  {
    slug: "harashta-zahra",
    section: "featured",
    kicker: "Miss Supranational",
    title: "Harashta Haifa Zahra Sets New Milestones as Miss Supranational 2024",
    dek: "The titleholder’s year, and the marks it has already left.",
    author: "Angelopedia",
    date: "12 July 2024",
    dateISO: "2024-07-12",
    image: "/images/harashta.jpg",
    credit: "Angelopedia",
    caption: "Harashta Haifa Zahra, Miss Supranational 2024",
    tags: ["Miss Supranational", "Indonesia", "Featured"],
    paragraphs: [
      "Harashta Haifa Zahra’s reign as Miss Supranational 2024 has been a sequence of firsts for the title as much as for her: a travel calendar weighted toward the work she named on the night, and a public record of where the year was actually spent.",
      "Milestones in a reign are easy to announce and harder to date. The ones that belong in this piece are the appearances that were on the schedule before the crown, and kept after it.",
    ],
  },
  {
    slug: "miss-earth-japan-top-5-favourites-2024",
    section: "opinions",
    kicker: "Opinion",
    title: "Our Top 5 Favourites of Miss Earth Japan 2024",
    dek: "The desk’s five names from the Japan field, and the round that put each of them there.",
    author: "Irina Silva",
    date: "26 July 2024",
    dateISO: "2024-07-26",
    image: "/images/opinions/earth-japan.jpg",
    credit: "Angelopedia",
    caption: "Miss Earth Japan 2024 — the field the desk marked",
    tags: ["Opinion", "Miss Earth", "Japan"],
    paragraphs: [
      "Five names, not a prediction. Miss Earth Japan’s 2024 field gave the desk a preliminary round strong enough to argue over, which is the only condition under which a favourites list is worth printing.",
      "The list privileges the advocacy conversation and the evening presentation in equal part, because that is how this pageant asks to be watched. Readers who weight the walk more heavily will reorder it, and should.",
    ],
  },
  {
    slug: "miss-universe-japan-top-5-favourites-2024",
    section: "opinions",
    kicker: "Opinion",
    title: "Our Top 5 Favourites of Miss Universe Japan 2024",
    dek: "Five delegates from the Japan final, chosen for the interview as much as the gown.",
    author: "Camilla Saurez",
    date: "25 July 2024",
    dateISO: "2024-07-25",
    image: "/images/opinions/universe-japan.jpg",
    credit: "Angelopedia",
    caption: "Miss Universe Japan 2024",
    tags: ["Opinion", "Miss Universe", "Japan"],
    paragraphs: [
      "Our five from Miss Universe Japan 2024 are an interview list that happens to include five women who can also walk. The order would change if the night were scored on the gown alone. It is not.",
      "Favourites are a desk’s argument with itself, published so readers can have the same argument. They are not the result, and they are not a slight on the delegate who won.",
    ],
  },
  {
    slug: "miss-world-philippines-top-5-favourites-2024",
    section: "opinions",
    kicker: "Opinion",
    title: "Our Top 5 Favourites of Miss World Philippines 2024",
    dek: "The five the desk would take into a Beauty with a Purpose conversation.",
    author: "Camilla Saurez",
    date: "17 July 2024",
    dateISO: "2024-07-17",
    image: "/images/opinions/world-philippines.jpg",
    credit: "Angelopedia",
    caption: "Miss World Philippines 2024",
    tags: ["Opinion", "Miss World", "Philippines"],
    paragraphs: [
      "Miss World Philippines rewards a project that can be explained without notes. These five could. That is the whole of the method behind the list, and it will annoy anyone who came for a ranking of gowns.",
      "The national final will use more than that test. A favourites column is allowed to use less, provided it says so.",
    ],
  },
  {
    slug: "miss-universe-thailand-top-5-favourites-2024",
    section: "opinions",
    kicker: "Opinion",
    title: "Our Top 5 Favourites of Miss Universe Thailand 2024",
    dek: "Five names from a final that was closer on the sheet than the cheers suggested.",
    author: "Camilla Saurez",
    date: "14 July 2024",
    dateISO: "2024-07-14",
    image: "/images/opinions/universe-thailand.jpg",
    credit: "Angelopedia",
    caption: "Miss Universe Thailand 2024",
    tags: ["Opinion", "Miss Universe", "Thailand"],
    paragraphs: [
      "The hall in Thailand is a loud instrument, and it is not the score. Our five from Miss Universe Thailand 2024 are the delegates whose preliminaries still made sense once the cheering was set aside.",
      "One of them finished beside the crown. The list was not revised after the result. A favourites column that rewrites itself on the night is a recap, and this is not one.",
    ],
  },
];

const bySlug = new Map(STORIES.map((story) => [story.slug, story]));

export function getStory(slug: string) {
  return bySlug.get(slug);
}

export function listStories(options?: { section?: string; q?: string }) {
  const section = options?.section;
  const query = options?.q?.trim().toLowerCase();

  return STORIES.filter((story) => {
    if (section && story.section !== section) return false;
    if (!query) return true;
    const haystack = [story.title, story.dek, story.kicker, story.author, ...story.tags]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query);
  }).sort((a, b) => (a.dateISO < b.dateISO ? 1 : a.dateISO > b.dateISO ? -1 : 0));
}

export function relatedStories(story: Story, count = 3) {
  const sameSection = listStories({ section: story.section }).filter(
    (item) => item.slug !== story.slug,
  );
  const others = listStories().filter(
    (item) => item.slug !== story.slug && item.section !== story.section,
  );
  return [...sameSection, ...others].slice(0, count);
}

const edition = listStories().filter((story) => story.dateISO.startsWith("2026-09"));

export const HOME_LEAD = edition[0];
export const HOME_SECONDARY = edition.slice(1, 10);
export const LATEST_DESK = edition.slice(7);

const MOST_READ_SLUGS = [
  "the-year-of-grace",
  "isabelle-fontaine-crowned-miss-france",
  "beyond-the-sash",
  "prague-confirmed-host-73rd-miss-world",
  "who-takes-the-2026-crown",
];

export const MOST_READ_STORIES = MOST_READ_SLUGS.map((slug) => {
  const story = bySlug.get(slug);
  if (!story) throw new Error(`Missing most-read story: ${slug}`);
  return story;
});

export function storyPath(story: Story) {
  return `/news/${story.slug}`;
}
