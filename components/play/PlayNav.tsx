import Link from "next/link";
import { PLAY_LINKS } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function PlayNav({ current }: { current?: string }) {
  return (
    <nav aria-label="Play Zone" className="sticky top-[var(--header-offset,0px)] z-40 border-y border-hairline bg-paper">
      <Container className="flex h-12 items-center justify-center gap-6 overflow-x-auto font-nav text-[11px] tracking-[2px] text-muted uppercase no-scrollbar">
        {PLAY_LINKS.map((link) => {
          const selected = link.href === current;
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={selected ? "page" : undefined}
              className={`shrink-0 whitespace-nowrap ${selected ? "text-ink" : "hover:text-ink"}`}
            >
              {link.label}
            </Link>
          );
        })}
      </Container>
    </nav>
  );
}
