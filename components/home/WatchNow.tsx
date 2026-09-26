import Link from "next/link";
import { WATCH_NOW_TABS } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { ReelFrame } from "@/components/home/ReelFrame";

export function WatchNow() {
  return (
    <section id="watch-now" className="border-t border-hairline bg-paper py-8 text-ink desk:py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
            Watch Now
          </h2>
          <Link
            href="/videos"
            className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase hover:text-ink"
          >
            All videos
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px bg-hairline md:grid-cols-2">
          {WATCH_NOW_TABS.map((tab) => (
            <article
              key={tab.id}
              className="grid grid-cols-1 gap-4 bg-paper p-4 sm:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] sm:gap-5 sm:p-5"
            >
              {tab.featured.video ? (
                <ReelFrame
                  href={tab.featured.href}
                  src={tab.featured.video}
                  poster={tab.featured.image}
                  title={tab.featured.title}
                />
              ) : (
                <Link
                  href={tab.featured.href}
                  className="group relative block aspect-[9/16] w-full self-start"
                >
                  <CoverImage
                    src={tab.featured.image}
                    alt={tab.featured.title}
                    className="absolute inset-0 h-full w-full"
                    imageClassName="object-cover"
                    sizes="(max-width: 639px) 100vw, 340px"
                  />
                </Link>
              )}

              <div className="flex min-w-0 flex-col">
                <Link href={tab.featured.href} className="group">
                  <p className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase">
                    {tab.label}
                  </p>
                  <h3 className="mt-2 font-heading text-[16px] font-medium leading-snug text-heading group-hover:text-accent">
                    {tab.featured.title}
                  </h3>
                  <p className="mt-2 font-nav text-[10px] leading-relaxed tracking-[1.4px] text-ink uppercase">
                    {tab.featured.kicker}
                  </p>
                  <span className="mt-3 inline-flex font-nav text-[13px] font-medium text-accent">
                    Watch
                  </span>
                </Link>

                <div className="mt-5 border-t border-hairline pt-3">
                  <p className="font-nav text-[10px] tracking-[1.6px] text-ink uppercase">
                    More in {tab.label}
                  </p>
                  <ul role="list" className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
                    {tab.items.map((item) => (
                      <li key={item.title}>
                        <Link href={item.href} className="group flex items-center gap-2.5">
                          <CoverImage
                            src={item.image}
                            alt=""
                            className="size-10 shrink-0"
                            imageClassName="object-[center_18%]"
                            sizes="40px"
                          />
                          <span className="min-w-0">
                            <span className="block font-heading text-[15px] font-medium leading-tight text-heading group-hover:text-accent">
                              {item.title}
                            </span>
                            <span className="mt-0.5 block font-nav text-[10px] leading-tight tracking-[1.2px] text-ink/70 uppercase">
                              {item.kicker}
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

