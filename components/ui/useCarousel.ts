"use client";

import { useRef, useState } from "react";
import type { Swiper as SwiperInstance } from "swiper";

/** Tracks a Swiper's position for custom prev/next controls and a slide counter. */
export function useCarousel() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [index, setIndex] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function sync(instance: SwiperInstance) {
    setIndex(instance.activeIndex);
    setAtStart(instance.isBeginning);
    setAtEnd(instance.isEnd);
  }

  return {
    index,
    atStart,
    atEnd,
    prev: () => swiperRef.current?.slidePrev(),
    next: () => swiperRef.current?.slideNext(),
    /** Spread onto <Swiper>. */
    swiperProps: {
      onSwiper: (instance: SwiperInstance) => {
        swiperRef.current = instance;
        sync(instance);
      },
      onSlideChange: sync,
      onResize: sync,
      onBreakpoint: sync,
    },
  };
}
