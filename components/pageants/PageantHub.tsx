import Link from "next/link";
import {
  DECADE_OF_QUEENS,
  UNIVERSE_NEWS,
  UNIVERSE_STATS,
  UNIVERSE_TIMELINE,
} from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";

type PageantHubProps = {
  kicker: string;
  title: string;
  dek: string;
  reigning: {
    name: string;
    title: string;
    copy: string;
    image: string;
    caption: string;
  };
};

export function PageantHub({ kicker, title, dek, reigning }: PageantHubProps) {
  return (
    <main>
      <section id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="bg-footer text-white">
        <Container className="flex flex-col items-center px-6 py-16 text-center desk:py-20">
          <Kicker tone="accent">{kicker}</Kicker>
          <h1 className="mt-4 font-heading text-[48px] font-semibold tracking-[0.12em] text-white uppercase desk:text-[80px]">
            {title}
          </h1>
          <p className="mt-4 font-heading text-xl italic text-neutral-300">{dek}</p>
          <dl className="mt-12 grid w-full max-w-[900px] grid-cols-2 gap-8 sm:grid-cols-4">
            {UNIVERSE_STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <dt className="font-heading text-[32px] font-semibold text-white">
                  {stat.value}
                </dt>
                <dd className="font-nav text-[10px] tracking-[2px] text-neutral-300 uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section id="reigning-titleholder" className="py-16 desk:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2">
          <figure>
            <CoverImage
              src={reigning.image}
              alt={reigning.name}
              className="h-[420px] w-full lg:h-[560px]"
              sizes="(max-width: 1023px) 100vw, 640px"
            />
            <figcaption className="mt-3 font-nav text-[11px] tracking-[1.6px] text-muted uppercase">
              {reigning.caption}
            </figcaption>
          </figure>
          <div>
            <Kicker>The Reigning Titleholder</Kicker>
            <h2 className="mt-3 font-heading text-[22px] font-semibold leading-[1.3] text-heading">
              {reigning.name}
            </h2>
            <p className="mt-3 font-heading text-xl italic text-muted">
              {reigning.title}
            </p>
            <p className="mt-6 max-w-[460px] font-body text-[16px] leading-7 text-ink">
              {reigning.copy}
            </p>
            <Link
              href="/contestants/isabelle-fontaine"
              className="mt-8 inline-flex h-11 items-center border border-ink px-6 font-nav text-[11px] tracking-[2px] uppercase hover:bg-ink hover:text-white"
            >
              Her Story
            </Link>
          </div>
        </Container>
      </section>

      <section id="road-to-the-crown" className="bg-[#f7f5f1] py-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
              Road to the Crown
            </h2>
            <p className="font-nav text-[11px] tracking-[2px] text-muted uppercase">
              2026 Season
            </p>
          </div>
          <ol className="mt-10 flex flex-col">
            {UNIVERSE_TIMELINE.map((item) => (
              <li
                key={item.date}
                className="grid grid-cols-[72px_minmax(0,1fr)_auto] items-baseline gap-6 border-t border-hairline py-4"
              >
                <span className="font-heading text-lg font-semibold text-heading">
                  {item.date}
                </span>
                <span className="font-body text-[15px] text-ink">{item.title}</span>
                <span className="font-nav text-[10px] tracking-[2px] text-muted uppercase">
                  {item.place}
                </span>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section id="a-decade-of-queens" className="py-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
              A Decade of Queens
            </h2>
            <Link
              href="/gallery"
              className="font-nav text-[11px] tracking-[2px] text-muted uppercase hover:text-ink"
            >
              Gallery
            </Link>
          </div>
          <div className="mt-10 flex gap-3 overflow-x-auto no-scrollbar">
            {DECADE_OF_QUEENS.map((queen) => (
              <figure key={queen.name} className="w-[180px] shrink-0">
                <CoverImage
                  src={queen.image}
                  alt={queen.name}
                  className="h-[240px] w-[180px]"
                  sizes="180px"
                />
                <figcaption className="mt-3">
                  <p className="font-nav text-[11px] tracking-[1.2px] uppercase">
                    {queen.name}
                  </p>
                  <p className="mt-1 font-nav text-[11px] text-muted">{queen.meta}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </section>

      <section id="pageant-news" className="pb-16">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
              Universe News
            </h2>
            <Link
              href="/news"
              className="font-nav text-[11px] tracking-[2px] text-muted uppercase hover:text-ink"
            >
              All News
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {UNIVERSE_NEWS.map((item) => (
              <Link key={item.title} href={item.href} className="flex flex-col gap-3">
                <CoverImage
                  src={item.image}
                  alt={item.title}
                  className="h-[280px] w-full"
                  sizes="400px"
                />
                <Kicker>{item.kicker}</Kicker>
                <p className="font-heading text-[16px] font-semibold leading-[1.4] text-heading">
                  {item.title}
                </p>
                <p className="font-nav text-[11px] tracking-[1.4px] text-muted uppercase">
                  {item.date}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
