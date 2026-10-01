import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeskRoute, deskMetadata } from "@/components/pageants/DeskRoute";
import { MISS_WORLD_TABS } from "@/lib/miss-world";

const TABS = MISS_WORLD_TABS.filter((tab) => tab.id !== "2021-info" && tab.id !== "2021-news");

type PageProps = {
  params: Promise<{ section?: string[] }>;
  searchParams: Promise<{ tab?: string; year?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { section } = await params;
  return deskMetadata(TABS, section?.[0]);
}

export default async function MissWorldPage({ params, searchParams }: PageProps) {
  const { section } = await params;
  if (section && section.length > 1) notFound();
  const { tab, year } = await searchParams;
  return (
    <DeskRoute
      name="Miss World"
      basePath="/miss-world"
      editionName="Miss World 2021"
      tabs={TABS}
      section={section?.[0]}
      tab={tab}
      year={year}
    />
  );
}
