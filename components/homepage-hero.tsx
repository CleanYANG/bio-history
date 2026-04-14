export function HomepageHero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24 lg:px-12">
      <div className="homepage-hero-panel max-w-4xl">
        <div className="inline-flex items-center rounded-full bg-white/82 px-4 py-2 text-sm text-[var(--muted)] shadow-sm ring-1 ring-[var(--line)] backdrop-blur">
          红的脑袋今天也很闲
        </div>
        <h1 className="homepage-title mt-8 text-balance">
          <span className="homepage-title-red">红</span>
          <span className="homepage-title-rest">的奇思妙想</span>
          <span className="homepage-title-side-note">还是吃得太饱</span>
        </h1>
      </div>
    </section>
  );
}
