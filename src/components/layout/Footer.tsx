import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 border-ink bg-neutral-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 text-sm text-neutral-500 md:flex-row md:gap-16">
        <div className="space-y-1.5">
          <p className="font-bold text-ink">닥터고블린컴퍼니</p>
          <p>사업자 정보 · 주소 · 연락처 (TODO)</p>
          <p className="space-x-3">
            <Link href="/terms" className="hover:text-ink">이용약관</Link>
            <Link href="/privacy" className="hover:text-ink">개인정보처리방침</Link>
          </p>
        </div>
        <div className="space-y-1.5">
          <p className="font-bold text-ink">바로가기</p>
          <p className="space-x-3">
            <Link href="/estimate" className="hover:text-ink">자가 견적</Link>
            <Link href="/support?tab=notice" className="hover:text-ink">공지</Link>
            <Link href="/support?tab=qna" className="hover:text-ink">QnA</Link>
            <Link href="/support?tab=event" className="hover:text-ink">이벤트</Link>
            <Link href="/support?tab=class" className="hover:text-ink">강좌</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
