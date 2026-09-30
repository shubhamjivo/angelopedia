import type { Metadata } from "next";
import { BigFour } from "@/components/home/BigFour";
import { FashionBeauty } from "@/components/home/FashionBeauty";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { FrontPage } from "@/components/home/FrontPage";
import { SectionBoard } from "@/components/home/SectionBoard";
import { HeroMosaic } from "@/components/home/HeroMosaic";
import { VoteCta } from "@/components/home/VoteCta";
import { WatchNow } from "@/components/home/WatchNow";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE } from "@/lib/site";

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
      <BigFour />
      <FashionBeauty />
      {/* <GalleryPreview /> */}
      <WatchNow />
      <VoteCta />
    </main>
  );
}
