import Link from "next/link";

export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[74vh] w-full max-w-6xl items-center px-6 py-20 sm:px-8 lg:px-12">
      <div className="max-w-4xl">
        <div className="inline-flex items-center rounded-full bg-white/70 px-4 py-2 text-sm text-[var(--muted)] shadow-sm ring-1 ring-[var(--line)] backdrop-blur">
          Evo-History
        </div>
        <h1 className="mt-8 max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          Evo-History
        </h1>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-[var(--foreground)]/92 sm:text-2xl">
          How Evolution Shapes Behavior — and Behavior Shapes History
        </p>
        <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          A project exploring how people make decisions under different
          environments.
        </p>
        <div className="mt-10">
          <Link
            href="#explore"
            className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
          >
            Enter
          </Link>
        </div>
      </div>
    </section>
  );
}
