import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "로그인",
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex max-w-sm flex-col gap-3 px-4 py-24">
      <h1 className="mb-4 text-center text-2xl font-bold">로그인</h1>
      {/* Supabase Auth 연동 예정 (P4): 카카오 → 구글 → 네이버 순 */}
      <button type="button" className="rounded-xl bg-[#FEE500] py-3.5 font-semibold">
        카카오로 시작하기
      </button>
      <button type="button" className="rounded-xl border border-neutral-300 py-3.5 font-semibold">
        Google로 시작하기
      </button>
      <p className="mt-3 text-center text-xs text-neutral-400">
        소셜 로그인 연동 예정 (Supabase Auth) · 네이버는 2차 지원
      </p>
    </div>
  );
}
