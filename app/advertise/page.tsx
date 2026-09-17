import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Advertise",
  description: "Advertise with Angelopedia.",
};

export default function AdvertisePage() {
  return (
    <main>
      <PageHero
        kicker="Angelopedia"
        title="Advertise"
        dek="Reach readers who follow the crowns, the campaigns and the culture of pageantry."
      />
      <Container className="max-w-[720px] pb-20">
        <div className="article-body">
          <p>
            Sponsorships, branded galleries and The Crown Letter are available by
            enquiry. Write to the newsroom via the contact page with dates, markets and
            format.
          </p>
        </div>
      </Container>
    </main>
  );
}
