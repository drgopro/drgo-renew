"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

type TabsProps = {
  base: string;
  tabs: { key: string; label: string }[];
  defaultKey: string;
};

function TabsInner({ base, tabs, defaultKey }: TabsProps) {
  const active = useSearchParams().get("tab") ?? defaultKey;

  return (
    <div className="flex flex-wrap justify-center gap-2.5 border-b border-dashed border-neutral-300 px-4 py-7">
      {tabs.map((t) => (
        <Link
          key={t.key}
          href={`${base}?tab=${t.key}`}
          className={
            t.key === active
              ? "pop-sm rounded-lg bg-ink px-6 py-2.5 text-sm font-bold text-white"
              : "rounded-lg border-2 border-neutral-300 px-6 py-2.5 text-sm font-semibold text-neutral-500 transition hover:border-ink hover:text-ink"
          }
        >
          {t.label}
        </Link>
      ))}
    </div>
  );
}

export default function Tabs(props: TabsProps) {
  return (
    <Suspense>
      <TabsInner {...props} />
    </Suspense>
  );
}
