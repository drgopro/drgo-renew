import type { Metadata } from "next";
import Link from "next/link";
import { FaqList, KakaoCta, PageTitle, Steps } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "장비 렌탈",
  description: "방송 장비(촬영·오디오·조명)를 기간제로 대여",
};

// ※ 품목·가격은 디자인 확인용 예시 — 실제 품목은 CMS에서 직원이 등록/수정
const ITEMS = [
  { name: "미러리스 캠 세트", note: "ZV-E10 + 16mm 단렌즈", price: "일 33,000원" },
  { name: "방송용 믹서", note: "GoXLR 풀사이즈", price: "일 22,000원" },
  { name: "키라이트 2点 세트", note: "스탠드·소프트박스 포함", price: "일 16,500원" },
  { name: "캡처보드", note: "4K60 패스스루", price: "일 11,000원" },
  { name: "무선 마이크 세트", note: "2채널 수신기 포함", price: "일 16,500원" },
  { name: "송출용 노트북", note: "OBS 세팅 완료 상태로 제공", price: "일 44,000원" },
];

const STEPS = [
  { no: "01", title: "문의", desc: "품목·기간 카카오톡 문의" },
  { no: "02", title: "견적", desc: "대여료·보증금 안내" },
  { no: "03", title: "수령/설치", desc: "방문 수령 또는 설치 지원" },
  { no: "04", title: "반납", desc: "점검 후 보증금 반환" },
];

const FAQS = [
  { q: "보증금은 얼마인가요?", a: "품목별로 다르며 견적 시 함께 안내드립니다. 반납 점검 후 전액 반환됩니다." },
  { q: "대여 중 장비가 고장 나면 어떻게 하나요?", a: "정상 사용 중 자연 고장은 무상 교체해 드립니다. 파손·침수는 수리비가 청구될 수 있습니다." },
  { q: "장기 대여 할인이 있나요?", a: "주 단위·월 단위 대여는 할인 요율이 적용됩니다. 상담 시 안내드립니다." },
];

export default function RentalPage() {
  return (
    <>
      <PageTitle eyebrow="EQUIPMENT RENTAL" title="방송 장비 대여" subtitle="촬영 · 오디오 · 조명 장비를 기간제로" />

      <div className="pb-4 text-center">
        <Link
          href="/room"
          className="rounded-full border-2 border-dashed border-neutral-300 px-7 py-2.5 text-sm font-semibold text-muted transition hover:border-ink hover:text-ink"
        >
          방송룸 대여는 전용 페이지에서 →
        </Link>
      </div>

      {/* 대여 품목 */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {ITEMS.map((item) => (
            <div key={item.name} className="pop-sm overflow-hidden rounded-xl bg-white transition hover:-translate-y-0.5">
              <div className="aspect-[4/3] bg-neutral-200" />
              <div className="p-4">
                <p className="font-bold">{item.name}</p>
                <p className="mt-0.5 text-xs text-muted">{item.note}</p>
                <p className="mt-2 text-[15px] font-black">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-neutral-300">
          * 품목·가격은 디자인 확인용 예시입니다 (실제 품목은 CMS에서 등록/수정)
        </p>
      </section>

      <Steps title="대여 절차" items={STEPS} />

      {/* 이용 규정 + FAQ */}
      <section className="mx-auto grid max-w-5xl gap-5 px-4 pb-14 md:grid-cols-2">
        <div className="pop rounded-2xl bg-ink p-7 text-white">
          <p className="text-xs font-bold tracking-[0.2em] text-inv-muted">
            <span className="text-accent">★</span> RENTAL RULES
          </p>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-neutral-200">
            <li>· 대여 시 신분증 확인과 보증금이 필요합니다</li>
            <li>· 파손·분실 시 수리비 또는 감가 비용이 청구됩니다</li>
            <li>· 연체 시 일 단위 추가 요금이 발생합니다</li>
            <li>· 택배 대여는 왕복 배송비 별도입니다</li>
          </ul>
        </div>
        <div>
          <p className="mb-2 px-1 text-sm font-bold">자주 묻는 질문</p>
          <FaqList items={FAQS} />
        </div>
      </section>

      <KakaoCta title="대여 문의는 카카오톡으로" subtitle="재고·일정 확인 후 바로 안내드립니다" />
    </>
  );
}
