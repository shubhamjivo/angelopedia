"use client";

import Link from "next/link";
import { useId, useState, type KeyboardEvent } from "react";
import { WATCH_NOW_TABS, type WatchNowTab } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

export function WatchNow() {
  const [activeId, setActiveId] = useState<WatchNowTab["id"]>(WATCH_NOW_TABS[0].id);
  const tab = WATCH_NOW_TABS.find((item) => item.id === activeId) ?? WATCH_NOW_TABS[0];
  const baseId = useId();

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = WATCH_NOW_TABS.length - 1;
    let next = index;

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      next = index === last ? 0 : index + 1;
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      next = index === 0 ? last : index - 1;
    } else if (event.key === "Home") {
      next = 0;
    } else if (event.key === "End") {
      next = last;
    } else {
      return;
    }

    event.preventDefault();
    setActiveId(WATCH_NOW_TABS[next].id);
    const tabs = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]',
    );
    tabs?.[next]?.focus();
  }

  return (
    <section id="watch-now" className="bg-footer py-16 desk:py-20 text-white">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-[36px] font-semibold leading-none text-white desk:text-[42px]">
            Watch Now
          </h2>
          <Link
            href="/videos"
            className="font-nav text-[11px] tracking-[1.8px] text-white/60 uppercase hover:text-white"
          >
            All videos
          </Link>
        </div>

        <div className="mt-10 grid gap-2.5 lg:h-[540px] lg:grid-cols-[minmax(0,1.45fr)_minmax(280px,0.85fr)]">
          <div
            role="tabpanel"
            id={`${baseId}-panel-${tab.id}`}
            aria-labelledby={`${baseId}-tab-${tab.id}`}
            className="min-h-[420px] lg:min-h-0"
          >
            <Link
              href={tab.featured.href}
              className="group relative block h-full min-h-[420px] overflow-hidden"
            >
              <CoverImage
                src={tab.featured.image}
                alt={tab.featured.title}
                className="absolute inset-0 h-full w-full"
                imageClassName="object-[center_18%] transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1023px) 100vw, 820px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <PlayMark />
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 desk:p-7">
                <p className="font-nav text-[11px] tracking-[1.8px] text-gold uppercase">
                  {tab.featured.kicker}
                </p>
                <p className="max-w-[28rem] font-heading text-[26px] font-medium leading-snug text-white desk:text-[32px]">
                  {tab.featured.title}
                </p>
                <span className="font-nav text-[13px] font-medium text-gold">Watch</span>
              </div>
            </Link>
          </div>

          <div
            role="tablist"
            aria-label="Video categories"
            className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-4"
          >
            {WATCH_NOW_TABS.map((item, index) => {
              const selected = item.id === tab.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${item.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel-${item.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(item.id)}
                  onKeyDown={(event) => onTabKeyDown(event, index)}
                  className={`flex min-h-[92px] overflow-hidden text-left transition-colors ${
                    selected ? "bg-white/30" : "bg-white/18 hover:bg-white/24"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`w-1 shrink-0 ${selected ? "bg-gold" : "bg-white/15"}`}
                  />
                  <CoverImage
                    src={item.featured.image}
                    alt=""
                    className="h-full w-[78px] shrink-0 sm:w-[88px]"
                    imageClassName="object-[center_18%]"
                    sizes="88px"
                  />
                  <span className="flex min-w-0 flex-col justify-center px-4 py-3">
                    <span className="font-nav text-[10px] tracking-[1.6px] text-gold uppercase">
                      {item.label}
                    </span>
                    <span className="mt-1 line-clamp-2 font-heading text-[18px] font-medium leading-snug text-white">
                      {item.featured.title}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mt-10 font-nav text-[11px] tracking-[1.8px] text-white/60 uppercase">
          More in {tab.label}
        </p>
        <ul role="list" className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {tab.items.map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="group relative block h-[240px] overflow-hidden sm:h-[280px]">
                <CoverImage
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full"
                  imageClassName="object-[center_18%] transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 639px) 50vw, 320px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <PlayMark small />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-4">
                  <p className="font-nav text-[10px] tracking-[1.5px] text-gold uppercase">
                    {item.kicker}
                  </p>
                  <p className="font-heading text-[18px] font-medium leading-snug text-white">
                    {item.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function PlayMark({ small = false }: { small?: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-black/30 ${
        small ? "size-8" : "size-14"
      }`}
    >
      <span
        className={`ml-0.5 border-y-transparent border-l-white ${
          small ? "border-y-[5px] border-l-[8px]" : "border-y-[8px] border-l-[14px]"
        }`}
      />
    </span>
  );
}
