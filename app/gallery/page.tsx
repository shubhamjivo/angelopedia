import type { Metadata } from "next";
import { GALLERIES, GALLERY_FILTERS } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "The Gallery",
  description:
    "Runways, coronations and the quiet moments backstage — through our photographers’ lenses.",
};

export default function GalleryPage() {
  return (
    <main>
      <PageHero
        kicker="Photographs"
        title="The Gallery"
        dek="Runways, coronations and the quiet moments backstage — through our photographers’ lenses."
      />

      <nav className="border-y border-hairline">
        <Container className="flex h-12 items-center justify-center gap-6 overflow-x-auto font-nav text-[11px] tracking-[2px] text-muted uppercase no-scrollbar">
          {GALLERY_FILTERS.map((filter, index) => (
            <span key={filter} className={index === 0 ? "text-ink" : undefined}>
              {filter}
            </span>
          ))}
        </Container>
      </nav>

      <section className="py-16">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {GALLERIES.map((item) => (
              <figure key={item.title} className="flex flex-col">
                <CoverImage
                  src={item.image}
                  alt={item.title}
                  className="h-[360px] w-full"
                  sizes="(max-width: 1023px) 50vw, 420px"
                />
                <figcaption className="mt-3">
                  <p className="text-[15px] text-heading">{item.title}</p>
                  <p className="mt-1 font-nav text-[11px] tracking-[1.2px] text-muted uppercase">
                    {item.meta}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="flex justify-center pt-12">
            <button
              type="button"
              className="h-12 border border-ink px-8 font-nav text-[11px] tracking-[2px] uppercase"
            >
              Load more galleries
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
