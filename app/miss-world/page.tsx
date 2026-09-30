import type { Metadata } from "next";
import { PageantDesk } from "@/components/pageants/PageantDesk";
import { resolveTab } from "@/lib/pageants/desk";
import { MISS_WORLD_TABS } from "@/lib/miss-world";

const TABS = MISS_WORLD_TABS.filter((tab) => tab.id !== "2021-info" && tab.id !== "2021-news");

type PageProps = {
  searchParams: Promise<{ tab?: string; year?: string }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { tab } = await searchParams;
  const current = resolveTab(TABS, tab);
  return {
    title: current.label,
    description: current.dek,
  };
}

export default async function MissWorldPage({ searchParams }: PageProps) {
  const { tab, year } = await searchParams;
  const current = resolveTab(TABS, tab);
  return (
    <PageantDesk
      name="Miss World"
      basePath="/miss-world"
      editionName="Miss World 2021"
      tabs={TABS}
      tab={current.id}
      year={year}
    />
  );
}
