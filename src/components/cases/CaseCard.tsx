import Link from "next/link";
import MediaImage from "@/components/blocks/MediaImage";
import { CASE_CATEGORY_LABELS } from "@/lib/labels";
import type { Media } from "@/payload-types";

export type CaseCardData = {
  id: number;
  title: string;
  slug: string;
  category: string;
  publishedAt?: string | null;
  cover?: number | Media | null;
};

// 라이브 방송 목록형 카드 (치지직/숲 스타일): 썸네일+배지 / 아바타 / 2줄 제목 / 태그 칩
export default function CaseCard({ doc }: { doc: CaseCardData }) {
  const category = CASE_CATEGORY_LABELS[doc.category] ?? doc.category;
  return (
    <Link href={`/cases/${doc.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-xl border-2 border-ink bg-neutral-200">
        <MediaImage media={doc.cover} className="aspect-video w-full transition duration-300 group-hover:scale-105" />
        <span className="absolute left-2 top-2 flex items-center gap-1.5 rounded-md bg-black/70 px-2 py-1 text-[11px] font-bold text-white">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          {category}
        </span>
      </div>
      <div className="mt-2.5 flex items-start gap-2.5">
        {/* 채널 아바타 — 닥터고블린 스타 */}
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-ink text-sm text-accent">
          ★
        </span>
        <div className="min-w-0">
          <p className="line-clamp-2 text-[15px] font-semibold leading-snug group-hover:underline">{doc.title}</p>
          <p className="mt-1 text-xs text-muted">
            닥터고블린컴퍼니
            {doc.publishedAt && ` · ${new Date(doc.publishedAt).toLocaleDateString("ko-KR")}`}
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1">
            <span className="rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[11px] text-muted">
              {category}
            </span>
            <span className="rounded-md border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-[11px] text-muted">
              세팅 사례
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
