import type { Metadata } from "next";
import { Noto_Sans_KR, Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-sans-kr",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

// 디스플레이(헤드라인) 서체 — 한글은 Noto Sans KR로 폴백
const schibsted = Schibsted_Grotesk({
  variable: "--font-display-latin",
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drgo.pro"),
  title: {
    default: "닥터고블린컴퍼니 — 인터넷 방송 세팅·렌탈·디자인",
    template: "%s | 닥터고블린컴퍼니",
  },
  description:
    "라이브 스트리밍 전문 토탈 솔루션 — 방문·원격 방송 세팅, 장비·서버·방송룸 렌탈, 방송 디자인·영상 제작",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "닥터고블린컴퍼니",
    images: ["/img/og_image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${schibsted.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        {/* 모바일 전용 카카오톡 상담 플로팅 버튼 (와이어프레임 모바일 메인 보드) */}
        <a
          href="https://pf.kakao.com/"
          aria-label="카카오톡 상담"
          className="fixed bottom-5 right-4 z-50 flex h-14 w-14 flex-col items-center justify-center rounded-full bg-kakao text-[11px] font-bold leading-tight text-kakao-ink shadow-lg shadow-black/20 md:hidden"
        >
          카톡
          <span>상담</span>
        </a>
      </body>
    </html>
  );
}
