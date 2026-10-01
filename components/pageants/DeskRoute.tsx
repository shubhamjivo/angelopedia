import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { PageantDesk } from "@/components/pageants/PageantDesk";
import { deskHref, sectionSlug, tabFromSection } from "@/lib/pageants/desk";
import type { PageantTab } from "@/lib/pageants/types";

export function deskMetadata(tabs: PageantTab[], section?: string): Metadata {
  const id = section ? tabFromSection(section) : null;
  const current = tabs.find((tab) => tab.id === (id ?? tabs[0]?.id));
  return {
    title: current?.label ?? "Pageant",
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
  const requested = section ?? (tab ? tabFromSection(tab) ?? undefined : undefined);
  const id = requested ? tabFromSection(requested) : "info";
  const current = id ? tabs.find((item) => item.id === id) : undefined;
  if (!current) notFound();

  const canonical = sectionSlug(current.id);
  if (section !== canonical || tab) {
    permanentRedirect(deskHref(basePath, current.id, year));
  }

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
