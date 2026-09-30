import Link from "next/link";
import { FOLLOW_PAGEANTS, MOST_READ } from "@/lib/content";
import {
  deskHref,
  heroTitle,
  isEditionTab,
  navTabs,
  pageantYears,
  pieceYear,
  resolveTab,
} from "@/lib/pageants/desk";
import { openingFrames, pictureFor, sampleFrame, type Frame } from "@/lib/pageants/frames";
import type { PageantPiece, PageantTab } from "@/lib/pageants/types";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { PageHero } from "@/components/ui/PageHero";

function FrameShot({
  frame,
  className,
  priority = false,
}: {
  frame: Frame;
  className: string;
  priority?: boolean;
}) {
  return (
    <CoverImage
      src={frame.src}
      alt={frame.alt}
      className={className}
      imageClassName="object-center"
      sizes="(max-width: 1024px) 100vw, 720px"
      priority={priority}
    />
  );
}

function Opening({ frames }: { frames: Frame[] }) {
  const [lead, second, third] = frames;
  if (!lead) return null;
  if (!second) {
    return <FrameShot frame={lead} className="h-[320px] w-full desk:h-[520px]" priority />;
  }
  if (!third) {
    return (
      <div className="grid gap-3 sm:h-[440px] sm:grid-cols-[1.7fr_1fr] desk:h-[500px]">
        <FrameShot frame={lead} className="h-[300px] sm:h-full" priority />
        <FrameShot frame={second} className="h-[200px] sm:h-full" />
      </div>
    );
  }
  return (
    <div className="grid gap-3 sm:h-[440px] sm:grid-cols-[1.7fr_1fr] sm:grid-rows-2 desk:h-[500px]">
      <FrameShot frame={lead} className="h-[300px] sm:col-start-1 sm:row-span-2 sm:h-full" priority />
      <FrameShot frame={second} className="h-[160px] sm:h-full" />
      <FrameShot frame={third} className="h-[160px] sm:h-full" />
    </div>
  );
}

function Title({ item, className }: { item: PageantPiece; className: string }) {
  if (!item.href) return <span className={className}>{item.title}</span>;
  return (
    <Link href={item.href} className={`${className} hover:text-ink`}>
      {item.title}
    </Link>
  );
}

