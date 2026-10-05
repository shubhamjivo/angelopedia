import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, ArrowLink } from "@/components/pageants/ArrowLink";
import { ContinentNav } from "@/components/pageants/ContinentNav";
import { CountryFlag } from "@/components/pageants/CountryFlag";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { CONTINENTS, continentPath, countryPath } from "@/lib/pageants/continents";

export const metadata: Metadata = {
  title: "Pageants A–Z",
  description:
    "Every national pageant we cover, from Albania to Vietnam — organised by continent.",
};

function plural(count: number, one: string, many: string) {
  return `${count} ${count === 1 ? one : many}`;
}

export default function PageantsPage() {
  return (
    <main>
      <PageHero
        kicker="The Directory"
        title="Pageants A–Z"
        dek="Every national pageant we cover, from Albania to Vietnam — organised by continent."
      />

      <ContinentNav />

      {CONTINENTS.map((continent, index) => (
        <section
          key={continent.slug}
          id={continent.slug}
          className={`py-8 desk:py-10 ${index ? "border-t border-hairline" : ""}`.trim()}
        >
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
                  <Link href={continentPath(continent.slug)} className="hover:text-ink">
                    {continent.name}
                  </Link>
                </h2>
                <p className="font-nav text-[11px] tracking-[2px] text-muted uppercase">
                  {plural(continent.countries.length, "country", "countries")}
                </p>
              </div>
              <ArrowLink href={continentPath(continent.slug)} label={`All of ${continent.name}`} />
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 desk:grid-cols-4">
              {continent.countries.map((country) => (
                <li key={country.name}>
                  <Link
                    href={countryPath(country)}
                    className="group flex h-full flex-col border border-hairline p-5 transition-colors hover:border-ink"
                  >
                    <span className="flex items-center justify-between gap-3">
                      <CountryFlag country={country.name} className="h-5 w-[30px]" />
                      <span className="flex size-8 items-center justify-center border border-hairline text-ink transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-white">
                        <Arrow />
                      </span>
                    </span>
                    <span className="mt-4 font-heading text-[22px] font-semibold leading-[1.2] text-heading">
                      {country.name}
                    </span>
                    <span className="mt-2 font-nav text-[10px] font-medium tracking-[1.4px] text-accent uppercase">
                      {plural(country.pageants.length, "pageant", "pageants")}
                    </span>
                    <span className="mt-3 line-clamp-2 font-body text-[15px] leading-6 text-neutral-500">
                      {country.pageants.map((pageant) => pageant.name).join(" · ")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ))}
    </main>
  );
}
