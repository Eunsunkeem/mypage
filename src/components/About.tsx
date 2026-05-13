const INFO_ROWS = [
  { key: "이름", value: "김은선" },
  { key: "직업", value: "디자이너" },
  { key: "관심 분야", value: "UI/UX, 브랜드 디자인" },
  { key: "스타일", value: "미니멀 & 임팩트" },
  { key: "언어", value: "한국어, English" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 px-15 py-25 max-w-[1100px] mx-auto w-full">
      <p
        className="text-[0.72rem] tracking-[0.3em] uppercase mb-5 flex items-center gap-3"
        style={{ color: "var(--red)", fontFamily: "'Space Grotesk', sans-serif" }}
      >
        About me
        <span className="block h-px w-10" style={{ background: "var(--red)" }} />
      </p>

      <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight leading-[1.15] mb-10">
        안녕하세요,<br />저는 김은선입니다.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-start">
        <div className="space-y-5">
          <p className="text-[#aaa] text-[1rem] leading-[1.9] font-light">
            저는 <strong className="text-white font-bold">시각과 경험</strong>을 디자인하는 디자이너입니다.
            아름다운 것을 만들어내는 일에서 진정한 즐거움을 찾고 있습니다.
          </p>
          <p className="text-[#aaa] text-[1rem] leading-[1.9] font-light">
            단순히 보기 좋은 것을 넘어, <strong className="text-white font-bold">사람과 사람 사이를 연결</strong>하는
            디자인을 추구합니다. 작은 디테일 하나에도 의미를 담고,
            사용자가 느끼는 감정까지 고려하며 작업합니다.
          </p>
          <p className="text-[#aaa] text-[1rem] leading-[1.9] font-light">
            새로운 것을 배우는 것을 두려워하지 않고, 끊임없이 성장하는
            디자이너가 되고자 합니다.
          </p>
        </div>

        <div
          className="rounded-lg p-9 relative overflow-hidden"
          style={{ background: "var(--black-3)", border: "1px solid #222" }}
        >
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{ background: "linear-gradient(90deg, var(--red), transparent)" }}
          />
          <h3
            className="text-[0.8rem] tracking-[0.2em] uppercase mb-6"
            style={{ color: "var(--red)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Basic Info
          </h3>
          {INFO_ROWS.map(({ key, value }, i) => (
            <div
              key={key}
              className="flex justify-between py-3.5 text-[0.9rem]"
              style={{ borderBottom: i < INFO_ROWS.length - 1 ? "1px solid #1e1e1e" : "none" }}
            >
              <span className="text-[#888] text-[0.8rem] tracking-[0.08em]">{key}</span>
              <span className="text-white">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
