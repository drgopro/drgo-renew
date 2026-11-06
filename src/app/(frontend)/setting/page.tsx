import type { Metadata } from "next";
import Link from "next/link";
import { KakaoCta } from "@/components/ui/Section";
import SettingTabs from "@/components/setting/SettingTabs";

export const metadata: Metadata = {
  title: "방송 세팅 비용 안내",
  description: "방문·원격·야외 인터넷 방송 세팅 비용 안내",
};

const STEPS = [
  { no: "01", title: "상담", desc: "카카오톡으로 환경·예산 상담" },
  { no: "02", title: "견적", desc: "맞춤 구성·확정 견적 안내" },
  { no: "03", title: "세팅", desc: "방문/원격/야외 세팅 진행" },
  { no: "04", title: "사후지원", desc: "30일 무상 원격 A/S" },
];

const FAQS = [
  { q: "세팅 후 문제가 생기면 어떻게 하나요?", a: "세팅 후 30일간 무상 원격 A/S를 지원합니다. 카카오톡 채널로 연락 주시면 됩니다." },
  { q: "장비가 하나도 없어도 되나요?", a: "네. 상담에서 예산에 맞는 장비 구성을 제안드리고, 구매 대행도 가능합니다." },
  { q: "지방 거주인데 방문 세팅이 가능한가요?", a: "수도권 외 지역은 출장비 협의 후 방문 가능하며, 대부분의 설정은 원격 세팅으로도 해결됩니다." },
  { q: "세팅에 시간이 얼마나 걸리나요?", a: "방문 기본 세팅은 2~4시간, 원격 세팅은 1~2시간 정도 소요됩니다." },
  { q: "치지직·숲(SOOP)·유튜브 모두 가능한가요?", a: "네. 플랫폼별 인코딩 권장값에 맞춰 세팅해 드립니다." },
  { q: "2PC 송출도 세팅해 주나요?", a: "네. 게임 PC와 송출 PC 분리 구성, 오디오 라우팅까지 세팅해 드립니다." },
];

export default function SettingPage() {
  return (
    <>
      {/* 타이틀 — 컴팩트 */}
      <div className="px-4 pb-8 pt-12 text-center">
        <p className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-400">
          <span className="text-accent">★</span>SETUP PRICING
        </p>
        <h1 className="mt-3 text-2xl font-black md:text-3xl">인터넷 방송 세팅, 얼마면 될까요?</h1>
        <p className="mt-2 text-sm text-neutral-500">방문 · 원격 · 야외 세팅 비용 안내</p>
      </div>

      {/* 탭 + 가격표 */}
      <SettingTabs />

      {/* 진행 절차 4단계 */}
      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-center text-lg font-bold">진행 절차</h2>
        <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <div key={s.no} className="pop-sm relative rounded-xl bg-white p-5 transition hover:-translate-y-0.5">
              <p className="text-sm font-black text-accent">{s.no}</p>
              <p className="mt-1.5 font-bold">{s.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-neutral-500">{s.desc}</p>
              {i < STEPS.length - 1 && (
                <span className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-neutral-300 md:block">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 셀프 견적 + FAQ */}
      <section className="mx-auto grid max-w-5xl gap-5 px-4 pb-14 md:grid-cols-5">
        <div className="pop flex flex-col items-start justify-center rounded-2xl bg-ink p-7 text-white md:col-span-2">
          <p className="text-xs font-bold tracking-[0.2em] text-neutral-400">
            <span className="text-accent">★</span> SELF ESTIMATE
          </p>
          <p className="mt-3 text-xl font-black leading-snug">
            장비·환경 몇 가지만 고르면
            <br />
            예상 비용 자동 계산
          </p>
          <Link
            href="/estimate"
            className="mt-5 rounded-lg bg-kakao px-6 py-2.5 text-sm font-black text-kakao-ink transition hover:-translate-y-0.5"
          >
            셀프 견적 내보기 →
          </Link>
        </div>
        <div className="md:col-span-3">
          <p className="mb-2 px-1 text-sm font-bold">자주 묻는 질문</p>
          <div className="pop divide-y divide-neutral-100 rounded-2xl bg-white">
            {FAQS.map((f) => (
              <details key={f.q} className="group px-5 py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold">
                  Q. {f.q}
                  <span className="float-right text-neutral-400 transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <KakaoCta
        title="세팅 상담은 카카오톡으로"
        subtitle="상담 가능 시간 · 월–목 12:30–20:30 · 금–토 13:00–18:30 · 일/공휴일 휴무"
      />
    </>
  );
}
