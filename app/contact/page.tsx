import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contact",
  description: "Write to the Angelopedia newsroom.",
};

export default function ContactPage() {
  return (
    <main>
      <PageHero
        kicker="Angelopedia"
        title="Contact"
        dek="Tips, corrections, syndication and press — write to the newsroom."
      />
      <Container className="max-w-[520px] pb-20">
        <form className="flex flex-col gap-6">
          <label className="flex flex-col gap-2 font-nav text-[11px] tracking-[2px] uppercase">
            Name
            <input
              name="name"
              className="border-b border-hairline py-2 font-sans text-base tracking-normal normal-case outline-none focus:border-ink"
            />
          </label>
          <label className="flex flex-col gap-2 font-nav text-[11px] tracking-[2px] uppercase">
            Email
            <input
              type="email"
              name="email"
              className="border-b border-hairline py-2 font-sans text-base tracking-normal normal-case outline-none focus:border-ink"
            />
          </label>
          <label className="flex flex-col gap-2 font-nav text-[11px] tracking-[2px] uppercase">
            Message
            <textarea
              name="message"
              rows={5}
              className="border-b border-hairline py-2 font-sans text-base tracking-normal normal-case outline-none focus:border-ink"
            />
          </label>
          <button
            type="submit"
            className="mt-4 h-12 border border-ink font-nav text-[11px] tracking-[2px] uppercase hover:bg-ink hover:text-white"
          >
            Send
          </button>
        </form>
      </Container>
    </main>
  );
}
