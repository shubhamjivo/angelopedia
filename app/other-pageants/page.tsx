import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { deskHref } from "@/lib/pageants/desk";
import {
  DIRECTORY_EDITION_LINKS,
  DIRECTORY_LINKS,
  INTERNATIONAL_PAGEANTS,
  directoryPath,
} from "@/lib/pageants/directory";
import { framesFor } from "@/lib/pageants/frames";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { PageHero } from "@/components/ui/PageHero";

const LEGACY: Record<string, string> = {
  grand: "/other-pageants/miss-grand-international",
  supranational: "/other-pageants/miss-supranational",
  intercontinental: "/other-pageants/miss-intercontinental",
};

export const metadata: Metadata = {
  title: "International Pageants",
  description:
    "Miss Supranational, Miss Grand International, Miss Intercontinental and the wider international pageant directory.",
};

type PageProps = {
  searchParams: Promise<{ pageant?: string }>;
};

type DirectoryLink = { id: string; label: string };

function editionYear(edition: string) {
  return edition.match(/\b((?:19|20)\d{2})\b/)?.[1] ?? "";
}

function Mark({ id, className = "h-4 w-4" }: { id: string; className?: string }) {
  const common = {
    viewBox: "0 0 24 24",
    className: `${className} shrink-0`,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (id === "news" || id === "edition-news") {
    return (
      <svg {...common}>
        <path d="M5 5.5h11v13H7a2 2 0 0 1-2-2v-11Z" />
        <path d="M16 8.5h3v8a2 2 0 0 1-2 2" />
        <path d="M8 9.5h5M8 12.5h5M8 15.5h3" />
      </svg>
    );
  }

  if (id === "hall" || id === "winners") {
    return (
      <svg {...common}>
        <path d="M4 17.5h16" />
        <path d="M5 17.5 6.8 9.2 10 13.2 12 7l2 6.2 3.2-4 1.8 8.3" />
      </svg>
    );
  }

  if (id === "contestants") {
    return (
      <svg {...common}>
        <circle cx="9" cy="9" r="2.25" />
        <circle cx="15.5" cy="9.75" r="1.75" />
        <path d="M4.75 18.25c.55-2.35 2.35-3.5 4.25-3.5s3.7 1.15 4.25 3.5" />
        <path d="M13.25 15.15c1.15-.45 2.35-.35 3.45.45.85.65 1.4 1.55 1.7 2.65" />
      </svg>
    );
  }

  if (id === "photos") {
    return (
      <svg {...common}>
        <rect x="3.5" y="5.5" width="17" height="13" />
        <circle cx="9" cy="10" r="1.35" />
        <path d="m3.5 15.75 5-3.75 3 2.5 2.5-2 6.5 4.75" />
      </svg>
    );
  }

  if (id === "videos") {
    return (
      <svg {...common}>
        <rect x="3.5" y="6" width="17" height="12" />
        <path d="M10.5 9.75v4.5l4.25-2.25-4.25-2.25Z" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M7 3.5h7l4 4V20.5H7V3.5Z" />
      <path d="M14 3.5V8h4.2" />
      <path d="M10 12h5M10 15.5h5" />
    </svg>
  );
}

function LinkRow({ base, links }: { base: string; links: readonly DirectoryLink[] }) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2.5 sm:gap-x-5">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={deskHref(base, link.id)}
            className="inline-flex items-center gap-2 font-nav text-[12px] font-semibold leading-none tracking-[1.2px] text-ink uppercase hover:text-accent sm:text-[13px]"
          >
            <Mark id={link.id} />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function Portrait({ slug, name, edition }: { slug: string; name: string; edition: string }) {
  const frame = framesFor(directoryPath(slug))[0];
  const year = editionYear(edition);
  const className = "aspect-[3/4] w-[132px] rounded-none sm:w-[168px]";

  if (frame) {
    return (
      <CoverImage
        src={frame.src}
        alt={frame.alt}
        className={className}
        imageClassName="rounded-none object-top"
        sizes="168px"
      />
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center border border-hairline bg-paper px-3 text-center text-ink ${className}`}>
      <Mark id="hall" className="h-5 w-5" />
      <p className="mt-3 font-nav text-[10px] font-medium leading-snug tracking-[1.4px] text-accent uppercase">
        To be declared
      </p>
      {year ? (
        <p className="mt-2 font-heading text-[22px] font-semibold leading-none text-heading sm:text-[28px]">{year}</p>
      ) : (
        <p className="sr-only">{name}</p>
      )}
      <span className="mt-3 h-px w-8 bg-accent" aria-hidden />
    </div>
  );
}

export default async function OtherPageantsPage({ searchParams }: PageProps) {
  const { pageant } = await searchParams;
  if (pageant && LEGACY[pageant]) redirect(LEGACY[pageant]);

  return (
    <main>
      <PageHero
        kicker="Other Pageants"
        title="International Pageants"
        dek="Info, news, halls of fame and the latest edition on file for every international crown beyond the Big Four."
      />

      <section className="py-8 desk:py-10">
        <Container className="divide-y divide-hairline">
          {INTERNATIONAL_PAGEANTS.map((pageant) => {
            const href = directoryPath(pageant.slug);
            return (
              <article key={pageant.slug} className="flex items-start gap-4 py-8 first:pt-0 sm:gap-8">
                <Link href={deskHref(href, "info")} aria-label={`${pageant.name} info`} className="shrink-0">
                  <Portrait slug={pageant.slug} name={pageant.name} edition={pageant.edition} />
                </Link>
                <div className="min-w-0 flex-1">
                  <h3 className="font-heading text-[22px] font-semibold leading-none text-heading desk:text-[26px]">
                    <Link href={deskHref(href, "info")} className="hover:text-accent">
                      {pageant.name}
                    </Link>
                  </h3>
                  <div className="mt-4">
                    <LinkRow base={href} links={DIRECTORY_LINKS} />
                  </div>
                  <p className="mt-6 font-heading text-[16px] font-semibold leading-[1.3] text-heading">
                    <Link href={deskHref(href, "edition")} className="hover:text-accent">
                      {pageant.edition}&nbsp;–
                    </Link>
                  </p>
                  <div className="mt-3">
                    <LinkRow base={href} links={DIRECTORY_EDITION_LINKS} />
                  </div>
                </div>
              </article>
            );
          })}
        </Container>
      </section>
    </main>
  );
}
