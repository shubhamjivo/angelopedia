import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { FASHION_HREF, type FashionItem } from "@/lib/fashion";

export function FashionBeauty({
  lead,
  picks,
  rail,
}: {
  lead: FashionItem;
  picks: FashionItem[];
  rail: FashionItem[];
}) {
  return (
    <section id="fashion-and-beauty" className="border-t border-hairline bg-paper py-8 text-ink desk:py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
            Fashion and Beauty
          </h2>
          <Link href={FASHION_HREF} className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase hover:text-ink">
            All gowns
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <article className="min-w-0">
              <Link href={lead.href} className="group block">
                <CoverImage
                  src={lead.image}
                  alt={lead.alt}
                  className="aspect-[4/5] w-full"
                  imageClassName="object-top transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 767px) 100vw, 420px"
                />
                <Kicker tone="accent" className="mt-5">
                  {lead.kicker}
                </Kicker>
                <h3 className="mt-3 font-heading text-[22px] font-semibold leading-[1.3] text-heading group-hover:text-ink desk:text-[26px]">
                  {lead.title}
                </h3>
                <p className="mt-3 font-nav text-[11px] tracking-[1.5px] text-muted uppercase">{lead.byline}</p>
              </Link>
            </article>

            <ul className="flex min-w-0 flex-col gap-6">
              {picks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="group flex items-start gap-4">
                    <CoverImage
                      src={item.image}
                      alt={item.alt}
                      className="aspect-[4/3] w-[42%] shrink-0"
                      imageClassName="object-top"
                      sizes="(max-width: 767px) 42vw, 200px"
                    />
                    <span className="min-w-0">
                      <Kicker tone="accent">{item.kicker}</Kicker>
                      <span className="mt-2 block font-heading text-[16px] font-semibold leading-[1.4] text-heading group-hover:underline">
                        {item.title}
                      </span>
                      <span className="mt-2 block font-nav text-[11px] tracking-[1.2px] text-muted">{item.byline}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

          <ul className="flex min-w-0 flex-col md:col-span-2 lg:col-span-1">
            {rail.map((item) => (
              <li key={item.href} className="border-b border-hairline py-6 first:pt-0">
                <Link href={item.href} className="group block">
                  <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-nav text-[10px] font-medium tracking-[1.4px] uppercase">
                    <span className="text-accent">{item.kicker}</span>
                    {item.date ? <span className="text-muted">{item.date}</span> : null}
                  </p>
                  <span className="mt-3 flex items-start gap-4">
                    <span className="min-w-0 flex-1">
                      <span className="block font-heading text-[15px] leading-[1.4] text-heading group-hover:text-ink">
                        {item.title}
                      </span>
                      <span className="mt-3 block font-nav text-[11px] tracking-[1.2px] text-muted">{item.byline}</span>
                    </span>
                    <CoverImage
                      src={item.image}
                      alt=""
                      className="h-[72px] w-[96px] shrink-0"
                      imageClassName="object-top"
                      sizes="96px"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
