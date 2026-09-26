"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

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

  useEffect(() => {
    const video = videoRef.current;
    const frame = video?.parentElement;
    if (!video || !frame) return;

    function play() {
      void video.play().catch(() => {});
    }

    function stop() {
      video.pause();
      video.currentTime = 0;
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
    <Link
      href={href}
      aria-label={title}
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
    </Link>
  );
}
