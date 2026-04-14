import Link from "next/link";

export default function BuHeShiYiPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-6 py-12 text-[var(--foreground)] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-[2.2rem] bg-[#edf1e8] px-8 py-10 shadow-[var(--shadow)] ring-1 ring-[rgba(78,102,83,0.14)]">
          <p className="text-sm tracking-[0.16em] text-[#627165]">不合时宜</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#314438]">
            这里放那些看起来像玩笑，仔细想又有点历史味的问题。
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#617264]">
            不是正经编年史，更像你一边吃东西一边突然冒出来，然后越想越不对劲的脑洞。
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm transition hover:-translate-y-0.5"
            >
              返回首页
            </Link>
            <span className="inline-flex items-center rounded-full bg-white/55 px-5 py-3 text-sm text-[#627165]">
              慢慢添砖中
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,1fr)_220px]">
          <Link
            href="/buheshiyi/sweet-ten-thousand-years"
            className="group relative overflow-hidden rounded-[2rem] bg-[#e7eee3] p-7 shadow-[0_22px_54px_rgba(96,113,95,0.12)] ring-1 ring-[rgba(78,102,83,0.14)] transition duration-200 hover:-translate-y-1.5"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 320 200"
              className="pointer-events-none absolute inset-0 h-full w-full fill-none text-[rgba(102,126,103,0.2)]"
            >
              <path d="M30 156c34-20 68-28 104-22 20 4 40 16 60 12 22-4 40-20 66-28" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M236 50c18-12 34-14 48-6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="88" cy="58" r="12" stroke="currentColor" strokeWidth="1.2" />
              <path d="M88 46v24M76 58h24" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
            </svg>
            <div className="relative z-10">
              <p className="text-sm tracking-[0.16em] text-[#627165]">互动卡 01</p>
              <h2 className="mt-4 max-w-2xl text-[2rem] font-semibold leading-[1.22] text-[#314438] sm:text-[2.35rem]">
                甜你一万年
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#546258]">
                一万年后，有人挖到你的骨头，然后大概率不会先跟你打招呼。
              </p>
              <div className="mt-7 inline-flex items-center rounded-full bg-white/72 px-4 py-2 text-sm text-[#314438] transition group-hover:translate-x-1">
                点开看看
              </div>
            </div>
          </Link>

          <div className="rounded-[2rem] border border-dashed border-[rgba(78,102,83,0.16)] bg-white/45 p-6 text-[#627165]">
            <p className="text-sm tracking-[0.16em]">下一张</p>
            <p className="mt-4 text-lg leading-8">
              还没冒出来，
              <br />
              但坑先留着。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
