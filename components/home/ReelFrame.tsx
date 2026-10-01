"use client";

import { useEffect, useRef } from "react";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import type { VideoItem } from "@/lib/videos";

export function ReelFrame({
  href,
  src,
  poster,
  title,
}: {
  href: string;
  src: string;
  poster: string;
  title: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const external = href.startsWith("http");

  useEffect(() => {
    const video = videoRef.current;
    const frame = video?.parentElement;
    if (!video || !frame) return;

    function play() {
      const media = videoRef.current;
      if (!media) return;
      void media.play().catch(() => {});
    }

    function stop() {
      const media = videoRef.current;
      if (!media) return;
      media.pause();
      media.currentTime = 0;
    }

    frame.addEventListener("mouseenter", play);
    frame.addEventListener("mouseleave", stop);
    frame.addEventListener("focus", play);
    frame.addEventListener("blur", stop);
    return () => {
      frame.removeEventListener("mouseenter", play);
      frame.removeEventListener("mouseleave", stop);
      frame.removeEventListener("focus", play);
      frame.removeEventListener("blur", stop);
    };
  }, []);

  return (
    <a
      href={href}
      aria-label={title}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="group relative block aspect-[9/16] w-full self-start overflow-hidden"
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        muted
        playsInline
        loop
        preload="metadata"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span
        aria-hidden
        className="absolute top-3 left-3 flex size-9 items-center justify-center rounded-full bg-ink transition-opacity group-hover:opacity-0 group-focus-visible:opacity-0"
      >
        <span className="ml-0.5 border-y-[7px] border-l-[11px] border-y-transparent border-l-white" />
      </span>
    </a>
  );
}

export function ReelStory({ item }: { item: VideoItem }) {
  const line = `${item.kicker} · ${item.date}`;
  const external = item.href.startsWith("http");

  return (
    <article className="min-w-0">
      {item.video ? (
        <ReelFrame href={item.href} src={item.video} poster={item.image} title={item.title} />
      ) : (
        <a
          href={item.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="group relative block aspect-[9/16] w-full"
        >
          <CoverImage
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full"
            imageClassName="object-cover"
            sizes="(max-width: 719px) 100vw, 320px"
          />
        </a>
      )}
      <Kicker className="mt-3">{line}</Kicker>
      <h3 className="mt-2 font-heading text-[16px] font-medium leading-snug text-heading">
        <a
          href={item.href}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          className="hover:text-accent"
        >
          {item.title}
        </a>
      </h3>
    </article>
  );
}
