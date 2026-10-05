import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { PageantDesk } from "@/components/pageants/PageantDesk";
import { activeDeskYear, yearLabel } from "@/lib/pageants/desk";
import { deskHref, resolveDeskSection, tabFromSection } from "@/lib/pageants/sections";
import type { PageantTab } from "@/lib/pageants/types";

export function deskMetadata(tabs: PageantTab[], section?: string, year?: string): Metadata {
  const id = section ? tabFromSection(section) : null;
  const current = tabs.find((tab) => tab.id === (id ?? tabs[0]?.id));
  return {
    title: current ? yearLabel(current.label, activeDeskYear(tabs, year)) : "Pageant",
    description: current?.dek,
  };
}

export function DeskRoute({
  name,
  basePath,
  editionName,
  tabs,
  section,
  tab,
  year,
}: {
  name: string;
  basePath: string;
  editionName: string;
  tabs: PageantTab[];
  section?: string;
  tab?: string;
  year?: string;
}) {
  const { id, canonical } = resolveDeskSection(section, tab);
  const current = id ? tabs.find((item) => item.id === id) : undefined;
  if (!current) notFound();

  // `proxy.ts` normally redirects first; this is the fallback.
  if (!canonical) permanentRedirect(deskHref(basePath, current.id, year));

  return (
    <PageantDesk
      name={name}
      basePath={basePath}
      editionName={editionName}
      tabs={tabs}
      tab={current.id}
      year={year}
    />
  );
}
