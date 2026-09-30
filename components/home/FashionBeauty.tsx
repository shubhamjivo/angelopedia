"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { FASHION_HREF, GOWNS, gownPath } from "@/lib/fashion";

function GownArrow({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 16 16"
      width="14"
      height="14"
      aria-hidden="true"
      className={direction === "prev" ? "rotate-180" : undefined}
    >
      <path
        d="M6 3.2 11.2 8 6 12.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FashionBeauty() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const count = String(GOWNS.length).padStart(2, "0");

  function sync(instance: SwiperInstance) {
    setIndex(instance.activeIndex);
    setAtStart(instance.isBeginning);
    setAtEnd(instance.isEnd);
  }

  return (
    <section
      id="fashion-and-beauty"
      className="border-t border-hairline bg-paper py-8 text-ink desk:py-10"
      aria-roledescription="carousel"
      aria-label="Fashion and Beauty"
    >
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
            Fashion and Beauty
          </h2>
          <div className="flex items-center gap-3">
            <Link
              href={FASHION_HREF}
              className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase hover:text-ink"
            >
              All gowns
            </Link>
            <p className="font-nav text-[11px] tracking-[1.8px] text-ink uppercase" aria-live="polite">
              {String(index + 1).padStart(2, "0")} / {count}
            </p>
            <button
              type="button"
              aria-label="Previous gown"
              disabled={atStart}
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid size-9 place-items-center border border-hairline text-heading hover:border-heading disabled:opacity-40"
            >
              <GownArrow direction="prev" />
            </button>
            <button
              type="button"
              aria-label="Next gown"
              disabled={atEnd}
              onClick={() => swiperRef.current?.slideNext()}
              className="grid size-9 place-items-center border border-hairline text-heading hover:border-heading disabled:opacity-40"
            >
              <GownArrow direction="next" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[A11y]}
          onSwiper={(instance) => {
            swiperRef.current = instance;
            sync(instance);
          }}
          onSlideChange={sync}
          onResize={sync}
          onBreakpoint={sync}
          slidesPerView={1}
          spaceBetween={16}
          speed={450}
          watchOverflow
          breakpoints={{
            720: { slidesPerView: 2, spaceBetween: 20 },
            1440: { slidesPerView: 3, spaceBetween: 24 },
          }}
          a11y={{
            prevSlideMessage: "Previous gown",
            nextSlideMessage: "Next gown",
          }}
          className="fashion-gowns mt-10 w-full"
        >
          {GOWNS.map((gown) => (
            <SwiperSlide key={gown.slug}>
              <article className="min-w-0">
                <Link href={gownPath(gown)} className="group block">
                  <CoverImage
                    src={gown.image}
                    alt={gown.alt}
                    className="aspect-[3/4] w-full"
                    imageClassName="object-top transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 719px) 100vw, (max-width: 1439px) 50vw, 440px"
                  />
                  <Kicker tone="accent" className="mt-4">
                    {gown.pageant}
                  </Kicker>
                  <h3 className="mt-2 font-heading text-[16px] font-medium leading-snug text-heading group-hover:text-accent">
                    {gown.dress}
                  </h3>
                  <p className="mt-2 font-nav text-[11px] tracking-[1.4px] text-muted uppercase">
                    {gown.name} · {gown.designer}
                  </p>
                </Link>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
