import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

// 디자인 프리뷰(GitHub Pages) 정적 내보내기 — scripts/build-preview.sh 에서 설정됨
const isStaticPreview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === "1";

const turbopack: NextConfig["turbopack"] = {
  rules: {
    "*.css": {
      loaders: ["@tailwindcss/turbopack"],
      as: "*.css",
    },
  },
};

const nextConfig: NextConfig = isStaticPreview
  ? {
      // cacheComponents(PPR)는 export 모드와 양립 불가 → 프리뷰에선 끔.
      // 라우트의 `export const instant`는 scripts/build-preview.sh 가 빌드 중 임시 제거한다.
      output: "export",
      basePath: process.env.PREVIEW_BASE_PATH || "",
      images: { unoptimized: true },
      turbopack,
    }
  : {
      cacheComponents: true,
      partialPrefetching: true,
      turbopack,
    };

export default withPayload(nextConfig);
