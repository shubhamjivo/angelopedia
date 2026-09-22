import Link from "next/link";
import { HOME_GALLERY } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

export function GalleryPreview() {
  const [lead, ...rest] = HOME_GALLERY;

  return (
    <section id="in-pictures" className="border-t border-hairline py-16 desk:py-20">
      <Container>
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-heading text-[36px] font-semibold leading-none text-heading desk:text-[42px]">
            In Pictures
          </h2>
          <Link
            href="/gallery"
            className="font-nav text-[11px] tracking-[1.2px] text-muted uppercase hover:text-ink"
          >
            All photos
          </Link>
        </div>

        <div className="mt-10 grid items-start gap-x-5 gap-y-8 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-x-8">
          <Link href={lead.href} className="group flex flex-col">
            <CoverImage
              src={lead.image}
              alt={lead.title}
              className="aspect-[4/3] w-full"
              imageClassName="transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1023px) 100vw, 760px"
            />
            <p className="mt-3 font-heading text-[24px] font-medium leading-snug text-heading group-hover:text-ink">
              {lead.title}
            </p>
            <p className="mt-1 font-nav text-[11px] tracking-[0.4px] text-muted">
              {lead.meta}
            </p>
          </Link>

          <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-6">
            {rest.map((item) => (
              <li key={item.title}>
                <Link href={item.href} className="group flex flex-col">
                  <CoverImage
                    src={item.image}
                    alt={item.title}
                    className="aspect-[4/3] w-full"
                    imageClassName="object-[center_18%] transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 1023px) 50vw, 280px"
                  />
                  <p className="mt-3 font-heading text-[18px] font-medium leading-snug text-heading group-hover:text-ink">
                    {item.title}
                  </p>
                  <p className="mt-1 font-nav text-[11px] tracking-[0.4px] text-muted">
                    {item.meta}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
