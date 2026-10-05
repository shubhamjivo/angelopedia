import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryDesk } from "@/components/pageants/CountryDesk";
import { getCountry } from "@/lib/pageants/continents";

type CountryProps = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata({ params }: CountryProps): Promise<Metadata> {
  const { country: segment } = await params;
  const match = getCountry(segment);
  if (!match) return { title: "Country Pageants" };
  return {
    title: `Pageants in ${match.country.name}`,
    description: `National beauty pageants, titleholders and news from ${match.country.name}.`,
  };
}

export default async function CountryPage({ params }: CountryProps) {
  const { country: segment } = await params;
  const match = getCountry(segment);
  if (!match) notFound();
  return <CountryDesk continent={match.continent} country={match.country} />;
}
