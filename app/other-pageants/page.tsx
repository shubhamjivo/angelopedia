import type { Metadata } from "next";
import Link from "next/link";
import {
  OTHER_PAGEANT_STORIES,
  OTHER_PAGEANT_TABS,
  type OtherPageantId,
} from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { PageHero } from "@/components/ui/PageHero";

const TABS = new Set<string>(OTHER_PAGEANT_TABS.map((tab) => tab.id));

type PageProps = {
  searchParams: Promise<{ pageant?: string }>;
};

function activeTab(pageant?: string): OtherPageantId {
  if (pageant && TABS.has(pageant)) return pageant as OtherPageantId;
  return "grand";
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { pageant } = await searchParams;
  const tab = OTHER_PAGEANT_TABS.find((item) => item.id === activeTab(pageant));
  return {
    title: tab?.label ?? "Other Pageants",
    description:
      "Miss Grand International, Miss Supranational and Miss Intercontinental — reported in the same desk as the Big Four.",
  };
}

export default async function OtherPageantsPage({ searchParams }: PageProps) {
  const { pageant } = await searchParams;
  const current = activeTab(pageant);
  const tab = OTHER_PAGEANT_TABS.find((item) => item.id === current)!;
  const [featured, ...feed] = OTHER_PAGEANT_STORIES[current];

  return (
    <main>
      <PageHero
        kicker="Other Pageants"
        title={tab.label}
        dek="The crowns beyond the Big Four — the same desk, a pageant at a time."
      />

      <nav className="border-y border-hairline">
        <Container className="flex h-12 items-center justify-center gap-6 overflow-x-auto font-nav text-[11px] tracking-[2px] text-muted uppercase no-scrollbar">
          {OTHER_PAGEANT_TABS.map((item) => {
            const selected = item.id === current;
            return (
              <Link
                key={item.id}
                href={item.id === "grand" ? "/other-pageants" : `/other-pageants?pageant=${item.id}`}
                aria-current={selected ? "page" : undefined}
                className={selected ? "shrink-0 text-ink" : "shrink-0 hover:text-ink"}
              >
                {item.label}
              </Link>
            );
          })}
        </Container>
      </nav>

      <section id="stories" className="py-8 desk:py-10">
        <Container className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="min-w-0 flex-1">
            {featured ? (
              <article className="flex flex-col gap-8 border-b border-hairline pb-14 lg:flex-row lg:items-center">
                <div className="min-w-0 flex-1">
                  <Kicker tone="accent">{featured.kicker}</Kicker>
                  <h2 className="mt-3 font-heading text-[22px] font-semibold leading-[1.3] text-heading desk:text-[26px]">
                    {featured.title}
                  </h2>
                  <p className="mt-4 font-body text-[15px] leading-6 text-neutral-500">{featured.dek}</p>
                  <p className="mt-5 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">
                    By {featured.author} · {featured.date}
                  </p>
                </div>
                <div className="lg:w-[420px] lg:shrink-0">
                  <CoverImage
                    src={featured.image}
                    alt={featured.title}
                    className="h-[280px] w-full lg:h-[360px]"
                    sizes="420px"
                  />
                </div>
              </article>
            ) : null}

            <div className="flex flex-col">
              {feed.map((item) => (
                <article key={item.title} className="flex gap-6 border-b border-hairline py-8">
                  <div className="min-w-0 flex-1">
                    <Kicker>{item.kicker}</Kicker>
                    <h3 className="mt-2 font-heading text-[16px] font-semibold leading-[1.4] text-heading">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-body text-[15px] leading-6 text-neutral-500">{item.dek}</p>
                    <p className="mt-3 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">
                      By {item.author} · {item.date}
                    </p>
                  </div>
                  <div className="hidden w-[220px] shrink-0 sm:block">
                    <CoverImage
                      src={item.image}
                      alt={item.title}
                      className="h-[147px] w-[220px]"
                      sizes="220px"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="flex w-full flex-col gap-10 lg:w-[280px] lg:shrink-0">
            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">
                In this edition
              </p>
              <ol className="mt-4 flex flex-col gap-4">
                {OTHER_PAGEANT_STORIES[current].map((item, index) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="font-heading text-xl text-muted">{index + 1}</span>
                    <p className="font-heading text-[15px] leading-snug text-heading">{item.title}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">
                The three pageants
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {OTHER_PAGEANT_TABS.map((item) => (
                  <Link
                    key={item.id}
                    href={item.id === "grand" ? "/other-pageants" : `/other-pageants?pageant=${item.id}`}
                    className="border border-hairline px-3 py-1.5 font-nav text-[10px] tracking-[1.2px] uppercase hover:border-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </Container>
      </section>
    </main>
  );
}
