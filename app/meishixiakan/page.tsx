import Link from "next/link";

export default function MeiShiXiaKanPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] px-6 py-12 text-[#333333] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2.2rem] bg-[#f4d6d3] px-8 py-10 shadow-[0_24px_60px_rgba(191,109,88,0.16)] ring-1 ring-[rgba(169,88,71,0.14)]">
          <p className="text-sm tracking-[0.16em] text-[#965f55]">没事瞎看</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#6c3027]">
            这里放那些突然冒出来，不太正经，但很想点一下的问题。
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#865149]">
            有些像散步时冒出来的念头，有些像看到一句诗之后，脑子突然拐了个弯。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex rounded-full bg-white/72 px-5 py-3 text-sm text-[#6c3027] transition hover:-translate-y-0.5"
            >
              返回首页
            </Link>
            <span className="inline-flex items-center rounded-full bg-white/45 px-5 py-3 text-sm text-[#8b5a51]">
              慢慢更新中
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
          <Link
            href="/meishixiakan/spring-blooms"
            className="group relative overflow-hidden rounded-[2rem] bg-[#f0c4bf] p-7 shadow-[0_22px_54px_rgba(191,109,88,0.14)] ring-1 ring-[rgba(169,88,71,0.14)] transition duration-200 hover:-translate-y-1.5"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 320 200"
              className="pointer-events-none absolute inset-0 h-full w-full fill-none text-[rgba(172,85,66,0.24)]"
            >
              <path d="M30 152c44-30 82-36 122-28" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M220 52c20-18 46-22 68-10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              <circle cx="90" cy="54" r="12" stroke="currentColor" strokeWidth="1.2" />
              <path d="M90 42v24M78 54h24" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
              <path d="M256 140c12-12 26-14 42-8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            <div className="relative z-10">
              <p className="text-sm tracking-[0.16em] text-[#9c6257]">互动卡 01</p>
              <h2 className="handwritten-soft mt-4 max-w-2xl text-[2rem] leading-[1.28] text-[#333333] sm:text-[2.3rem]">
                乱花渐欲迷人眼，浅草才能没马蹄
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#6e5b56]">
                春天为什么总觉得花先来了，草却还只是薄薄一层？这题看起来像诗，其实很会抢跑。
              </p>
              <div className="mt-7 inline-flex items-center rounded-full bg-white/76 px-4 py-2 text-sm text-[#5e312b] transition group-hover:translate-x-1">
                点开看看
              </div>
            </div>
          </Link>

          <div className="rounded-[2rem] border border-dashed border-[rgba(169,88,71,0.18)] bg-white/55 p-6 text-[#8b5a51]">
            <p className="text-sm tracking-[0.16em]">下一张</p>
            <p className="mt-4 text-lg leading-8">
              还没想好，
              <br />
              但门已经留着。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
