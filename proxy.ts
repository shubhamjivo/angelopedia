import { NextResponse, type NextRequest } from "next/server";
import { deskHref, resolveDeskSection } from "@/lib/pageants/sections";

// Redirect non-canonical pageant desk URLs before rendering (`/miss-world` →
// `/miss-world/info`, `?tab=hall` → `/miss-world/hall-of-fame`). Calling
// permanentRedirect() from the page throws mid-render, which trips React's dev
// performance tracks ("'…Page' cannot have a negative time stamp").
const DESK_PATH =
  /^(\/miss-(?:world|universe|earth|international)|\/other-pageants\/[^/]+|\/Beauty-Pageants-Info\/[^/]+\/[^/]+)(?:\/([^/]+))?$/;

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;
  const match = DESK_PATH.exec(pathname);
  if (!match) return NextResponse.next();

  const [, basePath, section] = match;
  const { id, canonical } = resolveDeskSection(section, searchParams.get("tab") ?? undefined);
  if (!id || canonical) return NextResponse.next();

  const year = searchParams.get("year") ?? undefined;
  return NextResponse.redirect(new URL(deskHref(basePath, id, year), request.url), 308);
}

export const config = {
  matcher: [
    "/miss-world/:path*",
    "/miss-universe/:path*",
    "/miss-earth/:path*",
    "/miss-international/:path*",
    "/other-pageants/:slug/:path*",
    "/Beauty-Pageants-Info/:country/:pageant/:path*",
  ],
};
