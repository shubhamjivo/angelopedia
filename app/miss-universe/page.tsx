import type { Metadata } from "next";
import { PageantDesk } from "@/components/pageants/PageantDesk";
import { resolveTab } from "@/lib/pageants/desk";
import { getDesk } from "@/lib/pageants/registry";

const desk = getDesk("miss-universe")!;

type PageProps = {
  searchParams: Promise<{ tab?: string; year?: string }>;
};

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { tab } = await searchParams;
  const current = resolveTab(desk.tabs, tab);
  return { title: current.label, description: current.dek };
}

export default async function MissUniversePage({ searchParams }: PageProps) {
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
