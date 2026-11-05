import type { Metadata } from "next";
import { KakaoCta, PageTitle, Placeholder, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "자가 견적",
  description: "몇 가지 선택만으로 예상 세팅 비용을 확인하세요",
};

export default function EstimatePage() {
  return (
    <>
      <PageTitle title="자가 견적" subtitle="몇 가지 선택만으로 예상 비용 확인 (간소화 유지 범위)" />
      <Section>
        <Placeholder label="자가 견적 위젯 — 기존 견적 로직 이관 예정 (P4)" className="h-96" />
      </Section>
      <KakaoCta title="정확한 견적은 카카오톡 상담으로" />
    </>
  );
}
