import { BlocksFeature, lexicalEditor } from "@payloadcms/richtext-lexical";
import { contentBlocks } from "../blocks/index.ts";

// 글쓰기 공통 에디터: 기본 기능(텍스트/소제목/인용구/구분선/목록/링크/이미지) + 커스텀 블록 8종
export const contentEditor = lexicalEditor({
  features: ({ defaultFeatures }) => [
    ...defaultFeatures,
    BlocksFeature({ blocks: contentBlocks }),
  ],
});
