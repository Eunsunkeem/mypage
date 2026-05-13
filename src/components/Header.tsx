"use client";

const NAV_LINKS = [
  { href: "#about", label: "소개" },
  { href: "#philosophy", label: "철학" },
];

export default function Header() {
  return (
    <header
      className="fixed top-0 w-full px-15 py-5 flex justify-between items-center z-50"
      style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.95), transparent)" }}
    >
      <img src="/logo.png" alt="로고" className="h-8 w-auto" />
      <nav className="hidden md:flex">
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="ml-9 text-[#888] text-[0.85rem] tracking-[0.1em] uppercase no-underline hover:text-white transition-colors"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
