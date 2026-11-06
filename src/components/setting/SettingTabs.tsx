"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// 방송 세팅 탭별 가격/안내 콘텐츠 (정적 프리뷰 호환: 탭 전환은 클라이언트에서)
// ※ 가격·항목은 디자인 확인용 예시 — 확정 콘텐츠는 CMS 연동 시 교체

type PriceRow = { name: string; note?: string; price: string; hot?: boolean };

const TABS: { key: string; label: string; desc: string; rows: PriceRow[]; extra?: "travel" | "gear-note" }[] = [
  {
    key: "visit",
    label: "방문 세팅",
    desc: "전문가가 직접 방문해 방송 환경을 완성합니다 — 케이블 정리까지.",
    rows: [
      { name: "기본 방문 세팅", note: "OBS·오디오·송출 최적화", price: "220,000원", hot: true },
      { name: "2PC 송출 구성", note: "게임PC + 송출PC 분리", price: "+110,000원" },
      { name: "조명 세팅 추가", note: "키라이트 2点 배치 기준", price: "+55,000원" },
      { name: "케이블 정리", note: "몰딩·타이 정리 포함", price: "+77,000원" },
    ],
    extra: "travel",
  },
  {
    key: "remote",
    label: "원격 세팅",
    desc: "전국 어디서나 — 원격 접속으로 방송 설정을 최적화합니다.",
    rows: [
      { name: "원격 기본 세팅", note: "OBS 인코딩·장면 구성", price: "77,000원", hot: true },
      { name: "오디오 체인 세팅", note: "노이즈 제거·컴프레서", price: "+33,000원" },
      { name: "원격 트러블슈팅", note: "끊김·프레임 드랍 진단 (1회)", price: "55,000원" },
    ],
  },
  {
    key: "outdoor",
    label: "야외 방송 세팅",
    desc: "야외·이동 방송(IRL) 장비 구성과 송출 세팅.",
    rows: [
      { name: "야외 방송 기본 구성", note: "LTE 본딩·백팩 송출", price: "상담 견적", hot: true },
      { name: "장비 렌탈 패키지", note: "캠·마이크·배터리 일괄", price: "상담 견적" },
    ],
  },
  {
    key: "gear",
    label: "장비 구매 참고가",
    desc: "예산대별 추천 장비 — 구매 대행도 가능합니다.",
    rows: [
      { name: "입문 캠 세트", note: "웹캠 + 마이크 + 조명 1点", price: "~30만원대" },
      { name: "미러리스 캠 세트", note: "ZV-E10 + 16mm 단렌즈", price: "~120만원대" },
      { name: "오디오 인터페이스", note: "GoXLR 등 방송용 믹서", price: "~60만원대" },
    ],
    extra: "gear-note",
  },
];

const TRAVEL = [
  { zone: "수도권 A", fee: "무료" },
  { zone: "수도권 B", fee: "22,000원" },
  { zone: "수도권 C", fee: "33,000원" },
  { zone: "그 외 지방", fee: "협의" },
];

function Pills({ active }: { active: string }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 px-4">
      {TABS.map((t) => (
        <Link
          key={t.key}
          href={`/setting?tab=${t.key}`}
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
  const param = useSearchParams().get("tab") ?? "visit";
  const tab = TABS.find((t) => t.key === param) ?? TABS[0];

  return (
    <>
      <Pills active={tab.key} />

      <div className="mx-auto mt-8 max-w-3xl px-4">
        <p className="text-center text-sm text-neutral-500">{tab.desc}</p>

        <div className="mt-6 space-y-2.5">
          {tab.rows.map((row) => (
            <div
              key={row.name}
              className={`flex items-center justify-between rounded-xl px-5 py-4 transition hover:-translate-y-0.5 ${
                row.hot ? "pop bg-white" : "border-2 border-neutral-200 hover:border-ink"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div>
                  <p className="text-[15px] font-semibold">
                    {row.name}
                    {row.hot && (
                      <span className="ml-2 rounded-md bg-accent px-1.5 py-0.5 align-middle text-[10px] font-black text-white">
                        BASIC
                      </span>
                    )}
                  </p>
                  {row.note && <p className="mt-0.5 text-xs text-neutral-400">{row.note}</p>}
                </div>
              </div>
              <p className="shrink-0 text-[15px] font-bold">{row.price}</p>
            </div>
          ))}
        </div>

        {tab.extra === "travel" && (
          <div className="pop-sm mt-5 grid grid-cols-4 overflow-hidden rounded-xl bg-white text-center text-sm">
            {TRAVEL.map((t) => (
              <div key={t.zone} className="border-r border-neutral-100 py-3 last:border-r-0">
                <p className="text-xs text-neutral-400">{t.zone}</p>
                <p className="mt-1 font-bold">{t.fee}</p>
              </div>
            ))}
          </div>
        )}
        {tab.extra === "gear-note" && (
          <p className="mt-4 rounded-xl bg-neutral-50 px-5 py-3.5 text-center text-xs text-neutral-500">
            시세에 따라 변동됩니다 — 예산을 알려주시면 최적 조합을 제안드립니다.
          </p>
        )}

        <p className="mt-4 text-center text-[11px] text-neutral-300">
          * 표시 가격은 디자인 확인용 예시입니다 (확정 콘텐츠는 CMS 연동 시 반영)
        </p>
      </div>
    </>
  );
}

export default function SettingTabs() {
  return (
    <Suspense>
      <Inner />
    </Suspense>
  );
}
