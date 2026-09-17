type KickerProps = {
  children: string;
  className?: string;
  tone?: "accent" | "muted" | "gold" | "white";
};

export function Kicker({
  children,
  className = "",
  tone = "muted",
}: KickerProps) {
  const color =
    tone === "accent"
      ? "text-accent"
      : tone === "gold"
        ? "text-gold"
        : tone === "white"
          ? "text-white"
          : "text-muted";

  return (
    <p
      className={`font-nav text-[10px] font-medium tracking-[1.4px] uppercase ${color} ${className}`}
    >
      {children}
    </p>
  );
}
