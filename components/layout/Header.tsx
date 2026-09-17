"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/lib/site";
import { Container } from "@/components/ui/Container";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function SearchIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 17 17"
      width="16"
      height="16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M11.5 11.5L16 16" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const chromeRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);
  const raf = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      raf.current = 0;
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY.current;
      lastY.current = y;

      const top = y < 24;
      setAtTop(top);

      if (searchOpen || top) {
        setCompact(false);
        return;
      }

      if (delta > 10) setCompact(true);
      else if (delta < -10) setCompact(false);
    };

    const onScroll = () => {
      if (!raf.current) raf.current = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [searchOpen]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    const el = chromeRef.current;
    if (!el) return;
    document.documentElement.style.setProperty(
      "--header-h-top",
      `${Math.round(el.getBoundingClientRect().height)}px`,
    );
  }, []);

  return (
    <>
    <div
      aria-hidden
      className="pointer-events-none"
      style={{ height: "var(--header-h-top)" }}
    />
    <header
      data-compact={compact ? "true" : "false"}
      data-at-top={atTop ? "true" : "false"}
      className={`fixed inset-x-0 top-0 z-50 bg-paper text-ink ${
        compact ? "shadow-[0_1px_0_0_rgba(65,64,66,0.12)]" : ""
      }`}
    >
      <div ref={chromeRef}>
        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            atTop ? "max-h-8 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="hidden border-b border-hairline sm:block">
            <Container className="flex h-8 items-center">
              <Link
                href="/#newsletter"
                className="font-nav text-[11px] tracking-[1.6px] text-muted uppercase hover:text-ink"
              >
                Newsletter
              </Link>
            </Container>
          </div>
        </div>

        <Container
          className={`relative flex items-center justify-between transition-[height] duration-300 ease-out ${
            compact ? "h-14 lg:h-16" : "h-16 lg:h-[88px]"
          }`}
        >
          <div className="flex items-center gap-3 lg:gap-4">
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="site-menu"
              className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5"
              onClick={() => {
                setOpen((v) => !v);
                setSearchOpen(false);
              }}
            >
              {open ? (
                <>
                  <span className="absolute h-px w-4 rotate-45 bg-ink" />
                  <span className="absolute h-px w-4 -rotate-45 bg-ink" />
                </>
              ) : (
                <>
                  <span className="h-px w-4 bg-ink" />
                  <span className="h-px w-4 bg-ink" />
                  <span className="h-px w-4 bg-ink" />
                </>
              )}
            </button>

          </div>

          <Link
            href="/"
            aria-label="Angelopedia home"
            className="absolute left-1/2 -translate-x-1/2"
          >
            <Image
              src="/icons/logo.svg"
              alt="Angelopedia"
              width={400}
              height={100}
              priority
              className={`w-auto origin-center transition-[height,transform] duration-300 ease-out ${compact ? "h-6 lg:h-8" : "h-9 lg:h-14"
                }`}
            />
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/#newsletter"
              className="hidden h-9 items-center bg-ink px-4 font-nav text-[11px] tracking-[1.4px] text-white uppercase hover:bg-heading lg:inline-flex"
            >
              Subscribe
            </Link>
            <button
              type="button"
              aria-label="Search"
              className={`flex size-9 items-center justify-center text-ink ${compact ? "lg:flex" : "lg:hidden"
                }`}
              onClick={() => {
                setSearchOpen((v) => !v);
                setOpen(false);
                setCompact(false);
              }}
            >
              <SearchIcon />
            </button>
          </div>
        </Container>

        <div
          className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
            compact || open ? "max-h-0 opacity-0" : "max-h-14 opacity-100"
          }`}
        >
          <div className="border-t border-hairline">
            <Container>
              <nav
                aria-label="Primary"
                className="hidden h-11 items-center justify-center gap-7 font-nav text-[11px] tracking-[2.2px] text-ink uppercase lg:flex"
              >
                {NAV_LINKS.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative py-2 hover:text-heading ${active ? "text-heading" : "text-ink"
                        }`}
                    >
                      {link.label}
                      {active ? (
                        <span className="absolute inset-x-0 bottom-0 h-px bg-ink" />
                      ) : null}
                    </Link>
                  );
                })}
              </nav>

              <nav
                aria-label="Primary"
                className={`h-10 items-center gap-5 overflow-x-auto no-scrollbar font-nav text-[11px] tracking-[1.8px] text-ink uppercase lg:hidden ${open ? "hidden" : "flex"
                  }`}
              >
                {NAV_LINKS.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`shrink-0 py-2 ${active ? "text-heading" : "text-muted"
                        }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </Container>
          </div>
        </div>
      </div>

      {searchOpen ? (
        <form
          className="border-t border-hairline bg-paper py-3"
          action="/news"
          method="get"
        >
          <Container>
            <label className="sr-only" htmlFor="site-search">
              Search Angelopedia
            </label>
            <input
              id="site-search"
              autoFocus
              type="search"
              name="q"
              placeholder="Search..."
              className="h-10 w-full border border-hairline px-3 font-sans text-sm text-ink outline-none placeholder:text-muted focus:border-ink"
            />
          </Container>
        </form>
      ) : null}

      {open ? (
        <nav
          id="site-menu"
          aria-label="All sections"
          className="border-t border-hairline bg-paper"
        >
          <Container className="py-8 lg:py-10">
            <ul className="grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
              {NAV_LINKS.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`font-heading text-[22px] font-medium tracking-[0.04em] uppercase transition-colors hover:text-heading lg:text-[26px] ${active ? "text-heading" : "text-ink"
                        }`}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/#newsletter"
              className="mt-8 inline-flex font-nav text-[11px] tracking-[1.8px] text-ink uppercase hover:text-heading"
              onClick={() => setOpen(false)}
            >
              Subscribe to the newsletter
            </Link>
          </Container>
        </nav>
      ) : null}
    </header>
    </>
  );
}
