import type { Metadata } from "next";
import { FaqList, KakaoCta, PageTitle, Steps } from "@/components/ui/Section";
import DesignTabs from "@/components/design/DesignTabs";

export const metadata: Metadata = {
  title: "디자인·영상 의뢰",
  description: "방송 디자인(시그니처·오버레이)과 영상 편집 의뢰",
};

const STEPS = [
  { no: "01", title: "상담", desc: "레퍼런스·방향 카카오톡 상담" },
  { no: "02", title: "시안", desc: "초안 시안 전달" },
  { no: "03", title: "수정", desc: "피드백 반영 (횟수 안내)" },
  { no: "04", title: "납품", desc: "원본 파일 일괄 전달" },
];

const FAQS = [
  { q: "수정은 몇 번까지 가능한가요?", a: "기본 2회 수정이 포함되며, 추가 수정은 건당 비용이 발생합니다." },
  { q: "작업 기간은 얼마나 걸리나요?", a: "품목에 따라 다르지만 시그니처는 보통 1~2주, 오버레이 세트는 2~3주 정도입니다." },
  { q: "원본 파일도 주나요?", a: "네. 납품 시 PSD/AI 등 원본 파일을 함께 전달합니다." },
];

export default function DesignPage() {
  return (
    <>
      <PageTitle eyebrow="DESIGN & VIDEO" title="디자인 · 영상 의뢰" subtitle="시그니처 · 오버레이부터 영상 편집까지" />

      <DesignTabs />

      <Steps title="제작 절차" items={STEPS} />

      <section className="mx-auto max-w-5xl px-4 pb-14">
        <p className="mb-2 px-1 text-sm font-bold">자주 묻는 질문</p>
        <FaqList items={FAQS} />
      </section>

      <KakaoCta title="제작 문의는 카카오톡으로" subtitle="레퍼런스 이미지를 함께 보내주시면 상담이 빨라집니다" />
    </>
  );
}
