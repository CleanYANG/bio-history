import { EssaySection } from "@/components/essay-section";
import { ExploreSection } from "@/components/explore-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <HeroSection />
      <EssaySection
        eyebrow="Premise"
        title="What shapes a decision?"
        body={[
          "Human behavior is not random.",
          "It is shaped by biological instincts, environmental constraints, and social structures.",
          "These forces shape individual choices — and over time, shape history itself.",
        ]}
      />
      <EssaySection
        id="how-it-works"
        eyebrow="Method"
        title="How it works"
        body={[
          "You enter a scenario.",
          "You make a simple choice.",
          "What you choose reveals what feels natural, familiar, or out of place in a given world.",
        ]}
      />
      <ExploreSection />
      <Footer />
    </main>
  );
}
