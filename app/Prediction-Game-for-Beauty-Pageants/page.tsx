import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLink } from "@/components/pageants/ArrowLink";
import { PlayNav } from "@/components/play/PlayNav";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { PageHero } from "@/components/ui/PageHero";
import { OPEN_GAMES, PREDICTION_GAMES, PREDICTION_YEARS, predictionPath } from "@/lib/play";

const PATH = "/Prediction-Game-for-Beauty-Pageants";

export const metadata: Metadata = {
  title: "Prediction Game",
  description: "Vote for your top favourites before the finale, and see how every past prediction game closed.",
};

type PredictionProps = {
  searchParams: Promise<{ year?: string }>;
};

export default async function PredictionGamePage({ searchParams }: PredictionProps) {
  const { year } = await searchParams;
  const activeYear = year && PREDICTION_YEARS.includes(year) ? year : undefined;
  const games = activeYear ? PREDICTION_GAMES.filter((game) => game.year === activeYear) : PREDICTION_GAMES;
  const years = [{ id: "", label: "All" }, ...PREDICTION_YEARS.map((item) => ({ id: item, label: item }))];

  return (
    <main>
      <PageHero
        kicker="Play Zone"
        title="Prediction Game"
        dek="Vote for your top favourites before the finale, and see how every past prediction game closed."
      />

      <PlayNav current={PATH} />

      <section id="open-games" className="bg-footer py-8 text-white desk:py-10">
        <Container>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-heading text-[30px] font-semibold leading-none text-white desk:text-[36px]">
              Open Games
            </h2>
            <p className="font-nav text-[11px] tracking-[2px] text-neutral-300 uppercase">
              {OPEN_GAMES.length ? "Voting open" : "None open right now"}
            </p>
          </div>

          {OPEN_GAMES.length ? (
            <ul className="mt-10 flex flex-col gap-8">
              {OPEN_GAMES.map((game) => (
                <li key={game.slug} className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
                  {game.image ? (
                    <Link href={predictionPath(game.slug)} className="sm:w-[420px] sm:shrink-0">
                      <CoverImage src={game.image} alt={game.name} className="aspect-[3/2] w-full" sizes="420px" priority />
                    </Link>
                  ) : null}
                  <div className="min-w-0">
                    <Kicker tone="accent">{`Predict the ${game.predict}`}</Kicker>
                    <h3 className="mt-3 font-heading text-[22px] font-semibold leading-[1.3] text-white desk:text-[26px]">
                      <Link href={predictionPath(game.slug)} className="hover:text-neutral-200">
                        {game.name}
                      </Link>
                    </h3>
                    <p className="mt-4 max-w-[520px] font-body text-[15px] leading-6 text-neutral-300">
                      {game.contestants.length} delegates are in the running. Pick your {game.predict} in order
                      before voting closes.
                    </p>
                    <Link
                      href={predictionPath(game.slug)}
                      className="mt-6 inline-flex h-11 items-center border border-white px-6 font-nav text-[11px] tracking-[2px] uppercase hover:bg-white hover:text-footer"
                    >
                      Vote Now
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-10 max-w-[560px] font-body text-[15px] leading-6 text-neutral-300">
              A new game opens ahead of each finale — pick your favourites before voting closes.
            </p>
          )}
        </Container>
      </section>

      <section id="previous-results" className="py-8 desk:py-10">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
                Previous Results
              </h2>
              <p className="font-nav text-[11px] tracking-[2px] text-muted uppercase">
                {games.length} {games.length === 1 ? "game" : "games"}
              </p>
            </div>
            <nav aria-label="Years" className="flex flex-wrap gap-2">
              {years.map((item) => {
                const selected = item.id === (activeYear ?? "");
                return (
                  <Link
                    key={item.label}
                    href={item.id ? `${PATH}?year=${item.id}#previous-results` : `${PATH}#previous-results`}
                    aria-current={selected ? "page" : undefined}
                    className={`flex h-9 items-center justify-center border px-4 font-nav text-[13px] font-semibold ${
                      selected ? "border-ink bg-ink text-white" : "border-hairline text-heading hover:border-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 desk:grid-cols-4">
            {games.map((game, index) => (
              <li key={`${game.name}-${index}`}>
                {game.image ? (
                  <CoverImage
                    src={game.image}
                    alt={game.name}
                    className="aspect-[4/3] w-full"
                    imageClassName="object-top"
                    sizes="(max-width: 640px) 46vw, 320px"
                    priority={index < 4}
                  />
                ) : (
                  <div className="aspect-[4/3] w-full bg-ink/10" />
                )}
                <Kicker tone="accent" className="mt-3">
                  {`${game.predict} Winners`}
                </Kicker>
                <h3 className="mt-2 font-heading text-[16px] font-semibold leading-[1.3] text-heading">{game.name}</h3>
                <p className="mt-1 font-nav text-[11px] tracking-[1.2px] text-muted uppercase">Voting closed</p>
              </li>
            ))}
          </ul>

          <ArrowLink href="/Polls" label="More to vote on in Polls" className="mt-10" />
        </Container>
      </section>
    </main>
  );
}
