import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Angelopedia handles reader data.",
};

export default function PrivacyPage() {
  return (
    <main>
      <PageHero
        kicker="Angelopedia"
        title="Privacy"
        dek="How we handle the information you share with the newsroom and The Crown Letter."
      />
      <Container className="max-w-[720px] pb-20">
        <div className="article-body">
          <p>
            We collect only what we need to send The Crown Letter, run the prediction
            game, and keep the site working. We do not sell reader lists.
          </p>
          <p>
            Newsletter addresses can be removed at any time from the unsubscribe link in
            each Sunday email. Poll votes are stored anonymously.
          </p>
        </div>
      </Container>
    </main>
  );
}
