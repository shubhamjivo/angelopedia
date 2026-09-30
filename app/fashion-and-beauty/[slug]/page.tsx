import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FASHION_HREF, GOWNS, getGown, gownPath, otherGowns } from "@/lib/fashion";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";

type GownProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return GOWNS.map((gown) => ({ slug: gown.slug }));
}

export async function generateMetadata({ params }: GownProps): Promise<Metadata> {
  const { slug } = await params;
  const gown = getGown(slug);
  if (!gown) return { title: "Fashion and Beauty" };
  return { title: gown.dress, description: gown.dek };
}

export default async function GownPage({ params }: GownProps) {
  const { slug } = await params;
  const gown = getGown(slug);
  if (!gown) notFound();

  const more = otherGowns(slug);

  return (
    <main>
      <article>
        <section className="py-8 desk:py-10">
          <Container>
            <Link
              href={FASHION_HREF}
              className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase hover:text-ink"
            >
              Fashion and Beauty
            </Link>

            <div className="mt-10 grid grid-cols-1 items-start gap-8 desk:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] desk:gap-0">
              <figure className="min-w-0 desk:pr-8">
                <CoverImage
                  src={gown.image}
                  alt={gown.alt}
                  className="aspect-[3/4] w-full"
                  imageClassName="object-top"
                  sizes="(max-width: 1439px) 100vw, 640px"
                  priority
                />
                <figcaption className="mt-3 font-nav text-[11px] tracking-[1.4px] text-muted uppercase">
                  {gown.credit}
                </figcaption>
              </figure>

              <div className="min-w-0 desk:border-l desk:border-hairline desk:pl-8">
                <Kicker tone="accent">{gown.pageant}</Kicker>
                <h1 className="mt-3 font-heading text-[26px] font-semibold leading-tight text-heading desk:text-[32px]">
                  {gown.dress}
                </h1>
                <p className="mt-4 font-body text-[16px] leading-7 text-ink">{gown.dek}</p>
                <p className="mt-4 font-nav text-[11px] tracking-[1.6px] text-muted uppercase">
                  {gown.name} · {gown.designer}
                </p>
                <div className="article-body mt-8">
                  {gown.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </div>
                <Link
                  href={gown.pageantHref}
                  className="mt-8 inline-block font-nav text-[12px] tracking-[1.4px] text-accent uppercase hover:text-ink"
                >
                  {gown.pageant}
                </Link>
              </div>
            </div>
          </Container>
        </section>
      </article>

      <section className="border-t border-hairline py-8 desk:py-10">
        <Container>
          <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
            More gowns
          </h2>
          <ul role="list" className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-5">
            {more.map((item) => (
              <li key={item.slug}>
                <Link href={gownPath(item)} className="group block">
                  <CoverImage
                    src={item.image}
                    alt=""
                    className="aspect-[3/4] w-full"
                    imageClassName="object-top transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 639px) 100vw, 420px"
                  />
                  <Kicker tone="accent" className="mt-4">
                    {item.pageant}
                  </Kicker>
                  <h3 className="mt-2 font-heading text-[16px] font-medium leading-snug text-heading group-hover:text-accent">
                    {item.dress}
                  </h3>
                  <p className="mt-2 font-nav text-[11px] tracking-[1.4px] text-muted uppercase">
                    {item.name} · {item.designer}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  );
}
