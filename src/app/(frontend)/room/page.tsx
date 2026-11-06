import type { Metadata } from "next";
import { FaqList, KakaoCta, PageTitle } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "방송룸 대여",
  description: "장비 완비 스튜디오 — 시간/일/월 단위 이용",
};

// ※ 요금·시설은 디자인 확인용 예시 — 실제 내용은 CMS에서 수정
const ROOMS = [
  {
    name: "1호실",
    desc: "1인 방송 최적화 — 풀세팅 완료 상태로 바로 방송",
    tags: ["방음 시공", "2캠 구성", "키라이트", "GoXLR"],
  },
  {
    name: "2·3호실",
    desc: "합방·촬영용 — 최대 4인 동시 방송 가능",
    tags: ["4인 좌석", "크로마키", "3캠 구성", "오퍼레이팅 지원"],
  },
];

const PRICES = [
  { name: "시간 단위", note: "최소 2시간", price: "22,000원 / 시간", hot: true },
  { name: "일일 대여", note: "10시간 기준", price: "165,000원" },
  { name: "월 단위", note: "고정석 · 상담 후 계약", price: "상담 견적" },
];

const FAQS = [
  { q: "예약은 어떻게 하나요?", a: "카카오톡 채널로 날짜·시간을 보내주시면 가능 여부를 바로 안내드립니다." },
  { q: "장비를 가져가도 되나요?", a: "네. 개인 장비 반입 가능하며, 세팅이 필요하면 현장 지원해 드립니다." },
  { q: "연장은 어떻게 하나요?", a: "다음 예약이 없으면 현장에서 시간 단위로 연장 가능합니다." },
];

export default function RoomPage() {
  return (
    <>
      <PageTitle eyebrow="STUDIO RENTAL" title="방송룸 대여" subtitle="장비 완비 스튜디오 — 시간 · 일 · 월 단위 이용" />

      {/* 호실 안내 */}
      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="grid gap-5 md:grid-cols-2">
          {ROOMS.map((room) => (
            <div key={room.name} className="pop overflow-hidden rounded-2xl bg-white transition hover:-translate-y-0.5">
              <div className="aspect-video bg-neutral-200" />
              <div className="p-5">
                <p className="display-type text-lg font-black">{room.name}</p>
                <p className="mt-1 text-sm text-muted">{room.desc}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {room.tags.map((t) => (
                    <span key={t} className="rounded-md border border-neutral-200 bg-surface px-2 py-0.5 text-[11px] text-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 요금표 */}
      <section className="mx-auto max-w-5xl px-4 pb-10">
        <h2 className="display-type text-lg font-bold">요금표</h2>
        <div className="mt-4 space-y-2.5">
          {PRICES.map((row) => (
            <div
              key={row.name}
              className={`flex items-center justify-between rounded-xl px-5 py-4 transition hover:-translate-y-0.5 ${
                row.hot ? "pop bg-white" : "border-2 border-neutral-200 hover:border-ink"
              }`}
            >
              <div>
                <p className="text-[15px] font-semibold">
                  {row.name}
                  {row.hot && (
                    <span className="ml-2 rounded-md bg-accent px-1.5 py-0.5 align-middle text-[10px] font-black text-white">
                      BASIC
                    </span>
                  )}
                </p>
                <p className="mt-0.5 text-xs text-muted">{row.note}</p>
              </div>
              <p className="shrink-0 text-[15px] font-bold">{row.price}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-neutral-300">
          * 표시 요금은 디자인 확인용 예시입니다 (확정 콘텐츠는 CMS 연동 시 반영)
        </p>
      </section>

      {/* 이용 안내 + 오시는 길 + FAQ */}
      <section className="mx-auto grid max-w-5xl gap-5 px-4 pb-14 md:grid-cols-3">
        <div className="pop-sm rounded-2xl bg-white p-6">
          <p className="text-sm font-bold">이용 안내</p>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            <li>· 운영시간: 상담 후 예약제</li>
            <li>· 초과 이용은 시간 단위 과금</li>
            <li>· 이용 24시간 전까지 무료 취소</li>
          </ul>
        </div>
        <div className="pop-sm rounded-2xl bg-ink p-6 text-white">
          <p className="text-sm font-bold">
            <span className="text-accent">★</span> 오시는 길
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-200">
            서울 동작구 장승배기로
            <br />
            (상세 위치는 예약 확정 시 안내)
          </p>
          <p className="mt-2 text-xs text-inv-muted">건물 내 주차 가능 · 7호선 장승배기역 도보권</p>
        </div>
        <div>
          <p className="mb-2 px-1 text-sm font-bold">자주 묻는 질문</p>
          <FaqList items={FAQS} />
        </div>
      </section>

      <KakaoCta title="방송룸 예약은 카카오톡으로" subtitle="날짜·시간을 보내주시면 가능 여부를 바로 안내드립니다" />
    </>
  );
}
