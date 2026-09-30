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
import { Container } from "@/components/ui/Container";
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

function LinkRow({
  base,
  links,
}: {
  base: string;
  links: readonly { id: string; label: string }[];
}) {
  return (
    <ul className="flex flex-wrap gap-x-4 gap-y-2">
      {links.map((link) => (
        <li key={link.id}>
          <Link
            href={deskHref(base, link.id)}
            className="font-nav text-[13px] font-semibold leading-[13px] tracking-[1.2px] text-ink uppercase hover:text-heading"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
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

      <section id="international-pageants" className="py-8 desk:py-10">
        <Container className="flex flex-col">
          {INTERNATIONAL_PAGEANTS.map((pageant) => {
            const href = directoryPath(pageant.slug);
            return (
              <article key={pageant.slug} className="border-b border-hairline py-8">
                <h3 className="font-heading text-[22px] font-semibold leading-[1.3] text-heading desk:text-[26px]">
                  <Link href={href} className="hover:text-ink">
                    {pageant.name}
                  </Link>
                </h3>
                <div className="mt-4">
                  <LinkRow base={href} links={DIRECTORY_LINKS} />
                </div>
                <p className="mt-6 font-heading text-[16px] font-semibold leading-[1.4] text-heading">
                  <Link href={deskHref(href, "edition")} className="hover:text-ink">
                    {pageant.edition}
                  </Link>
                </p>
                <div className="mt-3">
                  <LinkRow base={href} links={DIRECTORY_EDITION_LINKS} />
                </div>
              </article>
            );
          })}
        </Container>
      </section>
    </main>
  );
}
