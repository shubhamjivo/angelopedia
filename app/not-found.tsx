import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main>
      <Container className="flex flex-col items-center py-24 text-center">
        <p className="font-nav text-[11px] tracking-[2px] text-accent uppercase">
          404
        </p>
        <h1 className="mt-4 font-heading text-[48px] font-semibold text-heading">
          Page not found
        </h1>
        <p className="mt-4 font-body text-neutral-500">
          That crown isn&apos;t in the archive.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center border border-ink px-6 font-nav text-[11px] tracking-[2px] uppercase"
        >
          Return home
        </Link>
      </Container>
    </main>
  );
}
