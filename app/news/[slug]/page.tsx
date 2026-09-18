import type { Metadata } from "next";
import Link from "next/link";
import { ARTICLE, READ_NEXT } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: ARTICLE.title,
  description: ARTICLE.dek,
};

export default function ArticlePage() {
  return (
    <main>
      <article>
        <Container className="flex flex-col items-center px-6 pt-16 pb-10 text-center desk:px-0">
          <Kicker tone="accent">{ARTICLE.kicker}</Kicker>
          <h1 className="mt-4 max-w-[920px] font-heading text-[36px] font-semibold leading-tight text-heading desk:text-[56px]">
            {ARTICLE.title}
          </h1>
          <p className="mt-5 max-w-[640px] font-body text-base leading-7 text-muted">
            {ARTICLE.dek}
          </p>
          <p className="mt-6 font-nav text-[11px] tracking-[1.8px] text-muted uppercase">
            {ARTICLE.byline} · {ARTICLE.credit} · {ARTICLE.date}
          </p>
        </Container>

        <div className="relative overflow-hidden">
          <div className="grid h-[280px] grid-cols-2 sm:h-[420px] sm:grid-cols-4 desk:h-[560px]">
            {[
              "/images/video-1.png",
              "/images/four-1.png",
              "/images/contestant.jpg",
              "/images/queens-1.png",
            ].map((src) => (
              <CoverImage
                key={src}
                src={src}
                alt=""
                className="h-full w-full"
                sizes="25vw"
                priority
              />
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#c4a35a]/90 to-transparent" />
          <p className="pointer-events-none absolute right-8 bottom-8 font-heading text-[28px] font-semibold tracking-[0.18em] text-white uppercase desk:right-10 desk:bottom-10 desk:text-[42px]">
            Evening
          </p>
        </div>

        <Container className="max-w-[720px] py-14">
          <div className="article-body">
            {ARTICLE.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <blockquote className="article-quote my-6">
              “{ARTICLE.quote.text}”
              <footer className="mt-4 font-nav text-[11px] not-italic tracking-[1.8px] text-muted uppercase">
                {ARTICLE.quote.credit}
              </footer>
            </blockquote>
            {ARTICLE.more.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>

          <figure className="my-12">
            <CoverImage
              src={ARTICLE.inline}
              alt={ARTICLE.caption}
              className="h-[280px] w-full sm:h-[420px]"
              sizes="720px"
            />
            <figcaption className="mt-3 font-nav text-[11px] tracking-[1.4px] text-muted uppercase">
              {ARTICLE.caption}
            </figcaption>
          </figure>

          <div className="flex flex-wrap gap-2 border-t border-hairline pt-8">
            {ARTICLE.tags.map((tag) => (
              <span
                key={tag}
                className="border border-hairline px-3 py-1.5 font-nav text-[10px] tracking-[1.4px] uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        </Container>
      </article>

      <section className="border-t border-hairline py-16">
        <Container>
          <h2 className="font-heading text-[36px] font-semibold leading-none text-heading desk:text-[42px]">
            Read Next
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {READ_NEXT.map((item) => (
              <Link key={item.title} href={item.href} className="flex flex-col gap-3">
                <CoverImage
                  src={item.image}
                  alt={item.title}
                  className="h-[280px] w-full"
                  sizes="400px"
                />
                <Kicker>{item.kicker}</Kicker>
                <p className="font-heading text-xl font-semibold leading-snug text-heading">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
