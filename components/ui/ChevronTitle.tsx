import Link from "next/link";

export function ChevronTitle({
  href,
  label,
  tone = "dark",
}: {
  href: string;
  label: string;
  tone?: "dark" | "light";
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex w-fit items-center gap-1.5 font-nav text-[18px] font-semibold leading-none sm:text-[20px] ${
        tone === "light" ? "text-white hover:text-neutral-200" : "text-heading hover:text-accent"
      }`}
    >
      {label}
      <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" className="shrink-0">
        <path
          d="M6 3.2 11.2 8 6 12.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
