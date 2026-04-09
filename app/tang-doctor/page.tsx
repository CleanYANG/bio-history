"use client";

import Link from "next/link";
import { useState } from "react";

type ChoiceKey = "antibiotic" | "ephedra" | "hotWater" | "exercise";

type DoctorOption = {
  label: string;
  resultTitle: string;
  resultText: string;
  explanation: string[];
};

const options: Record<ChoiceKey, DoctorOption> = {
  antibiotic: {
    label: "抗生素",
    resultTitle: "不可能的选择",
    resultText:
      "抗生素并不存在于唐朝。即使它对某些细菌感染有效，也不属于那个时代的医疗工具。",
    explanation: [
      "抗生素是近现代医学产物。",
      "古代医生无法获得。",
      "医疗选择受限于时代。",
    ],
  },
  ephedra: {
    label: "麻黄汤",
    resultTitle: "符合时代的选择",
    resultText:
      "这是当时可能出现的一种处理方式。它可能缓解部分症状，但并不能真正控制所有感染。",
    explanation: [
      "属于当时医学体系。",
      "基于经验与症状判断。",
      "对病因理解有限。",
    ],
  },
  hotWater: {
    label: "多喝热水",
    resultTitle: "听起来很熟悉的建议",
    resultText:
      "让病人多喝热水可能会让人感觉舒服一些，但对持续发热和肌肉酸痛，并不能真正解决问题。",
    explanation: [
      "补水有帮助，但不针对病因。",
      "如果是感染，仅靠这种方式无法控制。",
    ],
  },
  exercise: {
    label: "去锻炼身体",
    resultTitle: "不合时宜的建议",
    resultText:
      "在身体虚弱、发热的情况下让病人活动，反而可能加重不适。病人多半不会感谢你。",
    explanation: [
      "发热说明身体正在应对问题。",
      "额外负担可能让情况更糟。",
      "并不符合当时常见处理方式。",
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
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-base font-medium text-white transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-60"
    >
      {children}
    </button>
  );
}

export default function TangDoctorPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<ChoiceKey | null>(null);

  const currentOption = selected ? options[selected] : null;

  const handleSelect = (key: ChoiceKey) => {
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
          <span>互动场景 02</span>
        </div>

        {step === 0 && (
          <Card title="你是唐朝的一名医生">
            <p>
              一位病人来到你的医馆。他发热、肌肉酸痛，看起来十分虚弱。你没有现代检查手段，只能依靠经验和当时能获得的处理方式。你会怎么做？
            </p>
            <div className="mt-8">
              <Button onClick={() => setStep(1)}>开始选择</Button>
            </div>
          </Card>
        )}

        {step === 1 && (
          <Card title="你会先采取什么处理方式？">
            <div className="mt-2 grid gap-3">
              {(Object.entries(options) as Array<[ChoiceKey, DoctorOption]>).map(
                ([key, option]) => (
                  <button
                    key={key}
                    onClick={() => handleSelect(key)}
                    className="rounded-2xl border border-[var(--line)] bg-[var(--card)] px-5 py-4 text-left text-lg font-medium transition hover:-translate-y-0.5 hover:border-[var(--accent-strong)] hover:bg-[var(--accent)]/45 hover:shadow-[0_18px_40px_rgba(17,17,17,0.08)]"
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
            <div className="mt-8">
              <Button onClick={() => setStep(3)}>为什么？</Button>
            </div>
          </Card>
        )}

        {step === 3 && currentOption && (
          <Card title="为什么会这样？">
            <div className="space-y-3">
              {currentOption.explanation.map((item) => (
                <p key={item} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-strong)]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
            <div className="mt-8">
              <Button onClick={() => setStep(4)}>继续</Button>
            </div>
          </Card>
        )}

        {step === 4 && (
          <Card title="时代会决定医生能做什么">
            <p>
              在古代，医生的选择不仅取决于症状，
              <br />
              也取决于那个时代真正存在什么。
            </p>
            <p className="mt-4">
              有些方法在今天看似简单，
              <br />
              但未必真正有效。
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
