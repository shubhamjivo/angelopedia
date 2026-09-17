import Link from "next/link";
import { MOSAIC } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

export function HeroMosaic() {
  const [feature, wide, ...halves] = MOSAIC;

  return (
    <section className="screen-section py-6 desk:py-10">
      <Container>
        <div className="grid gap-2.5 lg:h-[500px] lg:grid-cols-2 lg:grid-rows-2">
          <MosaicCard
            item={feature}
            className="min-h-[320px] lg:row-span-2 lg:min-h-0"
            sizes="(max-width: 1023px) 100vw, 680px"
            priority
          />
          <MosaicCard
            item={wide}
            className="min-h-[220px] lg:min-h-0"
            sizes="(max-width: 1023px) 100vw, 670px"
            priority
          />
          <div className="grid gap-2.5 sm:grid-cols-2">
            {halves.map((item) => (
              <MosaicCard
                key={item.title}
                item={item}
                className="min-h-[190px]"
                sizes="(max-width: 1023px) 50vw, 330px"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function MosaicCard({
  item,
  className,
  sizes,
  priority = false,
}: {
  item: (typeof MOSAIC)[number];
  className: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <Link href={item.href} className={`relative block overflow-hidden ${className}`}>
      <CoverImage
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full"
        sizes={sizes}
        priority={priority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 desk:p-7">
        <p className="font-heading text-lg font-medium leading-snug text-white desk:text-[22px]">
          {item.title}
        </p>
        <span className="font-nav text-[13px] font-medium text-gold">Know More</span>
      </div>
    </Link>
  );
}
