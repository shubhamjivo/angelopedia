"use client";

import Link from "next/link";
import { useId, useState, type KeyboardEvent } from "react";
import { BIG_FOUR_TABS, type BigFourTab } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

export function BigFour() {
  const [activeId, setActiveId] = useState<BigFourTab["id"]>(BIG_FOUR_TABS[0].id);
  const tab = BIG_FOUR_TABS.find((item) => item.id === activeId) ?? BIG_FOUR_TABS[0];
  const baseId = useId();

  function onTabKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    const last = BIG_FOUR_TABS.length - 1;
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
    setActiveId(BIG_FOUR_TABS[next].id);
    const tabs = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>(
      '[role="tab"]',
    );
    tabs?.[next]?.focus();
  }

  return (
    <section className="flex h-svh flex-col overflow-hidden bg-neutral-900 text-white">
      <Container className="flex min-h-0 flex-1 flex-col py-5 lg:py-8">
        <div className="flex shrink-0 flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-heading text-[32px] font-semibold leading-none text-white lg:text-[36px] desk:text-[42px]">
            The Big Four
          </h2>
          <div className="relative min-w-0">
            <div
              role="tablist"
              aria-label="Big Four pageants"
              className="flex gap-6 overflow-x-auto no-scrollbar sm:gap-8"
            >
              {BIG_FOUR_TABS.map((item, index) => {
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
                    className={`relative shrink-0 pb-2 font-nav text-[11px] tracking-[2px] uppercase transition-colors ${
                      selected ? "text-white" : "text-white/45 hover:text-white/80"
                    }`}
                  >
                    {item.label}
                    {selected ? (
                      <span className="absolute inset-x-0 bottom-0 h-px bg-white" />
                    ) : null}
                  </button>
                );
              })}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-neutral-900 lg:hidden" />
          </div>
        </div>

        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${tab.id}`}
          aria-labelledby={`${baseId}-tab-${tab.id}`}
          className="mt-4 grid min-h-0 flex-1 grid-cols-1 grid-rows-[minmax(0,0.9fr)_auto_minmax(0,1fr)_auto] items-stretch gap-x-10 gap-y-3 lg:mt-6 lg:grid-cols-[minmax(0,1.7fr)_minmax(260px,1fr)] lg:grid-rows-[minmax(0,1fr)_auto] lg:gap-x-12 lg:gap-y-5"
        >
          <Link
            href={tab.href}
            className="group order-1 block h-full min-h-0"
          >
            <CoverImage
              src={tab.recent.image}
              alt={`${tab.recent.name}, ${tab.label} ${tab.recent.year}`}
              className="h-full w-full"
              imageClassName="object-[center_18%] transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1023px) 100vw, 780px"
            />
          </Link>

          <Link href={tab.href} className="group order-2 lg:order-3">
            <p className="font-nav text-[11px] tracking-[1.8px] text-gold uppercase">
              {tab.label} {tab.recent.year} · {tab.recent.country}
            </p>
            <h3 className="mt-2 font-heading text-[26px] font-medium leading-[1.12] text-white sm:text-[32px] lg:text-[clamp(28px,3.4vw,44px)]">
              {tab.recent.title}
            </h3>
          </Link>

          <ul
            role="list"
            className="order-3 grid min-h-0 grid-rows-4 gap-3 lg:order-2 lg:h-full lg:gap-4"
          >
            {tab.previous.map((item) => (
              <li key={item.name} className="min-h-0">
                <Link
                  href={tab.href}
                  className="group flex h-full min-h-0 items-center gap-4"
                >
                  <CoverImage
                    src={item.image}
                    alt={`${item.name}, ${tab.label} ${item.year}`}
                    className="aspect-[5/6] h-full w-auto max-h-full shrink-0"
                    imageClassName="object-[center_18%]"
                    sizes="118px"
                  />
                  <div className="min-w-0">
                    <p className="font-nav text-[10px] tracking-[1.6px] text-gold uppercase lg:text-[11px] lg:tracking-[1.8px]">
                      {tab.label} {item.year} · {item.country}
                    </p>
                    <p className="mt-1 line-clamp-2 font-heading text-[16px] font-medium leading-snug text-white transition-colors group-hover:text-white/80 sm:text-[18px] lg:text-[clamp(16px,1.45vw,22px)]">
                      {item.title}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href={tab.href}
            className="order-4 self-start font-nav text-[11px] tracking-[1.8px] text-white/80 uppercase transition-colors hover:text-white"
          >
            See all {tab.label} titleholders →
          </Link>
        </div>
      </Container>
    </section>
  );
}
