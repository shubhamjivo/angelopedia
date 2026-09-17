import Link from "next/link";
import { LATEST_FEATURED, LATEST_LEFT, LATEST_RIGHT } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LatestNewsCarousel } from "@/components/home/LatestNewsCarousel";

export function LatestNews() {
  return (
    <section className="screen-section py-8 desk:py-9">
      <Container>
        <SectionHeading title="Latest News" />
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,680px)_330px_330px] lg:gap-6">
          <Link
            href={LATEST_FEATURED.href}
            className="relative block min-h-[420px] overflow-hidden lg:h-[680px]"
          >
            <CoverImage
              src={LATEST_FEATURED.image}
              alt={LATEST_FEATURED.title}
              className="absolute inset-0 h-full w-full"
              sizes="(max-width: 1023px) 100vw, 680px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-7">
              <p className="font-sans text-[26px] font-medium leading-[1.18] text-white desk:text-[30px]">
                {LATEST_FEATURED.title}
              </p>
              <span className="text-[13px] font-medium text-gold">Know More</span>
            </div>
          </Link>
          <LatestNewsCarousel items={LATEST_LEFT} />
          <LatestNewsCarousel items={LATEST_RIGHT} reverse />
        </div>
      </Container>
    </section>
  );
}
