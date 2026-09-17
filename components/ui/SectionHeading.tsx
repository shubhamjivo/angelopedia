import Link from "next/link";

type SectionHeadingProps = {
  title: string;
  href?: string;
  action?: string;
  rule?: boolean;
};

export function SectionHeading({
  title,
  href,
  action,
  rule = true,
}: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4">
      <h2 className="font-heading text-[28px] font-normal leading-none text-heading desk:text-[34px]">
        {title}
      </h2>
      {rule ? <div className="h-px min-w-0 flex-1 bg-hairline" /> : null}
      {action && href ? (
        <Link
          href={href}
          className="shrink-0 font-nav text-[11px] tracking-[1.2px] text-muted uppercase hover:text-ink"
        >
          {action}
        </Link>
      ) : null}
    </div>
  );
}
