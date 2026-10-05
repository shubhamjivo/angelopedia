import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeskRoute, deskMetadata } from "@/components/pageants/DeskRoute";
import { getNationalDesk } from "@/lib/pageants/national";

type PageProps = {
  params: Promise<{ country: string; pageant: string; section?: string[] }>;
  searchParams: Promise<{ tab?: string; year?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { country, pageant, section } = await params;
  const desk = getNationalDesk(country, pageant);
  if (!desk) return { title: "Country Pageants" };
  return deskMetadata(desk.tabs, section?.[0]);
}

export default async function NationalPageantPage({ params, searchParams }: PageProps) {
  const { country, pageant, section } = await params;
  if (section && section.length > 1) notFound();
  const desk = getNationalDesk(country, pageant);
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
