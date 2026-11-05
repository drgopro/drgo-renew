import type { Block } from "payload";

// 블록 라이브러리 (와이어프레임 ⑩ 보드 기준)
// 텍스트/소제목/구분선/인용구는 에디터 기본 기능 → 아래는 커스텀 블록 8종

export const GalleryBlock: Block = {
  slug: "gallery",
  interfaceName: "GalleryBlock",
  labels: { singular: "이미지 갤러리", plural: "이미지 갤러리" },
  fields: [
    {
      name: "images",
      label: "이미지",
      type: "array",
      minRows: 1,
      fields: [{ name: "image", label: "이미지", type: "upload", relationTo: "media", required: true }],
    },
    {
      name: "layout",
      label: "배치",
      type: "select",
      defaultValue: "grid",
      options: [
        { label: "그리드", value: "grid" },
        { label: "슬라이드", value: "slider" },
      ],
    },
  ],
};

export const BeforeAfterBlock: Block = {
  slug: "beforeAfter",
  interfaceName: "BeforeAfterBlock",
  labels: { singular: "비포/애프터", plural: "비포/애프터" },
  fields: [
    { name: "before", label: "비포 이미지", type: "upload", relationTo: "media", required: true },
    { name: "after", label: "애프터 이미지", type: "upload", relationTo: "media", required: true },
    { name: "caption", label: "설명", type: "text" },
  ],
};

export const YoutubeBlock: Block = {
  slug: "youtube",
  interfaceName: "YoutubeBlock",
  labels: { singular: "유튜브 영상", plural: "유튜브 영상" },
  fields: [
    { name: "url", label: "유튜브 링크", type: "text", required: true },
  ],
};

export const EquipmentListBlock: Block = {
  slug: "equipmentList",
  interfaceName: "EquipmentListBlock",
  labels: { singular: "사용 장비", plural: "사용 장비" },
  fields: [
    {
      name: "items",
      label: "장비",
      type: "array",
      minRows: 1,
      fields: [
        { name: "name", label: "장비명", type: "text", required: true },
        { name: "image", label: "사진", type: "upload", relationTo: "media" },
        { name: "note", label: "설명(사양 등)", type: "text" },
        { name: "link", label: "링크(렌탈/견적 페이지 등)", type: "text" },
      ],
    },
  ],
};

export const CompareTableBlock: Block = {
  slug: "compareTable",
  interfaceName: "CompareTableBlock",
  labels: { singular: "2단 비교표", plural: "2단 비교표" },
  fields: [
    { name: "leftTitle", label: "왼쪽 제목", type: "text", required: true },
    { name: "rightTitle", label: "오른쪽 제목", type: "text", required: true },
    {
      name: "rows",
      label: "행",
      type: "array",
      fields: [
        { name: "label", label: "항목", type: "text", required: true },
        { name: "left", label: "왼쪽 값", type: "text" },
        { name: "right", label: "오른쪽 값", type: "text" },
      ],
    },
  ],
};

export const PriceTableBlock: Block = {
  slug: "priceTable",
  interfaceName: "PriceTableBlock",
  labels: { singular: "가격표", plural: "가격표" },
  fields: [
    {
      name: "rows",
      label: "항목",
      type: "array",
      minRows: 1,
      fields: [
        { name: "name", label: "항목명", type: "text", required: true },
        { name: "price", label: "가격", type: "text", required: true },
        { name: "note", label: "비고", type: "text" },
      ],
    },
  ],
};

export const FaqBlock: Block = {
  slug: "faq",
  interfaceName: "FaqBlock",
  labels: { singular: "FAQ", plural: "FAQ" },
  fields: [
    {
      name: "items",
      label: "질문/답변",
      type: "array",
      minRows: 1,
      fields: [
        { name: "q", label: "질문", type: "text", required: true },
        { name: "a", label: "답변", type: "textarea", required: true },
      ],
    },
  ],
};

export const CtaBlock: Block = {
  slug: "cta",
  interfaceName: "CtaBlock",
  labels: { singular: "CTA 버튼", plural: "CTA 버튼" },
  fields: [
    { name: "title", label: "문구", type: "text", defaultValue: "이런 세팅이 필요하신가요?" },
    {
      name: "kind",
      label: "종류",
      type: "select",
      defaultValue: "kakao",
      options: [
        { label: "카카오톡 상담", value: "kakao" },
        { label: "자가 견적", value: "estimate" },
        { label: "직접 링크", value: "link" },
      ],
    },
    {
      name: "url",
      label: "링크 주소 (직접 링크일 때)",
      type: "text",
      admin: { condition: (_, siblingData) => siblingData?.kind === "link" },
    },
  ],
};

export const contentBlocks: Block[] = [
  GalleryBlock,
  BeforeAfterBlock,
  YoutubeBlock,
  EquipmentListBlock,
  CompareTableBlock,
  PriceTableBlock,
  FaqBlock,
  CtaBlock,
];
