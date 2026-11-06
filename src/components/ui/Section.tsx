// 와이어프레임 뼈대 단계용 공통 섹션/플레이스홀더 컴포넌트
export function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="border-b border-dashed border-neutral-300 px-4 py-12 text-center">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2 text-neutral-500">{subtitle}</p>}
    </div>
  );
}

export function Section({ title, children }: { title?: string; children?: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl border-b border-dashed border-neutral-300 px-4 py-10">
      {title && <h2 className="mb-5 text-xl font-bold">{title}</h2>}
      {children}
    </section>
  );
}

export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border border-dashed border-neutral-400 bg-neutral-50 text-sm text-neutral-400 ${className}`}
    >
      {label}
    </div>
  );
}

export function KakaoCta({ title = "상담은 카카오톡으로", subtitle }: { title?: string; subtitle?: string }) {
  return (
    <section className="bg-ink px-4 py-12 text-center text-white">
      <p className="text-2xl font-bold">{title}</p>
      {subtitle && <p className="mt-2 text-sm text-neutral-400">{subtitle}</p>}
      <a
        href="https://pf.kakao.com/"
        className="mt-5 inline-block rounded-xl bg-kakao px-10 py-3.5 font-bold text-kakao-ink transition hover:brightness-95"
      >
        카카오톡 상담 시작 →
      </a>
    </section>
  );
}
