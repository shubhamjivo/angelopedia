import Link from "next/link";
import { MOST_READ, OPINIONS, POLLS } from "@/lib/content";
import {
  EDITION_LABEL,
  HOME_LEAD,
  HOME_SECONDARY,
  LATEST_DESK,
  storyPath,
} from "@/lib/stories";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";

export function FrontPage() {
  const wire = LATEST_DESK;
  const poll = POLLS[0];

  return (
    <section id="the-latest" className="border-t border-hairline py-16 desk:py-20">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-nav text-[11px] tracking-[1.8px] text-muted uppercase">
              {EDITION_LABEL}
            </p>
            <h2 className="mt-3 font-heading text-[36px] font-semibold leading-none text-heading desk:text-[42px]">
              The Latest
            </h2>
          </div>
          <Link
            href="/news"
            className="font-nav text-[11px] tracking-[1.2px] text-muted uppercase hover:text-ink"
          >
            All stories
          </Link>
        </div>
        {/* <div className="mt-4 border-t-2 border-ink pt-[3px]"> */}
        {/*   <div className="border-t border-ink" /> */}
        {/* </div> */}

        <div className="mt-8 grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-0">
          <div className="min-w-0 lg:pr-10">
            <article>
              <Link href={storyPath(HOME_LEAD)} className="group block">
                <CoverImage
                  src={HOME_LEAD.image}
                  alt={HOME_LEAD.title}
                  className="aspect-[16/10] w-full sm:aspect-[2/1]"
                  imageClassName="object-[center_20%] transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1023px) 100vw, 980px"
                  priority
                />
                <Kicker tone="accent" className="mt-5">
                  {HOME_LEAD.kicker}
                </Kicker>
                <h3 className="mt-3 font-heading text-[28px] font-semibold leading-[1.12] text-heading group-hover:text-ink desk:text-[34px]">
                  {HOME_LEAD.title}
                </h3>
                <p className="mt-4 max-w-[40rem] font-body text-[17px] leading-7 text-ink">
                  {HOME_LEAD.dek}
                </p>
                <p className="mt-4 font-nav text-[11px] tracking-[1.6px] text-muted uppercase">
                  By {HOME_LEAD.author} · {HOME_LEAD.date}
                </p>
              </Link>
            </article>

            <ul
              role="list"
              className="mt-8 grid gap-8 border-t border-hairline pt-8 sm:grid-cols-3"
            >
              {HOME_SECONDARY.map((item) => (
                <li key={item.slug}>
                  <Link href={storyPath(item)} className="group flex h-full flex-col">
                    <CoverImage
                      src={item.image}
                      alt={item.title}
                      className="aspect-[3/2] w-full"
                      imageClassName="object-[center_18%] transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 639px) 100vw, 320px"
                    />
                    <Kicker className="mt-3">{item.kicker}</Kicker>
                    <h3 className="mt-2 font-heading text-[18px] font-medium leading-snug text-heading group-hover:text-ink desk:text-[20px]">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-body text-[15px] leading-6 text-ink">
                      {item.dek}
                    </p>
                    <p className="mt-3 font-nav text-[11px] tracking-[1.4px] text-muted uppercase">
                      By {item.author} · {item.date}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <aside className="flex flex-col gap-10 border-t border-hairline pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] text-ink uppercase">
                Most read
              </p>
              <ol className="mt-4 flex flex-col gap-4">
                {MOST_READ.map((item, index) => (
                  <li key={item.href} className="flex gap-3">
                    <span className="font-heading text-[22px] leading-none text-accent">
                      {index + 1}
                    </span>
                    <Link
                      href={item.href}
                      className="font-heading text-[17px] leading-snug text-heading hover:text-ink"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] text-ink uppercase">
                More headlines
              </p>
              <ul role="list" className="mt-1 flex flex-col">
                {wire.map((item) => (
                  <li key={item.slug} className="border-b border-hairline">
                    <Link href={storyPath(item)} className="group flex items-start gap-3 py-4">
                      <CoverImage
                        src={item.image}
                        alt=""
                        className="h-[64px] w-[64px] shrink-0"
                        imageClassName="object-[center_18%]"
                        sizes="64px"
                      />
                      <span className="min-w-0">
                        <span className="block font-nav text-[10px] tracking-[1.4px] text-muted uppercase">
                          {item.kicker} · {item.date}
                        </span>
                        <span className="mt-1 block font-heading text-[17px] leading-snug font-medium text-heading group-hover:text-ink">
                          {item.title}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-baseline justify-between gap-3 border-b border-ink pb-3">
                <p className="font-nav text-[11px] tracking-[2px] text-ink uppercase">Opinions</p>
                <Link
                  href="/news?section=opinions"
                  className="font-nav text-[10px] tracking-[1.2px] text-muted uppercase hover:text-ink"
                >
                  All opinions
                </Link>
              </div>
              <ul role="list">
                {OPINIONS.map((item) => {
                  const [date, name] = item.byline.split(" · ");
                  return (
                    <li key={item.href} className="border-b border-hairline">
                      <Link href={item.href} className="group block py-4">
                        <span className="block font-nav text-[10px] tracking-[1.6px] text-ink uppercase">
                          {name ?? item.byline}
                        </span>
                        <span className="mt-1 block font-heading text-[17px] leading-snug font-medium text-heading group-hover:text-ink">
                          {item.title}
                        </span>
                        <span className="mt-2 block font-nav text-[10px] tracking-[1.4px] text-muted uppercase">
                          Opinion · {date}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="bg-neutral-200/40 p-5">
              <Kicker tone="accent">{poll.kicker}</Kicker>
              <p className="mt-3 font-heading text-[22px] font-medium leading-snug text-heading">
                {poll.question}
              </p>
              <p className="mt-3 font-body text-[15px] leading-6 text-neutral-500">
                {poll.note}
              </p>
              <Link
                href="/play"
                className="mt-4 inline-flex font-nav text-[11px] tracking-[1.6px] text-ink uppercase hover:text-heading"
              >
                Cast your vote
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
