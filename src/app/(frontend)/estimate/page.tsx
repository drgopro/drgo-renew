import type { Metadata } from "next";
import { KakaoCta, PageTitle } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "셀프 견적",
  description: "몇 가지 선택만으로 예상 세팅 비용을 확인하세요",
};

// P4에서 기존 견적 로직 이관 예정 — 아래는 디자인 확인용 비활성 미리보기
const PREVIEW_STEPS = [
  { q: "1. 어떤 세팅이 필요하세요?", options: ["방문 세팅", "원격 세팅", "야외 방송"] },
  { q: "2. 현재 장비 보유 상태는?", options: ["아무것도 없음", "PC만 있음", "대부분 보유"] },
  { q: "3. 방송 플랫폼은?", options: ["치지직", "숲(SOOP)", "유튜브"] },
];

export default function EstimatePage() {
  return (
    <>
      <PageTitle eyebrow="SELF ESTIMATE" title="셀프 견적" subtitle="몇 가지 선택만으로 예상 비용을 확인하세요" />

      <section className="mx-auto max-w-3xl px-4 py-6">
        <div className="pop rounded-2xl bg-white p-7">
          {PREVIEW_STEPS.map((step) => (
            <div key={step.q} className="mb-6 last:mb-0">
              <p className="text-sm font-bold">{step.q}</p>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {step.options.map((o, i) => (
                  <span
                    key={o}
                    className={
                      i === 0
                        ? "rounded-lg border-2 border-ink bg-ink px-4 py-2 text-sm font-semibold text-white"
                        : "rounded-lg border-2 border-neutral-200 px-4 py-2 text-sm text-muted"
                    }
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div className="mt-7 flex items-center justify-between rounded-xl bg-surface px-5 py-4">
            <span className="text-sm font-bold">예상 비용</span>
            <span className="display-type text-xl font-black">
              220,000<span className="text-sm font-bold">원~</span>
            </span>
          </div>
          <p className="mt-4 text-center text-[11px] text-neutral-300">
            * 견적 위젯 미리보기(비활성) — 기존 drgo.pro 견적 로직을 이관해 작동시킬 예정입니다 (P4)
          </p>
        </div>
      </section>

      <KakaoCta title="정확한 견적은 카카오톡 상담으로" subtitle="환경 사진을 보내주시면 더 정확하게 안내드립니다" />
    </>
  );
}
