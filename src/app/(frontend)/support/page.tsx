import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/Section";
import Tabs from "@/components/ui/Tabs";

export const metadata: Metadata = {
  title: "고객지원",
  description: "공지사항 · 게시판 · 이벤트 · 강좌",
};

const TABS = [
  { key: "notice", label: "공지사항" },
  { key: "board", label: "게시판" },
  { key: "event", label: "이벤트" },
  { key: "class", label: "강좌" },
];

// ※ 목록은 디자인 확인용 더미 — posts 컬렉션 연동 시 실데이터로 교체
const ROWS = [
  { badge: "공지", title: "홈페이지 리뉴얼 오픈 안내", date: "2026. 11. 1.", pinned: true },
  { badge: "일반", title: "11월 방문 세팅 예약 일정 안내", date: "2026. 10. 28." },
  { badge: "일반", title: "방송룸 2호실 장비 업그레이드 완료", date: "2026. 10. 20." },
  { badge: "일반", title: "추석 연휴 상담 휴무 안내", date: "2026. 9. 24." },
  { badge: "일반", title: "원격 세팅 예약 폭주로 인한 일정 지연 안내", date: "2026. 9. 12." },
  { badge: "일반", title: "신규 렌탈 장비 입고 소식", date: "2026. 9. 2." },
];

export default function SupportPage() {
  return (
    <>
      <PageTitle eyebrow="SUPPORT" title="고객지원" subtitle="공지사항 · 게시판 · 이벤트 · 강좌" />
      <Tabs base="/support" tabs={TABS} defaultKey="notice" />

      <section className="mx-auto max-w-5xl px-4 py-10">
        <div className="pop divide-y divide-neutral-100 rounded-2xl bg-white">
          {ROWS.map((row) => (
            <div key={row.title} className="group flex cursor-pointer items-center gap-4 px-5 py-4">
              <span
                className={
                  row.pinned
                    ? "shrink-0 rounded-md bg-accent px-2.5 py-1 text-[11px] font-black text-white"
                    : "shrink-0 rounded-md border border-neutral-200 bg-surface px-2.5 py-1 text-[11px] text-muted"
                }
              >
                {row.badge}
              </span>
              <span className={`truncate text-sm group-hover:underline ${row.pinned ? "font-bold" : ""}`}>
                {row.title}
              </span>
              <span className="ml-auto shrink-0 text-xs text-muted">{row.date}</span>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <p className="text-xs text-muted">게시판: 로그인 후 글쓰기 · 비밀글 옵션 (연동 예정)</p>
          <button
            type="button"
            className="pop-sm ml-auto rounded-lg bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 active:translate-y-0"
          >
            글쓰기
          </button>
        </div>

        {/* 페이지네이션 (연동 예정) */}
        <div className="mt-7 flex items-center justify-center gap-1.5 text-sm">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-bold text-white">1</span>
          {[2, 3].map((n) => (
            <span key={n} className="flex h-8 w-8 items-center justify-center rounded-lg text-muted">
              {n}
            </span>
          ))}
        </div>

        <p className="mt-4 text-center text-[11px] text-neutral-300">* 목록은 디자인 확인용 더미입니다 (CMS 연동 예정)</p>
      </section>

      <section className="flex flex-col items-center justify-center gap-4 border-t-2 border-ink bg-surface px-4 py-9 md:flex-row">
        <span className="text-sm text-muted">급한 문의는 게시판보다 빠른</span>
        <a
          href="https://pf.kakao.com/"
          className="pop-sm rounded-lg bg-kakao px-7 py-2.5 text-sm font-black text-kakao-ink transition hover:-translate-y-0.5 active:translate-y-0"
        >
          카카오톡 상담 시작 →
        </a>
      </section>
    </>
  );
}
