import Link from "next/link";
import { HOME_GALLERY } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

export function GalleryPreview() {
  return (
    <section id="in-pictures" className="border-t border-hairline bg-paper py-8 desk:py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
            In Pictures
          </h2>
          <Link
            href="/gallery"
            className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase hover:text-ink"
          >
            All photos
          </Link>
        </div>

        <ul role="list" className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4">
          {HOME_GALLERY.slice(0, 4).map((item) => (
            <li key={item.title}>
              <Link href={item.href} className="group flex flex-col">
                <CoverImage
                  src={item.image}
                  alt={item.title}
                  className="aspect-[4/5] w-full"
                  imageClassName="object-center"
                  sizes="(max-width: 767px) 50vw, 320px"
                />
                <p className="mt-3 font-heading text-[16px] font-medium leading-snug text-heading group-hover:text-accent">
                  {item.title}
                </p>
                <p className="mt-1 font-nav text-[11px] tracking-[0.4px] text-muted">
                  {item.meta}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
