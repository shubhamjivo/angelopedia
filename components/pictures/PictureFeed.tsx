"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PICTURES_HREF, picturePath, type PictureAlbum } from "@/lib/pictures";
import { SITE_NAME } from "@/lib/site";
import { StoryFeedback } from "@/components/news/StoryFeedback";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

function feedFrom(albums: PictureAlbum[], startSlug: string): PictureAlbum[] {
  const start = albums.findIndex((album) => album.slug === startSlug);
  if (start < 0) return albums;
  return [...albums.slice(start), ...albums.slice(0, start)];
}

function Story({ album, number, first }: { album: PictureAlbum; number: number; first: boolean }) {
  const Title = first ? "h1" : "h2";

  return (
    <section
      id={first ? "frames" : album.slug}
      data-picture={album.slug}
      data-title={album.title}
      className={`py-8 desk:py-10 ${first ? "" : "border-t border-hairline"}`}
    >
      <Container>
        {first ? (
          <Link
            href={PICTURES_HREF}
            className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase hover:text-ink"
          >
            News In Pictures
          </Link>
        ) : (
          <p className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase">News In Pictures</p>
        )}

        <div className="mt-6 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-0">
          <figure className="min-w-0 lg:pr-8">
            <CoverImage
              src={album.cover}
              alt={album.title}
              className="aspect-[3/2] w-full"
              sizes="(max-width: 1023px) 100vw, 780px"
              priority={first}
            />
            <figcaption className="mt-3 font-nav text-[11px] tracking-[1.4px] text-muted uppercase">
              {String(number).padStart(2, "0")} · {album.credit}
            </figcaption>
          </figure>

          <div className="min-w-0 lg:border-l lg:border-hairline lg:pl-8">
            <p className="font-nav text-[10px] tracking-[1.6px] text-accent uppercase">{album.date}</p>
            <Title className="mt-3 font-heading text-[26px] font-semibold leading-tight text-heading desk:text-[32px]">
              {album.title}
            </Title>
            <p className="mt-5 font-body text-[16px] leading-7 text-ink">{album.dek}</p>
          </div>
        </div>

        <StoryFeedback
          id={`pictures:${album.slug}`}
          title={album.title}
          className="mt-10 max-w-[720px] border-t border-hairline pt-8"
        />
      </Container>
    </section>
  );
}

export function PictureFeed({ albums: all, startSlug }: { albums: PictureAlbum[]; startSlug: string }) {
  const albums = feedFrom(all, startSlug);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const hold = useRef(false);

  useEffect(() => {
    const node = sentinel.current;
    if (!node || count >= albums.length) return;

    let timer = 0;

    const tryLoad = () => {
      const rect = node.getBoundingClientRect();
      const near = rect.top < window.innerHeight + 160 && rect.bottom > 0;
      if (!near) {
        hold.current = false;
        return;
      }
      if (hold.current || window.scrollY < 80) return;
      hold.current = true;
      setLoading(true);
      timer = window.setTimeout(() => {
        setCount((current) => Math.min(current + 1, albums.length));
        setLoading(false);
      }, 320);
    };

    const observer = new IntersectionObserver(tryLoad, { rootMargin: "0px 0px 160px 0px" });
    observer.observe(node);
    window.addEventListener("scroll", tryLoad, { passive: true });
    window.addEventListener("resize", tryLoad);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", tryLoad);
      window.removeEventListener("resize", tryLoad);
      window.clearTimeout(timer);
    };
  }, [albums.length, count]);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-picture]");
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const story = visible.target as HTMLElement;
        const slug = story.dataset.picture;
        const title = story.dataset.title;
        if (!slug) return;
        const path = picturePath({ slug });
        if (window.location.pathname !== path) {
          window.history.replaceState(null, "", path);
        }
        if (title) document.title = `${title} | ${SITE_NAME}`;
      },
      { rootMargin: "-15% 0px -50% 0px", threshold: [0.2, 0.5] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [count]);

  const shown = albums.slice(0, count);
  const finished = count >= albums.length;

  return (
    <>
      {shown.map((album, index) => (
        <Story
          key={album.slug}
          album={album}
          number={all.findIndex((item) => item.slug === album.slug) + 1}
          first={index === 0}
        />
      ))}
      <div ref={sentinel} className="pb-10 text-center" aria-live="polite">
        {loading ? (
          <p className="font-nav text-[11px] tracking-[1.8px] text-muted uppercase">
            Loading the next story
          </p>
        ) : finished ? (
          <Link
            href={PICTURES_HREF}
            className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase hover:text-ink"
          >
            All pictures
          </Link>
        ) : null}
      </div>
    </>
  );
}
