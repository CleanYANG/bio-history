import { HomeBranchesSection } from "@/components/home-branches-section";
import { HomepageFooter } from "@/components/homepage-footer";
import { HomepageHero } from "@/components/homepage-hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <HomepageHero />
      <HomeBranchesSection />
      <HomepageFooter />
    </main>
  );
}
