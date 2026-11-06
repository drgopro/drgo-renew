import Link from "next/link";
import type {
  BeforeAfterBlock,
  CompareTableBlock,
  CtaBlock,
  EquipmentListBlock,
  FaqBlock,
  GalleryBlock,
  PriceTableBlock,
  YoutubeBlock,
} from "@/payload-types";
import MediaImage from "./MediaImage";

export function Gallery({ images, layout }: GalleryBlock) {
  const list = images ?? [];
  return (
    <div
      className={
        layout === "slider"
          ? "my-6 flex gap-3 overflow-x-auto"
          : "my-6 grid grid-cols-2 gap-3 md:grid-cols-3"
      }
    >
      {list.map((item) => (
        <MediaImage
          key={item.id}
          media={item.image}
          className={layout === "slider" ? "h-52 w-80 shrink-0 rounded-xl" : "h-40 w-full rounded-xl"}
        />
      ))}
    </div>
  );
}

export function BeforeAfter({ before, after, caption }: BeforeAfterBlock) {
  return (
    <figure className="my-6">
      <div className="grid grid-cols-2 gap-3">
        <div className="relative">
          <MediaImage media={before} className="h-56 w-full rounded-xl" />
          <span className="absolute left-2 top-2 rounded bg-black/60 px-2 py-0.5 text-xs text-white">BEFORE</span>
        </div>
        <div className="relative">
          <MediaImage media={after} className="h-56 w-full rounded-xl" />
          <span className="absolute left-2 top-2 rounded bg-ink px-2 py-0.5 text-xs text-white">AFTER</span>
        </div>
      </div>
      {caption && <figcaption className="mt-2 text-center text-sm text-neutral-500">{caption}</figcaption>}
    </figure>
  );
}

function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
}

export function Youtube({ url }: YoutubeBlock) {
  const id = youtubeId(url);
  if (!id) return null;
  return (
    <div className="my-6 aspect-video overflow-hidden rounded-xl bg-black">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export function EquipmentList({ items }: EquipmentListBlock) {
  return (
    <div className="my-6 space-y-3">
      <p className="font-bold">사용 장비</p>
      {(items ?? []).map((item) => {
        const inner = (
          <div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3 hover:border-ink">
            <MediaImage media={item.image} className="h-13 w-13 shrink-0 rounded-lg" />
            <div>
              <p className="text-sm font-bold">{item.name}</p>
              {item.note && <p className="text-xs text-neutral-500">{item.note}</p>}
            </div>
          </div>
        );
        return item.link ? (
          <Link key={item.id} href={item.link} className="block">
            {inner}
          </Link>
        ) : (
          <div key={item.id}>{inner}</div>
        );
      })}
    </div>
  );
}

export function CompareTable({ leftTitle, rightTitle, rows }: CompareTableBlock) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-neutral-200 text-sm">
      <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-50 font-bold">
        <div className="p-3" />
        <div className="p-3 text-center">{leftTitle}</div>
        <div className="p-3 text-center">{rightTitle}</div>
      </div>
      {(rows ?? []).map((row) => (
        <div key={row.id} className="grid grid-cols-3 border-b border-neutral-100 last:border-0">
          <div className="p-3 font-medium">{row.label}</div>
          <div className="p-3 text-center text-neutral-600">{row.left}</div>
          <div className="p-3 text-center text-neutral-600">{row.right}</div>
        </div>
      ))}
    </div>
  );
}

export function PriceTable({ rows }: PriceTableBlock) {
  return (
    <div className="my-6 space-y-2.5">
      {(rows ?? []).map((row) => (
        <div key={row.id} className="flex items-center justify-between rounded-lg border border-neutral-200 px-4 py-3.5 text-sm">
          <span>
            {row.name}
            {row.note && <span className="ml-2 text-xs text-neutral-400">{row.note}</span>}
          </span>
          <span className="font-bold">{row.price}</span>
        </div>
      ))}
    </div>
  );
}

export function Faq({ items }: FaqBlock) {
  return (
    <div className="my-6 divide-y divide-neutral-100 rounded-xl border border-neutral-200">
      {(items ?? []).map((item) => (
        <details key={item.id} className="group p-4">
          <summary className="cursor-pointer list-none text-sm font-semibold">
            Q. {item.q}
            <span className="float-right text-neutral-400 group-open:rotate-45">＋</span>
          </summary>
          <p className="mt-2 whitespace-pre-line text-sm text-neutral-600">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Cta({ title, kind, url }: CtaBlock) {
  const href = kind === "estimate" ? "/estimate" : kind === "link" ? url || "#" : "https://pf.kakao.com/";
  const label = kind === "estimate" ? "셀프 견적 내보기" : kind === "link" ? "자세히 보기 →" : "카카오톡 상담 →";
  return (
    <div className="my-6 flex flex-col items-center gap-3 rounded-xl bg-neutral-100 p-5 md:flex-row">
      <span className="font-semibold">{title}</span>
      <a href={href} className="md:ml-auto rounded-lg bg-ink px-6 py-2.5 text-sm font-bold text-white">
        {label}
      </a>
    </div>
  );
}
