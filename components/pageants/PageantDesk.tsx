import type { ReactNode } from "react";
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
  sizes,
  priority = false,
}: {
  frame: Frame;
  className: string;
  sizes: string;
  priority?: boolean;
}) {
  const sample = frame.alt.startsWith("Sample");
  return (
    <div className="relative">
      <CoverImage
        src={frame.src}
        alt={frame.alt}
        className={className}
        imageClassName="object-center"
        sizes={sizes}
        priority={priority}
      />
      {sample ? (
        <span className="absolute top-3 left-3 bg-paper px-2 py-1 font-nav text-[10px] tracking-[1.4px] text-ink uppercase">
          Sample
        </span>
      ) : null}
    </div>
  );
}

function frameFor(item: PageantPiece, index: number, fallback?: Frame) {
  return pictureFor(item) ?? fallback ?? sampleFrame(index);
}

function StoryCard({ item, frame }: { item: PageantPiece; frame: Frame }) {
  const card = (
    <>
      <FrameShot
        frame={frame}
        className="h-[104px] w-[104px] shrink-0 sm:aspect-square sm:h-auto sm:w-full"
        sizes="(max-width: 640px) 104px, 320px"
      />
      <div className="min-w-0 sm:mt-3">
        <Kicker>{item.kicker}</Kicker>
        <h3 className="mt-1 font-heading text-[16px] font-semibold leading-[1.35] text-heading group-hover:text-ink sm:mt-2">
          {item.title}
        </h3>
        {item.byline !== item.dek ? (
          <p className="mt-2 font-nav text-[11px] tracking-[1.4px] text-muted uppercase">{item.byline}</p>
        ) : null}
      </div>
    </>
  );
  if (item.href) {
    return (
      <Link href={item.href} className="group flex gap-4 sm:block">
        {card}
      </Link>
    );
  }
  return <div className="flex gap-4 sm:block">{card}</div>;
}

function PieceAnchor({
  href,
  className,
  children,
}: {
  href?: string;
  className: string;
  children: ReactNode;
}) {
  if (!href) return <div className={className}>{children}</div>;
  if (href.startsWith("http")) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

function BodyCopy({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="flex max-w-[40rem] flex-col gap-5">
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="font-body text-[16px] leading-7 text-ink">
          {paragraph}
        </p>
      ))}
    </div>
  );
}

function GroupLabel({ children }: { children: ReactNode }) {
  return (
    <h3 className="font-heading text-[22px] font-semibold leading-none text-heading desk:text-[26px]">{children}</h3>
  );
}

function splitByline(byline: string) {
  const parts = byline.split("·").map((part) => part.trim());
  if (parts.length < 2) return { author: byline, day: "", month: "", year: "" };
  const date = parts[parts.length - 1] ?? "";
  const author = parts.slice(0, -1).join(" · ");
  const match = date.match(/^(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})$/);
  if (!match) return { author: byline, day: "", month: "", year: "" };
  return { author, day: match[1], month: match[2], year: match[3] };
}

function resultNote(item: PageantPiece) {
  if (item.byline === item.dek || item.byline === item.kicker) return null;
  if (item.byline === "Top 6" || item.byline === "Top 13") return null;
  return item.byline;
}

