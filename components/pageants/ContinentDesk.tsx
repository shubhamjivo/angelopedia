import Link from "next/link";
import { continentPath, countryAnchor, countryPath, type Continent } from "@/lib/pageants/continents";
import { ArrowLink } from "@/components/pageants/ArrowLink";
import { ContinentNav } from "@/components/pageants/ContinentNav";
import { CountryFlag } from "@/components/pageants/CountryFlag";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { PageHero } from "@/components/ui/PageHero";

function plural(count: number, one: string, many: string) {
  return `${count} ${count === 1 ? one : many}`;
}

export function ContinentDesk({ continent }: { continent: Continent }) {
  const pageants = continent.countries.reduce((total, country) => total + country.pageants.length, 0);

  return (
    <main>
      <PageHero
        kicker="Country Pageants"
        title={continent.name}
        dek={`${plural(continent.countries.length, "country", "countries")} and ${plural(pageants, "national pageant", "national pageants")} we follow across ${continent.name}.`}
      />

      <ContinentNav current={continentPath(continent.slug)} />

      <section id="countries" className="py-8 desk:py-10">
        <Container className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="flex min-w-0 flex-1 flex-col">
            {continent.countries.map((country) => (
              <article
                key={country.name}
                id={countryAnchor(country.name)}
                className="flex scroll-mt-[calc(var(--header-offset,0px)+4rem)] flex-col gap-4 border-b border-hairline py-8 first:pt-0 sm:flex-row sm:gap-10"
              >
                <div className="sm:w-[220px] sm:shrink-0">
                  <Kicker tone="accent">{plural(country.pageants.length, "pageant", "pageants")}</Kicker>
                  <h2 className="mt-3 flex items-center gap-3 font-heading text-[22px] font-semibold leading-[1.3] text-heading desk:text-[26px]">
                    <CountryFlag country={country.name} className="h-4 w-6" />
                    <Link href={countryPath(country)} className="hover:text-ink">
                      {country.name}
                    </Link>
                  </h2>
                  <ArrowLink href={countryPath(country)} label="Country page" className="mt-3" />
                </div>
                <ul className="grid min-w-0 flex-1 gap-x-10 sm:grid-cols-2">
                  {country.pageants.map((pageant) => (
                    <li key={pageant.href} className="border-t border-hairline first:border-t-0 sm:[&:nth-child(2)]:border-t-0">
                      <Link
                        href={pageant.href}
                        className="block py-3 font-heading text-[16px] font-semibold leading-[1.4] text-heading hover:text-ink"
                      >
                        {pageant.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <aside className="flex w-full flex-col gap-10 lg:w-[280px] lg:shrink-0">
            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">
                News From {continent.name}
              </p>
              <ol className="mt-4 flex flex-col gap-4">
                {continent.news.map((story, index) => (
                  <li key={story.href}>
                    <a href={story.href} target="_blank" rel="noreferrer" className="group flex items-start gap-3">
                      <span className="w-6 shrink-0 font-heading text-[22px] leading-none text-accent">{index + 1}</span>
                      <span className="min-w-0 font-heading text-[15px] leading-[1.4] text-heading group-hover:text-ink">
                        {story.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">
                Pageants In {continent.name}
              </p>
              <ul className="mt-1 flex flex-col">
                {continent.editions.map((edition) => (
                  <li key={edition.href} className="border-b border-hairline">
                    <a href={edition.href} target="_blank" rel="noreferrer" className="group block py-3">
                      <span className="flex items-center gap-1.5 font-nav text-[10px] tracking-[1.4px] text-muted uppercase">
                        <CountryFlag country={edition.country} />
                        {edition.country}
                      </span>
                      <span className="mt-1 block font-heading text-[15px] leading-[1.4] text-heading group-hover:text-ink">
                        {edition.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </main>
  );
}
