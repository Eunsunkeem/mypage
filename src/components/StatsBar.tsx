const STATS = [
  { num: "∞", label: "창의적 아이디어" },
  { num: "01", label: "나만의 스타일" },
  { num: "100%", label: "열정" },
];

export default function StatsBar() {
  return (
    <div
      className="relative z-10 flex justify-around flex-wrap px-15 py-12"
      style={{ background: "var(--black-2)", borderTop: "1px solid #1e1e1e", borderBottom: "1px solid #1e1e1e" }}
    >
      {STATS.map(({ num, label }) => (
        <div key={label} className="text-center px-10 py-5">
          <span
            className="block text-5xl font-bold leading-none mb-2"
            style={{ color: "var(--red)", fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {num}
          </span>
          <span className="text-[0.8rem] tracking-[0.15em] uppercase text-[#888]">{label}</span>
        </div>
      ))}
    </div>
  );
}
