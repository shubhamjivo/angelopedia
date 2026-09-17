import Link from "next/link";
import { HOME_GALLERY } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

export function GalleryPreview() {
  return (
    <section className="screen-section border-t border-hairline py-16">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-[36px] font-semibold leading-none text-heading desk:text-[42px]">
            The Gallery
          </h2>
          <Link
            href="/gallery"
            className="font-nav text-[11px] tracking-[1.2px] text-muted uppercase hover:text-ink"
          >
            All Photos
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {HOME_GALLERY.map((item) => (
            <Link key={item.title} href={item.href} className="flex flex-col">
              <CoverImage
                src={item.image}
                alt={item.title}
                className="h-[220px] w-full lg:h-[333px]"
                sizes="250px"
              />
              <p className="mt-3 text-[15px] font-medium text-heading">{item.title}</p>
              <p className="mt-1 text-[11px] tracking-[0.2px] text-muted">{item.meta}</p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