function YearBox({
  basePath,
  tabId,
  years,
  active,
}: {
  basePath: string;
  tabId: string;
  years: string[];
  active?: string;
}) {
  const items = [{ id: "", label: "All" }, ...years.map((year) => ({ id: year, label: year }))];
  return (
    <nav aria-label="Years" className="order-1 border border-hairline lg:order-none">
      <p className="border-b border-ink px-3 py-3 font-nav text-[11px] tracking-[2px] uppercase">Year</p>
      <div className="flex flex-wrap gap-2 p-3">
        {items.map((item) => {
          const selected = item.id === (active ?? "");
          return (
            <Link
              key={item.label}
              href={deskHref(basePath, tabId, item.id || undefined)}
              aria-current={selected ? "page" : undefined}
              className={`flex h-9 w-[calc((100%-1rem)/3)] items-center justify-center border font-nav text-[13px] font-semibold ${
                selected ? "border-ink bg-ink text-white" : "border-hairline text-heading hover:border-ink"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function PageantDesk({
  name,
  basePath,
  editionName,
  tabs,
  tab,
  year,
}: {
  name: string;
  basePath: string;
  editionName: string;
  tabs: PageantTab[];
  tab?: string;
  year?: string;
}) {
  const current = resolveTab(tabs, tab);
  const years = pageantYears(tabs);
  const activeYear = year && years.includes(year) ? year : undefined;
  const visible = activeYear
    ? current.pieces.filter((piece) => pieceYear(piece) === activeYear)
    : current.pieces;
  const [featured, ...feed] = visible;
  const edition = isEditionTab(current.id);
  const links = navTabs(tabs);
  const opening = openingFrames(basePath, current.id, editionName, featured ?? current.pieces[0]);

  return (
    <main>
      <PageHero
        kicker={edition ? editionName : name}
        title={heroTitle(current.id)}
        dek={current.dek}
      />

      <nav aria-label="Quick Links" className="border-y border-hairline">
        <Container className="flex items-center gap-4 overflow-x-auto [justify-content:safe_center] no-scrollbar">
          {links.map((item) => {
            const selected = item.id === current.id;
            return (
              <Link
                key={item.id}
                href={deskHref(basePath, item.id, activeYear)}
                aria-current={selected ? "page" : undefined}
                className="relative shrink-0 py-4 font-nav text-[13px] font-semibold leading-[13px] tracking-[1.66px] text-ink uppercase"
              >
                {heroTitle(item.id)}
                {selected ? <span aria-hidden className="absolute inset-x-0 bottom-0 h-0.5 bg-ink" /> : null}
              </Link>
            );
          })}
        </Container>
      </nav>

      <section id="stories" className="py-8 desk:py-10">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-8">
          <div className="order-2 min-w-0 flex-1 lg:order-1">
            {opening.length ? (
              <div>
                <Opening frames={opening} />
                <p className="mt-3 font-nav text-[11px] tracking-[1.4px] text-neutral-500 uppercase">
                  {opening[0].alt}
                </p>
              </div>
            ) : null}

            {activeYear && !visible.length ? (
              <p className="border-b border-hairline py-8 font-body text-[16px] leading-7 text-ink">
                Nothing filed for {activeYear} in this section.
              </p>
            ) : null}

            {featured ? (
              <article className="border-b border-hairline py-8">
                <Kicker tone="accent">{featured.kicker}</Kicker>
                <h2 className="mt-3 max-w-[40rem] font-heading text-[22px] font-semibold leading-[1.3] text-heading desk:text-[26px]">
                  <Title item={featured} className="text-heading" />
                </h2>
                <p className="mt-4 max-w-[40rem] font-body text-[15px] leading-6 text-neutral-500">{featured.dek}</p>
                {featured.byline !== featured.dek ? (
                  <p className="mt-5 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">
                    {featured.byline}
                  </p>
                ) : null}
                {current.body.length ? (
                  <div className="mt-8 flex max-w-[40rem] flex-col gap-5">
                    {current.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 48)} className="font-body text-[16px] leading-7 text-ink">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                ) : null}
              </article>
            ) : null}

            <div className="flex flex-col">
              {feed.map((item, index) => {
                const shot = pictureFor(item) ?? sampleFrame(index);
                return (
                  <article key={`${item.kicker}-${item.title}-${index}`} className="flex gap-4 border-b border-hairline py-8 sm:gap-6">
                    {shot ? (
                      item.href ? (
                        <Link href={item.href} className="shrink-0">
                          <FrameShot frame={shot} className="h-[96px] w-[96px] sm:h-[132px] sm:w-[176px]" />
                        </Link>
                      ) : (
                        <FrameShot frame={shot} className="h-[96px] w-[96px] shrink-0 sm:h-[132px] sm:w-[176px]" />
                      )
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <Kicker>{item.kicker}</Kicker>
                      <h3 className="mt-2 font-heading text-[16px] font-semibold leading-[1.4] text-heading">
                        <Title item={item} className="text-heading" />
                      </h3>
                      <p className="mt-2 line-clamp-3 font-body text-[15px] leading-6 text-neutral-500">{item.dek}</p>
                      {item.byline !== item.dek ? (
                        <p className="mt-3 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">
                          {item.byline}
                        </p>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="contents lg:order-2 lg:flex lg:w-[280px] lg:shrink-0 lg:flex-col lg:gap-10">
            <YearBox basePath={basePath} tabId={current.id} years={years} active={activeYear} />
            <aside className="order-3 flex w-full flex-col gap-10 lg:order-none">
            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">Most Read</p>
              <ol className="mt-4 flex flex-col gap-4">
                {MOST_READ.map((item, index) => (
                  <li key={item.href} className="flex gap-3">
                    <span className="font-heading text-xl text-muted">{index + 1}</span>
                    <Link href={item.href} className="font-heading text-[15px] leading-snug text-heading hover:text-ink">
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
          </div>
        </Container>
      </section>
    </main>
  );
}
