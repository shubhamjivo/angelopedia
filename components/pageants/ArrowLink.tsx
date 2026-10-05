import Link from "next/link";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className={`shrink-0 ${className}`}>
      <path
        d="M2.5 8h10M8.6 3.8 12.8 8l-4.2 4.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowLink({ href, label, className = "" }: { href: string; label: string; className?: string }) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-nav text-[11px] tracking-[1.6px] text-muted uppercase hover:text-ink ${className}`}
    >
      {label}
      <Arrow className="transition-transform group-hover:translate-x-0.5" />
    </Link>
  );
}
