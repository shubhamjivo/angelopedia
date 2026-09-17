import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: SITE_DESCRIPTION,
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        kicker="Angelopedia"
        title="About Us"
        dek={SITE_DESCRIPTION}
      />
      <Container className="max-w-[720px] py-8 pb-20">
        <div className="article-body">
          <p>
            Angelopedia has covered the fascinating world of beauty pageants since 2011 —
            news, profiles, photographs and history from 195 nations. We report the
            crowns, the campaigns and the people who carry them.
          </p>
          <p>
            From Miss Universe to the smallest national final, the newsroom treats
            pageantry as culture: fashion, sport, advocacy and live television, written
            with the same care we ask of a titleholder on the last question.
          </p>
        </div>
      </Container>
    </main>
  );
}
