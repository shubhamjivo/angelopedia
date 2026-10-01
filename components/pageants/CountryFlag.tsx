import Image from "next/image";

const CODE: Record<string, string> = {
  argentina: "ar",
  belgium: "be",
  bolivia: "bo",
  cambodia: "kh",
  canada: "ca",
  "cayman islands": "ky",
  china: "cn",
  colombia: "co",
  "costa rica": "cr",
  "cote d'ivoire": "ci",
  "czech republic": "cz",
  "dominican republic": "do",
  ecuador: "ec",
  france: "fr",
  ghana: "gh",
  guadeloupe: "gp",
  guatemala: "gt",
  india: "in",
  indonesia: "id",
  jamaica: "jm",
  japan: "jp",
  laos: "la",
  luxembourg: "lu",
  madagascar: "mg",
  malta: "mt",
  mauritius: "mu",
  mexico: "mx",
  montenegro: "me",
  nepal: "np",
  nicaragua: "ni",
  "northern ireland": "gb-nir",
  panama: "pa",
  philippines: "ph",
  poland: "pl",
  "puerto rico": "pr",
  somalia: "so",
  "south africa": "za",
  spain: "es",
  "united states": "us",
  "united states of america": "us",
  usa: "us",
  venezuela: "ve",
  vietnam: "vn",
};

function countryKey(name: string) {
  return name
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[\u2019']/g, "'");
}

export function countryCode(name: string) {
  return CODE[countryKey(name)] ?? null;
}

export function CountryFlag({
  country,
  className = "h-3.5 w-5",
}: {
  country: string;
  className?: string;
}) {
  const code = countryCode(country);
  if (!code) return null;
  return (
    <Image
      src={`/flags/${code}.svg`}
      alt=""
      aria-hidden
      width={20}
      height={14}
      unoptimized
      className={`${className} shrink-0 rounded-none border border-black/10 object-cover`}
    />
  );
}

export function CountryLine({ text, className }: { text: string; className: string }) {
  const country = text.split("·")[0]?.trim() || text;
  return (
    <p className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 ${className}`}>
      <CountryFlag country={country} />
      <span>{text}</span>
    </p>
  );
}
