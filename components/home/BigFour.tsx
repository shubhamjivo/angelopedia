import Link from "next/link";
import { BIG_FOUR_TABS } from "@/lib/content";
import { ChevronTitle } from "@/components/ui/ChevronTitle";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";

export function BigFour() {
  return (
    <section id="the-big-four" className="border-t border-hairline bg-paper py-8 text-ink desk:py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
            The Big Four
          </h2>
          <p className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase">
            Reigning titleholders
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 desk:grid-cols-4 desk:gap-0">
          {BIG_FOUR_TABS.map((tab, index) => (
            <article
              key={tab.id}
              className={`flex min-w-0 flex-col gap-4 sm:gap-5 ${
                index > 0 ? "desk:border-l desk:border-hairline desk:pl-4" : ""
              } ${index < BIG_FOUR_TABS.length - 1 ? "desk:pr-4" : ""}`}
            >
              <ChevronTitle href={tab.href} label={tab.label} />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] sm:gap-5 desk:grid-cols-1">
                <Link href={tab.href} className="group relative block aspect-[4/5] w-full self-start">
                  <CoverImage
                    src={tab.recent.image}
                    alt={`${tab.recent.name}, ${tab.label} ${tab.recent.year}`}
                    className="absolute inset-0 h-full w-full"
                    imageClassName="object-[center_15%] transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 639px) 100vw, (max-width: 1439px) 46vw, 300px"
                  />
                </Link>

                <div className="flex min-w-0 flex-col">
                  <Link href={tab.href} className="group">
                    <h3 className="font-heading text-[16px] font-medium leading-snug text-heading group-hover:text-accent">
                      {tab.recent.title}
                    </h3>
                    <p className="mt-2 font-nav text-[10px] leading-relaxed tracking-[1.4px] text-ink uppercase">
                      {tab.recent.name} · {tab.recent.country} · {tab.recent.year}
                    </p>
                  </Link>

                  <div className="mt-5 border-t border-hairline pt-3">
                    <p className="font-nav text-[10px] tracking-[1.6px] text-ink uppercase">
                      Recent {tab.label} titleholders
                    </p>
                    <ul role="list" className="mt-3 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-1">
                      {tab.previous.slice(0, 3).map((item) => (
                        <li key={item.name}>
                          <Link href={tab.href} className="group flex items-center gap-2.5">
                            <CoverImage
                              src={item.image}
                              alt=""
                              className="size-10 shrink-0"
                              imageClassName="object-[center_15%]"
                              sizes="40px"
                            />
                            <span className="min-w-0">
                              <span className="block font-heading text-[15px] font-medium leading-tight text-heading group-hover:text-accent">
                                {item.name}
                              </span>
                              <span className="mt-0.5 block font-nav text-[10px] leading-tight tracking-[1.2px] text-ink/70 uppercase">
                                {item.year} · {item.country}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
