import type { CollectionConfig } from "payload";
import { contentEditor } from "../lib/editor.ts";

// 고객지원 글(공지/이벤트/강좌) — 직원 작성, 세팅 사례와 동일한 블록 에디터
export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "고객지원 글", plural: "고객지원 글" },
  access: { read: () => true },
  admin: { useAsTitle: "title", defaultColumns: ["title", "type", "publishedAt"] },
  fields: [
    { name: "title", label: "제목", type: "text", required: true },
    { name: "slug", label: "주소(slug)", type: "text", required: true, unique: true },
    {
      name: "type",
      label: "구분",
      type: "select",
      required: true,
      options: [
        { label: "공지사항", value: "notice" },
        { label: "이벤트", value: "event" },
        { label: "강좌", value: "class" },
      ],
    },
    { name: "pinned", label: "상단 고정", type: "checkbox", defaultValue: false },
    { name: "content", label: "본문", type: "richText", editor: contentEditor },
    { name: "publishedAt", label: "게시일", type: "date" },
  ],
};
