"use client";

import { useSyncExternalStore } from "react";

const REACTIONS = [
  { id: "angry", label: "Angry", emoji: "😠" },
  { id: "wtf", label: "WTF", emoji: "🤪" },
  { id: "lol", label: "LOL", emoji: "😆" },
  { id: "cute", label: "Cute", emoji: "😘" },
  { id: "nice", label: "Nice", emoji: "😊" },
  { id: "loove", label: "Loove", emoji: "😍" },
] as const;

type ReactionId = (typeof REACTIONS)[number]["id"];
type Choice = { vote?: 1 | -1; reaction?: ReactionId };

export type FeedbackCounts = { points: number; reactions: Partial<Record<ReactionId, number>> };

const STORAGE_KEY = "angelopedia-story-feedback";

// Votes and reactions are kept per browser until the CMS has an endpoint for them.
// useSyncExternalStore reads localStorage without a hydration mismatch and keeps
// every panel for the same story in sync (including across tabs).
const listeners = new Set<() => void>();
let memory: string | null = null; // fallback when storage is blocked

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function readRaw() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return memory;
  }
}

function parseStore(raw: string | null): Record<string, Choice> {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as Record<string, Choice>;
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, Choice>) {
  memory = JSON.stringify(store);
  try {
    localStorage.setItem(STORAGE_KEY, memory);
  } catch {
    // Storage is blocked; the choice lasts until reload.
  }
  listeners.forEach((listener) => listener());
}

function compact(value: number) {
  return new Intl.NumberFormat("en-US", { notation: "compact", maximumFractionDigits: 1 }).format(value).toLowerCase();
}

function VoteArrow({ down = false }: { down?: boolean }) {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" className={down ? "rotate-180" : undefined}>
      <path d="M8 3.5 13.5 12h-11L8 3.5Z" fill="currentColor" />
    </svg>
  );
}

const LABEL = "border-b border-ink pb-3 font-nav text-[11px] tracking-[2px] text-ink uppercase";

export function StoryFeedback({
  id,
  title,
  counts,
  className = "",
}: {
  id: string;
  title: string;
  counts?: FeedbackCounts;
  className?: string;
}) {
  const raw = useSyncExternalStore(subscribe, readRaw, () => null);
  const choice: Choice = parseStore(raw)[id] ?? {};
  const vote = choice.vote === 1 || choice.vote === -1 ? choice.vote : 0;
  const reaction = REACTIONS.some((item) => item.id === choice.reaction) ? choice.reaction : undefined;

  function save(next: Choice) {
    const store = parseStore(readRaw());
    if (next.vote || next.reaction) store[id] = next;
    else delete store[id];
    writeStore(store);
  }

  const points = (counts?.points ?? 0) + vote;
  const totals = REACTIONS.map((item) => (counts?.reactions[item.id] ?? 0) + (reaction === item.id ? 1 : 0));
  const sum = totals.reduce((total, value) => total + value, 0);

  const voteButton = (value: 1 | -1, label: string) => {
    const pressed = vote === value;
    return (
      <button
        type="button"
        aria-pressed={pressed}
        aria-label={`${label} “${title}”`}
        onClick={() => save({ ...choice, vote: pressed ? undefined : value })}
        className={`flex h-14 flex-1 items-center justify-center border transition-colors ${
          pressed ? "border-ink bg-ink text-white" : "border-hairline text-ink hover:border-ink"
        }`}
      >
        <VoteArrow down={value === -1} />
      </button>
    );
  };

  return (
    <div className={`flex flex-col gap-10 ${className}`}>
      <div>
        <h2 className={LABEL}>What do you think?</h2>
        <div className="mt-5 flex items-center gap-4">
          {voteButton(1, "Vote up")}
          <p className="w-20 shrink-0 text-center" aria-live="polite">
            <span className="block font-heading text-[22px] font-semibold leading-none text-heading desk:text-[26px]">
              {compact(points)}
            </span>
            <span className="mt-1.5 block font-nav text-[10px] tracking-[1.4px] text-muted uppercase">
              {Math.abs(points) === 1 ? "Point" : "Points"}
            </span>
          </p>
          {voteButton(-1, "Vote down")}
        </div>
      </div>

      <div>
        <h2 className={LABEL}>What&rsquo;s your reaction?</h2>
        <ul className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-6">
          {REACTIONS.map((item, index) => {
            const pressed = reaction === item.id;
            const share = sum ? Math.round((totals[index] / sum) * 100) : 0;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  aria-pressed={pressed}
                  aria-label={`React ${item.label} to “${title}”, ${totals[index]}`}
                  onClick={() => save({ ...choice, reaction: pressed ? undefined : item.id })}
                  className={`group flex w-full flex-col items-center border px-2 pt-4 transition-colors ${
                    pressed ? "border-ink bg-ink/5" : "border-hairline hover:border-ink"
                  }`}
                >
                  <span
                    aria-hidden
                    className={`font-sans text-[34px] leading-none transition-transform duration-200 group-hover:scale-110 ${
                      pressed ? "scale-110" : ""
                    }`}
                  >
                    {item.emoji}
                  </span>
                  <span className="mt-3 font-heading text-[16px] font-semibold leading-none text-heading">
                    {compact(totals[index])}
                  </span>
                  <span className="mt-3 block h-1 w-full bg-ink/10">
                    <span
                      className={`block h-full transition-[width] duration-300 ${pressed ? "bg-accent" : "bg-ink"}`}
                      style={{ width: `${share}%` }}
                    />
                  </span>
                  <span
                    className={`py-2.5 font-nav text-[11px] font-medium tracking-[1.6px] uppercase ${
                      pressed ? "text-accent" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
