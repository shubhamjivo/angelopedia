"use client";

import { useEffect, useMemo, useState } from "react";
import { CountryFlag } from "@/components/pageants/CountryFlag";
import { Container } from "@/components/ui/Container";
import type { PredictionContestant } from "@/lib/play";

type Saved = { picks: string[]; submitted: boolean };

const PLACES = ["Winner", "1st Runner-up", "2nd Runner-up", "3rd Runner-up", "4th Runner-up"];

function place(index: number) {
  return PLACES[index] ?? `Pick ${index + 1}`;
}

export function PredictionBallot({
  slug,
  name,
  picks,
  contestants,
}: {
  slug: string;
  name: string;
  picks: number;
  contestants: PredictionContestant[];
}) {
  const key = `prediction:${slug}`;
  const [chosen, setChosen] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [query, setQuery] = useState("");

  // The ballot lives in this browser only until the games API is wired up.
  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem(key) ?? "null") as Saved | null;
      if (!saved) return;
      const known = new Set(contestants.map((item) => item.country));
      // eslint-disable-next-line react-hooks/set-state-in-effect -- restore a saved ballot after hydration
      setChosen(saved.picks.filter((country) => known.has(country)).slice(0, picks));
      setSubmitted(saved.submitted);
    } catch {
      // Unreadable storage: start with an empty ballot.
    }
  }, [key, contestants, picks]);

  function store(next: string[], done: boolean) {
    setChosen(next);
    setSubmitted(done);
    try {
      window.localStorage.setItem(key, JSON.stringify({ picks: next, submitted: done } satisfies Saved));
    } catch {
      // Storage unavailable: the ballot still works for this visit.
    }
  }

  function toggle(country: string) {
    if (submitted) return;
    if (chosen.includes(country)) store(chosen.filter((item) => item !== country), false);
    else if (chosen.length < picks) store([...chosen, country], false);
  }

  const byCountry = useMemo(() => new Map(contestants.map((item) => [item.country, item])), [contestants]);
  const needle = query.trim().toLowerCase();
  const visible = needle
    ? contestants.filter((item) => `${item.country} ${item.name}`.toLowerCase().includes(needle))
    : contestants;
  const full = chosen.length === picks;

  return (
    <section id="ballot" className="py-8 desk:py-10">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
        <div className="order-2 min-w-0 flex-1 lg:order-1">
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <h2 className="font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
                The Delegates
              </h2>
              <p className="font-nav text-[11px] tracking-[2px] text-muted uppercase">{contestants.length} delegates</p>
            </div>
            <label className="w-full sm:w-[260px]">
              <span className="sr-only">Search delegates</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search a country or name"
                className="h-10 w-full border border-hairline px-3 font-sans text-sm text-ink outline-none placeholder:text-neutral-500 focus:border-ink"
              />
            </label>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 desk:grid-cols-3">
            {visible.map((item) => {
              const rank = chosen.indexOf(item.country);
              const selected = rank >= 0;
              const blocked = submitted || (!selected && full);
              return (
                <li key={item.country}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    disabled={blocked}
                    onClick={() => toggle(item.country)}
                    className={`flex w-full items-center gap-3 border p-4 text-left transition-colors ${
                      selected ? "border-ink bg-ink text-white" : "border-hairline text-heading"
                    } ${blocked ? (selected ? "" : "opacity-50") : "hover:border-ink"}`}
                  >
                    <CountryFlag country={item.country} className="h-4 w-6" />
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block font-nav text-[10px] font-medium tracking-[1.4px] uppercase ${
                          selected ? "text-neutral-300" : "text-muted"
                        }`}
                      >
                        {item.country}
                      </span>
                      <span className="mt-1 block font-heading text-[16px] font-semibold leading-[1.3]">{item.name}</span>
                    </span>
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center border font-heading text-[16px] font-semibold ${
                        selected ? "border-white text-white" : "border-hairline text-muted"
                      }`}
                    >
                      {selected ? rank + 1 : "+"}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
          {!visible.length ? (
            <p className="mt-10 font-body text-[15px] leading-6 text-neutral-500">No delegate matches “{query}”.</p>
          ) : null}
        </div>

        <aside className="order-1 w-full border border-hairline lg:sticky lg:top-[calc(var(--header-offset,0px)+4.5rem)] lg:order-2 lg:w-[320px] lg:shrink-0">
          <p className="border-b border-ink px-5 py-3 font-nav text-[11px] tracking-[2px] uppercase">
            Your Top {picks} · {chosen.length}/{picks}
          </p>
          <ol className="flex flex-col px-5">
            {Array.from({ length: picks }, (_, index) => {
              const pick = byCountry.get(chosen[index] ?? "");
              return (
                <li key={index} className="flex items-center gap-3 border-b border-hairline py-3">
                  <span className="w-5 shrink-0 font-heading text-[22px] leading-none text-accent">{index + 1}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-nav text-[10px] font-medium tracking-[1.4px] text-muted uppercase">
                      {place(index)}
                    </span>
                    {pick ? (
                      <span className="mt-1 flex items-center gap-2 font-heading text-[15px] leading-[1.4] text-heading">
                        <CountryFlag country={pick.country} />
                        {pick.name} · {pick.country}
                      </span>
                    ) : (
                      <span className="mt-1 block font-body text-[15px] leading-6 text-neutral-500">Not chosen yet</span>
                    )}
                  </span>
                  {pick && !submitted ? (
                    <button
                      type="button"
                      aria-label={`Remove ${pick.name}`}
                      onClick={() => toggle(pick.country)}
                      className="flex size-7 shrink-0 items-center justify-center border border-hairline font-nav text-[13px] text-muted hover:border-ink hover:text-ink"
                    >
                      ×
                    </button>
                  ) : null}
                </li>
              );
            })}
          </ol>
          <div className="flex flex-col gap-3 p-5">
            {submitted ? (
              <>
                <p className="font-body text-[15px] leading-6 text-ink">
                  Your prediction for {name} is saved on this device.
                </p>
                <button
                  type="button"
                  onClick={() => store(chosen, false)}
                  className="flex h-11 items-center justify-center border border-ink font-nav text-[11px] tracking-[2px] text-ink uppercase hover:bg-ink hover:text-white"
                >
                  Change My Prediction
                </button>
              </>
            ) : (
              <>
                <button
                  type="button"
                  disabled={!full}
                  onClick={() => store(chosen, true)}
                  className="flex h-11 items-center justify-center bg-ink font-nav text-[11px] tracking-[2px] text-white uppercase hover:bg-heading disabled:opacity-40"
                >
                  Submit Prediction
                </button>
                <p className="font-nav text-[10px] tracking-[1.4px] text-muted uppercase">
                  {full ? "Ready to submit" : `Choose ${picks - chosen.length} more`}
                </p>
              </>
            )}
          </div>
        </aside>
      </Container>
    </section>
  );
}
