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

export type DaimonCharaCard = CharaCardV2<DaimonCharaCardV2Extensions>;

export type DaimonConnectionMap = {
  "daimon.create": {
    request: {
      options?: Partial<{}>;
      body: DaimonCharaCard;
    };
    response: { id: string };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "daimon.update": {
    request: {
      options?: Partial<{}>;
      body: Daimon;
    };
    response: { success: boolean };
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
    response: Daimon | undefined;
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "daimon.remove": {
    request: {
      options?: Partial<{}>;
      body: { id: string };
    };
    response: { success: boolean };
    headers: {
      url?: string;
      authToken?: string;
    };
  };
  "daimon.list": {
    request: {
      options?: Partial<{}>;
      body: { query?: string };
    };
    response: Daimon[];
    headers: {
      url?: string;
      authToken?: string;
    };
  };
};
