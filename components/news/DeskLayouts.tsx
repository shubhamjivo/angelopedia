import Link from "next/link";
import { Arrow } from "@/components/pageants/ArrowLink";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { NEWS_IN_PICTURES, picturePath } from "@/lib/pictures";
import { newsDeskPath, storyPath, type Story } from "@/lib/stories";

const TITLE = "font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]";

function byline(story: Story) {
  return `By ${story.author} · ${story.date}`;
}

/** Large slots prefer the full-size picture; thumbnails are only 400px wide. */
function picture(story: Story) {
  return story.cover ?? story.image;
}

function Empty() {
  return (
    <section id="stories" className="py-8 desk:py-10">
      <Container>
        <p className="font-body text-[17px] leading-7 text-neutral-500">Nothing filed on this desk yet.</p>
      </Container>
    </section>
  );
}

/** Opinions — a text-first comment page: one lead column on a dark band, then dated columns. */
export function OpinionsDesk({ stories }: { stories: Story[] }) {
  const [lead, ...rest] = stories;
  if (!lead) return <Empty />;
  return (
    <>
      <section id="lead-opinion" className="bg-footer py-8 text-white desk:py-10">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
          <div className="min-w-0 flex-1">
            <Kicker tone="accent">{`The Lead Opinion · ${lead.kicker}`}</Kicker>
            <h2 className="mt-4 font-heading text-[22px] font-semibold leading-[1.3] text-white desk:text-[26px]">
              <Link href={storyPath(lead)} className="hover:text-neutral-200">
                {lead.title}
              </Link>
            </h2>
            <p className="mt-4 max-w-[620px] font-body text-[17px] leading-7 text-neutral-300">{lead.dek}</p>
            <p className="mt-6 font-nav text-[11px] tracking-[1.5px] text-neutral-300 uppercase">{byline(lead)}</p>
            <Link
              href={storyPath(lead)}
              className="mt-8 inline-flex h-11 items-center border border-white px-6 font-nav text-[11px] tracking-[2px] uppercase hover:bg-white hover:text-footer"
            >
              Read the Opinion
            </Link>
          </div>
          <Link href={storyPath(lead)} className="lg:w-[440px] lg:shrink-0">
            <CoverImage src={picture(lead)} alt={lead.title} className="aspect-[5/4] w-full" sizes="440px" priority />
          </Link>
        </Container>
      </section>

      <section id="stories" className="py-8 desk:py-10">
        <Container>
          <h2 className={TITLE}>More Opinions</h2>
          <ol className="mt-10 grid gap-x-16 md:grid-cols-2">
            {rest.map((story) => {
              const [day, month, year] = story.date.split(" ");
              return (
                <li key={story.slug} className="flex gap-5 border-t border-hairline py-7">
                  <div className="w-16 shrink-0">
                    <p className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">{day}</p>
                    <p className="mt-2 font-nav text-[10px] font-medium tracking-[1.4px] text-accent uppercase">
                      {month?.slice(0, 3)} {year}
                    </p>
                  </div>
                  <div className="min-w-0 flex-1">
                    <Kicker>{story.kicker}</Kicker>
                    <h3 className="mt-2 font-heading text-[16px] font-semibold leading-[1.4] text-heading">
                      <Link href={storyPath(story)} className="hover:text-ink">
                        {story.title}
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-3 font-body text-[15px] leading-6 text-neutral-500">{story.dek}</p>
                    <p className="mt-3 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">By {story.author}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </section>
    </>
  );
}

const TALKS_PER_PAGE = 24;

/** Beauty Talks — an interview wall: one conversation up front, then a paged grid of portraits. */
export function TalksDesk({ stories, page }: { stories: Story[]; page: number }) {
  const [lead, ...rest] = stories;
  if (!lead) return <Empty />;
  const pages = Math.max(1, Math.ceil(rest.length / TALKS_PER_PAGE));
  const current = Math.min(Math.max(1, page), pages);
  const visible = rest.slice((current - 1) * TALKS_PER_PAGE, current * TALKS_PER_PAGE);
  const pageHref = (target: number) =>
    `${newsDeskPath("beauty-talks")}${target > 1 ? `?page=${target}` : ""}#conversations`;

  return (
    <>
      {current === 1 ? (
        <section id="lead-talk" className="py-8 desk:py-10">
          <Container className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-0">
            <Link href={storyPath(lead)} className="lg:w-[56%] lg:shrink-0">
              <CoverImage
                src={picture(lead)}
                alt={lead.title}
                className="aspect-[5/4] w-full lg:aspect-auto lg:h-full lg:min-h-[420px]"
                imageClassName="object-top"
                sizes="(max-width: 1024px) 100vw, 760px"
                priority
              />
            </Link>
            <div className="flex min-w-0 flex-1 flex-col justify-center border-hairline lg:border-y lg:border-r lg:p-12">
              <Kicker tone="accent">In Conversation</Kicker>
              <h2 className="mt-4 font-heading text-[22px] font-semibold leading-[1.3] text-heading desk:text-[26px]">
                <Link href={storyPath(lead)} className="hover:text-ink">
                  {lead.title}
                </Link>
              </h2>
              <p className="mt-4 line-clamp-4 font-body text-[15px] leading-6 text-neutral-500">{lead.dek}</p>
              <p className="mt-5 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">{byline(lead)}</p>
              <Link
                href={storyPath(lead)}
                className="mt-8 inline-flex h-11 w-fit items-center bg-ink px-6 font-nav text-[11px] tracking-[2px] text-white uppercase hover:bg-heading"
              >
                Read the Interview
              </Link>
            </div>
          </Container>
        </section>
      ) : null}

      <section id="conversations" className="scroll-mt-[calc(var(--header-offset,0px)+3rem)] border-t border-hairline py-8 desk:py-10">
        <Container>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className={TITLE}>All Conversations</h2>
            <p className="font-nav text-[11px] tracking-[2px] text-muted uppercase">
              {rest.length} interviews · Page {current} of {pages}
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 desk:grid-cols-4">
            {visible.map((story) => (
              <li key={story.slug}>
                <Link href={storyPath(story)} className="group block">
                  <CoverImage
                    src={story.image}
                    alt={story.title}
                    className="aspect-[5/4] w-full"
                    imageClassName="object-top"
                    sizes="(max-width: 640px) 46vw, 320px"
                  />
                  <p className="mt-3 font-nav text-[10px] font-medium tracking-[1.4px] text-accent uppercase">
                    {story.date}
                  </p>
                  <h3 className="mt-2 font-heading text-[16px] font-semibold leading-[1.4] text-heading group-hover:text-ink">
                    {story.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>

          {pages > 1 ? (
            <nav aria-label="Pages" className="mt-10 flex flex-wrap items-center gap-2">
              {Array.from({ length: pages }, (_, index) => index + 1).map((target) => (
                <Link
                  key={target}
                  href={pageHref(target)}
                  aria-current={target === current ? "page" : undefined}
                  className={`flex size-9 items-center justify-center border font-nav text-[13px] font-semibold ${
                    target === current ? "border-ink bg-ink text-white" : "border-hairline text-heading hover:border-ink"
                  }`}
                >
                  {target}
                </Link>
              ))}
            </nav>
          ) : null}
        </Container>
      </section>
    </>
  );
}

/** Featured — a magazine front: a full-width cover, two secondary features, then the rest. */
export function FeaturedDesk({ stories }: { stories: Story[] }) {
  if (!stories.length) return <Empty />;
  const coverIndex = Math.max(0, stories.findIndex((story) => story.cover));
  const cover = stories[coverIndex];
  const others = stories.filter((_, index) => index !== coverIndex);
  const pair = others.slice(0, 2);
  const rest = others.slice(2);

  return (
    <>
      <section id="cover-story" className="py-8 desk:py-10">
        <Container>
          <Link href={storyPath(cover)} className="group relative block">
            <CoverImage
              src={picture(cover)}
              alt={cover.title}
              className="aspect-[4/5] w-full sm:aspect-[16/9] desk:aspect-[21/9]"
              imageClassName="object-top"
              sizes="(max-width: 1439px) 100vw, 1360px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <Kicker tone="white">{`The Cover · ${cover.kicker}`}</Kicker>
              <h2 className="mt-3 max-w-[760px] font-heading text-[22px] font-semibold leading-[1.3] text-white desk:text-[26px]">
                {cover.title}
              </h2>
              <p className="mt-3 line-clamp-2 max-w-[640px] font-body text-[15px] leading-6 text-neutral-200">
                {cover.dek}
              </p>
              <p className="mt-4 font-nav text-[11px] tracking-[1.5px] text-neutral-200 uppercase">{byline(cover)}</p>
            </div>
          </Link>

          {pair.length ? (
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {pair.map((story) => (
                <article key={story.slug}>
                  <Link href={storyPath(story)}>
                    <CoverImage
                      src={picture(story)}
                      alt={story.title}
                      className="aspect-[3/2] w-full"
                      imageClassName="object-top"
                      sizes="(max-width: 768px) 100vw, 660px"
                    />
                  </Link>
                  <Kicker tone="accent" className="mt-5">
                    {story.kicker}
                  </Kicker>
                  <h3 className="mt-3 font-heading text-[22px] font-semibold leading-[1.3] text-heading desk:text-[26px]">
                    <Link href={storyPath(story)} className="hover:text-ink">
                      {story.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 font-body text-[15px] leading-6 text-neutral-500">{story.dek}</p>
                  <p className="mt-4 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">{byline(story)}</p>
                </article>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      {rest.length ? (
        <section id="stories" className="border-t border-hairline py-8 desk:py-10">
          <Container>
            <h2 className={TITLE}>More Features</h2>
            <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((story) => (
                <li key={story.slug}>
                  <Link href={storyPath(story)} className="group block">
                    <CoverImage
                      src={story.image}
                      alt={story.title}
                      className="aspect-[5/4] w-full"
                      imageClassName="object-top"
                      sizes="(max-width: 640px) 100vw, 430px"
                    />
                    <Kicker className="mt-4">{story.kicker}</Kicker>
                    <h3 className="mt-2 font-heading text-[16px] font-semibold leading-[1.4] text-heading group-hover:text-ink">
                      {story.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 font-body text-[15px] leading-6 text-neutral-500">{story.dek}</p>
                    <p className="mt-3 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">{story.date}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}
    </>
  );
}

/** Specials — a dated dossier: every entry leads with its filing date and carries its tags. */
export function SpecialsDesk({ stories }: { stories: Story[] }) {
  if (!stories.length) return <Empty />;
  return (
    <section id="stories" className="py-8 desk:py-10">
      <Container>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className={TITLE}>The Dossier</h2>
          <p className="font-nav text-[11px] tracking-[2px] text-muted uppercase">{stories.length} specials</p>
        </div>
        <ol className="mt-10 flex flex-col">
          {stories.map((story, index) => {
            const [day, month, year] = story.date.split(" ");
            return (
              <li
                key={story.slug}
                className={`grid grid-cols-[64px_minmax(0,1fr)] gap-x-5 gap-y-4 border-t py-8 sm:grid-cols-[96px_minmax(0,1fr)_220px] sm:gap-x-10 ${
                  index ? "border-hairline" : "border-ink"
                }`}
              >
                <div>
                  <p className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">{day}</p>
                  <p className="mt-2 font-nav text-[10px] font-medium tracking-[1.4px] text-accent uppercase">
                    {month?.slice(0, 3)} {year}
                  </p>
                </div>
                <div className="min-w-0">
                  <h3 className="font-heading text-[22px] font-semibold leading-[1.3] text-heading desk:text-[26px]">
                    <Link href={storyPath(story)} className="hover:text-ink">
                      {story.title}
                    </Link>
                  </h3>
                  <p className="mt-3 line-clamp-3 font-body text-[15px] leading-6 text-neutral-500">{story.dek}</p>
                  <p className="mt-4 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">By {story.author}</p>
                  {story.tags.length ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {story.tags.slice(0, 5).map((tag) => (
                        <li key={tag}>
                          <Link
                            href={`/news?q=${encodeURIComponent(tag)}`}
                            className="block border border-hairline px-3 py-1.5 font-nav text-[10px] tracking-[1.2px] uppercase hover:border-ink"
                          >
                            {tag}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <Link href={storyPath(story)} className="col-span-2 sm:col-span-1">
                  <CoverImage
                    src={story.image}
                    alt={story.title}
                    className="aspect-[5/4] w-full"
                    imageClassName="object-top"
                    sizes="(max-width: 640px) 100vw, 220px"
                    priority={index < 2}
                  />
                </Link>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

/** News In Pictures — a contact sheet: albums as picture tiles, the newest at double size. */
export function PicturesDesk({ query }: { query: string }) {
  const needle = query.toLowerCase();
  const albums = needle
    ? NEWS_IN_PICTURES.filter((album) => `${album.title} ${album.dek}`.toLowerCase().includes(needle))
    : NEWS_IN_PICTURES;
  if (!albums.length) return <Empty />;
  return (
    <section id="stories" className="py-8 desk:py-10">
      <Container>
        <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <h2 className={TITLE}>The Contact Sheet</h2>
          <p className="font-nav text-[11px] tracking-[2px] text-muted uppercase">{albums.length} albums</p>
        </div>
        <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {albums.map((album, index) => (
            <li key={album.slug} className={index === 0 ? "col-span-2 row-span-2" : undefined}>
              <Link href={picturePath(album)} className="group relative block h-full">
                <CoverImage
                  src={album.cover}
                  alt={album.title}
                  className={index === 0 ? "aspect-square h-full w-full" : "aspect-square w-full"}
                  imageClassName="object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes={index === 0 ? "(max-width: 1024px) 100vw, 680px" : "(max-width: 1024px) 50vw, 340px"}
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <div className="min-w-0">
                    <p className="font-nav text-[10px] font-medium tracking-[1.4px] text-white uppercase">
                      {album.frames.length} {album.frames.length === 1 ? "photo" : "photos"} · {album.date}
                    </p>
                    <h3
                      className={`mt-2 font-heading font-semibold text-white ${
                        index === 0 ? "text-[22px] leading-[1.3] desk:text-[26px]" : "text-[16px] leading-[1.4]"
                      }`}
                    >
                      {album.title}
                    </h3>
                  </div>
                  <span className="flex size-8 shrink-0 items-center justify-center border border-white text-white transition-colors group-hover:bg-white group-hover:text-ink">
                    <Arrow />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
