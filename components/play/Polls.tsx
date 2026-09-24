"use client";

import { useState } from "react";
import { POLLS } from "@/lib/content";
import { Kicker } from "@/components/ui/Kicker";

export function Polls() {
  const [selected, setSelected] = useState<Record<number, string>>({});

  return (
    <div className="flex flex-col gap-8">
      {POLLS.map((poll, index) => (
        <form
          key={poll.question}
          className="border border-hairline p-6 desk:p-8"
          onSubmit={(event) => event.preventDefault()}
        >
          <Kicker tone="accent">{poll.kicker}</Kicker>
          <h2 className="mt-3 font-heading text-[20px] font-semibold leading-snug text-heading">
            {poll.question}
          </h2>
          <div className="mt-6 flex flex-col">
            {poll.options.map((option) => {
              const active = selected[index] === option;
              return (
                <label
                  key={option}
                  className={`flex cursor-pointer items-center border-t border-hairline py-3 font-body text-[15px] ${
                    active ? "text-accent" : "text-ink"
                  }`}
                >
                  <input
                    type="radio"
                    name={`poll-${index}`}
                    className="sr-only"
                    checked={active}
                    onChange={() =>
                      setSelected((current) => ({ ...current, [index]: option }))
                    }
                  />
                  {option}
                </label>
              );
            })}
          </div>
          <p className="mt-4 font-nav text-[10px] tracking-[1.6px] text-muted uppercase">
            {poll.note}
          </p>
        </form>
      ))}
    </div>
  );
}
