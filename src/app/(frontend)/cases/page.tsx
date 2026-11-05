import type { Metadata } from "next";
import Link from "next/link";
import { PageTitle } from "@/components/ui/Section";
import Tabs from "@/components/ui/Tabs";
import MediaImage from "@/components/blocks/MediaImage";
import { CASE_CATEGORY_LABELS, getPayloadClient } from "@/lib/payload";

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

export default async function CasesPage({ searchParams }: PageProps<"/cases">) {
  const { tab } = await searchParams;
  const active = typeof tab === "string" ? tab : "all";

  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "cases",
    where: active === "all" ? {} : { category: { equals: active } },
    sort: "-publishedAt",
    limit: 24,
    depth: 1,
  });

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
          <div className="grid grid-cols-2 gap-x-3.5 gap-y-7 md:grid-cols-3">
            {docs.map((doc) => (
              <Link key={doc.id} href={`/cases/${doc.slug}`} className="group">
                <MediaImage media={doc.cover} className="h-44 w-full rounded-xl" />
                <p className="mt-2.5 font-semibold group-hover:underline">{doc.title}</p>
                <p className="mt-0.5 text-xs text-neutral-400">
                  {CASE_CATEGORY_LABELS[doc.category] ?? doc.category}
                  {doc.publishedAt && ` · ${new Date(doc.publishedAt).toLocaleDateString("ko-KR")}`}
                </p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
