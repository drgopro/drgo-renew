// 와이어프레임 뼈대 단계용 공통 섹션/플레이스홀더 컴포넌트
export function PageTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="border-b border-dashed border-neutral-300 px-4 py-12 text-center">
      <h1 className="display-type-xl text-3xl font-bold">{title}</h1>
      {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
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
      <p className="display-type text-2xl font-bold">{title}</p>
      {subtitle && <p className="mt-2 text-sm text-inv-muted">{subtitle}</p>}
      <a
        href="https://pf.kakao.com/"
        className="mt-5 inline-block rounded-xl border-2 border-white/0 bg-kakao px-10 py-3.5 font-black text-kakao-ink shadow-[4px_4px_0_0_rgba(255,255,255,0.25)] transition hover:-translate-y-0.5 active:translate-y-0"
      >
        카카오톡 상담 시작 →
      </a>
    </section>
  );
}
