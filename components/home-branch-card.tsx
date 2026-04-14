import Link from "next/link";

type HomeBranchCardProps = {
  title: string;
  subtitle: string;
  note: string;
  href: string;
  index: number;
  className?: string;
  palette: {
    base: string;
    ring: string;
    shadow: string;
    text: string;
    mute: string;
    accent: string;
    doodle: string;
  };
};

function NaturalDoodles({
  index,
  doodleClass,
}: {
  index: number;
  doodleClass: string;
}) {
  if (index === 0) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 240 180"
        className={`pointer-events-none absolute inset-0 h-full w-full fill-none ${doodleClass}`}
      >
        <path d="M28 130C52 118 63 100 81 83C95 69 111 56 138 40" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M150 34C149 48 158 63 171 70C183 76 195 86 199 102" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M88 120C102 116 113 104 119 90C124 79 128 70 136 62" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M74 92C76 85 80 79 88 75" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 240 180"
        className={`pointer-events-none absolute inset-0 h-full w-full fill-none ${doodleClass}`}
      >
        <circle cx="40" cy="42" r="2.2" fill="currentColor" stroke="none" />
        <circle cx="142" cy="58" r="1.8" fill="currentColor" stroke="none" />
        <circle cx="196" cy="101" r="2.6" fill="currentColor" stroke="none" />
        <circle cx="87" cy="124" r="1.8" fill="currentColor" stroke="none" />
        <path d="M34 114C66 82 90 86 113 64C135 42 161 43 204 64" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M120 22C108 58 110 76 135 92C157 106 168 127 161 149" strokeWidth="1.1" strokeLinecap="round" strokeDasharray="1 7" />
        <path d="M58 42C72 47 81 54 92 65" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 240 180"
      className={`pointer-events-none absolute inset-0 h-full w-full fill-none ${doodleClass}`}
    >
      <path d="M40 40C58 30 70 32 84 45" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M176 46C187 45 197 50 205 61" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M60 132C74 114 92 108 112 110" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M154 116C162 128 174 134 190 133" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M120 64l4 9 10 1-8 6 2 10-8-5-8 5 2-10-8-6 10-1 4-9Z" strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="76" cy="72" r="10" strokeWidth="1.1" />
      <circle cx="184" cy="104" r="7" strokeWidth="1.1" />
    </svg>
  );
}

export function HomeBranchCard({
  title,
  subtitle,
  note,
  href,
  index,
  className = "",
  palette,
}: HomeBranchCardProps) {
  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${palette.base} p-6 transition duration-200 ${palette.shadow} ring-1 ${palette.ring} hover:-translate-y-2 hover:shadow-[0_32px_70px_rgba(17,17,17,0.12)] sm:p-7 ${className}`}
    >
      <NaturalDoodles index={index} doodleClass={palette.doodle} />

      <div className="relative z-10 flex min-h-[320px] flex-col">
        <div className="flex items-start justify-between">
          <span
            className={`rounded-full ${palette.accent} px-3 py-1 text-xs tracking-[0.14em] ${palette.mute}`}
          >
            入口 {index + 1}
          </span>
          <span className={`text-lg transition duration-200 group-hover:translate-x-1 ${palette.text}`}>
            →
          </span>
        </div>

        <div className="mt-14">
          <h2 className={`text-3xl font-semibold tracking-tight sm:text-[2rem] ${palette.text}`}>
            {title}
          </h2>
          <p className={`mt-4 max-w-xs text-base leading-7 ${palette.mute}`}>
            {subtitle}
          </p>
        </div>

        <div className="mt-auto pt-12">
          <p className={`max-w-xs text-sm leading-7 ${palette.mute}`}>{note}</p>
        </div>
      </div>
    </Link>
  );
}