function EssayColumn({ pieces, body }: { pieces: PageantPiece[]; body: string[] }) {
  const intro = pieces.find((piece) => !pieceYear(piece));
  const chapters = pieces.filter((piece) => piece !== intro);
  const introFrame = intro ? pictureFor(intro) : undefined;
  return (
    <div className="flex flex-col gap-8">
      {intro ? (
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:gap-8">
          {introFrame ? (
            <FrameShot
              frame={introFrame}
              className="aspect-[3/4] w-full lg:w-[260px] lg:shrink-0"
              sizes="260px"
              priority
            />
          ) : null}
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-[22px] font-semibold leading-none text-heading desk:text-[26px]">
              {intro.title}
            </h3>
            <p className="mt-4 font-body text-[16px] leading-7 text-ink">{intro.dek}</p>
          </div>
        </div>
      ) : null}
      {body.length ? <BodyCopy paragraphs={body} /> : null}
      {chapters.length ? (
        <ul className="flex flex-col">
          {chapters.map((item) => {
            const frame = pictureFor(item);
            return (
              <li key={`${item.kicker}-${item.title}`} className="flex gap-4 border-t border-hairline py-6 sm:gap-6">
                {frame ? (
                  <FrameShot
                    frame={frame}
                    className="aspect-[3/2] w-[148px] shrink-0 sm:w-[220px]"
                    sizes="220px"
                  />
                ) : (
                  <div className="flex aspect-[3/2] w-[148px] shrink-0 items-center justify-center border border-hairline sm:w-[220px]">
                    <span className="font-heading text-[22px] text-heading desk:text-[26px]">{item.kicker}</span>
                  </div>
                )}
                <div className="min-w-0">
                  <Kicker>{item.kicker}</Kicker>
                  <h3 className="mt-2 font-heading text-[22px] font-semibold leading-none text-heading desk:text-[26px]">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-body text-[16px] leading-7 text-ink">{item.dek}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function NewsColumn({ pieces }: { pieces: PageantPiece[] }) {
  return (
    <ul className="flex flex-col">
      {pieces.map((item, index) => {
        const frame = pictureFor(item);
        const date = splitByline(item.byline);
        return (
          <li key={`${item.title}-${index}`} className="border-b border-hairline py-5">
            <PieceAnchor href={item.href} className="group flex gap-4">
              <div className="w-14 shrink-0">
                <p className="font-heading text-[28px] leading-none text-heading">{date.day}</p>
                <p className="mt-2 font-nav text-[11px] tracking-[1.2px] text-muted uppercase">{date.month}</p>
                <p className="font-nav text-[11px] tracking-[1.2px] text-muted">{date.year}</p>
              </div>
              {frame ? (
                <FrameShot
                  frame={frame}
                  className="aspect-[5/4] w-[88px] shrink-0 sm:w-[148px]"
                  sizes="148px"
                  priority={index === 0}
                />
              ) : null}
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-[16px] font-semibold leading-[1.35] text-heading group-hover:text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 font-body text-[15px] leading-6 text-ink">{item.dek}</p>
                <p className="mt-2 font-nav text-[11px] tracking-[1.4px] text-muted uppercase">{date.author}</p>
              </div>
            </PieceAnchor>
          </li>
        );
      })}
    </ul>
  );
}

function HallRoll({ pieces }: { pieces: PageantPiece[] }) {
  return (
    <ul className="flex flex-col">
      {pieces.map((item, index) => {
        const frame = pictureFor(item);
        return (
          <li key={`${item.kicker}-${item.title}`} className="flex flex-col gap-4 border-b border-hairline py-6 sm:flex-row sm:items-center sm:gap-8">
            {frame ? (
              <FrameShot
                frame={frame}
                className="aspect-[3/2] w-full sm:w-[300px] sm:shrink-0"
                sizes="300px"
                priority={index === 0}
              />
            ) : null}
            <div className="min-w-0">
              <p className="font-heading text-[30px] leading-none text-heading desk:text-[36px]">{item.kicker}</p>
              <h3 className="mt-3 font-heading text-[22px] font-semibold leading-none text-heading desk:text-[26px]">
                {item.title}
              </h3>
              <p className="mt-3 font-nav text-[13px] tracking-[1.4px] text-ink uppercase">{item.dek}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

function PortraitWall({ pieces }: { pieces: PageantPiece[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 sm:gap-x-4 desk:grid-cols-4">
      {pieces.map((item, index) => {
        const frame = pictureFor(item);
        const card = (
          <>
            {frame ? (
              <FrameShot
                frame={frame}
                className="aspect-[5/6] w-full"
                sizes="(max-width: 640px) 46vw, 240px"
                priority={index < 4}
              />
            ) : (
              <div className="aspect-[5/6] w-full bg-ink/10" />
            )}
            <h3 className="mt-3 font-heading text-[16px] font-semibold leading-[1.3] text-heading group-hover:text-ink">
              {item.title}
            </h3>
            <p className="mt-1 font-nav text-[11px] tracking-[1.2px] text-ink uppercase">{item.dek}</p>
          </>
        );
        return (
          <li key={`${item.title}-${index}`}>
            <PieceAnchor href={item.href} className="group block">
              {card}
            </PieceAnchor>
          </li>
        );
      })}
    </ul>
  );
}

function ResultLine({ item }: { item: PageantPiece }) {
  const frame = pictureFor(item);
  const region = item.kicker === "Continental Queen" ? item.byline : null;
  const note = region ? null : resultNote(item);
  return (
    <li className="flex items-center gap-4 border-b border-hairline py-3">
      {frame ? <FrameShot frame={frame} className="h-16 w-14 shrink-0" sizes="56px" /> : null}
      <div className="min-w-0">
        {region ? <p className="font-nav text-[11px] tracking-[1.4px] text-muted uppercase">{region}</p> : null}
        <h3 className="mt-1 font-heading text-[16px] font-semibold leading-[1.3] text-heading">{item.title}</h3>
        <p className="mt-1 font-body text-[15px] leading-6 text-ink">{item.dek}</p>
        {note ? <p className="mt-1 font-nav text-[11px] tracking-[1.2px] text-ink uppercase">{note}</p> : null}
      </div>
    </li>
  );
}

function ResultsBoard({ pieces, body }: { pieces: PageantPiece[]; body: string[] }) {
  const winner = pieces.find((piece) => piece.kicker === "Winner");
  const runners = pieces.filter((piece) => piece.kicker.endsWith("Runner-up"));
  const continents = pieces.filter((piece) => piece.kicker === "Continental Queen");
  const top6 = pieces.filter((piece) => piece.kicker === "Top 6");
  const top13 = pieces.filter((piece) => piece.kicker === "Top 13");
  const winnerFrame = winner ? pictureFor(winner) : undefined;
  const winnerNote = winner ? resultNote(winner) : null;
  return (
    <div className="flex flex-col gap-10">
      {winner ? (
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:gap-8">
          {winnerFrame ? (
            <FrameShot
              frame={winnerFrame}
              className="aspect-[3/4] w-full sm:w-[280px] sm:shrink-0"
              sizes="280px"
              priority
            />
          ) : null}
          <div className="min-w-0">
            <Kicker>{winner.kicker}</Kicker>
            <h3 className="mt-3 font-heading text-[22px] font-semibold leading-none text-heading desk:text-[26px]">
              {winner.title}
            </h3>
            <p className="mt-3 font-nav text-[13px] tracking-[1.6px] text-ink uppercase">{winner.dek}</p>
            {winnerNote ? <p className="mt-4 max-w-[36rem] font-body text-[16px] leading-7 text-ink">{winnerNote}</p> : null}
          </div>
        </div>
      ) : null}
      {runners.length ? (
        <ul className="grid gap-4 sm:grid-cols-2">
          {runners.map((item, index) => (
            <li key={item.kicker} className="border border-hairline p-5">
              <p className="font-heading text-[30px] leading-none text-heading">{index + 1}</p>
              <p className="mt-4 font-nav text-[11px] tracking-[1.6px] text-muted uppercase">{item.kicker}</p>
              <h3 className="mt-2 font-heading text-[22px] font-semibold leading-none text-heading">{item.title}</h3>
              <p className="mt-2 font-nav text-[13px] tracking-[1.4px] text-ink uppercase">{item.dek}</p>
              {resultNote(item) ? (
                <p className="mt-3 font-body text-[15px] leading-6 text-ink">{resultNote(item)}</p>
              ) : null}
            </li>
          ))}
        </ul>
      ) : null}
      {body.length ? <BodyCopy paragraphs={body} /> : null}
      {continents.length ? (
        <div>
          <GroupLabel>Continental Queens</GroupLabel>
          <ul className="mt-4">
            {continents.map((item) => (
              <ResultLine key={`${item.byline}-${item.title}`} item={item} />
            ))}
          </ul>
        </div>
      ) : null}
      {top6.length ? (
        <div>
          <GroupLabel>Top 6</GroupLabel>
          <ul className="mt-4">
            {top6.map((item, index) => (
              <ResultLine key={`${item.title}-${index}`} item={item} />
            ))}
          </ul>
        </div>
      ) : null}
      {top13.length ? (
        <div>
          <GroupLabel>Also in the Top 13</GroupLabel>
          <ul className="mt-4">
            {top13.map((item, index) => (
              <ResultLine key={`${item.title}-${index}`} item={item} />
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

function VideoGrid({ pieces }: { pieces: PageantPiece[] }) {
  return (
    <ul className="grid gap-x-6 gap-y-8 sm:grid-cols-2">
      {pieces.map((item, index) => {
        const frame = pictureFor(item);
        return (
          <li key={`${item.title}-${index}`}>
            <PieceAnchor href={item.href} className="group block">
              <div className="relative">
                {frame ? (
                  <FrameShot frame={frame} className="aspect-video w-full" sizes="(max-width: 640px) 100vw, 480px" priority={index < 2} />
                ) : (
                  <div className="aspect-video w-full bg-ink/10" />
                )}
                <span className="absolute bottom-3 left-3 flex h-9 w-9 items-center justify-center bg-paper">
                  <span className="ml-0.5 border-y-[6px] border-l-[10px] border-y-transparent border-l-ink" />
                </span>
              </div>
              <h3 className="mt-3 font-heading text-[16px] font-semibold leading-[1.35] text-heading group-hover:text-ink">
                {item.title}
              </h3>
            </PieceAnchor>
          </li>
        );
      })}
    </ul>
  );
}

function CardGrid({ pieces, opening }: { pieces: PageantPiece[]; opening: Frame[] }) {
  return (
    <ul className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10">
      {pieces.map((item, index) => (
        <li key={`${item.kicker}-${item.title}-${index}`} className="border-b border-hairline py-4 sm:border-0 sm:py-0">
          <StoryCard item={item} frame={frameFor(item, index, opening[index])} />
        </li>
      ))}
    </ul>
  );
}

function DeskColumn({
  layout,
  pieces,
  body,
  opening,
}: {
  layout: PageantTab["layout"];
  pieces: PageantPiece[];
  body: string[];
  opening: Frame[];
}) {
  if (layout === "essay") return <EssayColumn pieces={pieces} body={body} />;
  if (layout === "news") return <NewsColumn pieces={pieces} />;
  if (layout === "roll") return <HallRoll pieces={pieces} />;
  if (layout === "portraits") return <PortraitWall pieces={pieces} />;
  if (layout === "results") return <ResultsBoard pieces={pieces} body={body} />;
  if (layout === "videos") return <VideoGrid pieces={pieces} />;
  return (
    <div className="flex flex-col">
      {pieces.length ? <CardGrid pieces={pieces} opening={opening} /> : null}
      {pieces[0] && body.length ? (
        <div className="mt-8 border-t border-hairline pt-8">
          <BodyCopy paragraphs={body} />
        </div>
      ) : null}
    </div>
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
    <nav aria-label="Years" className="order-2 border border-hairline lg:order-none">
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
  const years = pageantYears([current]);
  const activeYear = year && years.includes(year) ? year : undefined;
  const visible = activeYear
    ? current.pieces.filter((piece) => pieceYear(piece) === activeYear)
    : current.pieces;
  const featured = visible[0];
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
          <div className="order-1 min-w-0 flex-1">
            {activeYear && !visible.length ? (
              <p className="border-b border-hairline pb-8 font-body text-[16px] leading-7 text-ink">
                Nothing filed for {activeYear} in this section.
              </p>
            ) : null}

            {visible.length || current.body.length ? (
              <DeskColumn
                layout={current.layout}
                pieces={visible}
                body={activeYear && current.layout === "essay" ? [] : current.body}
                opening={opening}
              />
            ) : null}
          </div>

          <div className="contents lg:order-2 lg:flex lg:w-[280px] lg:shrink-0 lg:flex-col lg:gap-10">
            {years.length > 1 ? (
              <YearBox basePath={basePath} tabId={current.id} years={years} active={activeYear} />
            ) : null}
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
