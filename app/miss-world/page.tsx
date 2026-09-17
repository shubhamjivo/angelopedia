import type { Metadata } from "next";
import { PageantHub } from "@/components/pageants/PageantHub";
import { PAGEANT_HUBS } from "@/lib/content";

const hub = PAGEANT_HUBS["/miss-world"];

export const metadata: Metadata = {
  title: hub.title,
  description: hub.dek,
};

export default function MissWorldPage() {
  return <PageantHub {...hub} />;
}
