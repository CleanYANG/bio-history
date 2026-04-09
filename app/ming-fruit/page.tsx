"use client";

import Link from "next/link";
import { useState } from "react";

type FruitKey = "apple" | "banana" | "pineapple" | "tomato";

type FruitOption = {
  emoji: string;
  label: string;
  resultTitle: string;
  resultText: string;
  explanation: Array<{
    label: string;
    value: string;
  }>;
};

const options: Record<FruitKey, FruitOption> = {
  apple: {
    emoji: "🍎",
    label: "苹果",
    resultTitle: "稳定选择",
    resultText:
      "苹果在中国已有种植基础，供应相对稳定，适合长期经营。",
    explanation: [
      {
        label: "来源",
        value: "苹果在欧亚大陆传播已久，中国本土较早就有种植基础。",
      },
      {
        label: "传播",
        value: "它不依赖跨洋贸易，更容易进入本地市场与日常买卖。",
      },
      {
        label: "限制",
        value: "真正影响你的，主要是季节变化、产地距离和保存条件。",
      },
    ],
  },
  banana: {
    emoji: "🍌",
    label: "香蕉",
    resultTitle: "区域性可行",
    resultText:
      "香蕉在南方地区可以获得，但运输和保存存在一定限制。",
    explanation: [
      {
        label: "来源",
        value: "香蕉适合温热地区生长，在南方更容易见到和获得。",
      },
      {
        label: "传播",
        value: "它并非全新外来水果，但供应依赖地区之间的流通能力。",
      },
      {
        label: "限制",
        value: "香蕉成熟快、不耐放，远距离运输对普通摊贩并不轻松。",
      },
    ],
  },
  pineapple: {
    emoji: "🍍",
    label: "菠萝",
    resultTitle: "风险很高",
    resultText:
      "菠萝原产南美，依赖远洋贸易传播，在明朝早期并不常见。",
    explanation: [
      {
        label: "来源",
        value: "菠萝起源于南美洲，不属于中国传统常见果品。",
      },
      {
        label: "传播",
        value: "它要借助大航海之后的跨洋贸易，才可能进入亚洲。",
      },
      {
        label: "限制",
        value: "对普通水果摊贩来说，很难稳定进货，更难长期经营。",
      },
    ],
  },
  tomato: {
    emoji: "🍅",
    label: "番茄",
    resultTitle: "尚未普及",
    resultText: "番茄也是来自美洲，在当时尚未进入日常饮食体系。",
    explanation: [
      {
        label: "来源",
        value: "番茄原产美洲，并不是本地长期种植的常见作物。",
      },
      {
        label: "传播",
        value: "即使传入亚洲，也需要时间才会被更多人认识和接受。",
      },
      {
        label: "限制",
        value: "它还没成为普通百姓熟悉的食物，市场需求并不稳定。",
      },
    ],
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
    <section className="w-full rounded-[2rem] border border-[var(--line)] bg-white px-6 py-8 shadow-[0_24px_70px_rgba(17,17,17,0.08)] sm:px-8 sm:py-10">
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
      : "border border-[var(--line)] bg-white text-[var(--foreground)] hover:border-[var(--accent-strong)] hover:bg-[var(--accent)]/50";

  return (
    <button {...props} className={`${baseClassName} ${variantClassName}`}>
      {children}
    </button>
  );
}

export default function MingFruitPage() {
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
            返回首页
          </Link>
          <span>互动场景 01</span>
        </div>

        {step === 0 && (
          <Card title="你是明朝南京的水果摊贩">
            <p>
              你在明朝南京摆摊卖水果。你希望生意更好，但并不是所有水果在那个时代都容易获得。
              你的选择，取决于植物来源、贸易和种植条件。
            </p>
            <div className="mt-8">
              <Button onClick={() => setStep(1)}>开始</Button>
            </div>
          </Card>
        )}

        {step === 1 && (
          <Card title="你会选择卖哪种水果？">
            <div className="mt-2 grid gap-3">
              {(Object.entries(options) as Array<[FruitKey, FruitOption]>).map(
                ([key, option]) => (
                  <button
                    key={key}
                    onClick={() => handleSelect(key)}
                    className="flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] px-5 py-4 text-left transition hover:-translate-y-0.5 hover:border-[var(--accent-strong)] hover:bg-[var(--accent)]/45 hover:shadow-[0_18px_40px_rgba(17,17,17,0.08)]"
                  >
                    <span className="text-2xl leading-none" aria-hidden="true">
                      {option.emoji}
                    </span>
                    <span className="text-lg font-medium">{option.label}</span>
                  </button>
                ),
              )}
            </div>
          </Card>
        )}

        {step === 2 && currentOption && (
          <Card title={currentOption.resultTitle}>
            <p>{currentOption.resultText}</p>
            <div className="mt-8">
              <Button onClick={() => setStep(3)}>为什么？</Button>
            </div>
          </Card>
        )}

        {step === 3 && currentOption && (
          <Card title={`${currentOption.label}背后的原因`}>
            <div className="space-y-4">
              {currentOption.explanation.map((item) => (
                <div key={item.label}>
                  <p className="text-sm font-medium tracking-[0.14em] text-[var(--accent-strong)] uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button onClick={() => setStep(4)}>继续</Button>
            </div>
          </Card>
        )}

        {step === 4 && (
          <Card title="你看到的，不只是水果">
            <p>
              一个水果能否出现在你的摊位上，
              <br />
              并不只是味道问题，
              <br />
              而是取决于它如何在世界中传播。
            </p>
            <div className="mt-8">
              <Button onClick={() => setStep(5)}>我明白了</Button>
            </div>
          </Card>
        )}

        {step === 5 && (
          <Card title="这就是摊位背后的世界">
            <p>
              你刚刚做的不是一个简单的进货决定。一个普通水果能不能卖，背后连着产地、航路、气候和人们的接受程度。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={resetFlow}>再试一次</Button>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-white px-6 py-3 text-base font-medium transition hover:-translate-y-0.5 hover:border-[var(--accent-strong)] hover:bg-[var(--accent)]/50"
              >
                返回首页
              </Link>
            </div>
          </Card>
        )}
      </div>
    </main>
  );
}
