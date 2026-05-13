"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-15 pt-30 pb-20 z-10">
      <div className="max-w-3xl">
        <span
          className="inline-block text-[0.75rem] tracking-[0.25em] uppercase border px-3.5 py-1.5 mb-9 rounded-sm"
          style={{ color: "var(--red)", borderColor: "var(--red)", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Portfolio · 2026
        </span>

        <h1
          className="text-[clamp(3rem,8vw,7rem)] font-black leading-[1.05] tracking-tight mb-2"
        >
          김<span style={{ color: "var(--red)", textShadow: "0 0 40px var(--red-glow)" }}>은선</span>
        </h1>

        <p
          className="text-[clamp(1.1rem,2.5vw,1.6rem)] font-light text-[#888] tracking-[0.08em] mb-10"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Designer &mdash; 디자이너
        </p>

        <p className="text-[1.05rem] font-light text-[#aaa] max-w-[520px] leading-[1.85] mb-13">
          사용자의 시선으로 세상을 바라보고,<br />
          디자인으로 이야기를 전달합니다.<br />
          아름다움과 기능성이 만나는 그 지점에서 작업합니다.
        </p>

        <div className="flex gap-4 flex-wrap">
          <a
            href="#philosophy"
            className="inline-block px-8 py-3.5 text-[0.85rem] tracking-[0.12em] uppercase rounded-sm transition-all duration-250 text-white hover:-translate-y-0.5"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              background: "transparent",
              border: "2px solid #333",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--red)";
              (e.currentTarget as HTMLAnchorElement).style.color = "var(--red)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#333";
              (e.currentTarget as HTMLAnchorElement).style.color = "#f5f5f5";
            }}
          >
            철학 &amp; 가치관
          </a>
        </div>
      </div>

      {/* 우측 데코 */}
      <div className="absolute right-15 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 opacity-40">
        <div className="w-px h-20" style={{ background: "linear-gradient(to bottom, transparent, var(--red), transparent)" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--red)" }} />
        <div className="w-px h-20" style={{ background: "linear-gradient(to bottom, transparent, var(--red), transparent)" }} />
      </div>
    </section>
  );
}
