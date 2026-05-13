import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto",
});

export const metadata: Metadata = {
  title: "김은선 — Designer",
  description: "디자이너 김은선의 소개 페이지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKR.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[var(--font-noto)]">
        {children}
      </body>
    </html>
  );
}
