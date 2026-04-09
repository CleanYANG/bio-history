import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { scenes } from "@/lib/content";

export function ScenesSection() {
  return (
    <section
      id="scenes"
      className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-12"
    >
      <SectionHeading
        eyebrow="场景"
        title="从具体问题进入，而不是从结论开始"
        description="每个入口都是一个可互动的知识场景。你先做选择，再看到为什么这件事会变成后来的样子。"
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {scenes.map((scene, index) => (
          <Link
            key={scene.title}
            href={scene.href}
            className="group rounded-3xl border border-[var(--line)] bg-white p-6 shadow-[var(--shadow)] transition duration-200 hover:-translate-y-1 hover:border-[rgba(45,107,87,0.22)] hover:shadow-[0_24px_70px_rgba(17,17,17,0.1)]"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-[var(--muted)]">场景 {index + 1}</span>
              <span className="rounded-full bg-[var(--accent)] px-3 py-1 text-xs text-[var(--accent-strong)]">
                即将开放
              </span>
            </div>
            <h3 className="mt-10 text-2xl font-medium tracking-tight">
              {scene.title}
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--muted)]">
              {scene.description}
            </p>
            <div className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[var(--accent-strong)]">
              进入场景
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
