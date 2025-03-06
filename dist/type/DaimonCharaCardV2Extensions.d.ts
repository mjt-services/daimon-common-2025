export type KnownCharaCardV2Extensions = Partial<{
    depth_prompt: {
        depth: 1;
        prompt: string;
        role: string;
    };
}>;
export type DaimonCharaCardV2Extensions = KnownCharaCardV2Extensions & Partial<{
    avatar: string;
    vrm: string;
    voice: string;
    lora: string;
    llm: string;
    isUser: boolean;
}>;
