import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeskRoute, deskMetadata } from "@/components/pageants/DeskRoute";
import { getDesk } from "@/lib/pageants/registry";

const desk = getDesk("miss-international");

type PageProps = {
  params: Promise<{ section?: string[] }>;
  searchParams: Promise<{ tab?: string; year?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!desk) return { title: "Miss International" };
  const { section } = await params;
  return deskMetadata(desk.tabs, section?.[0]);
}

export default async function MissInternationalPage({ params, searchParams }: PageProps) {
  if (!desk) notFound();
  const { section } = await params;
  if (section && section.length > 1) notFound();
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
