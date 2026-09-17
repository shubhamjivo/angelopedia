import type { Metadata } from "next";
import { BigFour } from "@/components/home/BigFour";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HeroMosaic } from "@/components/home/HeroMosaic";
import { LatestNews } from "@/components/home/LatestNews";
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
      <LatestNews />
      <BigFour />
      <GalleryPreview />
      <WatchNow />
      <VoteCta />
    </main>
  );
}
