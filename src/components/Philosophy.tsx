"use client";

const PRINCIPLES = [
  {
    num: "01",
    title: "사용자 중심",
    desc: "모든 디자인 결정의 출발점은 사용자입니다. 그들의 불편함을 없애고, 경험을 풍요롭게 만드는 것이 목표입니다.",
  },
  {
    num: "02",
    title: "단순함의 힘",
    desc: "복잡함을 제거할 때 진짜 아름다움이 드러납니다. 꼭 필요한 것만 남기는 과정이 디자인의 본질입니다.",
  },
  {
    num: "03",
    title: "지속적 성장",
    desc: "트렌드를 따라가되 휩쓸리지 않고, 나만의 시각과 감각을 꾸준히 발전시켜 나갑니다.",
  },
];

export default function Philosophy() {
  return (
    <div
      id="philosophy"
      style={{ background: "var(--black-2)", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}
    >
      <div className="max-w-[1100px] mx-auto px-15 py-25">
        <p
          className="text-[0.72rem] tracking-[0.3em] uppercase mb-5 flex items-center gap-3"
          style={{ color: "var(--red)", fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Design Philosophy
          <span className="block h-px w-10" style={{ background: "var(--red)" }} />
        </p>

        <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight leading-[1.15] mb-10">
          디자인에 대한<br />나의 생각
        </h2>

        <div
          className="relative pl-13 mb-15"
          style={{ borderLeft: "3px solid var(--red)" }}
        >
          <span
            className="absolute top-3 left-2 text-[7rem] leading-none font-bold pointer-events-none select-none"
            style={{ color: "var(--red)", opacity: 0.15, fontFamily: "'Space Grotesk', sans-serif" }}
          >
            &ldquo;
          </span>
          <p className="text-[clamp(1.2rem,2.5vw,1.7rem)] font-light leading-[1.7] text-white">
            좋은 디자인은 눈에 보이지 않습니다.<br />
            사용자가 디자인을 의식하지 못할 때,<br />
            그것이 가장 완성된 형태입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRINCIPLES.map(({ num, title, desc }) => (
            <div
              key={num}
              className="rounded-lg p-8 transition-all duration-250 hover:-translate-y-1 cursor-default"
              style={{ background: "var(--black-3)", border: "1px solid #222" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--red)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "#222")}
            >
              <div
                className="text-[2.5rem] font-bold leading-none mb-4 opacity-25"
                style={{ color: "var(--red)", fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {num}
              </div>
              <h4 className="text-[1rem] font-bold mb-2.5">{title}</h4>
              <p className="text-[0.875rem] text-[#888] leading-[1.75]">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
