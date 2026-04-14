"use client";

import Link from "next/link";
import { useState } from "react";

type FruitKey = "apples" | "grapes" | "oranges";

type FruitOption = {
  label: string;
  resultTitle: string;
  resultText: string;
};

const options: Record<FruitKey, FruitOption> = {
  apples: {
    label: "Apples",
    resultTitle: "Common and reliable.",
    resultText: "A practical choice for an ordinary stall.",
  },
  grapes: {
    label: "Grapes",
    resultTitle: "Widely consumed and used for wine.",
    resultText: "Familiar, useful, and easy to recognize in the city.",
  },
  oranges: {
    label: "Oranges",
    resultTitle: "Not available in this time period.",
    resultText: "They do not belong to this market.",
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

export default function RomanFruitPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<FruitKey | null>(null);

  const currentOption = selected ? options[selected] : null;

  const handleSelect = (key: FruitKey) => {
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
          <span>Scenario 01</span>
        </div>

        {step === 0 && (
          <Card title="You are a fruit vendor in Rome Empire">
            <p>A large ancient city.</p>
            <p>Crowded streets.</p>
            <p>Food supply is unstable.</p>
            <p className="mt-4">You run a small fruit stall.</p>
            <div className="mt-8">
              <Button onClick={() => setStep(1)}>Begin</Button>
            </div>
          </Card>
        )}

        {step === 1 && (
          <Card title="What do you sell?">
            <div className="mt-2 grid gap-3">
              {(Object.entries(options) as Array<[FruitKey, FruitOption]>).map(
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
