import type { Metadata } from "next";
import { PageantHub } from "@/components/pageants/PageantHub";
import { PAGEANT_HUBS } from "@/lib/content";

const hub = PAGEANT_HUBS["/miss-universe"];

export const metadata: Metadata = {
  title: hub.title,
  description: hub.dek,
};

export default function MissUniversePage() {
  return <PageantHub {...hub} />;
}
