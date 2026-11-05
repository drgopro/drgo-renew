import type { Metadata } from "next";
import { KakaoCta, PageTitle, Placeholder, Section } from "@/components/ui/Section";
import Tabs from "@/components/ui/Tabs";

export const metadata: Metadata = {
  title: "디자인·영상 의뢰",
  description: "방송 디자인(시그니처·오버레이)과 영상 편집 의뢰",
};

const TABS = [
  { key: "design", label: "디자인" },
  { key: "video", label: "영상" },
];

export default function DesignPage() {
  return (
    <>
      <PageTitle title="디자인·영상 의뢰" subtitle="디자인(시그니처·오버레이)부터 영상 편집까지" />
      <Tabs base="/design" tabs={TABS} defaultKey="design" />

      <Section title="포트폴리오 (CMS 연동 예정)">
        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Placeholder key={i} label="작업물" className="h-40" />
          ))}
        </div>
      </Section>

      <Section title="품목·참고 가격 (CMS 연동 예정)">
        <div className="space-y-3.5">
          {["캐리커쳐 / 시그니처", "방송 오버레이 세트", "영상 편집 (건당)"].map((name) => (
            <div key={name} className="flex h-14 items-center justify-between rounded-lg border border-neutral-300 px-5 text-sm">
              <span>{name}</span>
              <span className="font-bold">000,000원~</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Placeholder label="진행 절차 4단계 (상담 → 시안 → 수정 → 납품)" className="h-28" />
          <Placeholder label="FAQ 아코디언" className="h-28" />
        </div>
      </Section>

      <KakaoCta title="제작 문의는 카카오톡으로" />
    </>
  );
}
