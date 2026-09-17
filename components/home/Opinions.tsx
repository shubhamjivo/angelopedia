import Link from "next/link";
import { OPINIONS } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

export function Opinions() {
  return (
    <section className="screen-section bg-paper py-12 desk:py-16">
      <Container>
        <h2 className="font-heading text-[36px] font-semibold leading-none text-heading desk:text-[42px]">Opinions</h2>
        <ul
          role="list"
          className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {OPINIONS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="group flex flex-col">
                <CoverImage
                  src={item.image}
                  alt={item.title}
                  className="aspect-[3/4] w-full"
                  imageClassName="object-cover object-[center_20%] transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 320px"
                />
                <h3 className="mt-4 font-heading text-[22px] font-medium leading-snug text-heading group-hover:text-ink sm:text-[24px]">
                  {item.title}
                </h3>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
