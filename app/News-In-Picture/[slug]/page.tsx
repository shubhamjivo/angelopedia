import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PictureFeed } from "@/components/pictures/PictureFeed";
import { NEWS_IN_PICTURES, getPicture } from "@/lib/pictures";

type AlbumProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return NEWS_IN_PICTURES.map((album) => ({ slug: album.slug }));
}

export async function generateMetadata({ params }: AlbumProps): Promise<Metadata> {
  const { slug } = await params;
  const album = getPicture(slug);
  if (!album) return { title: "News In Pictures" };
  return { title: album.title, description: album.dek };
}

export default async function PictureAlbumPage({ params }: AlbumProps) {
  const { slug } = await params;
  if (!getPicture(slug)) notFound();

  return (
    <main>
      <PictureFeed albums={NEWS_IN_PICTURES} startSlug={slug} />
    </main>
  );
}
