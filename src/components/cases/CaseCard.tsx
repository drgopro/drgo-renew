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

export default function CaseCard({ doc }: { doc: CaseCardData }) {
  return (
    <Link href={`/cases/${doc.slug}`} className="group">
      <MediaImage media={doc.cover} className="h-44 w-full rounded-xl" />
      <p className="mt-2.5 font-semibold group-hover:underline">{doc.title}</p>
      <p className="mt-0.5 text-xs text-neutral-400">
        {CASE_CATEGORY_LABELS[doc.category] ?? doc.category}
        {doc.publishedAt && ` · ${new Date(doc.publishedAt).toLocaleDateString("ko-KR")}`}
      </p>
    </Link>
  );
}
