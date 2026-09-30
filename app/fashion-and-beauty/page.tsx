import type { Metadata } from "next";
import Link from "next/link";
import { GOWNS, gownPath } from "@/lib/fashion";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";

export const metadata: Metadata = {
  title: "Fashion and Beauty",
  description:
    "The gowns the reigning titleholders wore — gold silk, maize beadwork, Tokyo sequins and silver crystal.",
};

export default function FashionAndBeautyPage() {
  return (
    <main>
      <section id="fashion-and-beauty" className="py-8 desk:py-10">
        <Container>
          <p className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase">The reigning gowns</p>
          <h1 className="mt-3 font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
            Fashion and Beauty
          </h1>
          <p className="mt-4 max-w-[36rem] font-body text-[15px] leading-6 text-ink">
            What the Miss titleholders wore: the cloth, the cut, and the night each dress was made for.
          </p>

          <ul role="list" className="mt-10 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2">
            {GOWNS.map((gown) => (
              <li key={gown.slug}>
                <Link href={gownPath(gown)} className="group block">
                  <CoverImage
                    src={gown.image}
                    alt={gown.alt}
                    className="aspect-[3/4] w-full"
                    imageClassName="object-top transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 639px) 100vw, 640px"
                  />
                  <Kicker tone="accent" className="mt-4">
                    {gown.pageant}
                  </Kicker>
                  <h2 className="mt-2 font-heading text-[22px] font-semibold leading-[1.2] text-heading group-hover:text-accent desk:text-[26px]">
                    {gown.dress}
                  </h2>
                  <p className="mt-3 font-body text-[15px] leading-6 text-ink">{gown.dek}</p>
                  <p className="mt-4 font-nav text-[11px] tracking-[1.6px] text-muted uppercase">
                    {gown.name} · {gown.designer}
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
