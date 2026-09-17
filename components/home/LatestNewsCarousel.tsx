"use client";

import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";

type Item = {
  title: string;
  href: string;
  image: string;
  byline: string;
};

type LatestNewsCarouselProps = {
  items: Item[];
  reverse?: boolean;
};

export function LatestNewsCarousel({ items, reverse = false }: LatestNewsCarouselProps) {
  const slides = [...items, ...items];

  return (
    <div className="carousel news-track relative h-[680px] overflow-hidden">
      {/* <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[90px] bg-gradient-to-b from-transparent to-paper" /> */}
      <Swiper
        modules={[Autoplay]}
        direction="vertical"
        slidesPerView={2.45}
        spaceBetween={12}
        loop
        speed={18000}
        allowTouchMove
        observer
        observeParents
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: reverse,
        }}
        className="!h-[680px]"
        style={{ height: 680 }}
      >
        {slides.map((item, index) => (
          <SwiperSlide key={`${item.href}-${index}`}>
            <Link href={item.href} className="flex h-full flex-col gap-1.5">
              <CoverImage
                src={item.image}
                alt={item.title}
                className="h-[175px] w-full shrink-0"
                sizes="330px"
              />
              <div className="flex flex-col gap-1.5 pt-2.5">
                <Kicker>Feature</Kicker>
                <p className="text-sm font-medium leading-[1.3] text-heading">
                  {item.title}
                </p>
                <p className="text-[11px] text-neutral-500">{item.byline}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
