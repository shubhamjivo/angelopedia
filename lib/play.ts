import data from "./play.json";

export type PredictionGame = { name: string; predict: string; year: string; image?: string };
export type PredictionContestant = { country: string; name: string };
export type OpenGame = PredictionGame & { slug: string; picks: number; contestants: PredictionContestant[] };
export type PollOption = { label: string; percent: number; votes?: number };
export type ArchivePoll = { question: string; image: string; options: PollOption[] };

/** Filed from angelopedia.com/Prediction-Game-for-Beauty-Pageants and /Polls. */
export const PREDICTION_GAMES = data.games as PredictionGame[];
export const OPEN_GAMES = data.open as OpenGame[];
export const ARCHIVE_POLLS = data.polls as ArchivePoll[];

export const PREDICTION_YEARS = [...new Set(PREDICTION_GAMES.map((game) => game.year).filter(Boolean))].sort(
  (a, b) => Number(b) - Number(a),
);

export function predictionPath(slug: string) {
  return `/Prediction-Game/${slug}`;
}

export function getOpenGame(slug: string) {
  return OPEN_GAMES.find((game) => game.slug.toLowerCase() === decodeURIComponent(slug).toLowerCase());
}
