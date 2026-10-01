import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { NewsDesk, sectionLabel } from "@/components/news/NewsDesk";
import { StoryArticle } from "@/components/news/StoryArticle";
import { getStory, isNewsDeskSection, listStories, newsDeskPath, type StorySection } from "@/lib/stories";

type NewsProps = {
  params: Promise<{ section?: string[] }>;
  searchParams: Promise<{ section?: string; q?: string }>;
};

export function generateStaticParams() {
  const desks = ["opinions", "beauty-talks", "featured", "specials", "in-pictures"].map((section) => ({
    section: [section],
  }));
  const stories = listStories().map((story) => ({ section: [story.slug] }));
  return [...desks, ...stories];
}

export async function generateMetadata({ params, searchParams }: NewsProps): Promise<Metadata> {
  const { section } = await params;
  const { q } = await searchParams;
  const segment = section?.[0];
  const story = segment ? getStory(segment) : undefined;
  if (story) return { title: story.title, description: story.dek };
  const active = segment && isNewsDeskSection(segment) ? segment : undefined;
  const title = q?.trim() ? `Search: ${q.trim()}` : sectionLabel(active);
  return {
    title,
    description: "Crowns, contests and the people who carry them — reported daily from 195 nations.",
  };
}

export default async function NewsPage({ params, searchParams }: NewsProps) {
  const { section } = await params;
  if (section && section.length > 1) notFound();

  const segment = section?.[0];
  const { section: legacy, q } = await searchParams;
  const query = q?.trim() ?? "";

  if (!segment && legacy && isNewsDeskSection(legacy)) {
    const path = newsDeskPath(legacy);
    redirect(query ? `${path}?q=${encodeURIComponent(query)}` : path);
  }

  if (segment && isNewsDeskSection(segment)) {
    return <NewsDesk section={segment as StorySection} query={query} />;
  }

  if (segment) {
    const story = getStory(segment);
    if (!story) notFound();
    return <StoryArticle story={story} />;
  }

  return <NewsDesk query={query} />;
}
