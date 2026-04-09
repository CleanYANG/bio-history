"use client";

import Link from "next/link";
import { useState } from "react";

type SweetKey = "maltSugar" | "sugarFrost" | "chocolate" | "milkTea";

type SweetOption = {
  emoji: string;
  label: string;
  resultTitle: string;
  resultText: string;
  explanation: string[];
};

const options: Record<SweetKey, SweetOption> = {
  maltSugar: {
    emoji: "🍯",
    label: "饴糖",
    resultTitle: "很早的甜味选择",
    resultText:
      "这类甜味来源在中国很早就存在，属于比较传统的甜食体系。它不像今天的糖果那么精致，但已经足够让人感到“甜”。",
    explanation: [
      "属于古代就可能出现的甜味来源。",
      "更接近传统甜食。",
      "能满足人类对高能量食物的偏好。",
    ],
  },
  sugarFrost: {
    emoji: "❄️",
    label: "糖霜",
    resultTitle: "更精细的甜",
    resultText:
      "这是一种更高级、更精细的糖。到了明代，糖作为商品已经更常见，也更容易进入日常生活。",
    explanation: [
      "代表更成熟的制糖和流通。",
      "比传统粗甜味更精细。",
      "说明“甜”正在从稀少走向更可获得。",
    ],
  },
  chocolate: {
    emoji: "🍫",
    label: "巧克力",
    resultTitle: "时代还没到",
    resultText:
      "巧克力不可能出现在明朝街头。它依赖的是新航路后的全球物种交换，以及更晚近的食品加工体系。",
    explanation: [
      "巧克力来自可可体系，不属于明朝街头常见食物。",
      "它背后需要更复杂的全球贸易网络。",
      "属于明显的时代错位选择。",
    ],
  },
  milkTea: {
    emoji: "🧋",
    label: "奶茶",
    resultTitle: "太现代了",
    resultText:
      "这种选择暴露的不是你嘴馋，而是你已经带着现代人的饮食记忆回到了过去。",
    explanation: [
      "奶茶是非常现代的消费品。",
      "它依赖糖、乳制品、茶饮和现代商业组合。",
      "不属于明朝街头的小孩能买到的东西。",
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

export default function MingSweetsPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<SweetKey | null>(null);

  const currentOption = selected ? options[selected] : null;

  const handleSelect = (key: SweetKey) => {
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
          <span>互动场景 03</span>
        </div>

        {step === 0 && (
          <Card title="你是明朝街头的一个小孩">
            <p>
              你手里有一点零花钱，正站在热闹的街上。面前有几样甜食和零嘴。有些在那个时代可能买得到，有些却属于很久以后的世界。你会先选哪一种？
            </p>
            <div className="mt-8">
              <Button onClick={() => setStep(1)}>开始选择</Button>
            </div>
          </Card>
        )}

        {step === 1 && (
          <Card title="你会先买哪一种？">
            <div className="mt-2 grid gap-3">
              {(Object.entries(options) as Array<[SweetKey, SweetOption]>).map(
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
            <div className="mt-6 space-y-3">
              {currentOption.explanation.map((item) => (
                <p key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <div className="mt-8">
              <Button onClick={() => setStep(3)}>继续</Button>
            </div>
          </Card>
        )}

        {step === 3 && (
          <Card title="为什么甜味总是这么有吸引力？">
            <p>
              在食物稀缺的环境里，甜味通常意味着更高能量。对祖先来说，喜欢甜味更容易活下来。
            </p>
            <p className="mt-4">
              所以问题不是人类“突然变得爱吃糖”，而是我们的身体本来就更偏爱能快速提供能量的食物。
            </p>
            <p className="mt-4">
              古代的甜味通常更稀少、更难获得。但现代世界让糖变得便宜、稳定、随处可见，这就让原本有利的偏好，变成了容易失衡的系统。
            </p>

            <div className="mt-8 rounded-3xl bg-[var(--accent)]/45 px-5 py-5">
              <div className="flex flex-col items-center gap-2 text-center text-sm font-medium text-[var(--accent-strong)] sm:text-base">
                <span>甜味</span>
                <span>↓</span>
                <span>高能量</span>
                <span>↓</span>
                <span>生存优势</span>
                <span>↓</span>
                <span>现代大量供应</span>
                <span>↓</span>
                <span>更容易失衡</span>
              </div>
            </div>

            <div className="mt-8">
              <Button onClick={() => setStep(4)}>我懂了</Button>
            </div>
          </Card>
        )}

        {step === 4 && (
          <Card title="这不是意志力突然变差">
            <p>
              问题不是人类突然变得贪甜，而是一个为稀缺环境进化的身体，遇到了一个甜味越来越便宜、越来越容易获得的世界。
            </p>
            <p className="mt-4">
              古代的小孩会被甜味吸引，现代的小孩也一样。不同的是，今天的甜，比过去更容易得到。
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
