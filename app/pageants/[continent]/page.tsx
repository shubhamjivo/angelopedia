import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContinentDesk } from "@/components/pageants/ContinentDesk";
import { CONTINENTS, getContinent } from "@/lib/pageants/continents";

type ContinentProps = {
  params: Promise<{ continent: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return CONTINENTS.map((continent) => ({ continent: continent.slug }));
}

export async function generateMetadata({ params }: ContinentProps): Promise<Metadata> {
  const { continent: slug } = await params;
  const continent = getContinent(slug);
  if (!continent) return {};
  return {
    title: `Pageants in ${continent.name}`,
    description: `National beauty pageants, recent editions and news from ${continent.name}.`,
  };
}

export default async function ContinentPage({ params }: ContinentProps) {
  const { continent: slug } = await params;
  const continent = getContinent(slug);
  if (!continent) notFound();
  return <ContinentDesk continent={continent} />;
}
