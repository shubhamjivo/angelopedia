import type { Metadata } from "next";
import { PAGEANT_DIRECTORY } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

const LETTERS = "ABCDEFGHIJKLMNPRSTUVZ".split("");

export const metadata: Metadata = {
  title: "Pageants A–Z",
  description:
    "Every national pageant we cover, from Albania to Zimbabwe — organised by continent.",
};

export default function PageantsPage() {
  return (
    <main>
      <PageHero
        kicker="The Directory"
        title="Pageants A–Z"
        dek="Every national pageant we cover, from Albania to Zimbabwe — organised by continent."
      />

      <nav className="border-y border-hairline">
        <Container className="flex h-12 items-center justify-center gap-3 overflow-x-auto font-nav text-[11px] tracking-[2px] text-muted uppercase no-scrollbar">
          {LETTERS.map((letter) => (
            <span key={letter}>{letter}</span>
          ))}
        </Container>
      </nav>

      <section className="py-16">
        <Container className="flex flex-col gap-16">
          {PAGEANT_DIRECTORY.map((group) => (
            <div key={group.continent}>
              <div className="flex items-baseline gap-4">
                <h2 className="font-heading text-[36px] font-semibold text-heading">
                  {group.continent}
                </h2>
                <p className="font-nav text-[11px] tracking-[2px] text-muted uppercase">
                  {group.count}
                </p>
              </div>
              <div className="mt-6 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
                {group.nations.map((nation) => (
                  <div
                    key={nation.name}
                    className="flex items-baseline justify-between gap-4 border-t border-hairline py-3"
                  >
                    <span className="font-body text-[15px] text-heading">{nation.name}</span>
                    <span className="font-nav text-[10px] tracking-[1.4px] text-muted uppercase">
                      {nation.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </section>
    </main>
  );
}
