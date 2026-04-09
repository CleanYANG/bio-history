import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[70vh] w-full max-w-6xl items-center px-6 py-20 sm:px-8 lg:px-12">
      <div className="max-w-4xl">
        <div className="inline-flex items-center rounded-full border border-[var(--line)] bg-white/75 px-4 py-2 text-sm text-[var(--muted)] shadow-sm backdrop-blur">
          不合时宜
        </div>
        <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-7xl">
          如果你活在那个时代，你会怎么选？
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
          用选择理解生物、行为和历史之间的关系。
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#scenes"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          >
            开始体验
          </Link>
          <Link
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white/85 px-6 py-3 text-base font-medium transition hover:-translate-y-0.5 hover:border-[var(--accent-strong)] hover:bg-[var(--accent)]/55"
          >
            了解玩法
          </Link>
        </div>
      </div>
    </section>
  );
}
