"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";

type StepId = 1 | 2 | 3 | 4 | 5 | 6;
type StepOneChoice = "instrument" | "deterministic" | "cannot" | "random";
type StepFourChoice = "better" | "know-all" | "not-sure" | "cannot-imagine";
type StepSixChoice = "understanding" | "misreading" | "both" | "uncertain";

type OptionButtonProps = {
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
};

type DarkStepCardProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

const stepOneOptions: Array<{ key: StepOneChoice; label: string }> = [
  { key: "instrument", label: "A. 仪器不够精确，测不准" },
  { key: "deterministic", label: "B. 我们现在还没搞清楚，本质是确定的" },
  { key: "cannot", label: "C. 有些东西本来就不能同时被确定" },
  { key: "random", label: "D. 听起来很厉害，其实就是随机" },
];

const stepOneFeedback: Record<StepOneChoice, string> = {
  instrument: "你把问题推给了仪器，这很合理，但宇宙这次不是设备问题。",
  deterministic: "你属于‘一切都能算出来’派，这很经典，但可能有点乐观。",
  cannot: "你已经踩到重点了，接下来可能会有点不舒服。",
  random: "很多人会这么觉得，但它比‘随机’更严格一点。",
};

const stepFourOptions: Array<{ key: StepFourChoice; label: string }> = [
  { key: "better", label: "A. 会，更稳定、更清晰" },
  { key: "know-all", label: "B. 会，人类可以理解一切" },
  { key: "not-sure", label: "C. 不一定" },
  { key: "cannot-imagine", label: "D. 我想象不出来" },
];

const stepSixOptions: Array<{ key: StepSixChoice; label: string; note: string }> = [
  { key: "understanding", label: "我们在理解", note: "至少我们一直在逼近一种暂时可用的理解。" },
  { key: "misreading", label: "我们在误解", note: "也可能。毕竟理解宇宙这件事，工具本身就是人类。"},
  { key: "both", label: "两者都有", note: "这答案最像现实：一边理解，一边误读。"},
  { key: "uncertain", label: "我不确定（合理）", note: "这题最后回到不确定，倒也很自洽。"},
];

function OptionButton({ active = false, onClick, children }: OptionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-[1.35rem] border px-5 py-4 text-left text-base leading-7 transition duration-200 hover:-translate-y-0.5 ${
        active
          ? "border-[rgba(161,195,255,0.42)] bg-[rgba(131,170,235,0.16)] text-[#f4f8ff] shadow-[0_0_24px_rgba(120,170,255,0.18)]"
          : "border-[rgba(153,176,212,0.16)] bg-[rgba(255,255,255,0.03)] text-[#d9e3ef] hover:border-[rgba(161,195,255,0.38)] hover:bg-[rgba(120,170,255,0.08)] hover:shadow-[0_0_22px_rgba(120,170,255,0.12)]"
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
      className="inline-flex items-center justify-center rounded-full border border-[rgba(153,176,212,0.18)] bg-[rgba(255,255,255,0.06)] px-5 py-3 text-sm font-medium text-[#e6edf5] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(161,195,255,0.34)] hover:shadow-[0_0_26px_rgba(120,170,255,0.14)]"
    >
      {children}
    </button>
  );
}

function DarkStepCard({ eyebrow, title, children }: DarkStepCardProps) {
  return (
    <section className="cosmic-fade-in relative overflow-hidden rounded-[2rem] border border-[rgba(153,176,212,0.14)] bg-[rgba(18,28,41,0.58)] px-6 py-7 shadow-[0_30px_70px_rgba(10,16,26,0.36)] backdrop-blur-xl sm:px-8 sm:py-8">
      <ChaosLines />
      <div className="relative z-10">
        <p className="text-xs tracking-[0.16em] text-[#8ea3bf]">{eyebrow}</p>
        <h2 className="mt-3 text-[1.95rem] font-semibold leading-[1.25] tracking-[0.01em] text-[#e6edf5] sm:text-[2.15rem]">
          {title}
        </h2>
        <div className="mt-6 text-[1.02rem] leading-8 text-[#b7c5d6]">{children}</div>
      </div>
    </section>
  );
}

function ChaosLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 320 240"
      className="pointer-events-none absolute inset-0 h-full w-full fill-none text-[rgba(154,184,224,0.12)]"
    >
      <path d="M-8 164c28-28 62-44 106-36 22 4 43 12 62 8 24-4 42-24 68-34" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M214 32c20 6 34 18 42 38 6 14 10 22 28 30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M76 48c8 18 10 34 4 52" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="2 7" />
      <path d="M236 186c14-8 28-8 44 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ParticleField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="cosmic-particle left-[8%] top-[16%] h-1.5 w-1.5" />
      <span className="cosmic-particle left-[16%] top-[72%] h-2 w-2" />
      <span className="cosmic-particle left-[27%] top-[34%] h-1 w-1" />
      <span className="cosmic-particle left-[41%] top-[12%] h-2 w-2" />
      <span className="cosmic-particle left-[52%] top-[66%] h-1.5 w-1.5" />
      <span className="cosmic-particle left-[61%] top-[26%] h-1 w-1" />
      <span className="cosmic-particle left-[74%] top-[54%] h-2 w-2" />
      <span className="cosmic-particle left-[88%] top-[18%] h-1.5 w-1.5" />
      <span className="cosmic-particle left-[82%] top-[78%] h-1 w-1" />
      <span className="cosmic-particle left-[34%] top-[82%] h-1.5 w-1.5" />
    </div>
  );
}

function StepOne({
  choice,
  note,
  onSelect,
  onInput,
  onContinue,
}: {
  choice: StepOneChoice | null;
  note: string;
  onSelect: (value: StepOneChoice) => void;
  onInput: (value: string) => void;
  onContinue: () => void;
}) {
  return (
    <DarkStepCard eyebrow="STEP 1" title="你觉得“不确定性”是什么？">
      <div className="grid gap-3">
        {stepOneOptions.map((option) => (
          <OptionButton key={option.key} active={choice === option.key} onClick={() => onSelect(option.key)}>
            {option.label}
          </OptionButton>
        ))}
      </div>
      <div className="mt-6 rounded-[1.4rem] border border-[rgba(153,176,212,0.12)] bg-[rgba(255,255,255,0.03)] px-4 py-4">
        <p className="text-sm text-[#d6e0eb]">或者你可以自己说一句：</p>
        <textarea
          value={note}
          onChange={(event) => onInput(event.target.value)}
          placeholder="宇宙不太想告诉你全部信息&#10;精确到一半就摆烂&#10;我不太确定不确定性是什么"
          className="mt-3 min-h-[112px] w-full resize-none rounded-[1rem] border border-[rgba(153,176,212,0.14)] bg-[rgba(13,20,31,0.54)] px-4 py-3 text-sm leading-7 text-[#e6edf5] outline-none transition placeholder:text-[#75879d] focus:border-[rgba(161,195,255,0.38)]"
        />
      </div>
      <div className="mt-6">
        <ContinueButton onClick={onContinue}>继续推一推</ContinueButton>
      </div>
    </DarkStepCard>
  );
}

function StepTwo({
  choice,
  note,
  onContinue,
}: {
  choice: StepOneChoice | null;
  note: string;
  onContinue: () => void;
}) {
  const feedback = choice ? stepOneFeedback[choice] : "你暂时没选答案，这也挺像不确定性的开场。";

  return (
    <DarkStepCard eyebrow="STEP 2" title="先别急着下定义">
      <div className="rounded-[1.4rem] border border-[rgba(153,176,212,0.12)] bg-[rgba(255,255,255,0.04)] px-4 py-4 text-[#e2eaf3]">
        <p>{feedback}</p>
      </div>
      {note.trim() && (
        <div className="mt-4 rounded-[1.4rem] border border-[rgba(153,176,212,0.1)] bg-[rgba(13,20,31,0.42)] px-4 py-4 text-sm text-[#9fb0c2]">
          你刚才写的是：{note.trim()}
        </div>
      )}
      <div className="mt-6">
        <ContinueButton onClick={onContinue}>那正确答案呢</ContinueButton>
      </div>
    </DarkStepCard>
  );
}

function StepThree({ onContinue }: { onContinue: () => void }) {
  return (
    <DarkStepCard eyebrow="STEP 3" title="答案是：C（但有点微妙）">
      <p>不确定性不是说：“我们还没测清楚”。</p>
      <p className="mt-3 font-medium text-[#e6edf5]">而是：</p>
      <p className="mt-2">有些量，在物理上就不能同时被精确知道。</p>
      <div className="mt-5 rounded-[1.4rem] border border-[rgba(153,176,212,0.12)] bg-[rgba(255,255,255,0.04)] px-4 py-4">
        <p>例如：</p>
        <ul className="mt-2 space-y-2 pl-5">
          <li>一个粒子的位置</li>
          <li>它的动量</li>
        </ul>
        <p className="mt-4">你越确定一个，另一个就会越模糊。</p>
      </div>
      <p className="mt-5 font-semibold text-[#f0f6ff]">不确定性不是误差，是规则。</p>
      <div className="mt-6">
        <ContinueButton onClick={onContinue}>这下事情开始怪了</ContinueButton>
      </div>
    </DarkStepCard>
  );
}

