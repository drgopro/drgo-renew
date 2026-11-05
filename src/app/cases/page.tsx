import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/Section";
import Tabs from "@/components/ui/Tabs";

export const metadata: Metadata = {
  title: "세팅 사례",
  description: "닥터고블린컴퍼니의 방송 세팅 사례 모음",
};

const FILTERS = [
  { key: "all", label: "전체" },
  { key: "visit", label: "방문 세팅" },
  { key: "remote", label: "원격 세팅" },
  { key: "studio", label: "방송룸·스튜디오" },
];

export default function CasesPage() {
  return (
    <>
      <PageTitle title="세팅 사례" subtitle="닥터고블린의 특별한 세팅 — 블록 에디터(CMS)로 작성" />
      <Tabs base="/cases" tabs={FILTERS} defaultKey="all" />

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-2 gap-x-3.5 gap-y-7 md:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i}>
              <div className="h-44 rounded-xl bg-neutral-200" />
              <p className="mt-2.5 font-semibold">사례 제목 한 줄</p>
              <p className="mt-0.5 text-xs text-neutral-400">2026.00.00</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex h-12 items-center justify-center rounded-xl border border-neutral-300 text-sm text-neutral-500">
          더 보기
        </div>
      </section>
    </>
  );
}
