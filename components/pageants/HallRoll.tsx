import type { ReactNode } from "react";
import { CountryFlag } from "@/components/pageants/CountryFlag";
import { ReactionBar } from "@/components/pageants/ReactionBar";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { pictureFor } from "@/lib/pageants/frames";
import type { PageantPiece } from "@/lib/pageants/types";

function hallFacts(dek: string) {
  const parts = dek.split("·").map((part) => part.trim()).filter(Boolean);
  if (parts.length >= 3) {
    return {
      country: parts[0],
      age: parts[1].replace(/\s*years?\s*/i, "").trim(),
      height: parts[2].replace(/\s*cm\s*/i, "").trim(),
    };
  }
  const comma = dek.match(/^(.+?),\s*(\d+)\s*years?\s*(\d+)\s*cm/i);
  if (comma) return { country: comma[1], age: comma[2], height: comma[3] };
  return { country: dek, age: "", height: "" };
}

function Fact({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="font-nav text-neutral-300" aria-hidden>
        |
      </span>
      <span>{children}</span>
    </>
  );
}

export function HallRoll({
  pieces,
  scope,
  name,
}: {
  pieces: PageantPiece[];
  scope: string;
  name: string;
}) {
  const label = name.toUpperCase();
  return (
    <ul className="flex flex-col gap-5">
      {pieces.map((item, index) => {
        const frame = pictureFor(item);
        const facts = hallFacts(item.dek);
        const year = /^(19|20)\d{2}$/.test(item.kicker.trim());
        return (
          <li
            key={`${item.kicker}-${item.title}`}
            className="flex flex-col overflow-hidden rounded-none border border-hairline bg-paper sm:flex-row"
          >
            {frame ? (
              <CoverImage
                src={frame.src}
                alt={frame.alt}
                className="aspect-[16/10] w-full rounded-none sm:aspect-auto sm:w-[38%] sm:shrink-0"
                imageClassName="rounded-none object-top"
                sizes="(max-width: 640px) 100vw, 420px"
                priority={index === 0}
              />
            ) : (
              <div className="aspect-[16/10] w-full bg-ink/10 sm:aspect-auto sm:w-[38%] sm:shrink-0" />
            )}
            <div className="min-w-0 flex-1 px-5 py-5 sm:px-7 sm:py-6">
              <Kicker tone="accent">{label}</Kicker>
              {year ? (
                <p className="mt-3 font-heading text-[30px] font-semibold leading-none text-heading desk:text-[34px]">
                  {item.kicker}
                </p>
              ) : null}
              <h3
                className={`font-heading font-semibold leading-none text-heading ${
                  year ? "mt-1.5 text-[22px] desk:text-[26px]" : "mt-3 text-[30px] desk:text-[34px]"
                }`}
              >
                {item.title}
              </h3>
              <p className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 font-nav text-[12px] font-medium tracking-[0.08em] text-ink uppercase">
                <CountryFlag country={facts.country} />
                <span>{facts.country}</span>
                {facts.age ? <Fact>{facts.age} Years</Fact> : null}
                {facts.height ? <Fact>{facts.height} cm</Fact> : null}
              </p>
              <div className="mt-3 h-px w-10 bg-accent" aria-hidden />
              {item.reactions ? (
                <ReactionBar
                  id={`${scope}:hall:${item.kicker}:${item.title}`}
                  name={item.title}
                  counts={item.reactions}
                />
              ) : null}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
