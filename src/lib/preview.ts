// 디자인 프리뷰(GitHub Pages 정적 내보내기) 모드 — 빌드 시점에 결정되는 상수
export const isPreview = process.env.NEXT_PUBLIC_STATIC_PREVIEW === "1";
