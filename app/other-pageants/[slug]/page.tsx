import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageantDesk } from "@/components/pageants/PageantDesk";
import { resolveTab } from "@/lib/pageants/desk";
import { INTERNATIONAL_PAGEANTS } from "@/lib/pageants/directory";
import { getDesk } from "@/lib/pageants/registry";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ tab?: string; year?: string }>;
};

export function generateStaticParams() {
  return INTERNATIONAL_PAGEANTS.map((pageant) => ({ slug: pageant.slug }));
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const desk = getDesk(slug);
  if (!desk) return { title: "Other Pageants" };
  const { tab } = await searchParams;
  const current = resolveTab(desk.tabs, tab);
  return { title: current.label, description: current.dek };
}

export default async function InternationalPageantPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const desk = getDesk(slug);
  if (!desk) notFound();
  const { tab, year } = await searchParams;
  return (
    <PageantDesk
      name={desk.name}
      basePath={desk.basePath}
      editionName={desk.editionName}
      tabs={desk.tabs}
      tab={tab}
      year={year}
    />
  );
}
