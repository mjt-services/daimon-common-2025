import type { CharaCardV2 } from "./type/CharaCardV2";

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

export type DiamonCharaCard = CharaCardV2<DaimonCharaCardV2Extensions>;

export type DaimonConnectionMap = {
  "daimon.create": {
    request: {
      options?: Partial<{}>;
      body: DiamonCharaCard;
    };
    response: { id: string };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "daimon.import": {
    request: {
      options?: Partial<{}>;
      body: { png: ArrayBuffer };
    };
    response: { id: string };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "daimon.get": {
    request: {
      options?: Partial<{}>;
      body: { id: string };
    };
    response: DiamonCharaCard;
    headers: {
      url?: string;
      authToken?: string;
    };
  };
};
