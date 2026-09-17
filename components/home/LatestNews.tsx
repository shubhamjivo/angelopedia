import Link from "next/link";
import { LATEST_FEATURED, LATEST_SIDE } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

export function LatestNews() {
  return (
    <section className="screen-section bg-paper py-10 desk:py-14">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,1fr)] lg:gap-12">
          <Link href={LATEST_FEATURED.href} className="group flex flex-col">
            <CoverImage
              src={LATEST_FEATURED.image}
              alt={LATEST_FEATURED.title}
              className="h-[320px] w-full sm:h-[420px] lg:h-[480px]"
              imageClassName="object-[center_20%] transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1023px) 100vw, 780px"
            />
            <h2 className="mt-6 font-heading text-[32px] font-medium leading-[1.12] text-heading sm:text-[40px] desk:text-[48px]">
              {LATEST_FEATURED.title}
            </h2>
            <p className="mt-4 max-w-[42rem] font-body text-[17px] leading-relaxed text-ink">
              {LATEST_FEATURED.dek}
            </p>
            <p className="mt-5 font-nav text-[11px] tracking-[1.6px] text-muted uppercase">
              {LATEST_FEATURED.byline}
            </p>
          </Link>

          <ul role="list" className="flex flex-col gap-7 lg:gap-8">
            {LATEST_SIDE.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="group flex items-start gap-5">
                  <CoverImage
                    src={item.image}
                    alt={item.title}
                    className="h-[110px] w-[96px] shrink-0 sm:h-[128px] sm:w-[110px]"
                    imageClassName="object-[center_18%]"
                    sizes="110px"
                  />
                  <div className="min-w-0 pt-0.5">
                    <p className="font-heading text-[22px] font-medium leading-snug text-heading transition-colors group-hover:text-ink sm:text-[24px]">
                      {item.title}
                    </p>
                    <p className="mt-2 font-nav text-[10px] tracking-[1.5px] text-muted uppercase">
                      {item.byline}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
