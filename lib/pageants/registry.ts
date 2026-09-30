import desks from "@/lib/pageants/desks.json";
import type { PageantDesk } from "@/lib/pageants/types";

export const PAGEANT_DESKS = desks as Record<string, PageantDesk>;

export function getDesk(slug: string) {
  return PAGEANT_DESKS[slug];
}
