import type { Metadata } from "next";
import Link from "next/link";
import { Polls } from "@/components/play/Polls";
import { LEADERBOARD } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Vote & Predict",
  description:
    "Have your say in this month’s polls, and predict the next crown to climb the leaderboard.",
};

export default function PlayPage() {
  return (
    <main>
      <PageHero
        kicker="Play Zone"
        title="Vote & Predict"
        dek="Have your say in this month’s polls, and predict the next crown to climb the leaderboard."
      />

      <section id="polls" className="pb-16">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <div className="flex flex-col gap-8">
            <Polls />
            <div className="bg-footer p-8 text-white desk:p-10">
              <Kicker tone="accent">The Prediction Game</Kicker>
              <h2 className="mt-3 font-heading text-[22px] font-semibold leading-tight text-white">
                Call the Top 5 in Bangkok. Beat the world.
              </h2>
              <p className="mt-4 max-w-[520px] font-body text-[15px] leading-6 text-neutral-300">
                Lock in your Top 5 before the preliminary competition. Points for every
                correct placement — double for the crown. The season champion wins a trip
                to the 2027 finale.
              </p>
              <Link
                href="/play"
                className="mt-8 inline-flex h-11 items-center border border-white px-6 font-nav text-[11px] tracking-[2px] uppercase hover:bg-white hover:text-footer"
              >
                Play the Prediction Game
              </Link>
            </div>
          </div>

          <aside className="flex flex-col gap-10">
            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">
                Season Leaderboard
              </p>
              <ol className="mt-4 flex flex-col">
                {LEADERBOARD.map((row) => (
                  <li
                    key={row.handle}
                    className="grid grid-cols-[24px_minmax(0,1fr)_auto] gap-3 border-b border-hairline py-3 font-body text-[14px]"
                  >
                    <span className="text-muted">{row.rank}</span>
                    <span>{row.handle}</span>
                    <span className="text-muted">{row.score}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <p className="border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] uppercase">
                How Scoring Works
              </p>
              <p className="mt-4 font-body text-[15px] leading-6 text-neutral-500">
                Correct crown — 100 points. Each correct Top 5 placement — 50. Any Top 5
                pick who reaches the semifinals — 20. Scores settle on coronation night.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </main>
  );
}
