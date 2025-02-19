import type { ObjectStore } from "@mjt-services/data-common-2025";
import type { CharaCardV2 } from "./CharaCardV2";
import type { DaimonCharaCardV2Extensions } from "./DaimonCharaCardV2Extensions";
export type Daimon = {
    id: string;
    chara: CharaCardV2<DaimonCharaCardV2Extensions>;
};
export declare const DAIMON_OBJECT_STORE: ObjectStore<Daimon>;
