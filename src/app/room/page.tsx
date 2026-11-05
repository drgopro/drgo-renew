import type { Metadata } from "next";
import { KakaoCta, PageTitle, Placeholder, Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "방송룸 대여",
  description: "장비 완비 스튜디오 — 시간/일/월 단위 이용",
};

export default function RoomPage() {
  return (
    <>
      <PageTitle title="방송룸 대여 안내" subtitle="장비 완비 스튜디오 — 시간/일/월 단위 이용" />

      <Section title="호실 안내">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-neutral-300">
            <div className="h-52 bg-neutral-200" />
            <div className="p-4">
              <p className="font-bold">1호실</p>
              <p className="mt-1 text-sm text-neutral-500">구성 장비 · 요금 안내 (CMS)</p>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-neutral-300">
            <div className="h-52 bg-neutral-200" />
            <div className="p-4">
              <p className="font-bold">2·3호실</p>
              <p className="mt-1 text-sm text-neutral-500">구성 장비 · 요금 안내 (CMS)</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 md:grid-cols-2">
          <Placeholder label="이용 요금표 · 예약 안내" className="h-28" />
          <Placeholder label="이용 규정 · 오시는 길" className="h-28" />
        </div>
      </Section>

      <KakaoCta title="방송룸 예약·문의는 카카오톡으로" />
    </>
  );
}
