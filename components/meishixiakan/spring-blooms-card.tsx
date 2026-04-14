"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type StepId = 1 | 2 | 3 | 4 | 5 | 6;
type StepOneChoice = "fast" | "slow" | "ready" | "curious";
type StepTwoChoice = "flower" | "grass";
type StepFourChoice = "sunlight" | "insects" | "random" | "all";
type StepFiveChoice = "flower" | "grass";

type ChoiceButtonProps = {
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
};

type StepCardProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

const stepOneOptions: Array<{
  key: StepOneChoice;
  label: string;
  note: string;
}> = [
  { key: "fast", label: "A. 花长得更快", note: "听起来合理，但这题没这么直给。" },
  { key: "slow", label: "B. 草从种子长更慢", note: "你已经碰到一点关键字了。" },
  { key: "ready", label: "C. 花其实早就“准备好了”", note: "这题的门把手就在这里。" },
  { key: "curious", label: "D. 我也不知道，但很好奇", note: "很好，这种问题就该靠好奇往下点。" },
];

const stepFourOptions: Array<{
  key: StepFourChoice;
  label: string;
  note: string;
}> = [
  { key: "sunlight", label: "A. 抢时间", note: "树叶还没封顶，阳光正空着。" },
  { key: "insects", label: "B. 抢注意", note: "先开先被看见，也先被昆虫看见。" },
  { key: "random", label: "C. 随机进化，没有“目的”", note: "从进化角度看，这句也不能算错。" },
  { key: "all", label: "D. 都有可能", note: "这题最像现实：常常不是单原因。" },
];

function ChoiceButton({ active = false, onClick, children }: ChoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[1.4rem] border px-5 py-4 text-left text-base leading-7 transition duration-200 hover:-translate-y-0.5 ${
        active
          ? "border-[#b96054] bg-[#fff6f3] text-[#5e312b] shadow-[0_14px_30px_rgba(191,109,88,0.16)]"
          : "border-[rgba(122,84,78,0.14)] bg-white/78 text-[#4d4643] hover:border-[#c27a6d] hover:bg-white hover:shadow-[0_10px_26px_rgba(120,89,82,0.12)]"
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
      className="inline-flex items-center justify-center rounded-full border border-[rgba(122,84,78,0.14)] bg-white/86 px-5 py-3 text-sm font-medium text-[#5e312b] transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(120,89,82,0.14)]"
    >
      {children}
    </button>
  );
}

function StepCard({ eyebrow, title, children }: StepCardProps) {
  return (
    <section className="casual-fade-in relative overflow-hidden rounded-[2rem] border border-[rgba(169,88,71,0.14)] bg-[#f4d6d3] px-6 py-7 shadow-[0_26px_60px_rgba(191,109,88,0.16)] sm:px-8 sm:py-8">
      <CornerDoodles />
      <div className="relative z-10">
        <p className="text-xs tracking-[0.16em] text-[#9c6257]">{eyebrow}</p>
        <h2 className="mt-3 text-[1.9rem] font-semibold leading-[1.25] tracking-[0.01em] text-[#333333] sm:text-[2.1rem]">
          {title}
        </h2>
        <div className="mt-6 text-[1.02rem] leading-8 text-[#5b514d]">{children}</div>
      </div>
    </section>
  );
}

