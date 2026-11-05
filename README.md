# drgo-renew

drgo.pro 리뉴얼 — Next.js(TypeScript) + Sanity(CMS) + Supabase(회원/소셜로그인) + Vercel.

## 메뉴 구조 (v4 확정)

- **방송 세팅** `/setting` — 방문/원격 탭 · 자가 견적 `/estimate`
- **렌탈** `/rental` — 장비/서버 탭 · 방송룸 대여 `/room`
- **디자인** `/design` — 디자인/영상 탭
- **세팅 사례** `/cases` — 갤러리 + 필터, 블록 에디터(CMS) 작성
- **고객지원** `/support` — 공지/QnA/이벤트/강좌 탭
- **회사소개** `/about`

와이어프레임·블록 라이브러리 정의는 기획 캔버스(claude.ai artifact) 참고.

## 개발

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # 프로덕션 빌드 확인
```

## 로드맵

1. ~~P1 기획·와이어프레임~~ / ~~P2 스캐폴드·공통 레이아웃·라우트 뼈대~~
2. P3 Sanity 연동: 블록 라이브러리 12종 스키마, 사례/공지/장비 문서 타입
3. P4 Supabase Auth(카카오→구글→네이버), QnA, 자가 견적 이관
4. P5 콘텐츠 이관 · 리다이렉트 맵 · drgo.pro 전환 (쇼핑몰은 shop.drgo.pro 유지)
