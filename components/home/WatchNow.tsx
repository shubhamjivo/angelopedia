import Link from "next/link";
import { ExclusiveCarousel } from "@/components/home/ExclusiveCarousel";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import type { VideoItem } from "@/lib/videos";

function meta(item: VideoItem) {
  return `${item.kicker} · ${item.date}`;
}

export function WatchNow({
  exclusive,
  otherInterviews,
  finalVideos,
}: {
  exclusive: VideoItem[];
  otherInterviews: VideoItem[];
  finalVideos: VideoItem[];
}) {
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
            <ExclusiveCarousel items={exclusive} />
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
