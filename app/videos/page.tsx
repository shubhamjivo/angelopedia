import type { Metadata } from "next";
import { VIDEOS } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Videos",
  description: "Finals, interviews and masterclasses — the pageant world in motion.",
};

export default function VideosPage() {
  return (
    <main>
      <PageHero
        kicker="Watch"
        title="Videos"
        dek="Finals, interviews and masterclasses — the pageant world in motion."
        dark
      />

      <section className="bg-footer pb-10">
        <Container>
          <div className="relative">
            <CoverImage
              src={VIDEOS.featured.image}
              alt={VIDEOS.featured.title}
              className="h-[240px] w-full sm:h-[380px] desk:h-[520px]"
              sizes="100vw"
              priority
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#c4a35a]/85 to-transparent" />
            <span
              aria-hidden
              className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80"
            >
              <span className="ml-1 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
            </span>
          </div>
          <div className="py-8 text-white">
            <Kicker tone="accent">{VIDEOS.featured.kicker}</Kicker>
            <h2 className="mt-3 font-heading text-[28px] font-semibold text-white desk:text-[36px]">
              {VIDEOS.featured.title}
            </h2>
            <p className="mt-2 font-nav text-[12px] tracking-[1.4px] text-neutral-300 uppercase">
              {VIDEOS.featured.meta}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {VIDEOS.items.map((item) => (
              <article key={item.title} className="flex flex-col">
                <div className="relative">
                  <CoverImage
                    src={item.image}
                    alt={item.title}
                    className="h-[200px] w-full"
                    sizes="400px"
                  />
                  <span className="absolute right-3 bottom-3 bg-black/70 px-2 py-0.5 font-nav text-[11px] text-white">
                    {item.duration}
                  </span>
                </div>
                <h3 className="mt-3 text-[16px] font-medium leading-snug text-heading">
                  {item.title}
                </h3>
                <p className="mt-1 text-[13px] text-muted">{item.meta}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
