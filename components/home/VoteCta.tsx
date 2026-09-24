import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";

export function VoteCta() {
  return (
    <section id="vote" className="border-t border-hairline py-16 desk:py-20">
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[720px]">
          <Kicker>Have your say</Kicker>
          <h2 className="mt-4 font-heading text-[30px] font-semibold leading-none text-heading desk:text-[36px]">
            Who wears the next Miss Universe crown?
          </h2>
          <p className="mt-4 max-w-[520px] font-body text-base leading-7 text-neutral-500">
            Join 48,000 fans in this month&apos;s prediction — and see how your Top 5
            stacks against the world.
          </p>
        </div>
        <Link
          href="/play"
          className="inline-flex h-12 shrink-0 items-center border border-ink px-8 font-nav text-[13px] tracking-[1.5px] text-ink uppercase hover:bg-ink hover:text-white"
        >
          Cast your vote
        </Link>
      </Container>
    </section>
  );
}
