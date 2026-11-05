import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import ContentRichText from "@/components/blocks/ContentRichText";
import MediaImage from "@/components/blocks/MediaImage";
import { KakaoCta } from "@/components/ui/Section";
import { CASE_CATEGORY_LABELS, getPayloadClient } from "@/lib/payload";

export const instant = false;

async function findCase(slug: string) {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "cases",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return docs[0] ?? null;
}

export async function generateMetadata({ params }: PageProps<"/cases/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const doc = await findCase(decodeURIComponent(slug));
  return { title: doc ? `${doc.title} — 세팅 사례` : "세팅 사례" };
}

export default async function CaseDetailPage({ params }: PageProps<"/cases/[slug]">) {
  const { slug } = await params;
  const doc = await findCase(decodeURIComponent(slug));
  if (!doc) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-4 py-10">
        <p className="mb-3">
          <span className="rounded-full bg-ink px-3 py-1 text-xs text-white">
            {CASE_CATEGORY_LABELS[doc.category] ?? doc.category}
          </span>
        </p>
        <h1 className="text-3xl font-bold leading-snug">{doc.title}</h1>
        {doc.publishedAt && (
          <p className="mt-2 text-sm text-neutral-400">
            {new Date(doc.publishedAt).toLocaleDateString("ko-KR")}
          </p>
        )}
        {doc.cover && <MediaImage media={doc.cover} className="mt-6 h-72 w-full rounded-2xl md:h-96" />}
        <div className="mt-8">
          <ContentRichText data={doc.content} />
        </div>
        <p className="mt-10">
          <Link href="/cases" className="text-sm text-neutral-500 hover:text-ink">
            ← 사례 목록으로
          </Link>
        </p>
      </article>
      <KakaoCta title="이런 세팅이 필요하신가요?" />
    </>
  );
}
