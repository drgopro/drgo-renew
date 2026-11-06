// /public 정적 자산 경로에 basePath(GitHub Pages 프리뷰: /drgo-renew)를 붙인다.
// next/link·CSS는 Next가 자동 처리하지만 <img src>는 수동 프리픽스가 필요.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const withBase = (path: string) => `${BASE_PATH}${path}`;
