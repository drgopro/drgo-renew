import type { Metadata } from "next";
import { KakaoCta, PageTitle } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "회사소개",
  description: "라이브 스트리밍 전문 토탈 솔루션 기업, 닥터고블린컴퍼니",
};

// ※ 팀/파트너는 디자인 확인용 자리 — CMS(users 컬렉션)·실자료 연동 시 교체
const TEAM = [
  { name: "직원 이름", role: "대표 · 세팅 총괄" },
  { name: "직원 이름", role: "기술팀 · 방문 세팅" },
  { name: "직원 이름", role: "기술팀 · 원격 지원" },
  { name: "직원 이름", role: "디자인팀" },
];

export default function AboutPage() {
  return (
    <>
      <PageTitle eyebrow="ABOUT US" title="닥터고블린컴퍼니" subtitle="라이브 스트리밍 전문 토탈 솔루션 제공 기업" />

      {/* 소개 + 대표 이미지 */}
      <section className="mx-auto max-w-5xl px-4 py-6">
        <div className="flex flex-col items-center gap-8 md:flex-row">
          <div className="flex-1 space-y-4">
            <h2 className="display-type text-2xl font-black leading-snug">
              방송 세팅부터 렌탈·제작까지,
              <br />
              스트리머의 시작과 성장을 함께합니다
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              회사 소개 문단 (CMS 수정 예정) — 연혁 하이라이트, 누적 세팅 건수, 주요 파트너 등 신뢰
              요소를 짧게 담습니다.
            </p>
          </div>
          {/* 대표 이미지 / 닥터고블린 캐릭터 자리 */}
          <div className="pop aspect-[7/4] w-full overflow-hidden rounded-2xl bg-neutral-200 md:w-105" />
        </div>
      </section>

      {/* 팀 소개 */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="display-type text-lg font-bold">팀 소개</h2>
        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
          {TEAM.map((m, i) => (
            <div key={i} className="pop-sm flex flex-col items-center gap-3 rounded-xl bg-white p-6 transition hover:-translate-y-0.5">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-ink bg-ink text-xl text-accent">
                ★
              </span>
              <p className="font-bold">{m.name}</p>
              <p className="-mt-2 text-xs text-muted">{m.role}</p>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] text-neutral-300">* 팀 카드는 CMS(직원 계정) 연동 시 실제 정보로 교체됩니다</p>
      </section>

      {/* 파트너 */}
      <section className="border-y-2 border-ink bg-surface">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <h2 className="display-type text-lg font-bold">파트너</h2>
          <div className="mt-5 grid grid-cols-4 gap-3 md:grid-cols-8">
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i} className="h-14 rounded-lg border border-neutral-200 bg-white" />
            ))}
          </div>
          <p className="mt-4 text-center text-[11px] text-neutral-400">* 파트너 로고 자리 — 자료 전달 시 교체</p>
        </div>
      </section>

      {/* 오시는 길 + 상담 시간 */}
      <section className="mx-auto grid max-w-5xl gap-5 px-4 py-12 md:grid-cols-2">
        <div className="pop-sm rounded-2xl bg-ink p-7 text-white">
          <p className="text-sm font-bold">
            <span className="text-accent">★</span> 오시는 길
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-200">
            서울특별시 동작구 장승배기로, 2층
          </p>
          <p className="mt-2 text-xs text-inv-muted">7호선 장승배기역 도보권 · 건물 주차 안내는 방문 전 문의</p>
        </div>
        <div className="pop-sm rounded-2xl bg-white p-7">
          <p className="text-sm font-bold">상담 가능 시간</p>
          <ul className="mt-3 space-y-1.5 text-sm text-muted">
            <li className="flex justify-between"><span>월 – 목</span><span className="font-semibold text-ink">12:30 – 20:30</span></li>
            <li className="flex justify-between"><span>금 – 토</span><span className="font-semibold text-ink">13:00 – 18:30</span></li>
            <li className="flex justify-between"><span>일 · 공휴일</span><span className="font-semibold text-accent">휴무</span></li>
          </ul>
          <p className="mt-3 text-xs text-neutral-400">세팅 상담은 전화 대신 카카오톡으로 받고 있습니다</p>
        </div>
      </section>

      <KakaoCta title="궁금한 점은 카카오톡으로" />
    </>
  );
}
