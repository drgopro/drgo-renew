import Link from "next/link";
import { Placeholder, Section } from "@/components/ui/Section";

const QUICK = [
  { label: "원격 지원", href: "/setting?tab=remote" },
  { label: "방문 세팅", href: "/setting?tab=visit" },
  { label: "방송룸 대여", href: "/room" },
  { label: "장비·서버 렌탈", href: "/rental" },
  { label: "자가 견적", href: "/estimate" },
  { label: "영상 제작", href: "/design?tab=video" },
  { label: "디자인 제작", href: "/design?tab=design" },
  { label: "고객지원", href: "/support" },
];

export default function Home() {
  return (
    <>
      {/* 히어로 (3매 슬라이드 예정) */}
      <Placeholder label="히어로 배너 — 풀폭 슬라이드 3장 · 방송 세팅부터 대여·제작까지" className="h-[420px] rounded-none" />

      <Section title="서비스 바로가기">
        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
          {QUICK.map((q) => (
            <Link
              key={q.href}
              href={q.href}
              className="flex h-28 flex-col items-center justify-center gap-2 rounded-xl border border-neutral-300 font-semibold hover:border-ink"
            >
              <span className="h-11 w-11 rounded-full bg-neutral-200" />
              {q.label}
            </Link>
          ))}
        </div>
      </Section>

      <Section title="세팅 사례">
        <div className="grid grid-cols-2 gap-3.5 md:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Placeholder key={i} label="사례 썸네일" className="h-44" />
          ))}
        </div>
        <div className="mt-4 text-right">
          <Link href="/cases" className="text-sm text-neutral-500 hover:text-ink">
            전체보기 →
          </Link>
        </div>
      </Section>

      {/* CTA 계층: 카톡(1순위) > 자가 견적(2순위) > 이벤트(3순위) */}
      <Section>
        <div className="flex flex-col gap-4 md:flex-row">
          <a
            href="https://pf.kakao.com/"
            className="flex flex-[2] flex-col items-center justify-center gap-1 rounded-xl bg-ink py-9 text-white"
          >
            <span className="text-xl font-bold">카카오톡 상담 시작 →</span>
            <span className="text-sm text-neutral-300">세팅 상담은 카카오톡으로</span>
          </a>
          <div className="flex flex-1 flex-col gap-2.5">
            <Link
              href="/estimate"
              className="flex flex-1 items-center justify-center rounded-xl border-2 border-ink py-5 font-bold"
            >
              자가 견적 내보기
            </Link>
            <Link
              href="/support?tab=event"
              className="flex items-center justify-center rounded-lg bg-neutral-100 py-2.5 text-sm text-neutral-500"
            >
              진행 중 이벤트 보기 →
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
