import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/Section";
import Tabs from "@/components/ui/Tabs";

export const metadata: Metadata = {
  title: "고객지원",
  description: "공지사항 · QnA · 이벤트 · 강좌",
};

const TABS = [
  { key: "notice", label: "공지사항" },
  { key: "qna", label: "QnA" },
  { key: "event", label: "이벤트" },
  { key: "class", label: "강좌" },
];

export default function SupportPage() {
  return (
    <>
      <PageTitle title="고객지원" subtitle="공지사항 · QnA · 이벤트 · 강좌" />
      <Tabs base="/support" tabs={TABS} defaultKey="notice" />

      <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="divide-y divide-neutral-100">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="flex items-center gap-4 py-4">
              <span
                className={
                  i === 0
                    ? "rounded-full bg-ink px-3 py-1 text-xs text-white"
                    : "rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-500"
                }
              >
                {i === 0 ? "공지" : "일반"}
              </span>
              <span className={i === 0 ? "text-sm font-semibold" : "text-sm"}>게시글 제목 한 줄</span>
              <span className="ml-auto text-xs text-neutral-400">2026.00.00</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex items-center">
          <p className="text-xs text-neutral-400">QnA: 로그인 후 글쓰기 · 비밀글 옵션</p>
          <button
            type="button"
            className="ml-auto rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-white"
          >
            글쓰기
          </button>
        </div>
      </section>

      <section className="flex items-center justify-center gap-4 border-t border-dashed border-neutral-300 bg-neutral-50 px-4 py-8">
        <span className="text-sm text-neutral-500">급한 문의는 게시판보다 빠른</span>
        <a href="https://pf.kakao.com/" className="rounded-lg bg-ink px-7 py-2.5 text-sm font-bold text-white">
          카카오톡 상담 시작 →
        </a>
      </section>
    </>
  );
}
