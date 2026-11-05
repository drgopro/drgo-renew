import { getPayload } from "payload";
import config from "@payload-config";

export const getPayloadClient = () => getPayload({ config });

export const CASE_CATEGORY_LABELS: Record<string, string> = {
  visit: "방문 세팅",
  remote: "원격 세팅",
  studio: "방송룸·스튜디오",
};
