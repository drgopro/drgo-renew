import { RichText, type JSXConvertersFunction } from "@payloadcms/richtext-lexical/react";
import type { DefaultNodeTypes, SerializedBlockNode } from "@payloadcms/richtext-lexical";
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
import {
  BeforeAfter,
  CompareTable,
  Cta,
  EquipmentList,
  Faq,
  Gallery,
  PriceTable,
  Youtube,
} from "./BlockRenderers";

type Blocks =
  | GalleryBlock
  | BeforeAfterBlock
  | YoutubeBlock
  | EquipmentListBlock
  | CompareTableBlock
  | PriceTableBlock
  | FaqBlock
  | CtaBlock;

type NodeTypes = DefaultNodeTypes | SerializedBlockNode<Blocks>;

const converters: JSXConvertersFunction<NodeTypes> = ({ defaultConverters }) => ({
  ...defaultConverters,
  blocks: {
    gallery: ({ node }) => <Gallery {...(node.fields as GalleryBlock)} />,
    beforeAfter: ({ node }) => <BeforeAfter {...(node.fields as BeforeAfterBlock)} />,
    youtube: ({ node }) => <Youtube {...(node.fields as YoutubeBlock)} />,
    equipmentList: ({ node }) => <EquipmentList {...(node.fields as EquipmentListBlock)} />,
    compareTable: ({ node }) => <CompareTable {...(node.fields as CompareTableBlock)} />,
    priceTable: ({ node }) => <PriceTable {...(node.fields as PriceTableBlock)} />,
    faq: ({ node }) => <Faq {...(node.fields as FaqBlock)} />,
    cta: ({ node }) => <Cta {...(node.fields as CtaBlock)} />,
  },
});

export default function ContentRichText({ data }: { data: unknown }) {
  if (!data) return null;
  return (
    <RichText
      // Payload richText 필드 값
      data={data as never}
      converters={converters}
      className="prose-sm max-w-none leading-relaxed [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-bold [&_h3]:mt-6 [&_h3]:font-bold [&_blockquote]:border-l-4 [&_blockquote]:border-ink [&_blockquote]:pl-4 [&_blockquote]:text-neutral-600 [&_hr]:my-8 [&_p]:my-3"
    />
  );
}
