import type { CharaCardV2 } from "./CharaCardV2";

export type Daimon = {
  id: string;
  chara: CharaCardV2<DaimonCharaCardV2Extensions>;
};

export type DaimonCharaCardV2Extensions = Partial<{
  avatarUrl: string;
  vrmUrl: string;
  voiceSampleUrl: string;
  loraUrl: string;
}>;

export type DaimonCharaCard = CharaCardV2<DaimonCharaCardV2Extensions>;
