"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { HEADER_SOCIAL } from "@/lib/content";
import { NAV_LINKS, NAV_SUBMENUS } from "@/lib/site";
import { Container } from "@/components/ui/Container";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  if (pathname === href || pathname.startsWith(`${href}/`)) return true;
  // A parent stays lit on submenu pages that live outside its own path.
  const submenu = NAV_SUBMENUS[href];
  if (!submenu) return false;
  const outside = [...submenu.links.map((child) => child.href), ...(submenu.also ?? [])];
  return outside.some((path) => !path.startsWith(`${href}/`) && (pathname === path || pathname.startsWith(`${path}/`)));
}

function SubMenu({ links, onNavigate }: { links: readonly { href: string; label: string }[]; onNavigate?: () => void }) {
  return (
    <div className="flex flex-col border border-hairline bg-paper py-2 shadow-[0_8px_24px_rgba(65,64,66,0.08)]">
      {links.map((child) => (
        <Link
          key={child.href}
          href={child.href}
          className="px-4 py-2.5 font-nav text-[11px] tracking-[1.4px] whitespace-nowrap text-ink uppercase hover:text-heading"
          onClick={onNavigate}
        >
          {child.label}
        </Link>
      ))}
    </div>
  );
}

function SocialIcon({ label }: { label: (typeof HEADER_SOCIAL)[number]["label"] }) {
  const common = {
    viewBox: "0 0 24 24",
    width: 14,
    height: 14,
    fill: "currentColor",
    "aria-hidden": true as const,
  };
  if (label === "Facebook") {
    return (
      <svg {...common}>
        <path d="M14.5 8.5V6.8c0-.5.3-.6.6-.6h1.4V4h-2.2C12 4 11.2 5.7 11.2 6.9V8.5H9.2V11h2v9h2.8v-9h2.1l.2-2.5h-2.3z" />
      </svg>
    );
  }
  if (label === "Twitter") {
    return (
      <svg {...common}>
        <path d="M14.7 4h2.4l-5.2 6 6.1 8h-4.8l-3.8-4.9L5.6 18H3.2l5.6-6.4L3 4h4.9l3.4 4.5L14.7 4zm-.8 12.6h1.3L6.2 5.3H4.8l9.1 11.3z" />
      </svg>
    );
  }
  if (label === "Pinterest") {
    return (
      <svg {...common}>
        <path d="M12 3C7.6 3 5 6.1 5 9.6c0 2.1 1.2 4.7 3.1 5.5.3.1.5 0 .6-.3l.2-.9c.1-.2 0-.3-.1-.5-.4-.5-.7-1.3-.7-2.1 0-2.7 2-5.1 5.2-5.1 2.8 0 4.4 1.7 4.4 4 0 3-1.3 5.5-3.3 5.5-1.1 0-1.9-.9-1.6-2l.6-2.4c.2-.8.6-1.6.6-2.2 0-.5-.3-.9-.8-.9-.7 0-1.2.7-1.2 1.6 0 .6.2 1 .2 1l-1.8 7.6c-.2.7-.1 1.6 0 2.2.1-.1 1.6-2.1 2.1-4 .2.4 1.1 1.2 2.3 1.2 3.5 0 5.9-3.2 5.9-7.4C19.7 6.1 16.6 3 12 3z" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3-6.2 3.3z" />
    </svg>
  );
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
    const header = headerRef.current;
    const chrome = chromeRef.current;
    if (!header || !chrome) return;
    document.documentElement.style.setProperty(
      "--header-h-top",
      `${Math.round(chrome.getBoundingClientRect().height)}px`,
    );
    const publish = () => {
      const zoom = Number(getComputedStyle(document.documentElement).zoom) || 1;
      const height = header.getBoundingClientRect().height / zoom;
      document.documentElement.style.setProperty("--header-offset", `${height}px`);
    };
    publish();
    const observer = new ResizeObserver(publish);
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <div
      aria-hidden
      className="pointer-events-none"
      style={{ height: "var(--header-h-top)" }}
    />
    <header
      ref={headerRef}
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
          <div className="border-b border-hairline">
            <Container className="flex h-8 items-center justify-between">
              <Link
                href="/#newsletter"
                className="font-nav text-[11px] tracking-[1.6px] text-muted uppercase hover:text-ink"
              >
                Newsletter
              </Link>
              <ul className="flex items-center gap-3">
                {HEADER_SOCIAL.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="flex size-5 items-center justify-center text-muted hover:text-ink"
                    >
                      <SocialIcon label={item.label} />
                    </a>
                  </li>
                ))}
              </ul>
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
            className="absolute left-1/2 z-10 -translate-x-1/2 outline-none"
          >
            <Image
              src="/icons/logo.svg"
              alt="Angelopedia"
              width={400}
              height={100}
              priority
              className={`block w-auto origin-center bg-transparent transition-[height] duration-300 ease-out ${compact ? "h-6 lg:h-8" : "h-9 lg:h-14"
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
          className={`transition-[max-height,opacity] duration-300 ease-out ${
            compact || open ? "max-h-0 overflow-hidden opacity-0" : "overflow-visible opacity-100"
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
                  const className = `relative py-2 hover:text-heading ${active ? "text-heading" : "text-ink"}`;
                  const submenu = NAV_SUBMENUS[link.href];
                  if (!submenu) {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={className}
                      >
                        {link.label}
                        {active ? <span className="absolute inset-x-0 bottom-0 h-px bg-ink" /> : null}
                      </Link>
                    );
                  }
                  return (
                    <div key={link.href} className="group relative">
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        aria-haspopup="true"
                        className={className}
                      >
                        {link.label}
                        {active ? <span className="absolute inset-x-0 bottom-0 h-px bg-ink" /> : null}
                      </Link>
                      <div className="invisible absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2 opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                        <SubMenu links={submenu.links} />
                      </div>
                    </div>
                  );
                })}
              </nav>

              <nav
                aria-label="Primary"
                className={`h-10 items-center gap-5 overflow-x-auto font-nav text-[11px] tracking-[1.8px] text-ink uppercase no-scrollbar lg:hidden ${open ? "hidden" : "flex"
                  }`}
              >
                {NAV_LINKS.map((link) => {
                  const active = isActive(pathname, link.href);
                  const submenu = NAV_SUBMENUS[link.href];
                  if (!submenu) {
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={`shrink-0 py-2 ${active ? "text-heading" : "text-ink"}`}
                      >
                        {link.label}
                      </Link>
                    );
                  }
                  return (
                    <details key={link.href} name="nav-submenu" className="relative shrink-0">
                      <summary
                        className={`flex cursor-pointer list-none items-center gap-1 py-2 whitespace-nowrap marker:content-none [&::-webkit-details-marker]:hidden ${
                          active ? "text-heading" : "text-ink"
                        }`}
                      >
                        {link.label}
                        <span aria-hidden className="font-nav text-[9px]">
                          ▾
                        </span>
                      </summary>
                      <div className="fixed inset-x-4 z-50 border border-hairline bg-paper py-2 shadow-[0_8px_24px_rgba(65,64,66,0.08)]" style={{ top: "var(--header-h-top)" }}>
                        {submenu.all ? (
                          <Link
                            href={link.href}
                            className="block px-4 py-2.5 font-nav text-[11px] tracking-[1.4px] text-ink uppercase hover:text-heading"
                          >
                            {submenu.all}
                          </Link>
                        ) : null}
                        {submenu.links.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 font-nav text-[11px] tracking-[1.4px] text-ink uppercase hover:text-heading"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
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
              className="h-10 w-full border border-hairline px-3 font-sans text-sm text-ink outline-none placeholder:text-neutral-500 focus:border-ink"
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
              {NAV_LINKS.flatMap<{ href: string; label: string }>((link) =>
                link.href === "/other-pageants" ? [...NAV_SUBMENUS[link.href].links] : [link],
              ).map((link) => {
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
