import Image from "next/image";

const CODE: Record<string, string> = {
  albania: "al",
  angola: "ao",
  argentina: "ar",
  armenia: "am",
  aruba: "aw",
  australia: "au",
  austria: "at",
  bangladesh: "bd",
  barbados: "bb",
  belarus: "by",
  belgium: "be",
  bermuda: "bm",
  bolivia: "bo",
  "bosnia and herzegovina": "ba",
  brazil: "br",
  "british virgin islands": "vg",
  bulgaria: "bg",
  cambodia: "kh",
  canada: "ca",
  "cayman islands": "ky",
  chile: "cl",
  china: "cn",
  colombia: "co",
  "costa rica": "cr",
  "cote d'ivoire": "ci",
  croatia: "hr",
  cuba: "cu",
  curacao: "cw",
  "czech republic": "cz",
  denmark: "dk",
  "dominican republic": "do",
  ecuador: "ec",
  egypt: "eg",
  "el salvador": "sv",
  england: "gb-eng",
  fiji: "fj",
  finland: "fi",
  france: "fr",
  gabon: "ga",
  georgia: "ge",
  germany: "de",
  ghana: "gh",
  gibraltar: "gi",
  "great britain": "gb",
  greece: "gr",
  guadeloupe: "gp",
  guam: "gu",
  guatemala: "gt",
  guyana: "gy",
  haiti: "ht",
  honduras: "hn",
  "hong kong": "hk",
  hungary: "hu",
  iceland: "is",
  india: "in",
  indonesia: "id",
  ireland: "ie",
  israel: "il",
  italy: "it",
  jamaica: "jm",
  japan: "jp",
  kazakhstan: "kz",
  kenya: "ke",
  kosovo: "xk",
  kyrgyzstan: "kg",
  laos: "la",
  latvia: "lv",
  lebanon: "lb",
  lithuania: "lt",
  luxembourg: "lu",
  macau: "mo",
  madagascar: "mg",
  malaysia: "my",
  malta: "mt",
  martinique: "mq",
  mauritius: "mu",
  mexico: "mx",
  montenegro: "me",
  morocco: "ma",
  myanmar: "mm",
  namibia: "na",
  nepal: "np",
  netherlands: "nl",
  "new zealand": "nz",
  nicaragua: "ni",
  nigeria: "ng",
  "north macedonia": "mk",
  "northern ireland": "gb-nir",
  norway: "no",
  palestine: "ps",
  panama: "pa",
  paraguay: "py",
  peru: "pe",
  philippines: "ph",
  poland: "pl",
  portugal: "pt",
  "puerto rico": "pr",
  "reunion island": "re",
  romania: "ro",
  russia: "ru",
  "saint lucia": "lc",
  scotland: "gb-sct",
  serbia: "rs",
  singapore: "sg",
  slovakia: "sk",
  slovenia: "si",
  somalia: "so",
  "south africa": "za",
  "south korea": "kr",
  spain: "es",
  "sri lanka": "lk",
  sweden: "se",
  switzerland: "ch",
  taiwan: "tw",
  tanzania: "tz",
  thailand: "th",
  "trinidad and tobago": "tt",
  tunisia: "tn",
  turkey: "tr",
  uganda: "ug",
  ukraine: "ua",
  "united kingdom": "gb",
  "united states": "us",
  "united states of america": "us",
  "united states virgin islands": "vi",
  uruguay: "uy",
  usa: "us",
  venezuela: "ve",
  vietnam: "vn",
  zambia: "zm",
  zimbabwe: "zw",
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
