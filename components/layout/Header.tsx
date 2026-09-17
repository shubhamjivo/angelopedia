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
  const headerRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const raf = useRef(0);
  const ignoreUntil = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      raf.current = 0;
      const y = Math.max(0, window.scrollY);
      const delta = y - lastY.current;
      lastY.current = y;

      const top = y < 16;
      setAtTop(top);

      if (open || searchOpen || top) {
        setCompact(false);
        return;
      }

      if (performance.now() < ignoreUntil.current) return;

      if (delta > 6) {
        setCompact(true);
        ignoreUntil.current = performance.now() + 420;
      } else if (delta < -6) {
        setCompact(false);
        ignoreUntil.current = performance.now() + 420;
      }
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
  }, [open, searchOpen]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const sync = () => {
      document.documentElement.style.setProperty(
        "--header-h",
        `${Math.round(el.getBoundingClientRect().height)}px`,
      );
    };

    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(el);
    return () => observer.disconnect();
  }, [compact, atTop, open, searchOpen]);

  return (
    <header
      ref={headerRef}
      data-compact={compact ? "true" : "false"}
      data-at-top={atTop ? "true" : "false"}
      className={`sticky top-0 z-50 bg-paper text-ink transition-[box-shadow] duration-300 ease-out ${
        compact ? "shadow-[0_1px_0_0_rgba(65,64,66,0.12)]" : ""
      }`}
    >
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
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
        <form
          action="/news"
          method="get"
          className={`relative hidden w-[220px] lg:block ${
            compact ? "pointer-events-none opacity-0" : "opacity-100"
          } transition-opacity duration-300`}
        >
          <label className="sr-only" htmlFor="site-search-desktop">
            Search Angelopedia
          </label>
          <input
            id="site-search-desktop"
            type="search"
            name="q"
            placeholder="Search..."
            className="h-9 w-full border border-hairline bg-paper px-3 pr-9 font-sans text-[13px] text-ink outline-none placeholder:text-muted focus:border-ink"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute top-1/2 right-2.5 -translate-y-1/2 text-ink"
          >
            <SearchIcon />
          </button>
        </form>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-10 flex h-9 w-9 flex-col items-center justify-center gap-1.5 lg:hidden"
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
            className={`w-auto origin-center transition-[height,transform] duration-300 ease-out ${
              compact ? "h-6 lg:h-8" : "h-9 lg:h-14"
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
            className={`flex size-9 items-center justify-center text-ink ${
              compact ? "lg:flex" : "lg:hidden"
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
        className={`overflow-hidden transition-all duration-300 ease-out ${
          compact ? "max-h-0 opacity-0" : "max-h-14 opacity-100"
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
                      className={`relative py-2 hover:text-heading ${
                        active ? "text-heading" : "text-ink"
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
                className={`h-10 items-center gap-5 overflow-x-auto no-scrollbar font-nav text-[11px] tracking-[1.8px] text-ink uppercase lg:hidden ${
                  open ? "hidden" : "flex"
                }`}
              >
                {NAV_LINKS.map((link) => {
                  const active = isActive(pathname, link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`shrink-0 py-2 ${
                        active ? "text-heading" : "text-muted"
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
          aria-label="Mobile"
          className="border-t border-hairline bg-paper py-5 lg:hidden"
        >
          <Container className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-nav text-sm tracking-[1.6px] uppercase ${
                    active ? "text-heading" : "text-muted"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#newsletter"
              className="mt-2 font-nav text-sm tracking-[1.6px] text-ink uppercase"
              onClick={() => setOpen(false)}
            >
              Subscribe
            </Link>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
