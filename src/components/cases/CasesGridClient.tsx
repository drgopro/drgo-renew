"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CaseCard, { type CaseCardData } from "./CaseCard";

// 프리뷰(정적) 빌드용: 서버에서 searchParams를 읽을 수 없으므로 클라이언트에서 탭 필터링

function GridInner({ docs }: { docs: CaseCardData[] }) {
  const tab = useSearchParams().get("tab") ?? "all";
  const list = tab === "all" ? docs : docs.filter((d) => d.category === tab);

  if (list.length === 0) {
    return (
      <p className="py-20 text-center text-neutral-400">
        등록된 사례가 아직 없습니다 — /admin 에서 첫 사례를 작성해 보세요.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3">
      {list.map((doc) => (
        <CaseCard key={doc.id} doc={doc} />
      ))}
    </div>
  );
}

export default function CasesGridClient({ docs }: { docs: CaseCardData[] }) {
  return (
    <Suspense>
      <GridInner docs={docs} />
    </Suspense>
  );
}