function StepFour({
  choice,
  onSelect,
}: {
  choice: StepFourChoice | null;
  onSelect: (value: StepFourChoice) => void;
}) {
  return (
    <DarkStepCard eyebrow="STEP 4" title="那我们问一个更奇怪的问题">
      <p className="text-[#dbe6f2]">如果宇宙完全没有不确定性，会更好吗？</p>
      <div className="mt-5 grid gap-3">
        {stepFourOptions.map((option) => (
          <OptionButton key={option.key} active={choice === option.key} onClick={() => onSelect(option.key)}>
            {option.label}
          </OptionButton>
        ))}
      </div>
    </DarkStepCard>
  );
}

function StepFive({ onContinue }: { onContinue: () => void }) {
  return (
    <DarkStepCard eyebrow="STEP 5" title="这里可能出了一个问题">
      <p>我们一直在假设：人类可以想象任何一种宇宙。</p>
      <p className="mt-4">但其实：</p>
      <div className="mt-4 space-y-2 rounded-[1.4rem] border border-[rgba(153,176,212,0.12)] bg-[rgba(255,255,255,0.04)] px-4 py-4 text-[#d7e2ee]">
        <p>我们的语言</p>
        <p>我们的思维</p>
        <p>我们的直觉</p>
      </div>
      <p className="mt-4">都是在这个“有不确定性”的宇宙里形成的。</p>
      <p className="mt-5 whitespace-pre-line text-xl font-semibold leading-9 text-[#f2f7ff]">
        我是由不确定性组成的，
        {"\n"}
        所以我很难理解一个完全没有不确定性的世界。
      </p>
      <div className="mt-5 rounded-[1.4rem] border border-[rgba(153,176,212,0.1)] bg-[rgba(13,20,31,0.42)] px-4 py-4 text-[#aebbc9]">
        <p>这有点像：</p>
        <ul className="mt-2 space-y-2 pl-5">
          <li>一条鱼研究沙漠</li>
          <li>Excel 试图解释爱情</li>
          <li>或者人类试图在周一早上理解人生</li>
        </ul>
      </div>
      <div className="mt-6">
        <ContinueButton onClick={onContinue}>这已经不像知识题了</ContinueButton>
      </div>
    </DarkStepCard>
  );
}

