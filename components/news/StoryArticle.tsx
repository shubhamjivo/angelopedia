import Link from "next/link";
import { relatedStories, storyPath, type Story } from "@/lib/stories";
import { StoryFeedback } from "@/components/news/StoryFeedback";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";

export function StoryArticle({ story }: { story: Story }) {
  const next = relatedStories(story);
  // Desk stories without a full-size picture only have a 400px thumbnail, shown at column width.
  const hero = story.cover ?? story.image;

  return (
    <main>
      <article>
        <Container className="flex flex-col items-center px-6 pt-16 pb-10 text-center desk:px-0">
          <Kicker tone="accent">{story.kicker}</Kicker>
          <h1 className="mt-4 max-w-[920px] font-heading text-[26px] font-semibold leading-tight text-heading desk:text-[32px]">
            {story.title}
          </h1>
          <p className="mt-5 max-w-[640px] font-body text-base leading-7 text-neutral-500">
            {story.dek}
          </p>
          <p className="mt-6 font-nav text-[11px] tracking-[1.8px] text-muted uppercase">
            By {story.author} · {story.date} · {story.credit}
          </p>
        </Container>

        <Container className={hero === story.image && story.source ? "max-w-[720px] pb-4" : "pb-4"}>
          <figure>
            <CoverImage
              src={hero}
              alt={story.title}
              className={hero === story.image && story.source ? "aspect-[5/4] w-full" : "aspect-[16/9] w-full"}
              imageClassName="object-top"
              sizes="(max-width: 1439px) 100vw, 1360px"
              priority
            />
            <figcaption className="mt-3 font-nav text-[11px] tracking-[1.4px] text-muted uppercase">
              {story.caption}
            </figcaption>
          </figure>
        </Container>

        <Container className="max-w-[720px] py-14">
          <div className="article-body">
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
            {story.quote ? (
              <blockquote className="article-quote my-6">
                “{story.quote.text}”
                <footer className="mt-4 font-nav text-[11px] not-italic tracking-[1.8px] text-muted uppercase">
                  {story.quote.credit}
                </footer>
              </blockquote>
            ) : null}
          </div>

          {story.inline ? (
            <figure className="my-12">
              <CoverImage
                src={story.inline.src}
                alt={story.inline.caption}
                className="h-[280px] w-full sm:h-[420px]"
                sizes="720px"
              />
              <figcaption className="mt-3 font-nav text-[11px] tracking-[1.4px] text-muted uppercase">
                {story.inline.caption}
              </figcaption>
            </figure>
          ) : null}

          {story.links?.length ? (
            <ul role="list" className="mt-10 flex flex-col gap-3 border-t border-hairline pt-8">
              {story.links.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-nav text-[12px] tracking-[1.4px] text-ink uppercase hover:text-heading"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-8 flex flex-wrap gap-2 border-t border-hairline pt-8">
            {story.tags.map((tag) => (
              <Link
                key={tag}
                href={`/news?q=${encodeURIComponent(tag)}`}
                className="border border-hairline px-3 py-1.5 font-nav text-[10px] tracking-[1.4px] uppercase hover:border-ink"
              >
                {tag}
              </Link>
            ))}
          </div>
        </Container>
      </article>

      <section id="feedback" className="border-t border-hairline py-8 desk:py-10">
        <Container className="max-w-[720px]">
          <StoryFeedback id={`story:${story.slug}`} title={story.title} />
        </Container>
      </section>

      <section id="read-next" className="border-t border-hairline py-8 desk:py-10">
        <Container>
          <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
            Read Next
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {next.map((item) => (
              <Link key={item.slug} href={storyPath(item)} className="group flex flex-col gap-3">
                <CoverImage
                  src={item.image}
                  alt={item.title}
                  className="h-[220px] w-full"
                  sizes="400px"
                />
                <Kicker>{item.kicker}</Kicker>
                <p className="font-heading text-[16px] font-semibold leading-[1.4] text-heading group-hover:text-ink">
                  {item.title}
                </p>
                <p className="font-nav text-[11px] tracking-[1.4px] text-muted uppercase">
                  {item.date}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
