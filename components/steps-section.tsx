import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/lib/content";

const icons = [
  <path
    key="step-1"
    d="M6.75 18.75 3.75 21.75 21.75 3.75 18.75 6.75M8.25 5.25h8.5a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-8.5a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2Z"
  />,
  <path
    key="step-2"
    d="M12 3.75v16.5m-5.25-9 5.25-5.25 5.25 5.25m-5.25 9 5.25-5.25-5.25-5.25-5.25 5.25 5.25 5.25Z"
  />,
  <path
    key="step-3"
    d="M4.5 12.75 9 17.25 19.5 6.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
  />,
] as const;

export function StepsSection() {
  return (
    <section
      id="how-it-works"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
    >
      <SectionHeading
        eyebrow="玩法"
        title="一次选择，看到表面之下的逻辑"
        description="不是被动阅读，而是在场景中做决定。步骤很轻，但结果会把你带到更深的解释里。"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.title}
            className="rounded-3xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-[var(--shadow)] backdrop-blur-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent)] text-[var(--accent-strong)]">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                className="h-6 w-6"
              >
                {icons[index]}
              </svg>
            </div>
            <p className="mt-6 text-sm text-[var(--muted)]">步骤 {index + 1}</p>
            <h3 className="mt-2 text-xl font-medium">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
