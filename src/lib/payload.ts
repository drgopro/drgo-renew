import { getPayload } from "payload";
import config from "@payload-config";

export const getPayloadClient = () => getPayload({ config });

export { CASE_CATEGORY_LABELS } from "./labels";
