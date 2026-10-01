export type VideoFrame = "reel" | "wide";

export type VideoItem = {
  title: string;
  kicker: string;
  date: string;
  image: string;
  href: string;
  video?: string;
};

export type VideoSection = {
  id: string;
  title: string;
  frame: VideoFrame;
  items: VideoItem[];
};

/** How many rows each homepage rail block shows. */
export const HOME_RAIL_COUNT = 3;

/** Angelopedia's own interview reels. Append an item to extend the carousel. */
export const EXCLUSIVE_INTERVIEWS: VideoItem[] = [
  {
    title: "Nicole Spiteri, Miss World Malta 2026",
    kicker: "Exclusive",
    date: "11 July 2026",
    image: "/images/instagram/interview-nicole.jpg",
    video: "/videos/instagram/interview-nicole.mp4",
    href: "https://www.instagram.com/reel/Dapmj-Fo2UA/",
  },
  {
    title: "Kii Huutoniemi, Miss World Finland 2026",
    kicker: "Exclusive",
    date: "3 June 2026",
    image: "/images/instagram/interview-kii.jpg",
    video: "/videos/instagram/interview-kii.mp4",
    href: "https://www.instagram.com/reel/DZHUYYcpVYk/",
  },
  {
    title: "Sandra Alvarado, Miss World Ecuador 2024",
    kicker: "Exclusive",
    date: "5 April 2026",
    image: "/images/instagram/interview-sandra.jpg",
    video: "/videos/instagram/interview-sandra.mp4",
    href: "https://www.instagram.com/reel/DWv933Siema/",
  },
  {
    title: "Ros Mary Meza, Miss Universe Malta Top 20 Finalist",
    kicker: "Exclusive",
    date: "17 March 2026",
    image: "/images/instagram/interview-rosmary.jpg",
    video: "/videos/instagram/interview-rosmary.mp4",
    href: "https://www.instagram.com/reel/DV_ejYliXzX/",
  },
];

/** Interviews filmed outside Angelopedia. Append an item to list another one. */
export const OTHER_INTERVIEWS: VideoItem[] = [
  {
    title: "Miss World 2021 Head to Head, Group 1",
    kicker: "Interview",
    date: "Miss World 2021",
    image: "/images/miss-world/video-group-1.jpg",
    href: "https://www.youtube.com/watch?v=5wpBMCSe1ks",
  },
  {
    title: "Miss World 2021 Head to Head, Group 2",
    kicker: "Interview",
    date: "Miss World 2021",
    image: "/images/miss-world/video-group-2.jpg",
    href: "https://www.youtube.com/watch?v=A3gKjF1KIok",
  },
  {
    title: "Miss World 2021 Head to Head, Group 3",
    kicker: "Interview",
    date: "Miss World 2021",
    image: "/images/miss-world/video-group-3.jpg",
    href: "https://www.youtube.com/watch?v=W3xj436d7WA",
  },
  {
    title: "Miss World 2021 Head to Head, Group 4",
    kicker: "Interview",
    date: "Miss World 2021",
    image: "/images/miss-world/video-group-4.jpg",
    href: "https://www.youtube.com/watch?v=sWxp9B8D06Q",
  },
  {
    title: "Miss World 2021 Head to Head, Group 5",
    kicker: "Interview",
    date: "Miss World 2021",
    image: "/images/miss-world/video-group-5.jpg",
    href: "https://www.youtube.com/watch?v=f7qp8hogFUk",
  },
  {
    title: "Miss World 2021 Head to Head, Group 6",
    kicker: "Interview",
    date: "Miss World 2021",
    image: "/images/miss-world/video-group-6.jpg",
    href: "https://www.youtube.com/watch?v=UwrdUKq04w4",
  },
  {
    title: "Miss World 2021 Head to Head, Group 7",
    kicker: "Interview",
    date: "Miss World 2021",
    image: "/images/miss-world/video-group-7.jpg",
    href: "https://www.youtube.com/watch?v=chjSM_wiFeU",
  },
  {
    title: "Miss World 2021 Head to Head, Group 8",
    kicker: "Interview",
    date: "Miss World 2021",
    image: "/images/miss-world/video-group-8.jpg",
    href: "https://www.youtube.com/watch?v=AAZJLeqy4Ww",
  },
  {
    title: "Miss World 2021 Head to Head, Group 9",
    kicker: "Interview",
    date: "Miss World 2021",
    image: "/images/miss-world/video-group-9.jpg",
    href: "https://www.youtube.com/watch?v=fMJGYUg9tVM",
  },
  {
    title: "Miss World 2021 Head to Head, Group 10",
    kicker: "Interview",
    date: "Miss World 2021",
    image: "/images/miss-world/video-group-10.jpg",
    href: "https://www.youtube.com/watch?v=dqzLPaFcaVU",
  },
];

export const FINAL_VIDEOS: VideoItem[] = [
  {
    title: "The Crowning of Joheirry Mola",
    kicker: "Final",
    date: "5 September 2026",
    image: "/images/instagram/mw-crowning.jpg",
    video: "/videos/instagram/crowning.mp4",
    href: "https://www.instagram.com/reel/Dc63VSeS_xh/",
  },
  {
    title: "The Night the Crown Went to the Dominican Republic",
    kicker: "Final",
    date: "5 September 2026",
    image: "/images/instagram/mw-reel-crown.jpg",
    video: "/videos/instagram/night.mp4",
    href: "https://www.instagram.com/reel/Dc6dkrCzqFV/",
  },
  {
    title: "The Royal Court of Miss World 2026",
    kicker: "Final",
    date: "6 September 2026",
    image: "/images/instagram/mw-reel-court.jpg",
    video: "/videos/instagram/court.mp4",
    href: "https://www.instagram.com/reel/Dc8thZpTdCI/",
  },
];

/** Add another object to give /videos a new section in the same pattern. */
export const VIDEO_SECTIONS: VideoSection[] = [
  {
    id: "angelopedia-exclusive-interview",
    title: "Angelopedia Exclusive Interview",
    frame: "reel",
    items: EXCLUSIVE_INTERVIEWS,
  },
  {
    id: "other-interview",
    title: "Other Interview",
    frame: "wide",
    items: OTHER_INTERVIEWS,
  },
  {
    id: "final-video",
    title: "Final Video",
    frame: "reel",
    items: FINAL_VIDEOS,
  },
];
