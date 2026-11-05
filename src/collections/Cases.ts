import type { CollectionConfig } from "payload";
import { contentEditor } from "../lib/editor.ts";

// 세팅 사례 — 본문은 블록 에디터(P3에서 블록 라이브러리 12종으로 확장)
export const Cases: CollectionConfig = {
  slug: "cases",
  labels: { singular: "세팅 사례", plural: "세팅 사례" },
  access: { read: () => true },
  admin: { useAsTitle: "title", defaultColumns: ["title", "category", "publishedAt"] },
  fields: [
    { name: "title", label: "제목", type: "text", required: true },
    { name: "slug", label: "주소(slug)", type: "text", required: true, unique: true },
    {
      name: "category",
      label: "카테고리",
      type: "select",
      required: true,
      options: [
        { label: "방문 세팅", value: "visit" },
        { label: "원격 세팅", value: "remote" },
        { label: "방송룸·스튜디오", value: "studio" },
      ],
    },
    { name: "cover", label: "커버 이미지", type: "upload", relationTo: "media" },
    { name: "content", label: "본문", type: "richText", editor: contentEditor },
    { name: "publishedAt", label: "게시일", type: "date" },
  ],
};
