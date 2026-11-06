import Link from "next/link";
import { Suspense } from "react";
import HeroSlider from "@/components/home/HeroSlider";
import CaseCard, { type CaseCardData } from "@/components/cases/CaseCard";
import { findCases } from "@/lib/data";
import {
  DesignIcon,
  EstimateIcon,
  OutdoorIcon,
  RemoteIcon,
  RentalIcon,
  RoomIcon,
  SupportIcon,
  VisitIcon,
} from "@/components/home/ServiceIcons";

export const instant = false;

const QUICK = [
  { label: "방문 세팅", href: "/setting?tab=visit", Icon: VisitIcon },
  { label: "원격 세팅", href: "/setting?tab=remote", Icon: RemoteIcon },
  { label: "야외 방송", href: "/setting?tab=outdoor", Icon: OutdoorIcon },
  { label: "방송룸 대여", href: "/room", Icon: RoomIcon },
  { label: "장비 렌탈", href: "/rental", Icon: RentalIcon },
  { label: "자가 견적", href: "/estimate", Icon: EstimateIcon },
  { label: "디자인·영상", href: "/design", Icon: DesignIcon },
  { label: "고객지원", href: "/support", Icon: SupportIcon },
];

async function CasesList() {
  const cases = (await findCases()).slice(0, 4);
  const toCard = (doc: (typeof cases)[number]): CaseCardData => ({
    id: doc.id,
    title: doc.title,
    slug: doc.slug,
    category: doc.category,
    publishedAt: doc.publishedAt,
    cover: doc.cover,
  });

  if (cases.length === 0) {
    return <p className="py-16 text-center text-neutral-400">등록된 사례가 아직 없습니다.</p>;
  }
  return (
    <div className="no-scrollbar mt-6 flex snap-x gap-3.5 overflow-x-auto pb-1 md:grid md:grid-cols-4 md:overflow-visible">
      {cases.map((doc) => (
        <div key={doc.id} className="min-w-[240px] snap-start md:min-w-0">
          <CaseCard doc={toCard(doc)} />
        </div>
      ))}
    </div>
  );
}

function CasesSkeleton() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3.5 md:grid-cols-4">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="h-44 animate-pulse rounded-xl bg-neutral-200" />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* 서비스 바로가기 */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-xl font-bold md:text-2xl">서비스 바로가기</h2>
        <p className="mt-1 text-sm text-neutral-500">어떤 서비스가 필요하신가요?</p>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {QUICK.map(({ label, href, Icon }) => (
            <Link
              key={label}
              href={href}
              className="group flex h-28 flex-col items-center justify-center gap-2.5 rounded-xl border border-neutral-200 bg-white font-semibold transition hover:-translate-y-0.5 hover:border-ink hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition group-hover:bg-ink group-hover:text-white">
                <Icon className="h-5.5 w-5.5" />
              </span>
              <span className="text-sm">{label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 세팅 사례 */}
      <section className="border-t border-neutral-100 bg-neutral-50/60">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="flex items-baseline gap-3">
            <h2 className="text-xl font-bold md:text-2xl">세팅 사례</h2>
            <p className="text-sm text-neutral-500">닥터고블린의 특별한 세팅</p>
            <Link href="/cases" className="ml-auto text-sm text-neutral-500 hover:text-ink">
              전체보기 →
            </Link>
          </div>
          <Suspense fallback={<CasesSkeleton />}>
            <CasesList />
          </Suspense>
        </div>
      </section>

      {/* CTA 계층: 카톡(1순위) > 자가 견적(2순위) > 이벤트(3순위) */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col gap-4 md:flex-row">
          <a
            href="https://pf.kakao.com/"
            className="flex flex-[2] flex-col items-center justify-center gap-1.5 rounded-2xl bg-kakao py-10 text-kakao-ink transition hover:brightness-95"
          >
            <span className="text-xl font-black md:text-2xl">카카오톡 상담 시작 →</span>
            <span className="text-sm opacity-70">세팅 상담은 카카오톡이 가장 빠릅니다</span>
          </a>
          <div className="flex flex-1 flex-col gap-2.5">
            <Link
              href="/estimate"
              className="flex flex-1 items-center justify-center rounded-2xl border-2 border-ink py-5 font-bold transition hover:bg-ink hover:text-white"
            >
              자가 견적 내보기
            </Link>
            <Link
              href="/support?tab=event"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-neutral-100 py-3 text-sm text-neutral-600 transition hover:bg-neutral-200"
            >
              <span className="font-bold text-accent">★</span> 진행 중 이벤트 보기 →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