function CornerDoodles() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 220"
      className="pointer-events-none absolute inset-0 h-full w-full fill-none text-[rgba(172,85,66,0.22)]"
    >
      <path d="M26 64C39 48 54 44 70 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M238 40C250 28 268 28 286 38" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M252 52C270 56 280 68 286 84" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M34 170C56 152 74 148 100 150" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M226 170C242 156 258 154 278 160" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="84" cy="42" r="11" stroke="currentColor" strokeWidth="1.3" />
      <path d="M88 32v20M78 42h20" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M174 176c8-10 18-12 29-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function TinyFlower() {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 28" className="h-7 w-7 fill-none text-[#b96558]">
      <circle cx="14" cy="14" r="2.1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="7" r="4.4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="21" cy="14" r="4.4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="14" cy="21" r="4.4" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="7" cy="14" r="4.4" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function TinyGrass() {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 28" className="h-7 w-7 fill-none text-[#9a7f58]">
      <path d="M7 23c1-7 2-11 5-16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M14 23c0-8 1-12 0-17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M21 23c-1-6-3-10-6-14" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M10 15c-2 0-3-1-5-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M18 13c2 0 3-1 5-4" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}

function StepOne({
  choice,
  onSelect,
  onContinue,
}: {
  choice: StepOneChoice | null;
  onSelect: (value: StepOneChoice) => void;
  onContinue: () => void;
}) {
  const selected = stepOneOptions.find((option) => option.key === choice);

  return (
    <StepCard eyebrow="STEP 1" title="你觉得为什么春天花比草先出现？">
      <div className="grid gap-3">
        {stepOneOptions.map((option) => (
          <ChoiceButton
            key={option.key}
            active={choice === option.key}
            onClick={() => onSelect(option.key)}
          >
            {option.label}
          </ChoiceButton>
        ))}
      </div>
      {selected && (
        <div className="mt-5 rounded-[1.3rem] bg-white/58 px-4 py-3 text-sm text-[#7a5c55]">
          {selected.note}
        </div>
      )}
      <div className="mt-6">
        <ContinueButton onClick={onContinue}>继续看看</ContinueButton>
      </div>
    </StepCard>
  );
}

function StepTwo({
  choice,
  onSelect,
}: {
  choice: StepTwoChoice | null;
  onSelect: (value: StepTwoChoice) => void;
}) {
  return (
    <StepCard eyebrow="STEP 2" title="你有没有注意过：">
      <ul className="space-y-2 pl-5">
        <li>春天一开始，是零星的小花</li>
        <li>草却只是“浅浅一层”</li>
      </ul>
      <p className="mt-5 text-[#4f4744]">如果你骑马走过去，先被淹没的是花还是草？</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <ChoiceButton active={choice === "flower"} onClick={() => onSelect("flower")}>
          花
        </ChoiceButton>
        <ChoiceButton active={choice === "grass"} onClick={() => onSelect("grass")}>
          草
        </ChoiceButton>
      </div>
      {choice && (
        <div className="mt-5 rounded-[1.3rem] bg-white/58 px-4 py-3 text-sm text-[#7a5c55]">
          {choice === "flower" ? "其实更容易先被草淹没，小花只是更显眼。" : "对，浅草没马蹄，说的就是这个画面。"}
        </div>
      )}
    </StepCard>
  );
}

function StepThree({ onContinue }: { onContinue: () => void }) {
  return (
    <StepCard eyebrow="STEP 3" title="答案其实有点“作弊”">
      <p className="font-semibold text-[#433d3a]">很多花，根本不是从种子开始长的。</p>
      <ul className="mt-4 space-y-2 pl-5">
        <li>冬天藏在地下，像提前存了个档</li>
        <li>已经准备好养分</li>
        <li>春天一来就直接冲去开花</li>
      </ul>
      <div className="mt-5 rounded-[1.4rem] bg-white/62 px-4 py-4">
        <p className="font-medium text-[#4d4542]">草：</p>
        <ul className="mt-2 space-y-1 pl-5 text-[#625854]">
          <li>需要从种子重新发芽</li>
          <li>慢慢长起来</li>
        </ul>
      </div>
      <p className="mt-5 font-semibold text-[#5e312b]">不是花更努力，是它提前准备好了。</p>
      <div className="mt-6">
        <ContinueButton onClick={onContinue}>这就很有意思</ContinueButton>
      </div>
    </StepCard>
  );
}

function StepFour({
  choice,
  onSelect,
}: {
  choice: StepFourChoice | null;
  onSelect: (value: StepFourChoice) => void;
}) {
  const selected = stepFourOptions.find((option) => option.key === choice);

  return (
    <StepCard eyebrow="STEP 4" title="那为什么会这样？">
      <div className="grid gap-3">
        {stepFourOptions.map((option) => (
          <ChoiceButton
            key={option.key}
            active={choice === option.key}
            onClick={() => onSelect(option.key)}
          >
            {option.label}
          </ChoiceButton>
        ))}
      </div>
      {selected && (
        <div className="mt-5 rounded-[1.3rem] bg-white/58 px-4 py-3 text-sm text-[#7a5c55]">
          {selected.note}
        </div>
      )}
    </StepCard>
  );
}

function StepFive({
  choice,
  onSelect,
}: {
  choice: StepFiveChoice | null;
  onSelect: (value: StepFiveChoice) => void;
}) {
  return (
    <StepCard eyebrow="STEP 5" title="如果把植物当成人">
      <div className="grid gap-4">
        <div className="rounded-[1.4rem] bg-white/58 px-4 py-4">
          <div className="flex items-center gap-3 text-[#4f4744]">
            <TinyFlower />
            <p className="font-medium">花：</p>
          </div>
          <p className="mt-2 text-[#625854]">提前准备，一有机会就爆发</p>
        </div>
        <div className="rounded-[1.4rem] bg-white/58 px-4 py-4">
          <div className="flex items-center gap-3 text-[#4f4744]">
            <TinyGrass />
            <p className="font-medium">草：</p>
          </div>
          <p className="mt-2 text-[#625854]">慢慢积累，最后铺满世界</p>
        </div>
      </div>
      <p className="mt-5 text-[#4f4744]">你更像哪一种？</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <ChoiceButton active={choice === "flower"} onClick={() => onSelect("flower")}>
          花型选手（爆发型）
        </ChoiceButton>
        <ChoiceButton active={choice === "grass"} onClick={() => onSelect("grass")}>
          草型选手（稳扎稳打）
        </ChoiceButton>
      </div>
      {choice && (
        <div className="mt-5 rounded-[1.3rem] bg-white/58 px-4 py-3 text-sm text-[#7a5c55]">
          {choice === "flower" ? "适合等风来，也适合先把能量攒满。" : "看起来慢一点，但最后经常是你铺开全场。"}
        </div>
      )}
    </StepCard>
  );
}

function StepSix() {
  return (
    <StepCard eyebrow="STEP 6" title="那为什么有些花反而开得很晚？">
      <p>因为也不是所有植物都急着抢春天这一个时间窗。</p>
      <p className="mt-2 text-[#625854]">有的要等温度更稳，有的要等传粉者更多，还有的干脆喜欢晚一点再出场。</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/meishixiakan"
          className="inline-flex items-center justify-center rounded-full border border-[rgba(122,84,78,0.14)] bg-white/86 px-5 py-3 text-sm font-medium text-[#5e312b] transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-[0_10px_24px_rgba(120,89,82,0.14)]"
        >
          下一张卡
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm text-[#84564c] transition hover:-translate-y-0.5 hover:text-[#5e312b]"
        >
          返回首页
        </Link>
      </div>
    </StepCard>
  );
}

export function SpringBloomsCard() {
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [stepOneChoice, setStepOneChoice] = useState<StepOneChoice | null>(null);
  const [stepTwoChoice, setStepTwoChoice] = useState<StepTwoChoice | null>(null);
  const [stepFourChoice, setStepFourChoice] = useState<StepFourChoice | null>(null);
  const [stepFiveChoice, setStepFiveChoice] = useState<StepFiveChoice | null>(null);

  const revealStep = (step: StepId) => setCurrentStep(step);
  const stepOneLabel = stepOneOptions.find((option) => option.key === stepOneChoice)?.label;
  const stepTwoLabel = stepTwoChoice === "flower" ? "花" : stepTwoChoice === "grass" ? "草" : null;
  const stepFourLabel = stepFourOptions.find((option) => option.key === stepFourChoice)?.label;
  const stepFiveLabel =
    stepFiveChoice === "flower"
      ? "花型选手（爆发型）"
      : stepFiveChoice === "grass"
        ? "草型选手（稳扎稳打）"
        : null;

  const recallLines = (() => {
    const lines: string[] = [];

    if (currentStep >= 2 && stepOneLabel) {
      lines.push(`你刚才选了：${stepOneLabel}`);
    }

    if (currentStep >= 3 && stepTwoLabel) {
      lines.push(`你觉得先被淹没的是：${stepTwoLabel}`);
    }

    if (currentStep >= 5 && stepFourLabel) {
      lines.push(`你对“为什么会这样”选了：${stepFourLabel}`);
    }

    if (currentStep >= 6 && stepFiveLabel) {
      lines.push(`你更像：${stepFiveLabel}`);
    }

    return lines;
  })();

  const currentCard = (() => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            choice={stepOneChoice}
            onSelect={(value) => {
              setStepOneChoice(value);
              revealStep(2);
            }}
            onContinue={() => revealStep(2)}
          />
        );
      case 2:
        return (
          <StepTwo
            choice={stepTwoChoice}
            onSelect={(value) => {
              setStepTwoChoice(value);
              revealStep(3);
            }}
          />
        );
      case 3:
        return <StepThree onContinue={() => revealStep(4)} />;
      case 4:
        return (
          <StepFour
            choice={stepFourChoice}
            onSelect={(value) => {
              setStepFourChoice(value);
              revealStep(5);
            }}
          />
        );
      case 5:
        return (
          <StepFive
            choice={stepFiveChoice}
            onSelect={(value) => {
              setStepFiveChoice(value);
              revealStep(6);
            }}
          />
        );
      case 6:
        return <StepSix />;
      default:
        return null;
    }
  })();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <div className="flex items-center justify-between text-sm text-[#8c6259]">
        <Link href="/meishixiakan" className="transition hover:text-[#5e312b]">
          返回没事瞎看
        </Link>
        <span>互动卡 01</span>
      </div>

      <header className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(169,88,71,0.12)] bg-[#f8ece9] px-6 py-8 shadow-[0_24px_54px_rgba(191,109,88,0.1)] sm:px-8 sm:py-10">
        <HeaderDoodles />
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm tracking-[0.16em] text-[#9c6257]">没事瞎看</p>
          <h1 className="handwritten-soft mt-4 text-[2.3rem] leading-[1.22] text-[#333333] sm:text-[3rem]">
            乱花渐欲迷人眼，浅草才能没马蹄
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#6a5b56]">
            一个看起来像诗，其实是植物在悄悄抢跑的问题。
          </p>
        </div>
      </header>

      <div className="flex items-center gap-2 px-1 text-xs tracking-[0.14em] text-[#9c6257]">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <span
            key={item}
            className={`h-2.5 rounded-full transition-all ${
              item <= currentStep ? "w-8 bg-[#c57a6d]" : "w-2.5 bg-[#dbc3bd]"
            }`}
          />
        ))}
      </div>

      {recallLines.length > 0 && (
        <div className="casual-fade-in rounded-[1.6rem] border border-[rgba(169,88,71,0.12)] bg-white/45 px-5 py-4 text-sm leading-7 text-[#8a6259] backdrop-blur-md">
          {recallLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}

      {currentCard}
    </div>
  );
}

function HeaderDoodles() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 440 240"
      className="pointer-events-none absolute inset-0 h-full w-full fill-none text-[rgba(172,85,66,0.24)]"
    >
      <path d="M28 160c44-26 82-34 126-28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M334 64c24-16 48-18 72-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M352 84c18 6 28 18 34 38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M238 174c16-18 36-22 58-12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="92" cy="64" r="13" stroke="currentColor" strokeWidth="1.2" />
      <path d="M92 50v28M78 64h28" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
      <path d="M150 60c6-10 14-14 25-13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M182 48c12-2 22 2 30 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M82 188c20-18 44-24 72-18" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeDasharray="2 7" />
    </svg>
  );
}
