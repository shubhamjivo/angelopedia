import Link from "next/link";
import { Arrow, ArrowLink } from "@/components/pageants/ArrowLink";
import { ContinentNav } from "@/components/pageants/ContinentNav";
import { CountryFlag } from "@/components/pageants/CountryFlag";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { PageHero } from "@/components/ui/PageHero";
import {
  continentPath,
  countryAnchor,
  countryPath,
  type Continent,
  type ContinentCountry,
} from "@/lib/pageants/continents";
import { isYearKicker } from "@/lib/pageants/desk";
import { getNationalDesk } from "@/lib/pageants/national";
import type { PageantDesk, PageantPiece } from "@/lib/pageants/types";

function plural(count: number, one: string, many: string) {
  return `${count} ${count === 1 ? one : many}`;
}

function pieces(desk: PageantDesk | undefined, id: string) {
  return desk?.tabs.find((tab) => tab.id === id)?.pieces ?? [];
}

function filedAt(piece: PageantPiece) {
  const time = Date.parse(piece.byline.split("·").pop()?.trim() ?? "");
  return Number.isNaN(time) ? 0 : time;
}

export function CountryDesk({ continent, country }: { continent: Continent; country: ContinentCountry }) {
  const segment = countryPath(country).split("/")[2];
  const desks = country.pageants.map((pageant) => ({
    pageant,
    desk: getNationalDesk(segment, pageant.href.split("/")[3]),
  }));

  const stories = new Map<string, PageantPiece>();
  for (const { desk } of desks) {
    for (const piece of pieces(desk, "news")) {
      if (piece.href && !stories.has(piece.href)) stories.set(piece.href, piece);
    }
  }
  const news = [...stories.values()].sort((a, b) => filedAt(b) - filedAt(a)).slice(0, 8);
  const neighbours = continent.countries.filter((item) => item.name !== country.name);

  return (
    <main>
      <PageHero
        kicker={continent.name}
        title={country.name}
        dek={`${plural(country.pageants.length, "national pageant", "national pageants")} we follow in ${country.name}.`}
      />

      <ContinentNav current={continentPath(continent.slug)} />

      <section id="pageants" className="py-8 desk:py-10">
        <Container className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="min-w-0 flex-1">
            <ul className="grid gap-4 sm:grid-cols-2">
              {desks.map(({ pageant, desk }) => {
                const queen = pieces(desk, "hall").find((piece) => isYearKicker(piece.kicker));
                const info = pieces(desk, "info")[0];
                return (
                  <li key={pageant.href}>
                    <Link
                      href={pageant.href}
                      className="group flex h-full gap-4 border border-hairline p-5 transition-colors hover:border-ink"
                    >
                      {queen?.image ? (
                        <CoverImage
                          src={queen.image}
                          alt={queen.title}
                          className="h-[120px] w-[96px] shrink-0"
                          imageClassName="object-top"
                          sizes="96px"
                        />
                      ) : null}
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="flex items-start justify-between gap-3">
                          <span className="font-nav text-[10px] font-medium tracking-[1.4px] text-accent uppercase">
                            {desk?.editionName ?? pageant.name}
                          </span>
                          <span className="flex size-8 shrink-0 items-center justify-center border border-hairline text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                            <Arrow />
                          </span>
                        </span>
                        <span className="mt-1 font-heading text-[22px] font-semibold leading-[1.2] text-heading">
                          {pageant.name}
                        </span>
                        {queen ? (
                          <span className="mt-2 font-nav text-[11px] tracking-[1.2px] text-muted uppercase">
                            {queen.title} · {queen.kicker}
                          </span>
                        ) : null}
                        {info ? (
                          <span className="mt-3 line-clamp-3 font-body text-[15px] leading-6 text-neutral-500">
                            {info.dek}
                          </span>
                        ) : null}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            {news.length ? (
              <div className="mt-12">
                <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">
                  News From {country.name}
                </p>
                <div className="flex flex-col">
                  {news.map((story) => (
                    <article key={story.href} className="flex gap-6 border-b border-hairline py-8">
                      <div className="min-w-0 flex-1">
                        <Kicker>{story.kicker}</Kicker>
                        <h3 className="mt-2 font-heading text-[16px] font-semibold leading-[1.4] text-heading">
                          <a href={story.href} target="_blank" rel="noreferrer" className="hover:text-ink">
                            {story.title}
                          </a>
                        </h3>
                        <p className="mt-2 line-clamp-3 font-body text-[15px] leading-6 text-neutral-500">{story.dek}</p>
                      </div>
                      {story.image ? (
                        <a href={story.href} target="_blank" rel="noreferrer" className="hidden w-[220px] shrink-0 sm:block">
                          <CoverImage src={story.image} alt={story.title} className="h-[147px] w-[220px]" sizes="220px" />
                        </a>
                      ) : null}
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <aside className="flex w-full flex-col gap-10 lg:w-[280px] lg:shrink-0">
            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">
                More In {continent.name}
              </p>
              <ul className="mt-1 flex flex-col">
                {neighbours.map((item) => (
                  <li key={item.name} className="border-b border-hairline">
                    <Link href={countryPath(item)} className="group flex items-center gap-3 py-3">
                      <CountryFlag country={item.name} />
                      <span className="min-w-0 flex-1 font-heading text-[15px] leading-[1.4] text-heading group-hover:text-ink">
                        {item.name}
                      </span>
                      <Arrow className="text-muted group-hover:text-ink" />
                    </Link>
                  </li>
                ))}
              </ul>
              <ArrowLink
                href={`${continentPath(continent.slug)}#${countryAnchor(country.name)}`}
                label={`All of ${continent.name}`}
                className="mt-4"
              />
            </div>
          </aside>
        </Container>
      </section>
    </main>
  );
}
