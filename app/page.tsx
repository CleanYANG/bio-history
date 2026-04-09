import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ScenesSection } from "@/components/scenes-section";
import { StepsSection } from "@/components/steps-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <HeroSection />
      <StepsSection />
      <ScenesSection />
      <Footer />
    </main>
  );
}
