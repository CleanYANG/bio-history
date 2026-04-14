import Link from "next/link";

export default function HunDunWuBianPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(66,94,129,0.22),transparent_24%),linear-gradient(180deg,#1f2a38_0%,#263446_50%,#202c3a_100%)] px-6 py-12 text-[#e6edf5] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-[rgba(130,149,183,0.16)] bg-[linear-gradient(135deg,rgba(45,61,84,0.94),rgba(32,45,63,0.9))] px-8 py-10 shadow-[0_30px_80px_rgba(8,12,22,0.36)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(136,178,255,0.12),transparent_16%)]" />
          <p className="relative z-10 text-sm tracking-[0.16em] text-[#aab6c4]">混沌无边</p>
          <h1 className="relative z-10 mt-4 text-4xl font-semibold tracking-tight text-[#e6edf5]">
            这里放那些关于宇宙、粒子和理解本身的怪问题。
          </h1>
          <p className="relative z-10 mt-5 max-w-2xl text-base leading-8 text-[#aab6c4]">
            不是结论陈列柜，更像一个人在认真怀疑：我们到底有没有把这个世界想对。
          </p>
          <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex rounded-full bg-white/10 px-5 py-3 text-sm transition hover:-translate-y-0.5 hover:bg-white/16"
            >
              返回首页
            </Link>
            <span className="inline-flex items-center rounded-full bg-white/6 px-5 py-3 text-sm text-[#aab6c4]">
              慢慢扩张中
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
          <Link
            href="/hundunwubian/uncertainty"
            className="group relative overflow-hidden rounded-[2rem] border border-[rgba(130,149,183,0.14)] bg-[linear-gradient(135deg,rgba(43,59,82,0.88),rgba(28,39,56,0.92))] p-7 shadow-[0_28px_70px_rgba(8,12,22,0.32)] transition duration-200 hover:-translate-y-1.5"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_28%,rgba(136,178,255,0.1),transparent_14%),radial-gradient(circle_at_78%_18%,rgba(136,178,255,0.08),transparent_12%)]" />
            <svg
              aria-hidden="true"
              viewBox="0 0 320 200"
              className="pointer-events-none absolute inset-0 h-full w-full fill-none text-[rgba(154,184,224,0.18)]"
            >
              <path d="M24 150c38-24 76-32 116-24 20 4 44 18 66 12 22-6 42-24 70-34" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M246 44c16 6 28 16 36 32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M88 52c8 14 8 28 2 44" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="2 7" />
              <circle cx="198" cy="138" r="2.2" fill="currentColor" stroke="none" />
              <circle cx="246" cy="84" r="1.8" fill="currentColor" stroke="none" />
              <circle cx="94" cy="118" r="1.8" fill="currentColor" stroke="none" />
            </svg>
            <div className="relative z-10">
              <p className="text-sm tracking-[0.16em] text-[#8ea3bf]">互动卡 01</p>
              <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-[1.22] text-[#e6edf5] sm:text-[2.35rem]">
                我也不确定不确定性是什么
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#aab6c4]">
                以及：我们真的能理解一个没有它的宇宙吗？
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#c1cedc]">
                一开始像物理题，点着点着，问题会开始绕回来问你自己。
              </p>
              <div className="mt-7 inline-flex items-center rounded-full bg-white/8 px-4 py-2 text-sm text-[#e6edf5] transition group-hover:translate-x-1 group-hover:shadow-[0_0_24px_rgba(120,170,255,0.12)]">
                点开怀疑一下
              </div>
            </div>
          </Link>

          <div className="rounded-[2rem] border border-dashed border-[rgba(130,149,183,0.18)] bg-[rgba(255,255,255,0.03)] p-6 text-[#aab6c4]">
            <p className="text-sm tracking-[0.16em]">下一张</p>
            <p className="mt-4 text-lg leading-8">
              宇宙还没说，
              <br />
              但空位先留着。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
