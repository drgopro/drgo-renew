import type { Metadata } from "next";
import { KakaoCta, Placeholder, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "회사소개",
  description: "라이브 스트리밍 전문 토탈 솔루션 기업, 닥터고블린컴퍼니",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <div className="flex flex-col items-center gap-10 py-6 md:flex-row">
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl font-bold leading-snug">
              라이브 스트리밍 전문
              <br />
              토탈 솔루션 기업
            </h1>
            <p className="leading-relaxed text-neutral-500">
              회사 소개 문단 (CMS) — 연혁 하이라이트, 누적 세팅 건수, 주요 파트너 등 신뢰 요소를 짧게.
            </p>
          </div>
          <Placeholder label="대표 이미지 / 캐릭터" className="h-60 w-full md:w-105" />
        </div>
      </Section>

      <Section title="팀 소개 (CMS 연동 예정)">
        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Placeholder key={i} label="직원 카드" className="h-44" />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Placeholder label="연혁 타임라인" className="h-28" />
          <Placeholder label="오시는 길 (지도)" className="h-28" />
        </div>
      </Section>

      <KakaoCta />
    </>
  );
}
