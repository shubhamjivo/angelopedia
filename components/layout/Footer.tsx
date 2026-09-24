import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { FOOTER_COLUMNS, SOCIAL_LINKS } from "@/lib/content";
import { Container } from "@/components/ui/Container";

const montage = localFont({
  src: "../../fonts/Montage.woff2",
  display: "swap",
});

export function Footer() {
  return (
    <footer className="bg-footer text-white">
      <div className="border-b border-neutral-800">
        <Container className="flex flex-col items-center px-6 py-16 text-center desk:px-14 desk:pt-[84px] desk:pb-[85px]">
          <p className="font-nav text-[11px] font-medium tracking-[3.52px] text-accent uppercase">
            The Crown Letter
          </p>
          <h2
            id="newsletter"
            className="mt-4 font-heading text-[26px] font-semibold leading-none text-white desk:text-[32px]"
          >
            Pageantry, <em className={`${montage.className} not-italic font-normal`}>beautifully</em> told.
          </h2>
          <p className="mt-4 max-w-[520px] font-body text-base text-neutral-300">
            One elegant email each Sunday — the week&apos;s crowns, stories and
            photographs, curated by our editors.
          </p>
          <form className="mt-8 flex w-full max-w-[480px] items-end border-b border-neutral-600 pb-px">
            <label className="sr-only" htmlFor="newsletter-email">
              Your email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="Your email address"
              className="min-w-0 flex-1 bg-transparent px-1 py-3 font-nav text-[11px] tracking-[2.64px] text-white uppercase placeholder:text-[#7c7972] outline-none"
            />
            <button
              type="submit"
              className="px-1 py-3 font-nav text-[11px] tracking-[3.08px] text-white uppercase hover:text-accent"
            >
              Subscribe
            </button>
          </form>
        </Container>
      </div>

      <Container className="grid gap-10 px-6 py-16 sm:grid-cols-2 desk:grid-cols-[496px_248px_248px_248px] desk:gap-10 desk:px-0 desk:py-[72px]">
        <div className="flex flex-col">
          <Link href="/" aria-label="Angelopedia home">
            <Image
              src="/icons/logo-white.svg"
              alt="Angelopedia"
              width={210}
              height={53}
              className="h-[52px] w-auto"
            />
          </Link>
          <p className="mt-4 max-w-[340px] font-body text-[15px] leading-[25.5px] text-[#8f8b84]">
            The authority on the fascinating world of beauty pageants — news,
            profiles, photographs and history from 195 nations, since 2011.
          </p>
        </div>
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading} className="flex flex-col">
            <p className="font-nav text-[10.5px] font-medium tracking-[3.15px] text-white uppercase">
              {col.heading}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {col.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-nav text-[13px] tracking-[0.78px] text-neutral-300 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </Container>

      <Container>
        <div className="flex flex-col gap-3 border-t border-neutral-800 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-nav text-[10px] tracking-[2.2px] text-[#7c7972] uppercase">
            © 2026 Angelopedia · All Rights Reserved
          </p>
          <nav className="flex flex-wrap gap-5 font-nav text-[10px] tracking-[2.2px] text-[#7c7972] uppercase">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-white"
                rel="noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
