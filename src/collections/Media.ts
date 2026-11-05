import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  labels: { singular: "미디어", plural: "미디어" },
  access: { read: () => true },
  upload: {
    imageSizes: [
      { name: "thumbnail", width: 480 },
      { name: "content", width: 1200 },
    ],
    mimeTypes: ["image/*"],
  },
  fields: [
    { name: "alt", label: "대체 텍스트", type: "text" },
  ],
};
