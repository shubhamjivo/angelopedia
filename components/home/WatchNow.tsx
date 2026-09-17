import Link from "next/link";
import { HOME_VIDEOS } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

export function WatchNow() {
  return (
    <section className="screen-section py-16 desk:py-24">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-[36px] font-semibold leading-none text-heading desk:text-[42px]">
            Watch Now
          </h2>
          <Link
            href="/videos"
            className="font-nav text-[11px] tracking-[1.2px] text-muted uppercase hover:text-ink"
          >
            All Videos
          </Link>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <Link href={HOME_VIDEOS.featured.href} className="flex flex-col">
            <div className="relative">
              <CoverImage
                src={HOME_VIDEOS.featured.image}
                alt={HOME_VIDEOS.featured.title}
                className="h-[240px] w-full lg:h-[424px]"
                sizes="(max-width: 1023px) 100vw, 754px"
              />
              <PlayMark />
            </div>
            <h3 className="mt-5 font-heading text-[26px] font-semibold leading-tight text-heading">
              {HOME_VIDEOS.featured.title}
            </h3>
            <p className="mt-2 text-[13px] text-muted">{HOME_VIDEOS.featured.meta}</p>
          </Link>
          <div className="flex flex-col gap-6">
            {HOME_VIDEOS.items.map((item) => (
              <Link key={item.title} href={item.href} className="flex gap-4">
                <div className="relative w-[150px] shrink-0">
                  <CoverImage
                    src={item.image}
                    alt={item.title}
                    className="h-[84px] w-[150px]"
                    sizes="150px"
                  />
                  <PlayMark small />
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-medium leading-snug text-heading">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[13px] text-muted">{item.meta}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PlayMark({ small = false }: { small?: boolean }) {
  return (
    <span
      aria-hidden
      className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-black/30 ${
        small ? "size-7" : "size-14"
      }`}
    >
      <span
        className={`ml-0.5 border-y-transparent border-l-white ${
          small
            ? "border-y-[5px] border-l-[8px]"
            : "border-y-[8px] border-l-[14px]"
        }`}
      />
    </span>
  );
}
