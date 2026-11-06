import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-sm flex-col px-4 py-20">
      <p className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-400">
        <span className="text-accent">★</span>LOGIN
      </p>
      <h1 className="display-type-xl mt-3 text-center text-2xl font-black">로그인</h1>
      <p className="mt-2 text-center text-sm text-muted">게시판 글쓰기 · 견적 내역 저장에 사용됩니다</p>

      {/* Auth.js 소셜 로그인 연동 예정 (P4): 카카오 → 구글, 네이버는 2차 */}
      <div className="mt-8 flex flex-col gap-3">
        <button
          type="button"
          className="pop-sm rounded-xl bg-kakao py-3.5 font-black text-kakao-ink transition hover:-translate-y-0.5 active:translate-y-0"
        >
          카카오로 시작하기
        </button>
        <button
          type="button"
          className="pop-sm rounded-xl bg-white py-3.5 font-bold transition hover:-translate-y-0.5 active:translate-y-0"
        >
          Google로 시작하기
        </button>
      </div>
      <p className="mt-5 text-center text-[11px] text-neutral-400">소셜 로그인 연동 예정 (P4) · 네이버는 2차 지원</p>
    </div>
  );
}
