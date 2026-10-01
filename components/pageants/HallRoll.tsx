import type { ReactNode } from "react";
import { ReactionBar } from "@/components/pageants/ReactionBar";
import { CoverImage } from "@/components/ui/CoverImage";
import { Kicker } from "@/components/ui/Kicker";
import { pictureFor } from "@/lib/pageants/frames";
import type { PageantPiece } from "@/lib/pageants/types";

const FLAG_CODE: Record<string, string> = {
  jamaica: "jm",
  mexico: "mx",
  india: "in",
  "puerto rico": "pr",
  spain: "es",
  "south africa": "za",
  philippines: "ph",
  china: "cn",
  venezuela: "ve",
  "united states of america": "us",
  "united states": "us",
  usa: "us",
};

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

function FlagShape({ code }: { code: string }) {
  if (code === "jm") {
    return (
      <>
        <rect width="30" height="20" fill="#FED100" />
        <polygon points="0,0 12,10 0,20" fill="#000" />
        <polygon points="30,0 18,10 30,20" fill="#000" />
        <polygon points="0,0 30,0 15,7.5" fill="#007749" />
        <polygon points="0,20 30,20 15,12.5" fill="#007749" />
      </>
    );
  }
  if (code === "mx") {
    return (
      <>
        <rect width="10" height="20" fill="#006847" />
        <rect x="10" width="10" height="20" fill="#fff" />
        <rect x="20" width="10" height="20" fill="#CE1126" />
        <circle cx="15" cy="10" r="2.1" fill="#C4A35A" />
      </>
    );
  }
  if (code === "in") {
    return (
      <>
        <rect width="30" height="6.67" fill="#FF9933" />
        <rect y="6.67" width="30" height="6.66" fill="#fff" />
        <rect y="13.33" width="30" height="6.67" fill="#138808" />
        <circle cx="15" cy="10" r="2.1" fill="none" stroke="#000080" strokeWidth="0.7" />
      </>
    );
  }
  if (code === "pr") {
    return (
      <>
        <rect width="30" height="4" fill="#ED0000" />
        <rect y="4" width="30" height="4" fill="#fff" />
        <rect y="8" width="30" height="4" fill="#ED0000" />
        <rect y="12" width="30" height="4" fill="#fff" />
        <rect y="16" width="30" height="4" fill="#ED0000" />
        <polygon points="0,0 13,10 0,20" fill="#0050F0" />
        <polygon points="4.6,10 5.7,7.4 6.8,10 9.5,10 7.3,11.6 8.1,14.2 4.6,12.6 1.1,14.2 1.9,11.6 -0.3,10" fill="#fff" />
      </>
    );
  }
  if (code === "es") {
    return (
      <>
        <rect width="30" height="20" fill="#C60B1E" />
        <rect y="5" width="30" height="10" fill="#FFC400" />
      </>
    );
  }
  if (code === "za") {
    return (
      <>
        <rect width="30" height="10" fill="#002395" />
        <rect y="10" width="30" height="10" fill="#DE3831" />
        <polygon points="0,0 15,10 0,20" fill="#007A4D" />
        <rect y="8" width="30" height="4" fill="#fff" />
        <polygon points="0,3 11,10 0,17" fill="#FFB612" />
        <polygon points="0,5.2 7.2,10 0,14.8" fill="#000" />
        <polygon points="0,8 6,10 0,12" fill="#007A4D" />
      </>
    );
  }
  if (code === "ph") {
    return (
      <>
        <rect width="30" height="10" fill="#0038A8" />
        <rect y="10" width="30" height="10" fill="#CE1126" />
        <polygon points="0,0 14,10 0,20" fill="#fff" />
        <circle cx="5.2" cy="10" r="2" fill="#FCD116" />
      </>
    );
  }
  if (code === "cn") {
    return (
      <>
        <rect width="30" height="20" fill="#DE2910" />
        <polygon points="6,3 7.1,6.2 4,4.3 8,4.3 4.9,6.2" fill="#FFDE00" />
      </>
    );
  }
  if (code === "ve") {
    return (
      <>
        <rect width="30" height="6.67" fill="#FFCC00" />
        <rect y="6.67" width="30" height="6.66" fill="#00247D" />
        <rect y="13.33" width="30" height="6.67" fill="#CF142B" />
      </>
    );
  }
  return (
    <>
      <rect width="30" height="20" fill="#BF0A30" />
      <rect y="1.54" width="30" height="1.54" fill="#fff" />
      <rect y="4.62" width="30" height="1.54" fill="#fff" />
      <rect y="7.69" width="30" height="1.54" fill="#fff" />
      <rect y="10.77" width="30" height="1.54" fill="#fff" />
      <rect y="13.85" width="30" height="1.54" fill="#fff" />
      <rect y="16.92" width="30" height="1.54" fill="#fff" />
      <rect width="12" height="10.77" fill="#002868" />
    </>
  );
}

function CountryFlag({ country }: { country: string }) {
  const code = FLAG_CODE[country.trim().toLowerCase()];
  if (!code) return null;
  return (
    <svg viewBox="0 0 30 20" className="h-3.5 w-5 shrink-0 rounded-none border border-black/10" aria-hidden>
      <FlagShape code={code} />
    </svg>
  );
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
              <p className="mt-3 font-heading text-[30px] font-semibold leading-none text-heading desk:text-[34px]">
                {item.kicker}
              </p>
              <h3 className="mt-1.5 font-heading text-[22px] font-semibold leading-none text-heading desk:text-[26px]">
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
