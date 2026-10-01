"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import { ReelStory } from "@/components/home/ReelFrame";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import {
  EXCLUSIVE_INTERVIEWS,
  FINAL_VIDEOS,
  HOME_RAIL_COUNT,
  OTHER_INTERVIEWS,
  type VideoItem,
} from "@/lib/videos";

function InterviewArrow({ direction }: { direction: "prev" | "next" }) {
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

function meta(item: VideoItem) {
  return `${item.kicker} · ${item.date}`;
}

export function WatchNow() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const count = String(EXCLUSIVE_INTERVIEWS.length).padStart(2, "0");
  const otherInterviews = OTHER_INTERVIEWS.slice(0, HOME_RAIL_COUNT);
  const finalVideos = FINAL_VIDEOS.slice(0, HOME_RAIL_COUNT);

  function sync(instance: SwiperInstance) {
    setIndex(instance.activeIndex);
    setAtStart(instance.isBeginning);
    setAtEnd(instance.isEnd);
  }

  return (
    <section id="angelopedia-exclusive" className="border-t border-hairline bg-paper py-8 text-ink desk:py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
            Angelopedia Exclusive
          </h2>
          <Link
            href="/videos"
            className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase hover:text-ink"
          >
            All videos
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 desk:grid-cols-4 desk:items-stretch desk:gap-0">
          <div className="min-w-0 desk:col-span-3 desk:pr-4">
            <div className="mb-4 flex items-center justify-end gap-3">
              <p className="font-nav text-[11px] tracking-[1.8px] text-ink uppercase" aria-live="polite">
                {String(index + 1).padStart(2, "0")} / {count}
              </p>
              <button
                type="button"
                aria-label="Previous interview"
                disabled={atStart}
                onClick={() => swiperRef.current?.slidePrev()}
                className="grid size-9 place-items-center border border-hairline text-heading hover:border-heading disabled:opacity-40"
              >
                <InterviewArrow direction="prev" />
              </button>
              <button
                type="button"
                aria-label="Next interview"
                disabled={atEnd}
                onClick={() => swiperRef.current?.slideNext()}
                className="grid size-9 place-items-center border border-hairline text-heading hover:border-heading disabled:opacity-40"
              >
                <InterviewArrow direction="next" />
              </button>
            </div>
            <Swiper
              aria-roledescription="carousel"
              aria-label="Angelopedia exclusive interviews"
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
                prevSlideMessage: "Previous interview",
                nextSlideMessage: "Next interview",
              }}
              className="exclusive-reels w-full"
            >
              {EXCLUSIVE_INTERVIEWS.map((item) => (
                <SwiperSlide key={item.href}>
                  <ReelStory item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <aside className="flex flex-col gap-10 border-t border-hairline pt-8 desk:col-span-1 desk:border-t-0 desk:border-l desk:pt-0 desk:pl-4">
            <div className="flex flex-1 flex-col">
              <Link
                href="/videos#other-interview"
                className="block border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] text-ink uppercase hover:text-accent"
              >
                Other interview
              </Link>
              <ol className="mt-4 flex flex-1 flex-col justify-between gap-4">
                {otherInterviews.map((item, itemIndex) => (
                  <li key={item.href} className="flex flex-1">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full items-start gap-3"
                    >
                      <CoverImage
                        src={item.image}
                        alt=""
                        className="size-16 shrink-0"
                        imageClassName="object-cover"
                        sizes="64px"
                      />
                      <span className="font-heading text-[22px] leading-none text-accent">{itemIndex + 1}</span>
                      <span className="min-w-0 font-heading text-[15px] leading-[1.4] text-heading group-hover:text-ink">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <div className="flex flex-1 flex-col">
              <Link
                href="/videos#final-video"
                className="block border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] text-ink uppercase hover:text-accent"
              >
                Final video
              </Link>
              <ul role="list" className="mt-1 flex flex-1 flex-col justify-between">
                {finalVideos.map((item) => (
                  <li key={item.href} className="flex flex-1 border-b border-hairline">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex w-full items-start gap-3 py-4"
                    >
                      <CoverImage
                        src={item.image}
                        alt=""
                        className="size-16 shrink-0"
                        imageClassName="object-[center_18%]"
                        sizes="64px"
                      />
                      <span className="min-w-0">
                        <span className="block font-nav text-[10px] tracking-[1.4px] text-muted uppercase">
                          {meta(item)}
                        </span>
                        <span className="mt-1 block font-heading text-[15px] leading-[1.4] font-medium text-heading group-hover:text-ink">
                          {item.title}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
