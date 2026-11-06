// 공통 섹션/타이틀/스텝/FAQ 컴포넌트 (taste-skill 토큰 시스템)
export function PageTitle({ title, subtitle, eyebrow }: { title: string; subtitle?: string; eyebrow?: string }) {
  return (
    <div className="px-4 pb-8 pt-12 text-center">
      {eyebrow && (
        <p className="flex items-center justify-center gap-2 text-xs font-bold tracking-[0.2em] text-neutral-400">
          <span className="text-accent">★</span>
          {eyebrow}
        </p>
      )}
      <h1 className="display-type-xl mt-3 text-2xl font-black md:text-3xl">{title}</h1>
      {subtitle && <p className="mt-2 text-sm text-muted">{subtitle}</p>}
    </div>
  );
}

export type Step = { no: string; title: string; desc: string };
export function Steps({ title = "진행 절차", items }: { title?: string; items: Step[] }) {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14">
      <h2 className="display-type text-center text-lg font-bold">{title}</h2>
      <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
        {items.map((s, i) => (
          <div key={s.no} className="pop-sm relative rounded-xl bg-white p-5 transition hover:-translate-y-0.5">
            <p className="text-sm font-black text-accent">{s.no}</p>
            <p className="mt-1.5 font-bold">{s.title}</p>
            <p className="mt-1 text-xs leading-relaxed text-muted">{s.desc}</p>
            {i < items.length - 1 && (
              <span className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-neutral-300 md:block">→</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export type FaqItem = { q: string; a: string };
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="pop divide-y divide-neutral-100 rounded-2xl bg-white">
      {items.map((f) => (
        <details key={f.q} className="group px-5 py-4">
          <summary className="cursor-pointer list-none text-sm font-semibold">
            Q. {f.q}
            <span className="float-right text-neutral-400 transition group-open:rotate-45">＋</span>
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-neutral-600">{f.a}</p>
        </details>
      ))}
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
