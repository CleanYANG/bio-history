"use client";

import Link from "next/link";
import { useState } from "react";

type DrinkKey = "beer" | "coffee" | "tea";

type DrinkOption = {
  label: string;
  resultTitle: string;
  resultText: string;
};

const options: Record<DrinkKey, DrinkOption> = {
  beer: {
    label: "Beer",
    resultTitle: "Known in parts of the Roman world, though less central than wine.",
    resultText: "Present, but not the center of the table.",
  },
  coffee: {
    label: "Coffee",
    resultTitle: "Not yet known in this time period.",
    resultText: "It belongs to a later world.",
  },
  tea: {
    label: "Tea",
    resultTitle: "Not part of daily life in this world.",
    resultText: "It does not belong to the ordinary rhythm here.",
  },
};

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="w-full rounded-[2rem] bg-[var(--surface)] px-6 py-8 shadow-[var(--shadow)] ring-1 ring-[var(--line)] backdrop-blur-sm sm:px-8 sm:py-10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h1>
      <div className="mt-5 text-base leading-8 text-[var(--muted)] sm:text-lg">
        {children}
      </div>
    </section>
  );
}

function Button({
  children,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
}) {
  const baseClassName =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-base font-medium transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60";
  const variantClassName =
    variant === "primary"
      ? "bg-black text-white hover:bg-[var(--accent-strong)]"
      : "bg-white text-[var(--foreground)] ring-1 ring-[var(--line)] hover:bg-[var(--accent)]/50 hover:ring-[var(--accent-strong)]";

  return (
    <button {...props} className={`${baseClassName} ${variantClassName}`}>
      {children}
    </button>
  );
}

export default function RomanDrinkPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<DrinkKey | null>(null);

  const currentOption = selected ? options[selected] : null;

  const handleSelect = (key: DrinkKey) => {
    setSelected(key);
    setStep(2);
  };

  const resetFlow = () => {
    setSelected(null);
    setStep(0);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-8 text-[var(--foreground)] sm:px-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-2xl flex-col justify-center">
        <div className="mb-6 flex items-center justify-between text-sm text-[var(--muted)]">
          <Link href="/" className="transition hover:text-[var(--accent-strong)]">
            Back
          </Link>
          <span>Scenario 02</span>
        </div>

        {step === 0 && (
          <Card title="What would you drink in Rome Empire">
            <p>A warm, quiet afternoon.</p>
            <p>You sit down to rest.</p>
            <p className="mt-4">What do you want to drink?</p>
            <div className="mt-8">
              <Button onClick={() => setStep(1)}>Begin</Button>
            </div>
          </Card>
        )}

        {step === 1 && (
          <Card title="What do you want to drink?">
            <div className="mt-2 grid gap-3">
              {(Object.entries(options) as Array<[DrinkKey, DrinkOption]>).map(
                ([key, option]) => (
                  <button
                    key={key}
                    onClick={() => handleSelect(key)}
                    className="rounded-2xl bg-white px-5 py-4 text-left text-lg font-medium shadow-[var(--shadow)] ring-1 ring-[var(--line)] transition hover:-translate-y-0.5 hover:bg-[var(--accent)]/45 hover:ring-[var(--accent-strong)]"
                  >
                    {option.label}
                  </button>
                ),
              )}
            </div>
          </Card>
        )}

        {step === 2 && currentOption && (
          <Card title={currentOption.resultTitle}>
            <p>{currentOption.resultText}</p>
            <p className="mt-4">What feels familiar today did not always exist.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={resetFlow}>Try again</Button>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-base font-medium transition hover:-translate-y-0.5 hover:bg-[var(--accent)]/50 ring-1 ring-[var(--line)] hover:ring-[var(--accent-strong)]"
              >
                Back home
              </Link>
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}
