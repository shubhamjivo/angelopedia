import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PlayNav } from "@/components/play/PlayNav";
import { PredictionBallot } from "@/components/play/PredictionBallot";
import { PageHero } from "@/components/ui/PageHero";
import { OPEN_GAMES, getOpenGame } from "@/lib/play";

type GameProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return OPEN_GAMES.map((game) => ({ slug: game.slug }));
}

export async function generateMetadata({ params }: GameProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getOpenGame(slug);
  if (!game) return { title: "Prediction Game" };
  return {
    title: `Prediction Game for ${game.name}`,
    description: `Predict the ${game.predict} of ${game.name}.`,
  };
}

export default async function PredictionGameDetailPage({ params }: GameProps) {
  const { slug } = await params;
  const game = getOpenGame(slug);
  if (!game) notFound();

  return (
    <main>
      <PageHero
        kicker="Prediction Game"
        title={game.name}
        dek={`Predict the ${game.predict}. Choose ${game.picks} of the ${game.contestants.length} delegates, in the order you think they will finish.`}
      />

      <PlayNav current="/Prediction-Game-for-Beauty-Pageants" />

      <PredictionBallot slug={game.slug} name={game.name} picks={game.picks} contestants={game.contestants} />
    </main>
  );
}
