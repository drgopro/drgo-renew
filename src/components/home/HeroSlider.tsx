"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// 메시지형 히어로 — 풀폭 1장 × 3매 슬라이드 (와이어프레임 ①메인)
const SLIDES = [
  {
    eyebrow: "DOCTOR GOBLIN COMPANY",
    title: (
      <>
        방송 세팅부터 렌탈·제작까지
        <br />한 번에 끝내세요
      </>
    ),
    sub: "1인 미디어 토탈 케어 — 방문·원격·야외 방송 세팅 전문",
    ctas: [
      { label: "카카오톡 상담 시작 →", href: "https://pf.kakao.com/", kind: "kakao" as const },
      { label: "셀프 견적 내보기", href: "/estimate", kind: "outline" as const },
    ],
  },
  {
    eyebrow: "REMOTE SETUP",
    title: (
      <>
        전국 어디서나,
        <br />
        원격 방송 세팅
      </>
    ),
    sub: "OBS · 오디오 · 송출 최적화를 원격으로 — 지방·해외도 OK",
    ctas: [{ label: "원격 세팅 알아보기 →", href: "/setting?tab=remote", kind: "outline" as const }],
  },
  {
    eyebrow: "STUDIO RENTAL",
    title: (
      <>
        방송룸 · 스튜디오
        <br />
        시간 단위 렌탈
      </>
    ),
    sub: "합방 · 촬영 · 녹음까지 — 장비 세팅 완료된 공간",
    ctas: [{ label: "방송룸 보기 →", href: "/room", kind: "outline" as const }],
  },
];

const INTERVAL = 5000;

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % SLIDES.length), INTERVAL);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-ink text-white"
      style={{
        backgroundImage:
          "radial-gradient(900px 420px at 80% -10%, rgba(214,48,31,0.28), transparent 65%), radial-gradient(700px 380px at 8% 110%, rgba(214,48,31,0.14), transparent 60%)",
      }}
    >
      <div className="relative mx-auto h-[360px] max-w-6xl px-4 md:h-[440px]">
        {SLIDES.map((s, i) => (
          <div
            key={i}
            aria-hidden={i !== idx}
            className={`absolute inset-0 flex flex-col items-start justify-center px-4 transition-opacity duration-700 ${
              i === idx ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <p className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-inv-muted">
              <span className="text-accent">★</span>
              {s.eyebrow}
            </p>
            <h1 className="display-type-xl mt-4 text-3xl font-black leading-[1.25] md:text-5xl md:leading-[1.2]">{s.title}</h1>
            <p className="mt-4 text-sm text-inv-muted md:text-base">{s.sub}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              {s.ctas.map((c) =>
                c.kind === "kakao" ? (
                  <a
                    key={c.label}
                    href={c.href}
                    className="rounded-lg bg-kakao px-6 py-3 text-sm font-bold text-kakao-ink transition hover:-translate-y-0.5 active:translate-y-0 md:px-7 md:text-base"
                  >
                    {c.label}
                  </a>
                ) : (
                  <Link
                    key={c.label}
                    href={c.href}
                    className="rounded-lg border border-white/50 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/10 active:translate-y-0 md:px-7 md:text-base"
                  >
                    {c.label}
                  </Link>
                ),
              )}
            </div>
          </div>
        ))}

        {/* 인디케이터 */}
        <div className="absolute bottom-6 left-8 flex gap-2">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${i + 1}번 슬라이드`}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-accent" : "w-2 bg-white/35"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
