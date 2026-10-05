import desks from "@/lib/pageants/national-desks.json";
import type { PageantDesk } from "@/lib/pageants/types";

/** National pageant desks, keyed by lower-cased `Country/Pageant` URL segments. */
const NATIONAL_DESKS = desks as unknown as Record<string, PageantDesk>;

export function getNationalDesk(country: string, pageant: string) {
  return NATIONAL_DESKS[`${decodeURIComponent(country)}/${decodeURIComponent(pageant)}`.toLowerCase()];
}
