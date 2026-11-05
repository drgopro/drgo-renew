import type { Metadata } from "next";
import { KakaoCta, PageTitle, Placeholder, Section } from "@/components/ui/Section";
import Tabs from "@/components/ui/Tabs";

export const metadata: Metadata = {
  title: "방송 세팅 비용 안내",
  description: "방문·원격 인터넷 방송 세팅 비용 안내",
};

const TABS = [
  { key: "visit", label: "방문 세팅" },
  { key: "remote", label: "원격 세팅" },
  { key: "gear", label: "장비 구매 참고가" },
];

export default function SettingPage() {
  return (
    <>
      <PageTitle title="인터넷 방송 세팅, 얼마면 될까요?" subtitle="방문·원격 세팅 비용 안내" />
      <Tabs base="/setting" tabs={TABS} defaultKey="visit" />

      <Section title="기본 서비스 · 가격표 (CMS 연동 예정)">
        <div className="space-y-3.5">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex h-14 items-center justify-between rounded-lg border border-neutral-300 px-5 text-sm">
              <span>서비스 항목명</span>
              <span className="font-bold">000,000원</span>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Placeholder label="진행 절차 4단계 (상담 → 견적 → 세팅 → 사후지원)" className="h-28" />
          <Placeholder label="FAQ 아코디언" className="h-28" />
        </div>
      </Section>

      <KakaoCta title="세팅 상담은 카카오톡으로" />
    </>
  );
}
