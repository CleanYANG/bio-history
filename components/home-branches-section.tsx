import { HomeBranchCard } from "@/components/home-branch-card";
import { homeBranches } from "@/lib/content";

export function HomeBranchesSection() {
  const [first, second, third] = homeBranches;

  return (
    <section id="branches" className="mx-auto w-full max-w-6xl px-6 py-8 sm:px-8 sm:py-12 lg:px-12">
      <div className="grid gap-5 lg:grid-cols-3 lg:items-start">
        <HomeBranchCard
          key={first.title}
          index={0}
          {...first}
          className="lg:min-h-[360px]"
        />
        <HomeBranchCard
          key={second.title}
          index={1}
          {...second}
          className="lg:min-h-[360px]"
        />
        <HomeBranchCard
          key={third.title}
          index={2}
          {...third}
          className="lg:min-h-[360px]"
        />
      </div>
    </section>
  );
}
