import type { ConversationMessageNode } from "./type/ConversationMessageNode";
export type ConversationMessageEvent = Record<string, {
    request: {
        options?: Partial<{}>;
        body: ConversationMessageNode;
    };
    response: undefined;
    headers: {
        url?: string;
        authToken?: string;
    };
}>;
