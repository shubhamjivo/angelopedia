import type { Metadata } from "next";
import { ArrowLink } from "@/components/pageants/ArrowLink";
import { PlayNav } from "@/components/play/PlayNav";
import { Container } from "@/components/ui/Container";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { PageHero } from "@/components/ui/PageHero";
import { ARCHIVE_POLLS } from "@/lib/play";

export const metadata: Metadata = {
  title: "Polls",
  description: "Angelopedia polls — the questions we put to readers, and how the vote fell.",
};

export default function PollsPage() {
  return (
    <main>
      <PageHero
        kicker="Play Zone"
        title="Polls"
        dek="The questions we put to readers, and how the vote fell."
      />

      <PlayNav current="/Polls" />

      <section id="polls" className="py-8 desk:py-10">
        <Container>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
              Angelopedia Polls
            </h2>
            <p className="font-nav text-[11px] tracking-[2px] text-muted uppercase">{ARCHIVE_POLLS.length} polls</p>
          </div>

          <ul className="mt-10 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ARCHIVE_POLLS.map((poll, index) => {
              const top = Math.max(...poll.options.map((option) => option.percent));
              const votes = poll.options.reduce((total, option) => total + (option.votes ?? 0), 0);
              return (
                <li key={`${poll.question}-${index}`} className="border border-hairline">
                  <CoverImage
                    src={poll.image}
                    alt={poll.question}
                    className="aspect-[3/2] w-full"
                    imageClassName="object-top"
                    sizes="(max-width: 640px) 100vw, 440px"
                    priority={index < 3}
                  />
                  <div className="p-5">
                    <Kicker tone="accent">{votes ? `${votes.toLocaleString("en-US")} votes` : "Poll closed"}</Kicker>
                    <h3 className="mt-3 font-heading text-[22px] font-semibold leading-[1.3] text-heading">
                      {poll.question}
                    </h3>
                    <details className="group pt-5">
                      <summary className="flex h-11 cursor-pointer list-none items-center justify-center border border-ink font-nav text-[11px] tracking-[2px] text-ink uppercase marker:content-none hover:bg-ink hover:text-white [&::-webkit-details-marker]:hidden">
                        <span className="group-open:hidden">See Result</span>
                        <span className="hidden group-open:inline">Hide Result</span>
                      </summary>
                      <ul className="mt-5 flex flex-col gap-4">
                        {poll.options.map((option) => (
                          <li key={option.label}>
                            <p className="flex items-baseline justify-between gap-3 font-body text-[15px] leading-6 text-ink">
                              <span>{option.label}</span>
                              <span className="font-heading text-[16px] font-semibold text-heading">{option.percent}%</span>
                            </p>
                            <div className="mt-1.5 h-1.5 w-full bg-ink/10">
                              <div
                                className={`h-full ${option.percent === top ? "bg-accent" : "bg-ink"}`}
                                style={{ width: `${option.percent}%` }}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </li>
              );
            })}
          </ul>

          <ArrowLink href="/Prediction-Game-for-Beauty-Pageants" label="Play the Prediction Game" className="mt-10" />
        </Container>
      </section>
    </main>
  );
}
