"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/nav";
import { withBase } from "@/lib/basePath";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-4">
        <Link href="/" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={withBase("/logo.png")} alt="닥터고블린컴퍼니 — 라이브 스트리밍 전문 토탈 솔루션 제공 기업" width={140} height={42} className="h-9 w-auto md:h-10" />
        </Link>

        {/* PC GNB */}
        <nav className="hidden items-center gap-7 text-[15px] font-semibold lg:flex">
          {NAV.map((item) => (
            <div key={item.href} className="group relative">
              <Link href={item.href} className="py-5 hover:text-neutral-500">
                {item.label}
                {item.children && <span className="ml-1 text-xs text-neutral-400">▾</span>}
              </Link>
              {item.children && (
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="min-w-36 rounded-xl border border-neutral-200 bg-white p-2 shadow-lg">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-md border border-ink px-4 py-1.5 text-sm font-medium lg:block"
          >
            로그인
          </Link>
          {/* 모바일 햄버거 */}
          <button
            type="button"
            aria-label="메뉴 열기"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-0.5 w-6 bg-ink" />
            <span className="h-0.5 w-6 bg-ink" />
            <span className="h-0.5 w-6 bg-ink" />
          </button>
        </div>
      </div>

      {/* 모바일 드로어 */}
      {open && (
        <nav className="border-t border-neutral-200 bg-white px-4 pb-6 pt-2 lg:hidden">
          <Link
            href="/login"
            className="block border-b border-neutral-100 px-2 py-3.5 text-[15px] font-bold"
            onClick={() => setOpen(false)}
          >
            로그인 / 회원가입
          </Link>
          {NAV.map((item) => (
            <div key={item.href} className="border-b border-neutral-100">
              <Link
                href={item.href}
                className="block px-2 py-3.5 text-[15px] font-bold"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pb-2 pl-6">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block py-1.5 text-sm text-neutral-600"
                      onClick={() => setOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="https://pf.kakao.com/"
            className="mt-4 block rounded-xl bg-ink py-3.5 text-center text-sm font-bold text-white"
          >
            카카오톡 상담
          </a>
        </nav>
      )}
    </header>
  );
}
