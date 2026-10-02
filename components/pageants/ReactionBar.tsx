"use client";

import { useSyncExternalStore } from "react";
import type { ReactionCounts } from "@/lib/pageants/types";

const KINDS = ["like", "dislike", "love", "flower"] as const;
type Kind = (typeof KINDS)[number];

const LABELS: Record<Kind, string> = {
  like: "Like",
  dislike: "Dislike",
  love: "Send love",
  flower: "Send flower",
};

const STORAGE_KEY = "angelopedia-reactions";

// Reactions are kept per browser until the CMS has an endpoint for them.
// useSyncExternalStore reads localStorage without a hydration mismatch and keeps
// every bar for the same item in sync (including across tabs).
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

function parseStore(raw: string | null): Record<string, Kind[]> {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as Record<string, Kind[]>;
  } catch {
    return {};
  }
}

function writeStore(store: Record<string, Kind[]>) {
  memory = JSON.stringify(store);
  try {
    localStorage.setItem(STORAGE_KEY, memory);
  } catch {
    // Storage is blocked; the choice lasts until reload.
  }
  listeners.forEach((listener) => listener());
}

function formatCount(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function ReactionIcon({ kind, filled }: { kind: Kind; filled: boolean }) {
  const common = {
    viewBox: "0 0 16 16",
    width: 16,
    height: 16,
    fill: filled ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
    "aria-hidden": true as const,
    className: "shrink-0",
  };
  if (kind === "like" || kind === "dislike") {
    return (
      <svg {...common} className={`${common.className} ${kind === "dislike" ? "rotate-180" : ""}`}>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          d="M6.2 7.2V13H3.4A1.2 1.2 0 0 1 2.2 11.8V8.4A1.2 1.2 0 0 1 3.4 7.2H6.2Zm0 0 1.5-4.1A1.5 1.5 0 0 1 9.1 1.8l.5 1.8v3.6h3.6a1.4 1.4 0 0 1 1.4 1.6l-.7 4.2a1.4 1.4 0 0 1-1.4 1.2H6.2"
        />
      </svg>
    );
  }
  if (kind === "love") {
    return (
      <svg {...common}>
        <path
          strokeLinejoin="round"
          d="M8 13.2S2.8 9.6 2.8 6.4A2.6 2.6 0 0 1 8 4.7a2.6 2.6 0 0 1 5.2 1.7c0 3.2-5.2 6.8-5.2 6.8Z"
        />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path strokeLinecap="round" d="M8 14V8.2" />
      <path strokeLinejoin="round" d="M8 8.4c-1.8-.2-3.2-1.8-3.2-3.6 1.4.4 2.6 1.6 3.2 3.6Z" />
      <path strokeLinejoin="round" d="M8 8.4c1.8-.2 3.2-1.8 3.2-3.6-1.4.4-2.6 1.6-3.2 3.6Z" />
      <path strokeLinejoin="round" d="M8 8.2c.2-1.8.8-3.4 1.8-4.6-1 .8-1.6 2.4-1.8 4.6Z" />
    </svg>
  );
}

export function ReactionBar({
  id,
  name,
  counts,
  layout = "row",
}: {
  id: string;
  name: string;
  counts: ReactionCounts;
  layout?: "row" | "grid";
}) {
  const raw = useSyncExternalStore(subscribe, readRaw, () => null);
  const stored = parseStore(raw)[id];
  const chosen = Array.isArray(stored) ? stored.filter((kind) => KINDS.includes(kind)) : [];

  function toggle(kind: Kind) {
    const store = parseStore(readRaw());
    const next = chosen.includes(kind) ? chosen.filter((item) => item !== kind) : [...chosen, kind];
    if (next.length) store[id] = next;
    else delete store[id];
    writeStore(store);
  }

  const buttons = KINDS.map((kind, index) => {
    const total = counts[kind] + (chosen.includes(kind) ? 1 : 0);
    const pressed = chosen.includes(kind);
    const warm = kind === "love" || kind === "flower" || pressed;
    const reverse = layout === "grid" && index % 2 === 1;
    return (
      <button
        key={kind}
        type="button"
        aria-pressed={pressed}
        aria-label={`${LABELS[kind]} ${name}, ${formatCount(total)}`}
        onClick={() => toggle(kind)}
        className={`inline-flex items-center gap-1.5 font-nav text-[13px] ${reverse ? "flex-row-reverse justify-self-end" : ""} ${
          warm ? "text-accent" : "text-ink hover:text-heading"
        }`}
      >
        <ReactionIcon kind={kind} filled={pressed} />
        <span>{formatCount(total)}</span>
      </button>
    );
  });

  if (layout === "grid") {
    return <div className="mt-3 grid grid-cols-2 gap-x-2 gap-y-1.5 border-t border-hairline pt-2">{buttons}</div>;
  }

  return <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hairline pt-3">{buttons}</div>;
}
