import type { Metadata } from "next";
import Link from "next/link";
import { FOLLOW_PAGEANTS, MOST_READ, NEWS_FILTERS } from "@/lib/content";
import { SECTION_LABELS, listStories, storyPath, type StorySection } from "@/lib/stories";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { PageHero } from "@/components/ui/PageHero";

const SECTIONS = new Set<string>(Object.keys(SECTION_LABELS));

type NewsProps = {
  searchParams: Promise<{ section?: string; q?: string }>;
};

function sectionLabel(section?: string) {
  if (section && SECTIONS.has(section)) return SECTION_LABELS[section as StorySection];
  return "The Latest";
}

export async function generateMetadata({ searchParams }: NewsProps): Promise<Metadata> {
  const { section, q } = await searchParams;
  const title = q?.trim() ? `Search: ${q.trim()}` : sectionLabel(section);
  return {
    title,
    description: "Crowns, contests and the people who carry them — reported daily from 195 nations.",
  };
}

export default async function NewsPage({ searchParams }: NewsProps) {
  const { section, q } = await searchParams;
  const activeSection = section && SECTIONS.has(section) ? section : undefined;
  const query = q?.trim() ?? "";
  const stories = listStories({ section: activeSection, q: query });
  const [featured, ...feed] = stories;
  const heading = query ? `Results for “${query}”` : sectionLabel(activeSection);
  const dek = query
    ? `${stories.length} ${stories.length === 1 ? "story" : "stories"} match.`
    : activeSection
      ? `${sectionLabel(activeSection)} from the Angelopedia desk.`
      : "Crowns, contests and the people who carry them — reported daily from 195 nations.";

  return (
    <main>
      <PageHero kicker="Newsroom" title={heading} dek={dek} />

      <nav className="border-y border-hairline">
        <Container className="flex h-12 items-center justify-center gap-6 overflow-x-auto font-nav text-[11px] tracking-[2px] text-muted uppercase no-scrollbar">
          {NEWS_FILTERS.map((filter) => {
            const current = filter.href === "/news" ? !activeSection && !query : filter.href === `/news?section=${activeSection}`;
            return (
              <Link
                key={filter.label}
                href={filter.href}
                aria-current={current ? "page" : undefined}
                className={current ? "text-ink" : "hover:text-ink"}
              >
                {filter.label}
              </Link>
            );
          })}
        </Container>
      </nav>

      <section id="stories" className="py-16 desk:py-20">
        <Container className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="min-w-0 flex-1">
            {featured ? (
              <article className="flex flex-col gap-8 border-b border-hairline pb-14 lg:flex-row lg:items-center">
                <div className="min-w-0 flex-1">
                  <Kicker tone="accent">{featured.kicker}</Kicker>
                  <h2 className="mt-3 font-heading text-[32px] font-semibold leading-tight text-heading desk:text-[40px]">
                    <Link href={storyPath(featured)} className="hover:text-ink">
                      {featured.title}
                    </Link>
                  </h2>
                  <p className="mt-4 font-body text-[15px] leading-6 text-neutral-500">{featured.dek}</p>
                  <p className="mt-5 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">
                    By {featured.author} · {featured.date}
                  </p>
                </div>
                <Link href={storyPath(featured)} className="lg:w-[420px] lg:shrink-0">
                  <CoverImage
                    src={featured.image}
                    alt={featured.title}
                    className="h-[280px] w-full lg:h-[360px]"
                    sizes="420px"
                  />
                </Link>
              </article>
            ) : (
              <p className="border-b border-hairline pb-14 font-body text-[17px] leading-7 text-neutral-500">
                No stories match. Try another section, or search a pageant, a country, or a writer.
              </p>
            )}

            <div className="flex flex-col">
              {feed.map((item) => (
                <article key={item.slug} className="flex gap-6 border-b border-hairline py-8">
                  <div className="min-w-0 flex-1">
                    <Kicker>{item.kicker}</Kicker>
                    <h3 className="mt-2 font-heading text-[22px] font-semibold leading-snug text-heading">
                      <Link href={storyPath(item)} className="hover:text-ink">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mt-2 font-body text-[15px] leading-6 text-neutral-500">{item.dek}</p>
                    <p className="mt-3 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">
                      By {item.author} · {item.date}
                    </p>
                  </div>
                  <Link href={storyPath(item)} className="hidden w-[220px] shrink-0 sm:block">
                    <CoverImage
                      src={item.image}
                      alt={item.title}
                      className="h-[147px] w-[220px]"
                      sizes="220px"
                    />
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <aside className="flex w-full flex-col gap-10 lg:w-[280px] lg:shrink-0">
            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">
                Most Read
              </p>
              <ol className="mt-4 flex flex-col gap-4">
                {MOST_READ.map((item, index) => (
                  <li key={item.href} className="flex gap-3">
                    <span className="font-heading text-xl text-muted">{index + 1}</span>
                    <Link
                      href={item.href}
                      className="font-heading text-[15px] leading-snug text-heading hover:text-ink"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">
                Follow a Pageant
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {FOLLOW_PAGEANTS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="border border-hairline px-3 py-1.5 font-nav text-[10px] tracking-[1.2px] uppercase hover:border-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">
                The Crown Letter
              </p>
              <p className="mt-4 font-body text-[15px] leading-6 text-neutral-500">
                One elegant email each Sunday — the week in pageantry, curated.
              </p>
              <Link
                href="/#newsletter"
                className="mt-4 flex h-11 items-center justify-center border border-ink font-nav text-[11px] tracking-[2px] uppercase"
              >
                Subscribe
              </Link>
            </div>
          </aside>
        </Container>
      </section>
    </main>
  );
}
