"use client";

import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { ReelStory } from "@/components/home/ReelFrame";
import { CarouselArrow } from "@/components/ui/CarouselArrow";
import { useCarousel } from "@/components/ui/useCarousel";
import type { VideoItem } from "@/lib/videos";

function SlideButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Previous interview" : "Next interview"}
      disabled={disabled}
      onClick={onClick}
      className={`absolute top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full bg-paper text-heading shadow-md transition-opacity hover:text-accent disabled:pointer-events-none disabled:opacity-0 ${
        direction === "prev" ? "left-3" : "right-3"
      }`}
    >
      <CarouselArrow direction={direction} />
    </button>
  );
}

export function ExclusiveCarousel({ items }: { items: VideoItem[] }) {
  const { index, atStart, atEnd, prev, next, swiperProps } = useCarousel();

  return (
    <div className="relative">
      <SlideButton direction="prev" disabled={atStart} onClick={prev} />
      <SlideButton direction="next" disabled={atEnd} onClick={next} />
      <p
        className="absolute top-3 right-3 z-10 bg-ink/80 px-2.5 py-1 font-nav text-[10px] tracking-[1.6px] text-white uppercase"
        aria-live="polite"
      >
        {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
      </p>
      <Swiper
        aria-roledescription="carousel"
        aria-label="Angelopedia exclusive interviews"
        modules={[A11y]}
        {...swiperProps}
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
        {items.map((item) => (
          <SwiperSlide key={item.href}>
            <ReelStory item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
