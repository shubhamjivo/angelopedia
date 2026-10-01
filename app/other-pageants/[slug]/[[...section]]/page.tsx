import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeskRoute, deskMetadata } from "@/components/pageants/DeskRoute";
import { INTERNATIONAL_PAGEANTS } from "@/lib/pageants/directory";
import { getDesk } from "@/lib/pageants/registry";

type PageProps = {
  params: Promise<{ slug: string; section?: string[] }>;
  searchParams: Promise<{ tab?: string; year?: string }>;
};

export function generateStaticParams() {
  return INTERNATIONAL_PAGEANTS.map((pageant) => ({ slug: pageant.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, section } = await params;
  const desk = getDesk(slug);
  if (!desk) return { title: "Other Pageants" };
  return deskMetadata(desk.tabs, section?.[0]);
}

export default async function InternationalPageantPage({ params, searchParams }: PageProps) {
  const { slug, section } = await params;
  if (section && section.length > 1) notFound();
  const desk = getDesk(slug);
  if (!desk) notFound();
  const { tab, year } = await searchParams;
  return (
    <DeskRoute
      name={desk.name}
      basePath={desk.basePath}
      editionName={desk.editionName}
      tabs={desk.tabs}
      section={section?.[0]}
      tab={tab}
      year={year}
    />
  );
}
