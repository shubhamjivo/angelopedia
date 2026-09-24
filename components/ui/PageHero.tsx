import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";

type PageHeroProps = {
  kicker: string;
  title: string;
  dek: string;
  dark?: boolean;
};

function sectionId(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function PageHero({ kicker, title, dek, dark = false }: PageHeroProps) {
  return (
    <section id={sectionId(title)} className={dark ? "bg-footer text-white" : "bg-paper"}>
      <Container className="flex flex-col items-center px-6 py-16 text-center desk:px-0 desk:pt-16 desk:pb-14">
        <Kicker tone={dark ? "accent" : "accent"}>{kicker}</Kicker>
        <h1
          className={`mt-3 font-heading text-[28px] font-semibold leading-none tracking-[-0.02em] desk:text-[36px] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h1>
        <p
          className={`mt-4 max-w-[560px] font-body text-base leading-relaxed ${
            dark ? "text-neutral-300" : "text-neutral-500"
          }`}
        >
          {dek}
        </p>
      </Container>
    </section>
  );
}
