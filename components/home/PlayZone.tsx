import Link from "next/link";
import { ArrowLink } from "@/components/pageants/ArrowLink";
import { CountryFlag } from "@/components/pageants/CountryFlag";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { predictionPath, type ArchivePoll, type OpenGame } from "@/lib/play";

const PREDICTION_PATH = "/Prediction-Game-for-Beauty-Pageants";

export function PlayZone({ game, polls }: { game?: OpenGame; polls: ArchivePoll[] }) {
  const gameHref = game ? predictionPath(game.slug) : PREDICTION_PATH;

  return (
    <section id="play-zone" className="border-t border-hairline bg-paper py-8 text-ink desk:py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
            Play Zone
          </h2>
          <Link href="/play" className="font-nav text-[11px] tracking-[1.8px] text-accent uppercase hover:text-ink">
            Vote &amp; predict
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 items-start gap-8 desk:grid-cols-4 desk:items-stretch desk:gap-0">
          <div className="min-w-0 desk:col-span-3 desk:pr-4">
            <Link
              href={PREDICTION_PATH}
              className="block border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] text-ink uppercase hover:text-accent"
            >
              Prediction Game
            </Link>
            {game ? (
              <article className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
                {game.image ? (
                  <Link href={gameHref} className="lg:w-[52%] lg:shrink-0">
                    <CoverImage
                      src={game.image}
                      alt={game.name}
                      className="aspect-[3/2] w-full"
                      sizes="(max-width: 1024px) 100vw, 520px"
                    />
                  </Link>
                ) : null}
                <div className="min-w-0 flex-1">
                  <Kicker tone="accent">{`Voting open · Predict the ${game.predict}`}</Kicker>
                  <h3 className="mt-3 font-heading text-[22px] font-semibold leading-[1.3] text-heading desk:text-[26px]">
                    <Link href={gameHref} className="hover:text-ink">
                      {game.name}
                    </Link>
                  </h3>
                  <p className="mt-4 font-body text-[15px] leading-6 text-neutral-500">
                    {game.contestants.length} delegates are in the running. Pick your {game.predict} in the order
                    you think they will finish.
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {game.contestants.slice(0, 8).map((item) => (
                      <li
                        key={item.country}
                        className="flex items-center gap-2 border border-hairline px-3 py-1.5 font-nav text-[10px] tracking-[1.2px] uppercase"
                      >
                        <CountryFlag country={item.country} />
                        {item.country}
                      </li>
                    ))}
                    <li className="flex items-center px-1 py-1.5 font-nav text-[10px] tracking-[1.2px] text-muted uppercase">
                      +{game.contestants.length - 8} more
                    </li>
                  </ul>
                  <Link
                    href={gameHref}
                    className="mt-6 inline-flex h-11 items-center bg-ink px-6 font-nav text-[11px] tracking-[2px] text-white uppercase hover:bg-heading"
                  >
                    Vote Now
                  </Link>
                </div>
              </article>
            ) : (
              <div className="mt-4">
                <p className="max-w-[560px] font-body text-[15px] leading-6 text-neutral-500">
                  No prediction game is open right now. A new game opens ahead of each finale.
                </p>
                <ArrowLink href={PREDICTION_PATH} label="Previous results" className="mt-4" />
              </div>
            )}
          </div>

          <aside className="flex flex-col border-t border-hairline pt-8 desk:col-span-1 desk:border-t-0 desk:border-l desk:pt-0 desk:pl-4">
            <Link
              href="/Polls"
              className="block border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] text-ink uppercase hover:text-accent"
            >
              Polls
            </Link>
            <ol className="mt-4 flex flex-1 flex-col gap-4">
              {polls.map((poll) => {
                const lead = poll.options.reduce((best, option) => (option.percent > best.percent ? option : best));
                return (
                  <li key={poll.image}>
                    <Link href="/Polls" className="group flex w-full items-start gap-3">
                      <CoverImage
                        src={poll.image}
                        alt=""
                        className="size-16 shrink-0"
                        imageClassName="object-cover"
                        sizes="64px"
                      />
                      <span className="min-w-0">
                        <span className="block font-heading text-[15px] leading-[1.4] text-heading group-hover:text-ink">
                          {poll.question}
                        </span>
                        <span className="mt-1 block font-nav text-[10px] tracking-[1.4px] text-muted uppercase">
                          Leading · {lead.percent}%
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
            <ArrowLink href="/Polls" label="All polls" className="mt-6" />
          </aside>
        </div>
      </Container>
    </section>
  );
}
