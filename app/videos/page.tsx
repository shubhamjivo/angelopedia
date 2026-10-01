import type { Metadata } from "next";
import { ReelStory } from "@/components/home/ReelFrame";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { PageHero } from "@/components/ui/PageHero";
import { VIDEO_SECTIONS, type VideoItem } from "@/lib/videos";

export const metadata: Metadata = {
  title: "Videos",
  description: "Angelopedia exclusive interviews, other interviews, and final videos.",
};

function meta(item: VideoItem) {
  return `${item.kicker} · ${item.date}`;
}

export default function VideosPage() {
  return (
    <main>
      <PageHero
        kicker="Watch"
        title="Videos"
        dek="Angelopedia exclusive interviews, other interviews, and final videos."
      />

      {VIDEO_SECTIONS.map((section) => (
        <section key={section.id} id={section.id} className="border-t border-hairline py-8 desk:py-10">
          <Container>
            <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
              {section.title}
            </h2>
            {section.frame === "reel" ? (
              <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 desk:grid-cols-3 desk:gap-x-8">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <ReelStory item={item} />
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="mt-10 grid sm:grid-cols-2 sm:gap-x-10">
                {section.items.map((item) => (
                  <li key={item.href} className="border-b border-hairline">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start gap-3 py-4"
                    >
                      <CoverImage
                        src={item.image}
                        alt=""
                        className="h-[64px] w-[64px] shrink-0"
                        imageClassName="object-cover"
                        sizes="64px"
                      />
                      <span className="min-w-0">
                        <span className="block font-nav text-[10px] tracking-[1.4px] text-muted uppercase">
                          {meta(item)}
                        </span>
                        <span className="mt-1 block font-heading text-[15px] leading-[1.4] font-medium text-heading group-hover:text-ink">
                          {item.title}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Container>
        </section>
      ))}
    </main>
  );
}
