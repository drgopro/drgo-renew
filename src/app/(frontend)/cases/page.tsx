import type { Metadata } from "next";
import { PageTitle } from "@/components/ui/Section";
import Tabs from "@/components/ui/Tabs";
import CaseCard, { type CaseCardData } from "@/components/cases/CaseCard";
import CasesGridClient from "@/components/cases/CasesGridClient";
import { findCases } from "@/lib/data";
import { isPreview } from "@/lib/preview";

export const instant = false;

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

const toCard = (doc: Awaited<ReturnType<typeof findCases>>[number]): CaseCardData => ({
  id: doc.id,
  title: doc.title,
  slug: doc.slug,
  category: doc.category,
  publishedAt: doc.publishedAt,
  cover: doc.cover,
});

export default async function CasesPage({ searchParams }: PageProps<"/cases">) {
  // 프리뷰(정적) 빌드: searchParams를 서버에서 읽을 수 없어 클라이언트 탭 필터링으로 대체
  if (isPreview) {
    const docs = await findCases();
    return (
      <>
        <PageTitle title="세팅 사례" subtitle="닥터고블린의 특별한 세팅" />
        <Tabs base="/cases" tabs={FILTERS} defaultKey="all" />
        <section className="mx-auto max-w-6xl px-4 py-10">
          <CasesGridClient docs={docs.map(toCard)} />
        </section>
      </>
    );
  }

  const { tab } = await searchParams;
  const active = typeof tab === "string" ? tab : "all";
  const docs = await findCases(active === "all" ? undefined : active);

  return (
    <>
      <PageTitle title="세팅 사례" subtitle="닥터고블린의 특별한 세팅" />
      <Tabs base="/cases" tabs={FILTERS} defaultKey="all" />

      <section className="mx-auto max-w-6xl px-4 py-10">
        {docs.length === 0 ? (
          <p className="py-20 text-center text-neutral-400">
            등록된 사례가 아직 없습니다 — /admin 에서 첫 사례를 작성해 보세요.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
            {docs.map((doc) => (
              <CaseCard key={doc.id} doc={toCard(doc)} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
