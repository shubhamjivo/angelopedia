import type { Metadata } from "next";
import Link from "next/link";
import { CONTESTANT } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: CONTESTANT.name,
  description: CONTESTANT.subtitle,
};

export default function ContestantPage() {
  return (
    <main>
      <section id="profile" className="py-10 desk:py-16">
        <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <figure>
            <CoverImage
              src={CONTESTANT.image}
              alt={CONTESTANT.name}
              className="h-[520px] w-full lg:h-[640px]"
              sizes="(max-width: 1023px) 100vw, 640px"
              priority
            />
            <figcaption className="mt-3 font-nav text-[11px] tracking-[1.6px] text-muted uppercase">
              {CONTESTANT.caption}
            </figcaption>
          </figure>
          <div>
            <Kicker>{CONTESTANT.kicker}</Kicker>
            <h1 className="mt-3 font-heading text-[48px] font-semibold leading-none text-heading desk:text-[64px]">
              {CONTESTANT.name}
            </h1>
            <p className="mt-4 font-heading text-xl italic text-muted">
              {CONTESTANT.subtitle}
            </p>
            <dl className="mt-10 flex flex-col">
              {CONTESTANT.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex items-baseline justify-between gap-6 border-t border-hairline py-3"
                >
                  <dt className="font-nav text-[10px] tracking-[2px] text-muted uppercase">
                    {fact.label}
                  </dt>
                  <dd className="font-heading text-right text-[15px] text-heading">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </section>

      <section id="the-story" className="py-8">
        <Container className="max-w-[720px]">
          <Kicker>The Story</Kicker>
          <div className="article-body mt-6">
            {CONTESTANT.story.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section id="milestones" className="py-12">
        <Container className="max-w-[720px]">
          <Kicker>Milestones</Kicker>
          <ol className="mt-6 flex flex-col">
            {CONTESTANT.milestones.map((item) => (
              <li
                key={item.year}
                className="grid grid-cols-[88px_minmax(0,1fr)] gap-6 border-t border-hairline py-3"
              >
                <span className="font-heading text-lg text-heading">{item.year}</span>
                <span className="font-body text-[15px] text-ink">{item.text}</span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="in-photos" className="py-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-[36px] font-semibold leading-none text-heading desk:text-[42px]">
              Isabelle, In Photos
            </h2>
            <Link
              href="/gallery"
              className="font-nav text-[11px] tracking-[2px] text-muted uppercase hover:text-ink"
            >
              Full Gallery
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {CONTESTANT.photos.map((photo) => (
              <figure key={photo.title}>
                <CoverImage
                  src={photo.image}
                  alt={photo.title}
                  className="h-[280px] w-full"
                  sizes="300px"
                />
                <figcaption className="mt-3">
                  <p className="font-heading text-[14px] text-heading">{photo.title}</p>
                  <p className="mt-1 font-nav text-[10px] tracking-[1.4px] text-muted uppercase">
                    {photo.meta}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
