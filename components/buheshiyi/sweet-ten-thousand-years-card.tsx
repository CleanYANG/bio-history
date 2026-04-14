"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type StepId = 1 | 2;
type StepOneChoice = "talk" | "photo" | "scrape" | "cook";
type StepTwoChoice = "millet" | "wheat" | "sugar-milk" | "milk-tea";

type OptionButtonProps = {
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
};

type BranchStepCardProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

const stepOneOptions: Array<{ key: StepOneChoice; label: string }> = [
  { key: "talk", label: "A. 跟你说话" },
  { key: "photo", label: "B. 拍照存档" },
  { key: "scrape", label: "C. 刮一点牙结石下来" },
  { key: "cook", label: "D. 炖了！" },
];

const stepOneFeedback: Record<StepOneChoice, string> = {
  talk: "选A:哈哈哈做梦呢",
  photo: "选B：有可能",
  scrape: "选C：检测出你非常爱喝奶茶",
  cook: "选D:Woc，中华小当家",
};

const stepTwoOptions: Array<{ key: StepTwoChoice; label: string }> = [
  { key: "millet", label: "A. 农耕文明（小米）" },
  { key: "wheat", label: "B. 面食文明（小麦）" },
  { key: "sugar-milk", label: "C. 工业文明（糖 + 奶）" },
  { key: "milk-tea", label: "D. 奶茶文明（马喽）" },
];

const stepTwoReveal: Record<StepTwoChoice, string[]> = {
  millet: ["新石器：吃小米"],
  wheat: ["青铜时代：开始吃小麦", "汉代：学会做面"],
  "sugar-milk": ["唐宋：吃得越来越精致"],
  "milk-tea": ["马喽文明：奶茶 + 糖 + 反复横跳的控糖意志"],
};

