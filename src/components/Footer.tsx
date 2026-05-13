export default function Footer() {
  return (
    <footer
      className="relative z-10 px-15 py-15 flex justify-between items-center flex-wrap gap-5"
      style={{ borderTop: "1px solid #1a1a1a" }}
    >
      <div
        className="font-bold tracking-[0.1em] text-[1rem]"
        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
      >
        KIM <span style={{ color: "var(--red)" }}>EUNSUN</span>
      </div>
      <div className="text-[0.8rem] text-[#888] tracking-[0.05em]">
        &copy; 2026 김은선. All rights reserved.
      </div>
    </footer>
  );
}