function StepSix({
  choice,
  onSelect,
}: {
  choice: StepSixChoice | null;
  onSelect: (value: StepSixChoice) => void;
}) {
  const selected = stepSixOptions.find((option) => option.key === choice);

  return (
    <DarkStepCard eyebrow="STEP 6" title="那你觉得：">
      <p className="whitespace-pre-line text-lg leading-8 text-[#e6edf5]">
        我们是在理解宇宙，
        {"\n"}
        还是在用自己的方式误解它？
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {stepSixOptions.map((option) => (
          <OptionButton key={option.key} active={choice === option.key} onClick={() => onSelect(option.key)}>
            {option.label}
          </OptionButton>
        ))}
      </div>
      {selected && (
        <div className="mt-5 rounded-[1.4rem] border border-[rgba(153,176,212,0.1)] bg-[rgba(255,255,255,0.04)] px-4 py-4 text-[#b8c5d5]">
          {selected.note}
        </div>
      )}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/hundunwubian"
          className="inline-flex items-center justify-center rounded-full border border-[rgba(153,176,212,0.18)] bg-[rgba(255,255,255,0.06)] px-5 py-3 text-sm font-medium text-[#e6edf5] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(120,170,255,0.14)]"
        >
          下一张卡
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm text-[#9fb1c5] transition hover:-translate-y-0.5 hover:text-[#e6edf5]"
        >
          返回首页
        </Link>
      </div>
    </DarkStepCard>
  );
}

export function UncertaintyCard() {
  const [currentStep, setCurrentStep] = useState<StepId>(1);
  const [stepOneChoice, setStepOneChoice] = useState<StepOneChoice | null>(null);
  const [stepOneNote, setStepOneNote] = useState("");
  const [stepFourChoice, setStepFourChoice] = useState<StepFourChoice | null>(null);
  const [stepSixChoice, setStepSixChoice] = useState<StepSixChoice | null>(null);

  const revealStep = (step: StepId) => setCurrentStep(step);
  const stepOneLabel = stepOneOptions.find((option) => option.key === stepOneChoice)?.label;
  const stepFourLabel = stepFourOptions.find((option) => option.key === stepFourChoice)?.label;
  const stepSixLabel = stepSixOptions.find((option) => option.key === stepSixChoice)?.label;

  const recallLines = (() => {
    const lines: string[] = [];

    if (currentStep >= 2 && stepOneLabel) {
      lines.push(`你刚才选了：${stepOneLabel}`);
    }

    if (currentStep >= 2 && stepOneNote.trim()) {
      lines.push(`你刚才写的是：${stepOneNote.trim()}`);
    }

    if (currentStep >= 5 && stepFourLabel) {
      lines.push(`你对“没有不确定性的宇宙”选了：${stepFourLabel}`);
    }

    if (currentStep >= 6 && stepSixLabel) {
      lines.push(`你现在更偏向：${stepSixLabel}`);
    }

    return lines;
  })();

  const currentCard = (() => {
    switch (currentStep) {
      case 1:
        return (
          <StepOne
            choice={stepOneChoice}
            note={stepOneNote}
            onSelect={(value) => {
              setStepOneChoice(value);
              revealStep(2);
            }}
            onInput={setStepOneNote}
            onContinue={() => revealStep(2)}
          />
        );
      case 2:
        return (
          <StepTwo
            choice={stepOneChoice}
            note={stepOneNote}
            onContinue={() => revealStep(3)}
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
        return <StepFive onContinue={() => revealStep(6)} />;
      case 6:
        return <StepSix choice={stepSixChoice} onSelect={setStepSixChoice} />;
      default:
        return null;
    }
  })();

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-5">
      <div className="flex items-center justify-between text-sm text-[#8ea3bf]">
        <Link href="/hundunwubian" className="transition hover:text-[#e6edf5]">
          返回混沌无边
        </Link>
        <span>互动卡 01</span>
      </div>

      <header className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(153,176,212,0.14)] bg-[linear-gradient(135deg,rgba(27,39,56,0.92),rgba(36,52,74,0.84))] px-6 py-8 shadow-[0_30px_80px_rgba(8,12,22,0.4)] sm:px-8 sm:py-10">
        <ParticleField />
        <HeaderLines />
        <div className="relative z-10 max-w-2xl">
          <p className="text-sm tracking-[0.16em] text-[#8ea3bf]">混沌无边</p>
          <h1 className="mt-4 text-[2.35rem] font-semibold leading-[1.18] tracking-tight text-[#e6edf5] sm:text-[3rem]">
            我也不确定不确定性是什么
          </h1>
          <p className="mt-4 text-sm leading-7 text-[#aab6c4]">
            以及：我们真的能理解一个没有它的宇宙吗？
          </p>
        </div>
      </header>

      <div className="flex items-center gap-2 px-1 text-xs tracking-[0.14em] text-[#8ea3bf]">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <span
            key={item}
            className={`rounded-full transition-all ${
              item <= currentStep ? "h-2.5 w-8 bg-[#8fb4ea]" : "h-2.5 w-2.5 bg-[rgba(163,181,205,0.28)]"
            }`}
          />
        ))}
      </div>

      {recallLines.length > 0 && (
        <div className="cosmic-fade-in rounded-[1.6rem] border border-[rgba(153,176,212,0.1)] bg-[rgba(255,255,255,0.03)] px-5 py-4 text-sm leading-7 text-[#9fb0c2] backdrop-blur-md">
          {recallLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      )}

      {currentCard}
    </div>
  );
}

function HeaderLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 440 240"
      className="pointer-events-none absolute inset-0 h-full w-full fill-none text-[rgba(154,184,224,0.14)]"
    >
      <path d="M22 156c34-26 74-34 116-22 28 8 46 18 68 12 22-6 44-28 74-40" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M288 40c24 6 44 22 56 48" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M370 54c18 8 26 22 28 40" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="2 7" />
      <path d="M116 62c6 18 4 38-6 56" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
    </svg>
  );
}
