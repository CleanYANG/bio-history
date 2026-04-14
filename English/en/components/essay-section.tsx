type EssaySectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  body: string[];
};

export function EssaySection({
  id,
  eyebrow,
  title,
  body,
}: EssaySectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--accent-strong)]">
            {eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        <div className="max-w-2xl space-y-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
