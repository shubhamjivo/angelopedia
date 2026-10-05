import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { NewsDesk, sectionLabel } from "@/components/news/NewsDesk";
import { StoryArticle } from "@/components/news/StoryArticle";
import { getStory, isNewsDeskSection, listStories, newsDeskPath, type StorySection } from "@/lib/stories";

type NewsProps = {
  params: Promise<{ section?: string[] }>;
  searchParams: Promise<{ section?: string; q?: string; page?: string }>;
};

function storySlug(segments: string[]) {
  return segments
    .map((segment) => {
      try {
        return decodeURIComponent(segment);
      } catch {
        return segment;
      }
    })
    .join("/");
}

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
  const story = section ? getStory(storySlug(section)) : undefined;
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
  // Desk stories keep the live `/news/Title/id` shape, so a story may span two segments.
  if (section && section.length > 2) notFound();
  if (section && section.length === 2) {
    const story = getStory(storySlug(section));
    if (!story) notFound();
    return <StoryArticle story={story} />;
  }

  const segment = section?.[0];
  const { section: legacy, q, page } = await searchParams;
  const query = q?.trim() ?? "";

  if (!segment && legacy && isNewsDeskSection(legacy)) {
    const path = newsDeskPath(legacy);
    redirect(query ? `${path}?q=${encodeURIComponent(query)}` : path);
  }

  if (segment && isNewsDeskSection(segment)) {
    return <NewsDesk section={segment as StorySection} query={query} page={Number(page) || 1} />;
  }

  if (segment) {
    const story = getStory(segment);
    if (!story) notFound();
    return <StoryArticle story={story} />;
  }

  return <NewsDesk query={query} />;
}
