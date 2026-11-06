"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// 디자인/영상 탭 콘텐츠 (정적 프리뷰 호환: 클라이언트 전환)
// ※ 가격·항목은 디자인 확인용 예시 — 확정 콘텐츠는 CMS 연동 시 교체

const TABS = [
  {
    key: "design",
    label: "디자인",
    desc: "시그니처 · 오버레이 · 배너까지, 방송 채널의 얼굴을 만듭니다.",
    rows: [
      { name: "캐리커쳐 / 시그니처", note: "채널 대표 이미지", price: "165,000원~", hot: true },
      { name: "방송 오버레이 세트", note: "대기·방송·휴식 화면 일괄", price: "220,000원~" },
      { name: "배너 · 패널", note: "치지직/숲 채널 꾸미기", price: "55,000원~" },
    ],
  },
  {
    key: "video",
    label: "영상",
    desc: "다시 보는 방송 — 편집부터 쇼츠까지 맡기세요.",
    rows: [
      { name: "영상 편집 (건당)", note: "풀영상 하이라이트 편집", price: "110,000원~", hot: true },
      { name: "쇼츠 패키지", note: "월 단위 숏폼 제작", price: "상담 견적" },
      { name: "인트로 / 아웃트로", note: "모션 그래픽 포함", price: "165,000원~" },
    ],
  },
];

function Pills({ active }: { active: string }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 px-4">
      {TABS.map((t) => (
        <Link
          key={t.key}
          href={`/design?tab=${t.key}`}
          scroll={false}
          className={
            t.key === active
              ? "pop-sm rounded-lg bg-ink px-6 py-2.5 text-sm font-bold text-white"
              : "rounded-lg border-2 border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-500 transition hover:border-ink hover:text-ink"
          }
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}

function Inner() {
  const param = useSearchParams().get("tab") ?? "design";
  const tab = TABS.find((t) => t.key === param) ?? TABS[0];

  return (
    <>
      <Pills active={tab.key} />

      <div className="mx-auto mt-8 max-w-5xl px-4">
        <p className="text-center text-sm text-muted">{tab.desc}</p>

        {/* 포트폴리오 (CMS 등록 예정) */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="pop-sm aspect-square overflow-hidden rounded-xl bg-neutral-200 transition hover:-translate-y-0.5" />
          ))}
        </div>

        {/* 참고 가격 */}
        <div className="mt-8 space-y-2.5">
          {tab.rows.map((row) => (
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
                {row.note && <p className="mt-0.5 text-xs text-muted">{row.note}</p>}
              </div>
              <p className="shrink-0 text-[15px] font-bold">{row.price}</p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-[11px] text-neutral-300">
          * 포트폴리오·가격은 디자인 확인용 예시입니다 (확정 콘텐츠는 CMS 연동 시 반영)
        </p>
      </div>
    </>
  );
}

export default function DesignTabs() {
  return (
    <Suspense>
      <Inner />
    </Suspense>
  );
}
