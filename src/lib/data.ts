import type { Case } from "@/payload-types";
import { isPreview } from "./preview";

// 프리뷰(정적 내보내기) 빌드에서는 Payload를 로드하지 않도록 동적 import로 분기한다.

export async function findCases(category?: string): Promise<Case[]> {
  if (isPreview) {
    const { sampleCases } = await import("./sample-cases");
    const list = category ? sampleCases.filter((c) => c.category === category) : sampleCases;
    return list as unknown as Case[];
  }
  const { getPayloadClient } = await import("./payload");
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "cases",
    where: category ? { category: { equals: category } } : {},
    sort: "-publishedAt",
    limit: 24,
    depth: 1,
  });
  return docs;
}

export async function findCaseBySlug(slug: string): Promise<Case | null> {
  if (isPreview) {
    const { sampleCases } = await import("./sample-cases");
    return (sampleCases.find((c) => c.slug === slug) ?? null) as unknown as Case | null;
  }
  const { getPayloadClient } = await import("./payload");
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: "cases",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 2,
  });
  return docs[0] ?? null;
}
