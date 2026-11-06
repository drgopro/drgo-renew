export type NavChild = { label: string; href: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

// GNB v4 (와이어프레임 확정안): 의뢰 3축 + 세팅 사례 + 고객지원 + 회사소개
export const NAV: NavItem[] = [
  {
    label: "방송 세팅",
    href: "/setting",
    children: [
      { label: "방문 세팅", href: "/setting?tab=visit" },
      { label: "원격 세팅", href: "/setting?tab=remote" },
      { label: "야외 방송 세팅", href: "/setting?tab=outdoor" },
      { label: "셀프 견적", href: "/estimate" },
    ],
  },
  {
    label: "렌탈",
    href: "/rental",
    children: [
      { label: "장비", href: "/rental" },
      { label: "방송룸 대여", href: "/room" },
    ],
  },
  {
    label: "디자인",
    href: "/design",
    children: [
      { label: "디자인", href: "/design?tab=design" },
      { label: "영상", href: "/design?tab=video" },
    ],
  },
  { label: "세팅 사례", href: "/cases" },
  {
    label: "고객지원",
    href: "/support",
    children: [
      { label: "공지사항", href: "/support?tab=notice" },
      { label: "게시판", href: "/support?tab=board" },
      { label: "이벤트", href: "/support?tab=event" },
      { label: "강좌", href: "/support?tab=class" },
    ],
  },
  { label: "회사소개", href: "/about" },
];
