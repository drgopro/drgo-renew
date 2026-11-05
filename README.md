# drgo-renew

drgo.pro 리뉴얼 — Next.js(TypeScript) + **Payload CMS**(블록 에디터, 앱 내장) + Postgres + Auth.js(소셜로그인, P4). 호스팅: **Vultr + Forge 올인원** (운영 DB는 서버의 Postgres, 로컬 개발은 SQLite 자동 생성).

- 직원 글쓰기: `/admin` (Payload 관리자 — 첫 실행 시 계정 생성 화면)
- 로컬 개발 DB: `.env`의 `DATABASE_URI=file:./payload.db` (dev 모드에서 테이블 자동 생성)
- 운영(Forge): `DATABASE_URI=postgres://...` + `payload migrate` 사용

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

1. ~~P1 기획·와이어프레임~~ / ~~P2 스캐폴드·공통 레이아웃·라우트 뼈대·Payload 통합~~
2. P3 블록 라이브러리 12종(Payload blocks) + 공지/이벤트/강좌/장비 컬렉션 + 프런트 연동
3. P4 Auth.js 소셜 로그인(카카오→구글→네이버), QnA, 자가 견적 이관
4. P5 Forge 배포(Node 데몬 + Postgres + DB 백업 설정) · 콘텐츠 이관 · 리다이렉트 맵 · drgo.pro 전환 (쇼핑몰은 shop.drgo.pro 유지)

> Node 24 권장 (Payload CLI가 Node 22.23 미만에서 오류). CLI는 `npx payload generate:importmap --disable-transpile` 형태로 실행.
