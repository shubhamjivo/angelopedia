import type { Metadata } from "next";
import { BigFour } from "@/components/home/BigFour";
import { FashionBeauty } from "@/components/home/FashionBeauty";
import { FrontPage } from "@/components/home/FrontPage";
import { SectionBoard } from "@/components/home/SectionBoard";
import { HeroMosaic } from "@/components/home/HeroMosaic";
import { PlayZone } from "@/components/home/PlayZone";
import { VoteCta } from "@/components/home/VoteCta";
import { WatchNow } from "@/components/home/WatchNow";
import { fashionFront } from "@/lib/fashion";
import { ARCHIVE_POLLS, OPEN_GAMES } from "@/lib/play";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site";
import { EXCLUSIVE_INTERVIEWS, FINAL_VIDEOS, HOME_RAIL_COUNT, OTHER_INTERVIEWS } from "@/lib/videos";

export const metadata: Metadata = {
  title: {
    absolute: `${SITE_NAME} — ${SITE_TAGLINE}`,
  },
  description: SITE_DESCRIPTION,
};

export default function Home() {
  return (
    <main>
      <HeroMosaic />
      <FrontPage />
      <SectionBoard />
      <WatchNow
        exclusive={EXCLUSIVE_INTERVIEWS}
        otherInterviews={OTHER_INTERVIEWS.slice(0, HOME_RAIL_COUNT)}
        finalVideos={FINAL_VIDEOS.slice(0, HOME_RAIL_COUNT)}
      />
      <BigFour />
      <FashionBeauty {...fashionFront()} />
      {/* <GalleryPreview /> */}
      <PlayZone game={OPEN_GAMES[0]} polls={ARCHIVE_POLLS.slice(0, 4)} />
      <VoteCta />
    </main>
  );
}
