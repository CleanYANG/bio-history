import Link from "next/link";
import { scenarioCards } from "@/lib/content";

export function ExploreSection() {
  return (
    <section
      id="explore"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-strong)]">
          Explore
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Start exploring
        </h2>
        <div className="mt-4 space-y-1 text-base leading-8 text-[var(--muted)] sm:text-lg">
          <p>Different environments.</p>
          <p>Different pressures.</p>
          <p>Different choices.</p>
          <p>Different histories.</p>
        </div>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {scenarioCards.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group rounded-[2rem] bg-[var(--surface)] p-6 shadow-[var(--shadow)] ring-1 ring-[var(--line)] backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(17,17,17,0.08)]"
          >
            <div className="flex items-center justify-between text-sm text-[var(--muted)]">
              <span>{card.index}</span>
              <span>{card.status}</span>
            </div>
            <h3 className="mt-12 text-2xl font-medium tracking-tight text-[var(--foreground)]">
              {card.title}
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--muted)]">
              {card.description}
            </p>
            <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-strong)]">
              Enter
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
