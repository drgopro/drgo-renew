import type { Metadata } from "next";
import Link from "next/link";
import { KakaoCta, PageTitle, Placeholder, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "장비 렌탈",
  description: "방송 장비(촬영·오디오·조명)를 기간제로 대여",
};

export default function RentalPage() {
  return (
    <>
      <PageTitle title="방송 장비 대여" subtitle="장비(촬영·오디오·조명)를 기간제로" />
      <div className="pb-7 pt-7 text-center">
        <Link href="/room" className="rounded-full border border-dashed border-neutral-400 px-7 py-2.5 text-sm text-neutral-500 hover:border-ink hover:text-ink">
          방송룸 대여 →
        </Link>
      </div>

      <Section title="대여 품목 (CMS 연동 예정)">
        <div className="grid gap-3.5 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-neutral-300">
              <div className="h-32 bg-neutral-200" />
              <div className="p-3.5">
                <p className="font-bold">장비명</p>
                <p className="mt-1 text-sm text-neutral-500">일 00,000원 · 보증금 안내</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Placeholder label="대여 절차 4단계 (문의 → 견적 → 수령/설치 → 반납)" className="h-28" />
          <Placeholder label="이용 규정 · 파손/보험 안내" className="h-28" />
        </div>
      </Section>

      <KakaoCta title="대여 문의는 카카오톡으로" />
    </>
  );
}
