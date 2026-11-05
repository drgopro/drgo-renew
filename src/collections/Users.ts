import type { CollectionConfig } from "payload";

// 관리자(직원) 계정 — 일반 회원은 별도(Auth.js, P4)
export const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "직원 계정", plural: "직원 계정" },
  auth: true,
  admin: { useAsTitle: "email" },
  fields: [
    { name: "name", label: "이름", type: "text" },
  ],
};