function OptionButton({ active = false, onClick, children }: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[1.35rem] border px-5 py-4 text-left text-base leading-7 transition duration-200 hover:-translate-y-0.5 ${
        active
          ? "border-[rgba(94,126,98,0.3)] bg-[rgba(255,255,255,0.68)] text-[#314438] shadow-[0_16px_34px_rgba(96,113,95,0.12)]"
          : "border-[rgba(78,102,83,0.14)] bg-white/56 text-[#415145] hover:border-[rgba(94,126,98,0.32)] hover:bg-white/76 hover:shadow-[0_12px_28px_rgba(96,113,95,0.1)]"
      }`}
    >
      {children}
    </button>
  );
}

function ContinueButton({
  onClick,
  children = "继续",
}: {
  onClick: () => void;
  children?: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-full border border-[rgba(78,102,83,0.14)] bg-white/72 px-5 py-3 text-sm font-medium text-[#314438] transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(96,113,95,0.12)]"
    >
      {children}
    </button>
  );
}

function BranchStepCard({ eyebrow, title, children }: BranchStepCardProps) {
  return (
    <section className="casual-fade-in relative overflow-hidden rounded-[2rem] border border-[rgba(78,102,83,0.14)] bg-[#edf1e8] px-6 py-7 shadow-[0_24px_60px_rgba(96,113,95,0.12)] sm:px-8 sm:py-8">
      <BranchDoodles />
      <div className="relative z-10">
        <p className="text-xs tracking-[0.16em] text-[#627165]">{eyebrow}</p>
        <h2 className="mt-3 text-[1.9rem] font-semibold leading-[1.24] tracking-[0.01em] text-[#314438] sm:text-[2.1rem]">
          {title}
        </h2>
        <div className="mt-6 text-[1.02rem] leading-8 text-[#546258]">{children}</div>
      </div>
    </section>
  );
}

function BranchDoodles() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 220"
      className="pointer-events-none absolute inset-0 h-full w-full fill-none text-[rgba(102,126,103,0.18)]"
    >
      <path d="M20 158c28-18 56-24 88-20 18 2 38 12 56 8 22-4 40-20 66-28" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M238 46c18-12 34-14 50-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M248 62c12 4 22 14 30 28" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="88" cy="60" r="12" stroke="currentColor" strokeWidth="1.2" />
      <path d="M88 48v24M76 60h24" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function StepOneOptions({
  choice,
  onSelect,
  onContinue,
}: {
  choice: StepOneChoice | null;
  onSelect: (value: StepOneChoice) => void;
  onContinue: () => void;
}) {
  return (
    <BranchStepCard eyebrow="先挖到你再说" title="他们“第一步最可能做的是什么”">
      <div className="grid gap-3">
        {stepOneOptions.map((option) => (
          <OptionButton key={option.key} active={choice === option.key} onClick={() => onSelect(option.key)}>
            {option.label}
          </OptionButton>
        ))}
      </div>
      <div className="mt-6">
        <ContinueButton onClick={onContinue}>继续</ContinueButton>
      </div>
    </BranchStepCard>
  );
}

function StepOneReveal({
  choice,
  onBack,
}: {
  choice: StepOneChoice;
  onBack: () => void;
}) {
  return (
    <BranchStepCard eyebrow="先挖到你再说" title="他们“第一步最可能做的是什么”">
      <div className="rounded-[1.35rem] bg-white/62 px-4 py-4 text-[#314438]">
        <p>{stepOneFeedback[choice]}</p>
      </div>
      {choice === "scrape" && (
        <>
          <p className="mt-5">为什么1万年还能被检测到？实际检测流程大概是：</p>
          <p className="mt-4">取样 → 脱矿 → 酶解 → 上质谱 → 出结果</p>
          <p className="mt-5">👉 然后报告里会出现一些你从没见过的词：</p>
          <div className="mt-3 rounded-[1.35rem] bg-white/52 px-4 py-4 text-[#314438]">
            <p>casein（牛奶蛋白）</p>
            <p>糖代谢相关酶</p>
            <p>口腔细菌谱</p>
          </div>
          <p className="mt-5">翻译成人话：</p>
          <p className="mt-2 font-medium text-[#314438]">“这个人，甜的没少喝。</p>
        </>
      )}
      <div className="mt-6">
        <ContinueButton onClick={onBack}>返回选项</ContinueButton>
      </div>
    </BranchStepCard>
  );
}

function StepTwoOptions({
  choice,
  onSelect,
  onBack,
}: {
  choice: StepTwoChoice | null;
  onSelect: (value: StepTwoChoice) => void;
  onBack: () => void;
}) {
  return (
    <BranchStepCard eyebrow="然后开始归类" title="你觉得他们会把你归类为：">
      <div className="grid gap-3">
        {stepTwoOptions.map((option) => (
          <OptionButton key={option.key} active={choice === option.key} onClick={() => onSelect(option.key)}>
            {option.label}
          </OptionButton>
        ))}
      </div>
      <div className="mt-6">
        <ContinueButton onClick={onBack}>返回</ContinueButton>
      </div>
    </BranchStepCard>
  );
}

function StepTwoReveal({
  choice,
  onBack,
}: {
  choice: StepTwoChoice;
  onBack: () => void;
}) {
  return (
    <BranchStepCard eyebrow="然后开始归类" title="为什么">
      <div className="rounded-[1.35rem] bg-white/58 px-4 py-4 text-[#314438]">
        {stepTwoReveal[choice].map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ContinueButton onClick={onBack}>返回选项</ContinueButton>
        <Link
          href="/buheshiyi"
          className="inline-flex items-center justify-center rounded-full border border-[rgba(78,102,83,0.14)] bg-white/72 px-5 py-3 text-sm font-medium text-[#314438] transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(96,113,95,0.12)]"
        >
          下一张卡
        </Link>
      </div>
    </BranchStepCard>
  );
}

export function SweetTenThousandYearsCard() {
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [stepOneChoice, setStepOneChoice] = useState<StepOneChoice | null>(null);
  const [stepOneRevealOpen, setStepOneRevealOpen] = useState(false);
  const [stepTwoChoice, setStepTwoChoice] = useState<StepTwoChoice | null>(null);
  const [stepTwoRevealOpen, setStepTwoRevealOpen] = useState(false);

  const revealStep = (step: StepId) => setCurrentStep(step);
  const stepOneLabel = stepOneOptions.find((option) => option.key === stepOneChoice)?.label;
  const stepTwoLabel = stepTwoOptions.find((option) => option.key === stepTwoChoice)?.label;

  const recallLines = (() => {
    const lines: string[] = [];

    if (currentStep >= 2 && stepOneLabel) {
      lines.push(`你刚才选了：${stepOneLabel}`);
    }

    if (currentStep >= 2 && stepTwoLabel) {
      lines.push(`你把自己归到：${stepTwoLabel}`);
    }

    return lines;
  })();

  const currentCard = (() => {
    if (currentStep === 1) {
      if (stepOneRevealOpen && stepOneChoice) {
        return (
          <StepOneReveal
            choice={stepOneChoice}
            onBack={() => setStepOneRevealOpen(false)}
          />
        );
      }

      return (
        <StepOneOptions
          choice={stepOneChoice}
          onSelect={(value) => {
            setStepOneChoice(value);
            setStepOneRevealOpen(true);
          }}
          onContinue={() => revealStep(2)}
        />
      );
    }

    if (stepTwoRevealOpen && stepTwoChoice) {
      return (
        <StepTwoReveal
          choice={stepTwoChoice}
          onBack={() => setStepTwoRevealOpen(false)}
        />
      );
    }

    return (
      <StepTwoOptions
        choice={stepTwoChoice}
        onSelect={(value) => {
          setStepTwoChoice(value);
          setStepTwoRevealOpen(true);
        }}
        onBack={() => revealStep(1)}
      />
    );
  })();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <div className="flex items-center justify-between text-sm text-[#627165]">
        <Link href="/buheshiyi" className="transition hover:text-[#314438]">
          返回不合时宜
        </Link>
        <span>互动卡 01</span>
      </div>

      <header className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(78,102,83,0.14)] bg-[#f2f5ee] px-6 py-8 shadow-[0_24px_60px_rgba(96,113,95,0.12)] sm:px-8 sm:py-10">
        <BranchDoodles />
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm tracking-[0.16em] text-[#627165]">不合时宜</p>
          <h1 className="mt-4 text-[2.3rem] font-semibold leading-[1.18] tracking-tight text-[#314438] sm:text-[3rem]">
            甜你一万年
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#546258]">
            👉 一万年后，有人挖到你的骨头（如果你点背的话。
          </p>
        </div>
      </header>

      <div className="flex items-center gap-2 px-1 text-xs tracking-[0.14em] text-[#627165]">
        {[1, 2].map((item) => (
          <span
            key={item}
            className={`rounded-full transition-all ${
              item <= currentStep ? "h-2.5 w-8 bg-[#7b9180]" : "h-2.5 w-2.5 bg-[#c9d4c9]"
            }`}
          />
        ))}
      </div>

      {recallLines.length > 0 && (
        <div className="casual-fade-in rounded-[1.6rem] border border-[rgba(78,102,83,0.12)] bg-white/48 px-5 py-4 text-sm leading-7 text-[#627165] backdrop-blur-md">
          {recallLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}

      {currentCard}
    </div>
  );
}
