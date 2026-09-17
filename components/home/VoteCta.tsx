import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";

export function VoteCta() {
  return (
    <section className="py-16 desk:py-24">
      <Container className="flex flex-col items-center text-center">
        <Kicker>Have Your Say</Kicker>
        <h2 className="mt-4 max-w-[720px] font-heading text-[36px] font-semibold leading-tight text-heading desk:text-[52px]">
          Who wears the next Miss Universe crown?
        </h2>
        <p className="mt-4 max-w-[480px] font-body text-base text-muted">
          Join 48,000 fans in this month&apos;s prediction — and see how your Top 5
          stacks against the world.
        </p>
        <Link
          href="/play"
          className="mt-8 inline-flex h-12 items-center border border-ink px-8 font-nav text-[13px] tracking-[1.5px] uppercase hover:bg-ink hover:text-white"
        >
          Cast Your Vote
        </Link>
      </Container>
    </section>
  );
}
