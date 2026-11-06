// 디자인 프리뷰용 샘플 세팅 사례 — 실제 CMS 대신 렌더링되는 더미 데이터.
// 이미지(cover/upload)는 비워 두어 회색 플레이스홀더 박스로 표시된다(와이어프레임 확인용).

type LexicalNode = Record<string, unknown>;

const text = (t: string): LexicalNode => ({
  type: "text",
  text: t,
  detail: 0,
  format: 0,
  mode: "normal",
  style: "",
  version: 1,
});

const p = (t: string): LexicalNode => ({
  type: "paragraph",
  children: [text(t)],
  direction: "ltr",
  format: "",
  indent: 0,
  textFormat: 0,
  textStyle: "",
  version: 1,
});

const h2 = (t: string): LexicalNode => ({
  type: "heading",
  tag: "h2",
  children: [text(t)],
  direction: "ltr",
  format: "",
  indent: 0,
  version: 1,
});

const quote = (t: string): LexicalNode => ({
  type: "quote",
  children: [text(t)],
  direction: "ltr",
  format: "",
  indent: 0,
  version: 1,
});

const hr: LexicalNode = { type: "horizontalrule", version: 1 };

let blockSeq = 0;
const block = (blockType: string, fields: Record<string, unknown>): LexicalNode => ({
  type: "block",
  fields: { id: `sample-block-${++blockSeq}`, blockType, ...fields },
  format: "",
  version: 2,
});

const root = (children: LexicalNode[]) => ({
  root: { type: "root", children, direction: "ltr", format: "", indent: 0, version: 1 },
});

const img = (n: number) => ({ id: `img-${n}`, image: null });

/** 블록 12종을 모두 포함한 쇼케이스 본문 */
const showcaseContent = root([
  p("트위치에서 치지직으로 이적하면서 방송 환경 전체를 새로 구축한 사례입니다. 본 문서는 디자인 확인용 샘플로, 블록 라이브러리 12종이 모두 포함되어 있습니다."),
  quote("에디터 기본 기능: 인용구 블록입니다. 고객 후기나 핵심 문구를 강조할 때 사용합니다."),
  h2("현장 사진 (갤러리 블록)"),
  block("gallery", { images: [img(1), img(2), img(3)], layout: "grid" }),
  h2("비포 / 애프터"),
  block("beforeAfter", {
    before: null,
    after: null,
    caption: "케이블 정리 전과 후 — 책상 아래가 완전히 달라졌습니다.",
  }),
  h2("세팅 영상 (유튜브 블록)"),
  block("youtube", { url: "https://www.youtube.com/watch?v=M7lc1UVf-VE" }),
  h2("사용 장비 (장비 리스트 블록)"),
  block("equipmentList", {
    items: [
      { id: "eq-1", name: "Sony ZV-E10 + 시그마 16mm F1.4", image: null, note: "메인 캠 — 크롭바디 조합 추천 1순위", link: "/rental" },
      { id: "eq-2", name: "GoXLR 오디오 인터페이스", image: null, note: "방송용 믹서 — 보이스 체인저/샘플러 내장", link: null },
      { id: "eq-3", name: "Elgato Key Light Air 2ea", image: null, note: "조명 — 양쪽 45도 배치", link: "/rental" },
    ],
  }),
  h2("방문 세팅 vs 원격 세팅 (비교표 블록)"),
  block("compareTable", {
    leftTitle: "방문 세팅",
    rightTitle: "원격 세팅",
    rows: [
      { id: "r-1", label: "소요 시간", left: "2~4시간", right: "1~2시간" },
      { id: "r-2", label: "케이블 정리", left: "포함", right: "불가" },
      { id: "r-3", label: "지역", left: "수도권", right: "전국" },
    ],
  }),
  h2("비용 안내 (가격표 블록)"),
  block("priceTable", {
    rows: [
      { id: "pr-1", name: "기본 방문 세팅", price: "220,000원", note: "OBS + 오디오" },
      { id: "pr-2", name: "조명 세팅 추가", price: "+55,000원", note: null },
      { id: "pr-3", name: "케이블 정리", price: "+77,000원", note: "몰딩 포함" },
    ],
  }),
  hr,
  h2("자주 묻는 질문 (FAQ 블록)"),
  block("faq", {
    items: [
      { id: "fq-1", q: "세팅 후 문제가 생기면 어떻게 하나요?", a: "세팅 후 30일간 무상 원격 A/S를 지원합니다.\n카카오톡 채널로 연락 주시면 됩니다." },
      { id: "fq-2", q: "장비가 하나도 없어도 되나요?", a: "네, 견적 상담에서 예산에 맞는 장비 구성을 제안드리고 구매 대행도 가능합니다." },
    ],
  }),
  block("cta", { title: "이런 세팅이 필요하신가요?", kind: "kakao", url: null }),
]);

const simpleContent = (desc: string) =>
  root([
    p(desc),
    block("gallery", { images: [img(1), img(2)], layout: "grid" }),
    p("세팅 구성과 장비 선정 과정은 상담을 통해 안내드립니다."),
    block("cta", { title: "비슷한 세팅이 필요하신가요?", kind: "estimate", url: null }),
  ]);

export const sampleCases = [
  {
    id: 9001,
    title: "[샘플] 치지직 이적 풀세팅 — 블록 12종 쇼케이스",
    slug: "sample-full-blocks",
    category: "visit",
    cover: null,
    publishedAt: "2026-11-01T09:00:00.000Z",
    content: showcaseContent,
  },
  {
    id: 9002,
    title: "[샘플] 아파트 방송룸 방음 + 2PC 세팅",
    slug: "sample-visit-2pc",
    category: "visit",
    cover: null,
    publishedAt: "2026-10-21T09:00:00.000Z",
    content: simpleContent("수도권 아파트 방문 세팅 사례입니다. 2PC 송출 구성과 간이 방음까지 하루에 완료했습니다."),
  },
  {
    id: 9003,
    title: "[샘플] 지방 거주 버튜버 원격 OBS 최적화",
    slug: "sample-remote-vtuber",
    category: "remote",
    cover: null,
    publishedAt: "2026-10-12T09:00:00.000Z",
    content: simpleContent("원격 접속으로 OBS 인코딩 설정과 오디오 체인을 최적화한 사례입니다."),
  },
  {
    id: 9004,
    title: "[샘플] 합방용 방송룸 4인 구성 렌탈",
    slug: "sample-studio-4p",
    category: "studio",
    cover: null,
    publishedAt: "2026-09-28T09:00:00.000Z",
    content: simpleContent("4인 합방 방송룸 대여 + 현장 오퍼레이팅 사례입니다."),
  },
  {
    id: 9005,
    title: "[샘플] 원격 트러블슈팅 — 송출 끊김 해결",
    slug: "sample-remote-fix",
    category: "remote",
    cover: null,
    publishedAt: "2026-09-15T09:00:00.000Z",
    content: simpleContent("방송 중 주기적 프레임 드랍이 발생하던 환경을 원격 점검으로 해결했습니다."),
  },
  {
    id: 9006,
    title: "[샘플] 스튜디오 크로마키 + 조명 구축",
    slug: "sample-studio-chroma",
    category: "studio",
    cover: null,
    publishedAt: "2026-09-02T09:00:00.000Z",
    content: simpleContent("전신 크로마키 촬영이 가능한 스튜디오 조명/배경 구축 사례입니다."),
  },
];

export type SampleCase = (typeof sampleCases)[number];
