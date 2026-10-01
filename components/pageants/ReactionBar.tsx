"use client";

import { useEffect, useState } from "react";
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

function readStore(): Record<string, Kind[]> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Record<string, unknown>;
    if (!parsed || typeof parsed !== "object") return {};
    return parsed as Record<string, Kind[]>;
  } catch {
    return {};
  }
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
  const [chosen, setChosen] = useState<Kind[]>([]);

  useEffect(() => {
    const stored = readStore()[id];
    setChosen(Array.isArray(stored) ? stored.filter((kind) => KINDS.includes(kind)) : []);
  }, [id]);

  function toggle(kind: Kind) {
    setChosen((current) => {
      const next = current.includes(kind) ? current.filter((item) => item !== kind) : [...current, kind];
      try {
        const store = readStore();
        if (next.length) store[id] = next;
        else delete store[id];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
      } catch {
        // The count still updates for this view when storage is blocked.
      }
      return next;
    });
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
